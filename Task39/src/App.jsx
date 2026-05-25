import { cities, forecastNote } from "./data.js";

function App() {
  return (
    <div className="forecast">
      <h1>
        CSS Weather Forecast <i className="wi wi-sunrise" />
      </h1>

      <ul className="forecast-list">
        {cities.map((city) => (
          <li
            className={`forecast-item ${city.width} ${city.bg}`}
            key={city.name}
          >
            <div className="city-name">{city.name}</div>
            <div className="city-temp">
              {city.temp}°C
              <i className={`wi ${city.icon}`} />
            </div>
          </li>
        ))}
      </ul>

      <p className="forecast-footer">{forecastNote}</p>
    </div>
  );
}

export default App;
