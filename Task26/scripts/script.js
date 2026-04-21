document.addEventListener("DOMContentLoaded", () => {
  const ageBtn = document.getElementById("age-btn");
  ageBtn.addEventListener("click", () => {
    const age = Number(document.getElementById("age-input").value);
    const out = document.getElementById("age-output");

    if (
      age < 0 ||
      isNaN(age) ||
      document.getElementById("age-input").value === ""
    ) {
      out.textContent = "Помилка: Введено некоректні дані";
    } else if (age <= 11) {
      out.textContent = "Ви - дитина";
    } else if (age <= 17) {
      out.textContent = "Ви - підліток";
    } else if (age <= 59) {
      out.textContent = "Ви - дорослий";
    } else {
      out.textContent = "Ви - пенсіонер";
    }
  });

  const symbolBtn = document.getElementById("symbol-btn");
  symbolBtn.addEventListener("click", () => {
    const num = document.getElementById("symbol-input").value;
    const out = document.getElementById("symbol-output");

    const symbolMap = {
      1: "!",
      2: "@",
      3: "#",
      4: "$",
      5: "%",
      6: "^",
      7: "&",
      8: "*",
      9: "(",
      0: ")",
    };

    out.textContent = symbolMap[num]
      ? `Символ: ${symbolMap[num]}`
      : "Введіть одну цифру від 0 до 9";
  });

  const rangeBtn = document.getElementById("range-sum-btn");
  rangeBtn.addEventListener("click", () => {
    const a = Number(document.getElementById("range-start").value);
    const b = Number(document.getElementById("range-end").value);
    const out = document.getElementById("range-sum-output");

    if (isNaN(a) || isNaN(b)) return;

    const min = Math.min(a, b);
    const max = Math.max(a, b);
    let sum = 0;

    for (let i = min; i <= max; i++) {
      sum += i;
    }
    out.textContent = `Сума: ${sum}`;
  });

  const gcdBtn = document.getElementById("gcd-btn");
  gcdBtn.addEventListener("click", () => {
    let a = Math.abs(Number(document.getElementById("gcd-a").value));
    let b = Math.abs(Number(document.getElementById("gcd-b").value));
    const out = document.getElementById("gcd-output");

    if (isNaN(a) || isNaN(b) || (a === 0 && b === 0)) return;

    // Алгоритм Евкліда для НСД
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    out.textContent = `НСД: ${a}`;
  });

  const divBtn = document.getElementById("divisors-btn");
  divBtn.addEventListener("click", () => {
    const num = Math.abs(
      Number(document.getElementById("divisors-input").value),
    );
    const out = document.getElementById("divisors-output");

    if (num === 0 || isNaN(num)) return;

    const divisors = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) divisors.push(i);
    }
    out.textContent = `Дільники: ${divisors.join(", ")}`;
  });

  const palBtn = document.getElementById("palindrome-btn");
  palBtn.addEventListener("click", () => {
    const str = document.getElementById("palindrome-input").value.trim();
    const out = document.getElementById("palindrome-output");

    if (str.length !== 5 || isNaN(str)) {
      out.textContent = "Введіть рівно 5 цифр!";
      return;
    }

    const reversed = str.split("").reverse().join("");
    out.textContent = str === reversed ? "Це паліндром!" : "Не паліндром";
  });

  const discBtn = document.getElementById("discount-btn");
  discBtn.addEventListener("click", () => {
    const amount = Number(document.getElementById("discount-input").value);
    const out = document.getElementById("discount-output");

    let total = amount;
    if (amount >= 500) total = amount * 0.93;
    else if (amount >= 300) total = amount * 0.95;
    else if (amount >= 200) total = amount * 0.97;

    out.textContent = `До оплати: ${total.toFixed(2)}`;
  });

  const statsBtn = document.getElementById("stats-btn");
  statsBtn.addEventListener("click", () => {
    const out = document.getElementById("stats-output");

    const arr = [];
    for (let i = 0; i < 10; i++) {
      const value = prompt(`Введіть число ${i + 1} із 10:`);

      if (!value) return;

      const num = Number(value.trim());
      if (isNaN(num)) {
        out.textContent = "Помилка: потрібно вводити тільки числа.";
        return;
      }

      arr.push(num);
    }

    const results = {
      positive: 0,
      negative: 0,
      zero: 0,
      even: 0,
      odd: 0,
    };

    for (const num of arr) {
      if (num > 0) results.positive++;
      else if (num < 0) results.negative++;
      else results.zero++;

      if (num % 2 === 0) results.even++;
      else results.odd++;
    }

    out.innerHTML = `Додатніх: ${results.positive}, Від'ємних: ${results.negative}, Нулів: ${results.zero} <br> Парних: ${results.even}, Непарних: ${results.odd}`;
  });

  const daysBtn = document.getElementById("days-btn");
  daysBtn.addEventListener("click", () => {
    const days = [
      "Понеділок",
      "Вівторок",
      "Середа",
      "Четвер",
      "П'ятниця",
      "Субота",
      "Неділя",
    ];
    let currentIndex = 0;

    while (confirm(`${days[currentIndex]}. Хочеш побачити наступний день?`)) {
      currentIndex = (currentIndex + 1) % days.length;
    }
  });

  const guessBtn = document.getElementById("guess-btn");
  guessBtn.addEventListener("click", () => {
    alert("Загадайте число від 0 до 100 у себе в голові!");
    let min = 0;
    let max = 100;
    let found = false;

    while (min <= max) {
      let mid = Math.floor((min + max) / 2);
      let answer = prompt(
        `Ваше число > ${mid}, < ${mid} чи == ${mid}?\nВведіть ">", "<" або "=="`,
      );

      if (answer === "==") {
        alert(`Я вгадав! Це число ${mid}`);
        found = true;
        break;
      } else if (answer === ">") {
        min = mid + 1;
      } else if (answer === "<") {
        max = mid - 1;
      } else {
        if (!answer) break;
        alert('Будь ласка, вводьте тільки ">", "<" або "=="');
      }
    }

    if (!found && min > max) {
      alert("Ви десь збрехали в підказках! :)");
    }
  });

  const multBtn = document.getElementById("multiplication-btn");
  multBtn.addEventListener("click", () => {
    const out = document.getElementById("multiplication-output");
    out.innerHTML = "";

    const tables = Array(8)
      .fill()
      .map((_, i) => i + 2);

    for (const num of tables) {
      const block = document.createElement("div");
      block.className = "table-block";

      const rows = Array(10)
        .fill()
        .map((_, j) => {
          const multiplier = j + 1;
          return `${num} x ${multiplier} = ${num * multiplier}`;
        });

      block.innerHTML = `<h3>На ${num}</h3>` + rows.join("<br>");
      out.appendChild(block);
    }
  });

  const dateBtn = document.getElementById("date-btn");
  dateBtn.addEventListener("click", () => {
    const dayInput = document.getElementById("day-input");
    const monthInput = document.getElementById("month-input");
    const yearInput = document.getElementById("year-input");

    let day = Number(dayInput.value);
    let month = Number(monthInput.value);
    let year = Number(yearInput.value);
    const out = document.getElementById("date-output");

    if (!day || !month || !year) return;

    const isLeap = (year) =>
      (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    const daysInMonth = [
      31,
      isLeap(year) ? 29 : 28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ];

    if (month < 1 || month > 12 || day < 1 || day > daysInMonth[month - 1]) {
      out.textContent = "Неіснуюча дата!";
      return;
    }

    day++;
    if (day > daysInMonth[month - 1]) {
      day = 1;
      month++;
      if (month > 12) {
        month = 1;
        year++;
      }
    }

    const format = (n) => (n < 10 ? "0" + n : n);
    out.textContent = `Наступна дата: ${format(day)}.${format(month)}.${year}`;

    dayInput.value = format(day);
    monthInput.value = format(month);
    yearInput.value = String(year).padStart(4, "0");
  });
});
