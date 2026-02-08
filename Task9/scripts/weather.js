class City {
  constructor(name, temp, icon, width, bg) {
    this.name = name;
    this.temp = temp;
    this.icon = icon;
    this.width = width;
    this.bg = bg;
  }

  render() {
    return `
      <li class="forecast-item ${this.width} ${this.bg}">
        <div class="city-name">${this.name}</div>
        <div class="city-temp">
          ${this.temp}°C
          <i class="wi ${this.icon}"></i>
        </div>
      </li>
    `;
  }
}

const cities = [
  new City("Lisbon", 21, "wi-day-sunny", "w-50", "bg-1"),
  new City("Paris", 11, "wi-night-rain-mix", "w-25", "bg-2"),
  new City("Belgrade", 15, "wi-day-cloudy", "w-25", "bg-3"),

  new City("Venice", 21, "wi-day-cloudy-high", "w-25", "bg-4"),
  new City("Tel-Aviv", 32, "wi-hot", "w-25", "bg-5"),
  new City("Cairo", 21, "wi-day-sunny", "w-25", "bg-6"),
  new City("New-York", 17, "wi-day-storm-showers", "w-25", "bg-7"),

  new City("New-Delhi", 17, "wi-rain-wind", "w-25", "bg-8"),
  new City("San-Francisco", 15, "wi-day-sunny-overcast", "w-50", "bg-9"),
  new City("Tokyo", 8, "wi-night-clear", "w-25", "bg-10"),

  new City("Sydney", 25, "wi-night-partly-cloudy", "w-100", "bg-11"),
];

const list = document.getElementById("forecast");

list.innerHTML = cities.reduce((acc, city) => acc + city.render(), "");
