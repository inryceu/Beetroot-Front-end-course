const gamesData = [
  {
    title: "FarCry 6",
    releaseDate: "First Released Oct 6, 2021",
    description:
      "Far Cry 6 is a 2021 action-adventure first-person shooter game developed by Ubisoft Toronto. It is the sixth main installment in the Far Cry series and the successor Far Cry 5.",
    coverUrl: "../assets/cover1.jpg",
    rating: 8.7,
    discount: "20% OFF!",
    price: "$59.96",
    fullStars: 4,
  },
  {
    title: "FarCry 5",
    releaseDate: "First Released Mar 27, 2018",
    description:
      "Far Cry 5 is a 2018 first-person shooter game developed by Ubisoft Montreal and Ubisoft Toronto. It is the fifth main installment in the Far Cry series.",
    coverUrl: "../assets/cover2.jpg",
    rating: 8.1,
    discount: "50% OFF!",
    price: "$29.99",
    fullStars: 3,
  },
];

const generateStarsHTML = (fullStarsCount) => {
  let starsHTML = "";
  for (let i = 0; i < 5; i++) {
    if (i < fullStarsCount) starsHTML += '<i class="fa-solid fa-star"></i>\n';
    else starsHTML += '<i class="fa-regular fa-star empty"></i>\n';
  }
  return starsHTML;
};

const createCardHTML = (game) => {
  const ratingPercentage = game.rating * 10;

  return `
        <div class="slide">
            <div class="game-card">
                <div class="card-nav">
                    <div class="nav-item active">
                        <i class="fa-regular fa-message"></i>
                        <span>INFORMATION</span>
                    </div>
                    <div class="nav-item">
                        <i class="spades">&spades;</span></i>
                        <span>RATINGS INFO</span>
                    </div>
                    <div class="nav-item">
                        <i class="fa-solid fa-bag-shopping"></i>
                        <span>WHERE TO BUY</span>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-left">
                        <img src="${game.coverUrl}" alt="${game.title}" class="game-cover">
                        <div class="stars">
                            ${generateStarsHTML(game.fullStars)}
                        </div>
                    </div>
                    <div class="card-right">
                        <div class="header-row">
                            <div class="title-info">
                                <h1>${game.title}</h1>
                                <div class="release-date">${game.releaseDate}</div>
                            </div>
                            <div class="rating-circle" style="background: conic-gradient(#18e28b ${ratingPercentage}%, #313541 0);">
                                <span>${game.rating}</span>
                            </div>
                        </div>
                        <p class="description">${game.description}</p>
                        <div class="action-row">
                            <div class="price-info">
                                <div class="discount">${game.discount}</div>
                                <div class="price">${game.price}</div>
                            </div>
                            <button class="buy-btn">BUY IT NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};

$(document).ready(() => {
  const sliderContainer = $("#game-slider");

  let sliderHTML = "";
  gamesData.forEach((game) => {
    sliderHTML += createCardHTML(game);
  });

  sliderContainer.html(sliderHTML);

  sliderContainer.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    fade: true,
    speed: 400,
  });
});
