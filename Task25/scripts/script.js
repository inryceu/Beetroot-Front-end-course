document.addEventListener("DOMContentLoaded", () => {
  const floatBtn = document.getElementById("float-btn");
  const floatOutput = document.getElementById("float-output");

  floatBtn.addEventListener("click", () => {
    floatOutput.textContent = `0.1 + 0.2 = ${Number((0.1 + 0.2).toFixed(1))}`;
  });

  const stringMathBtn = document.getElementById("string-math-btn");
  const stringMathOutput = document.getElementById("string-math-output");

  stringMathBtn.addEventListener("click", () => {
    let strValue = "1";
    let numValue = 2;

    stringMathOutput.textContent = `"1" + 2 = ${Number(strValue) + numValue}`;
  });

  const flashDriveBtn = document.getElementById("flash-drive-btn");
  const gbInput = document.getElementById("gb-input");
  const flashDriveOutput = document.getElementById("flash-drive-output");

  flashDriveBtn.addEventListener("click", () => {
    const gb = Number(gbInput.value);
    if (gb > 0) {
      const mbTotal = gb * 1024; // 1 Гб = 1024 Мб
      const filesCount = Math.floor(mbTotal / 820);
      flashDriveOutput.textContent = `Поміститься файлів: ${filesCount} шт.`;
    }
  });

  const chocolateBtn = document.getElementById("chocolate-btn");
  const moneyInput = document.getElementById("money-input");
  const priceInput = document.getElementById("price-input");
  const chocolateOutput = document.getElementById("chocolate-output");

  chocolateBtn.addEventListener("click", () => {
    const money = Number(moneyInput.value);
    const price = Number(priceInput.value);

    if (money >= 0 && price > 0) {
      const count = Math.floor(money / price);
      const change = (money - count * price).toFixed(2);
      chocolateOutput.textContent = `Шоколадок: ${count}, Решта: ${change} грн`;
    } else {
      chocolateOutput.textContent = `Введіть коректні дані`;
    }
  });

  const reverseBtn = document.getElementById("reverse-btn");
  const numberInput = document.getElementById("number-input");
  const reverseOutput = document.getElementById("reverse-output");

  reverseBtn.addEventListener("click", () => {
    if (numberInput.value.length === 3) {
      const reversedNum = numberInput.value.split("").reverse().join("");
      reverseOutput.textContent = `Перевернуте число: ${reversedNum}`;
    } else {
      reverseOutput.textContent = `Будь ласка, введіть тризначне число!`;
    }
  });

  const depositBtn = document.getElementById("deposit-btn");
  const depositInput = document.getElementById("deposit-input");
  const depositOutput = document.getElementById("deposit-output");

  depositBtn.addEventListener("click", () => {
    const amount = Number(depositInput.value);
    if (amount > 0) {
      const interest = ((amount * 0.05) / 12) * 2;
      depositOutput.textContent = `Нараховані відсотки: ${interest.toFixed(2)}`;
    }
  });

  const logicBtn = document.getElementById("logic-btn");
  const logicOutput = document.getElementById("logic-output");

  logicBtn.addEventListener("click", () => {
    // && (І) шукає перше FALSE значення (0) або повертає останнє TRUE
    const expr1 = 2 && 0 && 3;

    // || (АБО) шукає перше TRUE значення (2)
    const expr2 = 2 || 0 || 3;

    // && має вищий пріоритет. (2 && 0) дає 0. Далі 0 || 3 дає 3.
    const expr3 = (2 && 0) || 3;

    logicOutput.innerHTML = `
            2 && 0 && 3 поверне: <b>${expr1}</b> <br>
            2 || 0 || 3 поверне: <b>${expr2}</b> <br>
            2 && 0 || 3 поверне: <b>${expr3}</b>
        `;
  });
});
