// --- Способи коментування коду ---
// 1. Однорядковий коментар

/* 2. Багаторядковий коментар.
   Багаторядковий коментар
   Багаторядковий коментар
*/

/**
 * 3. JSDoc коментар (документаційний).
 * Використовується розробниками для опису функцій,
 * змінних та параметрів. Підхоплюється редакторами коду.
 */

// --- Правильні імена змінних ---
let firstName = "Pavlo"; // Варіант 1 (camelCase)
let last_name = "Maluiev"; // Варіант 2 (snake_case)
let FirstName = "Pavlo"; // Варіант 3 (PascalCase)
let $userLastName = "Doe"; // Варіант 4 (Дозволені спецсимволи $ та _ на початку)

// --- Неправильні імена змінних ---
// let 1name = "John";       // Помилка: ім'я не може починатися з цифри
// let first-name = "John";  // Помилка: містить дефіс (сприймається як оператор мінус)
// let let = "John";         // Помилка: використання зарезервованого слова мови
// let first name = "John";  // Помилка: ім'я не може містити пробіл
// let user@name = "John";   // Помилка: використання заборонених спецсимволів (крім $ та _)

// --- Всі стилі написання імен змінних (Naming Conventions) ---
/*
  1. camelCase: перше слово з маленької, кожне наступне з великої (myVariableName). Стандарт для змінних і функцій в JS.
  2. PascalCase: кожне слово з великої (MyVariableName). В JS використовується переважно для класів та конструкторів.
  3. snake_case: слова розділені підкресленням (my_variable_name). Часто використовується в Python або базах даних.
  4. SCREAMING_SNAKE_CASE (MACRO_CASE): все великими літерами через підкреслення (MY_CONSTANT_VALUE). В JS це строгий стандарт для жорстких констант.
  5. kebab-case (dashed): слова розділені дефісом (my-variable-name). Недопустимо в JS для змінних, але це стандарт для CSS-класів та HTML-атрибутів.
  6. Hungarian notation (Угорська нотація): додавання префіксу типу даних (strName, numAge, arrList, bIsReady). Рідко використовується в сучасному JS через поширення TypeScript.
  7. dot.case: розділення крапкою (my.variable.name). В JS означає звернення до властивостей об'єкта, часто зустрічається для неймінга файлів, особливо в Nest.js.
*/

document.addEventListener("DOMContentLoaded", () => {
  const CURRENT_YEAR = 2026;
  const USD_TO_EUR_RATE = 0.92;

  const nameBtn = document.getElementById("name-btn");
  const nameInput = document.getElementById("name-input");
  const greetingOutput = document.getElementById("greeting-output");

  nameBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    if (name) {
      greetingOutput.textContent = `Привіт, ${name}!`;
    }
  });

  const ageBtn = document.getElementById("age-btn");
  const yearInput = document.getElementById("year-input");
  const ageOutput = document.getElementById("age-output");

  ageBtn.addEventListener("click", () => {
    const birthYear = Number(yearInput.value);
    if (birthYear > 1900 && birthYear <= CURRENT_YEAR) {
      const age = CURRENT_YEAR - birthYear;
      ageOutput.textContent = `Твій вік: ${age} років`;
    } else {
      ageOutput.textContent = `Введіть коректний рік`;
    }
  });

  const perimeterBtn = document.getElementById("perimeter-btn");
  const sideInput = document.getElementById("side-input");
  const perimeterOutput = document.getElementById("perimeter-output");

  perimeterBtn.addEventListener("click", () => {
    const side = Number(sideInput.value);
    if (side > 0) {
      const perimeter = side * 4;
      perimeterOutput.textContent = `Периметр: ${perimeter}`;
    }
  });

  const areaBtn = document.getElementById("area-btn");
  const radiusInput = document.getElementById("radius-input");
  const areaOutput = document.getElementById("area-output");

  areaBtn.addEventListener("click", () => {
    const radius = Number(radiusInput.value);
    if (radius > 0) {
      const area = Math.PI * Math.pow(radius, 2);
      areaOutput.textContent = `Площа: ${area.toFixed(2)}`;
    }
  });

  const speedBtn = document.getElementById("speed-btn");
  const distanceInput = document.getElementById("distance-input");
  const timeInput = document.getElementById("time-input");
  const speedOutput = document.getElementById("speed-output");

  speedBtn.addEventListener("click", () => {
    const distance = Number(distanceInput.value);
    const time = Number(timeInput.value);
    if (distance > 0 && time > 0) {
      const speed = distance / time;
      speedOutput.textContent = `Потрібна швидкість: ${speed.toFixed(1)} км/год`;
    }
  });

  const currencyBtn = document.getElementById("currency-btn");
  const usdInput = document.getElementById("usd-input");
  const currencyOutput = document.getElementById("currency-output");

  currencyBtn.addEventListener("click", () => {
    const usd = Number(usdInput.value);
    if (usd >= 0) {
      const eur = usd * USD_TO_EUR_RATE;
      currencyOutput.textContent = `Сума: ${eur.toFixed(2)} EUR`;
    }
  });
});
