document.addEventListener("DOMContentLoaded", () => {
  class Item {
    constructor(name, quantity, price, isBought = false) {
      this.name = name;
      this.quantity = quantity;
      this.price = price;
      this.isBought = isBought;
    }

    get total() {
      return this.quantity * this.price;
    }
  }

  class Cart {
    constructor() {
      this.itemsMap = new Map();
    }

    addItem(name, quantity, price) {
      const formattedName = name.trim().toLowerCase();
      if (!formattedName || quantity <= 0 || price <= 0) return false;

      if (this.itemsMap.has(formattedName)) {
        const existingItem = this.itemsMap.get(formattedName);
        existingItem.quantity += quantity;
        existingItem.price = price;
      } else {
        this.itemsMap.set(
          formattedName,
          new Item(name.trim(), quantity, price),
        );
      }
      return true;
    }

    buyItem(name) {
      const formattedName = name.trim().toLowerCase();
      if (this.itemsMap.has(formattedName)) {
        this.itemsMap.get(formattedName).isBought = true;
      }
    }

    removeItem(name) {
      const formattedName = name.trim().toLowerCase();

      const currentItems = Array.from(this.itemsMap.values());

      const newItemsArray = currentItems.filter(
        (item) => item.name.toLowerCase() !== formattedName,
      );

      this.itemsMap.clear();
      newItemsArray.forEach((item) => {
        this.itemsMap.set(item.name.toLowerCase(), item);
      });
    }

    getDisplayList() {
      const items = Array.from(this.itemsMap.values());
      return items.sort((a, b) =>
        a.isBought === b.isBought ? 0 : a.isBought ? 1 : -1,
      );
    }

    getTotalSum() {
      return Array.from(this.itemsMap.values()).reduce(
        (sum, item) => sum + item.total,
        0,
      );
    }

    getSumByStatus(isBought) {
      return Array.from(this.itemsMap.values())
        .filter((item) => item.isBought === isBought)
        .reduce((sum, item) => sum + item.total, 0);
    }

    getSortedByTotal(ascending = true) {
      const items = Array.from(this.itemsMap.values());
      return items.sort((a, b) =>
        ascending ? a.total - b.total : b.total - a.total,
      );
    }
  }

  const myCart = new Cart();

  const nameInput = document.getElementById("item-name");
  const qtyInput = document.getElementById("item-qty");
  const priceInput = document.getElementById("item-price");
  const cartOutput = document.getElementById("cart-output");

  const totalSumEl = document.getElementById("total-sum");
  const boughtSumEl = document.getElementById("bought-sum");
  const unboughtSumEl = document.getElementById("unbought-sum");

  const renderCart = (customList = null) => {
    const listToRender = customList || myCart.getDisplayList();
    cartOutput.innerHTML = "";

    if (listToRender.length === 0) {
      cartOutput.innerHTML = '<div class="empty-state">Список порожній</div>';
    } else {
      for (const item of listToRender) {
        const card = document.createElement("div");
        card.className = `cart-item ${item.isBought ? "is-bought" : ""}`;

        card.innerHTML = `
                    <div class="item-info">
                        <span class="item-name">${item.name}</span>
                        <span class="item-details">${item.quantity} шт. × ${item.price.toFixed(2)} = <b>${item.total.toFixed(2)}</b></span>
                    </div>
                    <div class="item-actions">
                        ${!item.isBought ? `<button class="action-btn small-btn buy-btn" data-name="${item.name}">Купити</button>` : `<span class="bought-badge">✓ Придбано</span>`}
                        <button class="action-btn small-btn danger-btn delete-btn" data-name="${item.name}">✕</button>
                    </div>
                `;
        cartOutput.appendChild(card);
      }
    }

    totalSumEl.textContent = myCart.getTotalSum().toFixed(2);
    boughtSumEl.textContent = myCart.getSumByStatus(true).toFixed(2);
    unboughtSumEl.textContent = myCart.getSumByStatus(false).toFixed(2);

    attachActionListeners();
  };

  const attachActionListeners = () => {
    document.querySelectorAll(".buy-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        myCart.buyItem(e.target.dataset.name);
        renderCart();
      });
    });

    document.querySelectorAll(".delete-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        myCart.removeItem(e.target.dataset.name);
        renderCart();
      });
    });
  };

  document.getElementById("add-btn").addEventListener("click", () => {
    const name = nameInput.value;
    const qty = Number(qtyInput.value);
    const price = Number(priceInput.value);

    if (myCart.addItem(name, qty, price)) {
      nameInput.value = "";
      qtyInput.value = "";
      priceInput.value = "";
      renderCart();
    } else {
      alert("Введіть коректні дані (назву, кількість > 0, ціну > 0)");
    }
  });

  document.getElementById("sort-asc-btn").addEventListener("click", () => {
    renderCart(myCart.getSortedByTotal(true));
  });

  document.getElementById("sort-desc-btn").addEventListener("click", () => {
    renderCart(myCart.getSortedByTotal(false));
  });

  document.getElementById("reset-sort-btn").addEventListener("click", () => {
    renderCart();
  });
});
