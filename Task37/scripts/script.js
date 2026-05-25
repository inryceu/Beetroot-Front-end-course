class User {
  constructor(name, role, password = "defaultPassword") {
    if (!name || typeof name !== "string") {
      alert("Поле 'name' введено некоректно! Воно має бути непустим рядком.");
      return;
    }

    if (role !== "admin" && role !== "user") {
      alert(
        "Поле 'role' введено некоректно! Допустимі значення: 'admin' або 'user'.",
      );
      return;
    }

    this.name = name;
    this.role = role;
    this.password = password;
    this.isLoggedIn = false;
  }

  getName() {
    return this.name;
  }

  getRole() {
    return this.role;
  }

  login() {
    this.isLoggedIn = true;
    console.log(`Користувач ${this.name} увійшов у систему.`);
  }

  logout() {
    this.isLoggedIn = false;
    console.log(`Користувач ${this.name} вийшов із системи.`);
  }

  changeName(newName) {
    if (typeof newName === "string" && newName.length > 0) {
      this.name = newName;
      console.log(`Ім'я змінено на ${this.name}`);
    } else {
      alert("Нове ім'я некоректне!");
    }
  }

  changePassword(newPassword) {
    this.password = newPassword;
    console.log("Пароль успішно змінено.");
  }
}

class Admin extends User {
  constructor(name, password) {
    super(name, "admin", password);
    this.usersDatabase = [];
  }

  addUser(userObj) {
    if (userObj instanceof User) {
      this.usersDatabase.push(userObj);
      console.log(`Користувача ${userObj.getName()} додано.`);
    } else {
      console.error("Помилка: об'єкт не є екземпляром класу User.");
    }
  }

  removeUser(userName) {
    this.usersDatabase = this.usersDatabase.filter(
      (user) => user.name !== userName,
    );
    console.log(`Користувача ${userName} видалено.`);
  }

  changeUserRole(userName, newRole) {
    const targetUser = this.usersDatabase.find(
      (user) => user.name === userName,
    );
    if (!targetUser) {
      console.error("Користувача не знайдено.");
      return;
    }
    if (newRole !== "admin" && newRole !== "user") {
      alert("Поле 'role' введено некоректно!");
      return;
    }
    targetUser.role = newRole;
    console.log(`Роль користувача ${userName} змінено на ${newRole}.`);
  }

  getAllUsers() {
    return this.usersDatabase;
  }

  removeAllUsers() {
    this.usersDatabase = [];
    console.log("Всіх користувачів видалено.");
  }
}

class WorldClock {
  constructor(timezone, containerElement) {
    this.timezone = timezone;
    this.container = containerElement;
    this.clockElement = document.createElement("div");
    this.clockElement.className = "clock-card";

    this.render();
  }

  getCurrentDate() {
    try {
      return new Date().toLocaleTimeString("uk-UA", {
        timeZone: this.timezone,
      });
    } catch (e) {
      alert("Невірна назва часового поясу!");
      return "Помилка формату";
    }
  }

  getCurrentDateTime() {
    try {
      return new Date().toLocaleString("uk-UA", { timeZone: this.timezone });
    } catch (e) {
      return "Помилка формату";
    }
  }

  deleteClock() {
    this.clockElement.remove();
  }

  render() {
    this.clockElement.innerHTML = `
          <h3>${this.timezone}</h3>
          <div class="display-area">-- : --</div>
          <button class="btn-time">Показати час</button>
          <button class="btn-datetime">Показати дату й час</button>
          <button class="btn-delete">Видалити годинник</button>
        `;

    const displayArea = this.clockElement.querySelector(".display-area");

    this.clockElement
      .querySelector(".btn-time")
      .addEventListener("click", () => {
        displayArea.innerText = this.getCurrentDate();
      });

    this.clockElement
      .querySelector(".btn-datetime")
      .addEventListener("click", () => {
        displayArea.innerText = this.getCurrentDateTime();
      });

    this.clockElement
      .querySelector(".btn-delete")
      .addEventListener("click", () => {
        this.deleteClock();
      });

    this.container.appendChild(this.clockElement);
  }
}

const addBtn = document.getElementById("addClockBtn");
const wall = document.getElementById("wall");
const input = document.getElementById("timezoneInput");

addBtn.addEventListener("click", () => {
  const tz = input.value.trim() || "Europe/Kyiv";
  new WorldClock(tz, wall);
  input.value = "";
});
