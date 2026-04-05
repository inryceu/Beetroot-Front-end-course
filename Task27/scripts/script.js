// 1. Function Declaration
function myFunc1() {}

// 2. Function Expression
const myFunc2 = function () {};

// 3. Arrow Function
const myFunc3 = () => {};

// 4. IIFE (Immediately Invoked Function Expression)
// Часто зустрчалася коли головний потік в js ще не підтримував асинхронність
// загалом, є окремим випадком Arrow Function, або Function Declaration
(async () => {})();

// 5. Object Method
const obj = {
  myMethod() {},
};
obj.myMethod();

// 6. From Constructor, деоптимізовано для v8
const myFunc4 = new Function("a", "b", "return a + b");

document.addEventListener("DOMContentLoaded", () => {
  const countArguments = (...args) => args.length;

  const argsBtn = document.getElementById("args-btn");
  argsBtn.addEventListener("click", () => {
    const inputVal = document.getElementById("args-input").value;
    const out = document.getElementById("args-output");

    if (!inputVal.trim()) {
      out.textContent = `Аргументів передано: ${countArguments()}`;
      return;
    }

    const argsArray = inputVal.split(",").map((item) => item.trim());
    out.textContent = `Аргументів передано: ${countArguments(...argsArray)}`;
  });

  const compareNumbers = (a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  };

  const compareBtn = document.getElementById("compare-btn");
  compareBtn.addEventListener("click", () => {
    const a = Number(document.getElementById("compare-a").value);
    const b = Number(document.getElementById("compare-b").value);
    const out = document.getElementById("compare-output");

    if (isNaN(a) || isNaN(b)) return;
    out.textContent = `Результат порівняння: ${compareNumbers(a, b)}`;
  });

  const factorialCache = {
    0: 1,
    1: 1,
  };

  const calculateFactorial = (n) => {
    if (!Number.isInteger(n) || n < 0) return null;
    if (factorialCache[n] !== undefined) return factorialCache[n];

    factorialCache[n] = n * calculateFactorial(n - 1);
    return factorialCache[n];
  };

  const factBtn = document.getElementById("factorial-btn");
  factBtn.addEventListener("click", () => {
    const n = Number(document.getElementById("factorial-input").value);
    const out = document.getElementById("factorial-output");

    const result = calculateFactorial(n);
    out.textContent =
      result === null
        ? "Факторіал від'ємного числа не існує"
        : `Факторіал: ${result}`;
  });

  const combineDigits = (d1, d2, d3) => Number(`${d1}${d2}${d3}`);

  const concatBtn = document.getElementById("concat-btn");
  concatBtn.addEventListener("click", () => {
    const d1 = document.getElementById("digit-1").value;
    const d2 = document.getElementById("digit-2").value;
    const d3 = document.getElementById("digit-3").value;
    const out = document.getElementById("concat-output");

    if (!d1 || !d2 || !d3) return;
    out.textContent = `З'єднане число: ${combineDigits(d1, d2, d3)}`;
  });

  const calculateArea = (length, width) =>
    width ? length * width : length * length;

  const areaBtn = document.getElementById("area-btn");
  areaBtn.addEventListener("click", () => {
    const lValue = document.getElementById("length-input").value;
    const wValue = document.getElementById("width-input").value;
    const out = document.getElementById("area-output");

    if (!lValue) return;

    let result;
    if (wValue === "") result = calculateArea(Number(lValue));
    else result = calculateArea(Number(lValue), Number(wValue));

    out.textContent = `Площа: ${result}`;
  });

  const isPerfectNumber = (num) => {
    if (num <= 1) return false;

    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
    return sum === num;
  };

  const perfBtn = document.getElementById("perfect-btn");
  perfBtn.addEventListener("click", () => {
    const num = Number(document.getElementById("perfect-input").value);
    const out = document.getElementById("perfect-output");

    if (num <= 0) return;

    if (isPerfectNumber(num)) {
      out.textContent = `Число ${num} Є досконалим!`;
    } else {
      out.textContent = `Число ${num} НЕ є досконалим.`;
    }
  });

  const findPerfectsInRange = (min, max) => {
    const perfectNumbers = [];
    for (let i = min; i <= max; i++) {
      if (isPerfectNumber(i)) {
        perfectNumbers.push(i);
      }
    }
    return perfectNumbers;
  };

  const rangeBtn = document.getElementById("perfect-range-btn");
  rangeBtn.addEventListener("click", () => {
    const min = Number(document.getElementById("range-min").value);
    const max = Number(document.getElementById("range-max").value);
    const out = document.getElementById("perfect-range-output");

    if (isNaN(min) || isNaN(max)) return;

    const actualMin = Math.min(min, max);
    const actualMax = Math.max(min, max);

    const result = findPerfectsInRange(actualMin, actualMax);

    if (result.length > 0)
      out.textContent = `Знайдені числа: ${result.join(", ")}`;
    else out.textContent = "У цьому діапазоні немає досконалих чисел.";
  });
});
