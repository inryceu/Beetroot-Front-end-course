document.addEventListener("DOMContentLoaded", () => {
  const API_KEY = "86c6fbbc866e20e6c9bc7b1bea44b2e8";
  const CITY = "Kyiv";
  const CACHE_KEY_DATA = "weatherData";
  const CACHE_KEY_TIME = "weatherTimestamp";
  const CACHE_DURATION = 2 * 60 * 60 * 1000;

  const widget = document.getElementById("weather-widget");

  async function initWeather() {
    const now = Date.now();
    const cachedData = localStorage.getItem(CACHE_KEY_DATA);
    const cachedTime = localStorage.getItem(CACHE_KEY_TIME);

    if (cachedData && cachedTime && now - cachedTime < CACHE_DURATION) {
      console.log("Дані завантажено з localStorage (кеш дійсний)");
      renderWeather(JSON.parse(cachedData), true);
    } else {
      console.log("Кеш пустий або застарів. Робимо запит до API...");
      await fetchWeatherFromApi(now);
    }
  }

  async function fetchWeatherFromApi(timestamp) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric&lang=ua`;
      const response = await fetch(url);

      if (!response.ok) {
        if (response.status === 401) throw new Error("Недійсний API ключ.");
        if (response.status === 404) throw new Error("Місто не знайдено.");
        throw new Error("Помилка завантаження даних.");
      }

      const data = await response.json();

      localStorage.setItem(CACHE_KEY_DATA, JSON.stringify(data));
      localStorage.setItem(CACHE_KEY_TIME, timestamp.toString());

      renderWeather(data, false);
    } catch (error) {
      console.error(error);
      showError(error.message);

      const oldCache = localStorage.getItem(CACHE_KEY_DATA);
      if (oldCache) {
        setTimeout(() => {
          renderWeather(JSON.parse(oldCache), true);
          widget.innerHTML += `<div class="weather-status">Показано застарілі дані через помилку мережі.</div>`;
        }, 2000);
      }
    }
  }

  function renderWeather(data, isCached) {
    const temp = Math.round(data.main.temp);
    const feelsLike = Math.round(data.main.feels_like);
    const humidity = data.main.humidity;
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    const updateTime = new Date(
      Number(localStorage.getItem(CACHE_KEY_TIME)),
    ).toLocaleTimeString("uk-UA", {
      hour: "2-digit",
      minute: "2-digit",
    });

    widget.innerHTML = `
            <div class="weather-city">${data.name}</div>
            <img src="${iconUrl}" alt="${description}" class="weather-icon">
            <div class="weather-temp">${temp}°C</div>
            <div class="weather-desc">${description}</div>
            
            <div class="weather-meta">
                <span>Відчувається як: ${feelsLike}°C</span>
                <span>Вологість: ${humidity}%</span>
            </div>
            <div class="weather-status">
                ${isCached ? `Оновлено з кешу о ${updateTime}` : `Щойно оновлено з API о ${updateTime}`}
            </div>
        `;
  }

  function showError(message) {
    widget.innerHTML = `
            <div class="error-message">
                ⚠️ ${message}
            </div>
        `;
  }

  initWeather();
});
