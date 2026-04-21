const API_KEY = "41ce9585";
const BASE_URL = "https://www.omdbapi.com/";

class OmdbApiService {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async fetchApi(params) {
    const queryParams = new URLSearchParams({
      apikey: this.apiKey,
      ...params,
    });

    const response = await fetch(`${BASE_URL}?${queryParams}`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    if (data.Response === "False") {
      throw new Error(data.Error);
    }

    return data;
  }

  async searchMovies(title, type, page = 1) {
    const params = { s: title, page: page };
    if (type) params.type = type;
    return this.fetchApi(params);
  }

  async getMovieDetails(imdbId) {
    return this.fetchApi({ i: imdbId, plot: "full" });
  }
}

class MovieSearchApp {
  constructor(apiService) {
    this.api = apiService;

    this.currentQuery = "";
    this.currentType = "";
    this.currentPage = 1;
    this.totalResults = 0;

    this.form = document.getElementById("search-form");
    this.titleInput = document.getElementById("search-title");
    this.typeInput = document.getElementById("search-type");
    this.errorMsg = document.getElementById("error-message");
    this.moviesGrid = document.getElementById("movies-grid");
    this.paginationContainer = document.getElementById("pagination-container");
    this.detailsSection = document.getElementById("details-section");
    this.detailsContent = document.getElementById("details-content");

    this.init();
  }

  init() {
    this.form.addEventListener("submit", (e) => this.handleSearch(e));
  }

  async handleSearch(e) {
    e.preventDefault();

    this.currentQuery = this.titleInput.value.trim();
    this.currentType = this.typeInput.value;
    this.currentPage = 1;

    this.detailsSection.classList.add("hide");
    await this.loadMovies();
  }

  async loadMovies() {
    try {
      this.hideError();
      this.moviesGrid.innerHTML = "";
      this.paginationContainer.innerHTML = "";
      this.paginationContainer.classList.add("hide");

      const data = await this.api.searchMovies(
        this.currentQuery,
        this.currentType,
        this.currentPage,
      );

      this.totalResults = parseInt(data.totalResults, 10);
      this.renderMovies(data.Search);
      this.renderPagination();
    } catch (error) {
      this.showError(
        error.message === "Movie not found!"
          ? error.message
          : "An error occurred during the search.",
      );
    }
  }

  renderMovies(movies) {
    movies.forEach((movie) => {
      const card = document.createElement("div");
      card.className = "movie-card";

      const posterSrc =
        movie.Poster !== "N/A"
          ? movie.Poster
          : "https://via.placeholder.com/300x450?text=No+Poster";

      card.innerHTML = `
                <img src="${posterSrc}" alt="${movie.Title}" class="movie-poster">
                <div class="movie-info">
                    <div class="movie-title">${movie.Title}</div>
                    <div class="movie-meta">${movie.Year} • <span style="text-transform: capitalize;">${movie.Type}</span></div>
                    <button class="btn details-btn" data-id="${movie.imdbID}">Details</button>
                </div>
            `;

      this.moviesGrid.appendChild(card);
    });

    document.querySelectorAll(".details-btn").forEach((btn) => {
      btn.addEventListener("click", (e) =>
        this.handleDetails(e.target.dataset.id),
      );
    });
  }

  renderPagination() {
    const totalPages = Math.ceil(this.totalResults / 10);
    if (totalPages <= 1) return;

    this.paginationContainer.classList.remove("hide");

    let startPage = Math.max(1, this.currentPage - 2);
    let endPage = Math.min(totalPages, this.currentPage + 2);

    if (this.currentPage <= 3) endPage = Math.min(5, totalPages);
    if (this.currentPage >= totalPages - 2)
      startPage = Math.max(1, totalPages - 4);

    if (startPage > 1) {
      this.createPageButton(1);
      if (startPage > 2) this.createEllipsis();
    }

    for (let i = startPage; i <= endPage; i++) {
      this.createPageButton(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) this.createEllipsis();
      this.createPageButton(totalPages);
    }
  }

  createPageButton(pageNumber) {
    const btn = document.createElement("button");
    btn.className = `btn page-btn ${pageNumber === this.currentPage ? "active-page" : ""}`;
    btn.textContent = pageNumber;

    btn.addEventListener("click", async () => {
      if (this.currentPage !== pageNumber) {
        this.currentPage = pageNumber;
        window.scrollTo({ top: 0, behavior: "smooth" });
        await this.loadMovies();
      }
    });

    this.paginationContainer.appendChild(btn);
  }

  createEllipsis() {
    const span = document.createElement("span");
    span.textContent = "...";
    span.style.alignSelf = "flex-end";
    span.style.padding = "0 5px";
    this.paginationContainer.appendChild(span);
  }

  async handleDetails(imdbID) {
    try {
      this.hideError();
      const movie = await this.api.getMovieDetails(imdbID);
      this.renderDetails(movie);
    } catch (error) {
      this.showError("Failed to load movie details.");
    }
  }

  renderDetails(movie) {
    this.detailsSection.classList.remove("hide");
    const posterSrc =
      movie.Poster !== "N/A"
        ? movie.Poster
        : "https://via.placeholder.com/300x450?text=No+Poster";

    this.detailsContent.innerHTML = `
            <img src="${posterSrc}" alt="${movie.Title}" class="details-poster">
            <div class="details-text">
                <div class="details-title">${movie.Title}</div>
                <div>
                    <span class="details-badge">${movie.Year}</span>
                    <span class="details-badge">${movie.Rated}</span>
                    <span class="details-badge">${movie.Runtime}</span>
                    <span class="details-badge"><span style="color: #f1c40f;">★</span> ${movie.imdbRating}</span>
                </div>
                <div class="details-plot">${movie.Plot}</div>
                <div class="details-row"><span class="details-label">Genre:</span> ${movie.Genre}</div>
                <div class="details-row"><span class="details-label">Director:</span> ${movie.Director}</div>
                <div class="details-row"><span class="details-label">Actors:</span> ${movie.Actors}</div>
                <div class="details-row"><span class="details-label">Awards:</span> ${movie.Awards}</div>
            </div>
        `;

    this.detailsSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  showError(message) {
    this.errorMsg.textContent = message;
    this.errorMsg.classList.remove("hide");
    this.moviesGrid.innerHTML = "";
    this.paginationContainer.innerHTML = "";
    this.paginationContainer.classList.add("hide");
    this.detailsSection.classList.add("hide");
  }

  hideError() {
    this.errorMsg.classList.add("hide");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const apiService = new OmdbApiService(API_KEY);
  new MovieSearchApp(apiService);
});
