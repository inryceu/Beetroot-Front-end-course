document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("deck-container");

  const suits = [
    { name: "spades", icon: "♠", color: "color-black" },
    { name: "hearts", icon: "♥", color: "color-red" },
    { name: "clubs", icon: "♣", color: "color-black" },
    { name: "diamonds", icon: "♦", color: "color-red" },
  ];
  const values = ["6", "7", "8", "9", "10", "J", "Q", "K", "A"];

  suits.forEach((suit) => {
    const suitRow = document.createElement("div");
    suitRow.className = "suit-row";

    values.forEach((value) => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
                <div class="card-inner">
                    <div class="card-back"></div>
                    <div class="card-front ${suit.color}">
                        <div class="card-corner top-left"><span>${value}</span><span class="suit-icon">${suit.icon}</span></div>
                        <div class="card-center">${suit.icon}</div>
                        <div class="card-corner bottom-right"><span>${value}</span><span class="suit-icon">${suit.icon}</span></div>
                    </div>
                </div>
            `;
      suitRow.appendChild(card);
    });

    container.appendChild(suitRow);
  });

  const allCards = document.querySelectorAll(".card-inner");

  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * allCards.length);
    const randomCard = allCards[randomIndex];

    randomCard.classList.add("is-flipped");

    setTimeout(() => {
      randomCard.classList.remove("is-flipped");
    }, 1500);
  }, 2000);
});
