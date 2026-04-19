document.addEventListener("DOMContentLoaded", () => {
  const playList = [
    { author: "LED ZEPPELIN", song: "STAIRWAY TO HEAVEN" },
    { author: "QUEEN", song: "BOHEMIAN RHAPSODY" },
    { author: "LYNYRD SKYNYRD", song: "FREE BIRD" },
    { author: "DEEP PURPLE", song: "SMOKE ON THE WATER" },
    { author: "JIMI HENDRIX", song: "ALL ALONG THE WATCHTOWER" },
    { author: "AC/DC", song: "BACK IN BLACK" },
    { author: "QUEEN", song: "WE WILL ROCK YOU" },
    { author: "METALLICA", song: "ENTER SANDMAN" },
  ];

  const playlistContainer = document.getElementById("playlist-container");

  playList.reduce((_, track) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${track.author}</strong> — <em>${track.song}</em>`;
    playlistContainer.appendChild(li);
  });

  const modal = document.getElementById("myModal");
  const openBtn = document.getElementById("openModalBtn");
  const closeBtn = document.getElementById("closeModalBtn");

  openBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  const lights = [
    document.getElementById("redLight"),
    document.getElementById("yellowLight"),
    document.getElementById("greenLight"),
  ];
  const nextLightBtn = document.getElementById("nextLightBtn");
  let currentLightIndex = 0;

  nextLightBtn.addEventListener("click", () => {
    lights[currentLightIndex].classList.remove("active");
    currentLightIndex = (currentLightIndex + 1) % lights.length;
    lights[currentLightIndex].classList.add("active");
  });
});
