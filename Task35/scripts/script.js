$(document).ready(function () {
  // 1. Header Slider
  $("#header-slider").slick({
    fade: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  // 2. News Slider (3 слайди за раз, гортається по 1, автоплей 4с)
  $("#news-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
  });

  // 3. Smooth Scroll for Navigation and Down Arrow
  $('a[href^="#"]').on("click", function (event) {
    event.preventDefault();
    var target = $(this.getAttribute("href"));

    if (target.length) {
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $(target).offset().top,
          },
          800,
        );
    }
  });

  // 4. Form Validation
  $("#contact-form").on("submit", function (event) {
    event.preventDefault();

    let name = $(this).find('input[name="name"]').val();
    let email = $(this).find('input[name="email"]').val();

    if (name.trim() !== "" && email.trim() !== "") {
      alert("Form successfully submitted! Thank you, " + name + ".");
      this.reset();
    } else {
      alert("Please fill out all fields.");
    }
  });

  // 5. Leaflet Map Initialization (Безкоштовна альтернатива)
  initMap();
});

function initMap() {
  // Координати (Нью-Йорк, як у прикладі)
  var mapCoords = [40.6782, -73.9442];

  // Створюємо карту та вимикаємо зум скролом для зручності на сайті
  var map = L.map("map", {
    scrollWheelZoom: false,
    zoomControl: false, // Вимикаємо кнопки +/- щоб карта виглядала як на макеті
  }).setView(mapCoords, 13);

  // Додаємо безкоштовні тайли CartoDB Positron (світлий сірий стиль)
  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 20,
    },
  ).addTo(map);

  // Кастомний SVG маркер
  var customIcon = L.divIcon({
    className: "custom-leaflet-marker",
    // Вставляємо той самий SVG, що і раніше
    html: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#ffffff" stroke="#5541e2" stroke-width="4"/><circle cx="12" cy="12" r="4" fill="#5541e2"/></svg>',
    iconSize: [40, 40],
    iconAnchor: [20, 20], // Відцентровуємо маркер
  });

  // Додаємо маркер на карту
  L.marker(mapCoords, { icon: customIcon }).addTo(map);
}
