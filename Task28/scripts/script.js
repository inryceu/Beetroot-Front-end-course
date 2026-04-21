document.addEventListener("DOMContentLoaded", () => {
  const car = {
    manufacturer: "Volkswagen",
    model: "Polo",
    year: 2015,
    avgSpeed: 90,
    fuelTank: 56,
    fuelConsumption: 5.5,
    drivers: ["Павло"],

    getInfo() {
      return {
        manufacturer: this.manufacturer,
        model: this.model,
        year: this.year,
        avgSpeed: this.avgSpeed,
        fuelTank: this.fuelTank,
        fuelConsumption: this.fuelConsumption,
        drivers: [...this.drivers],
      };
    },

    addDriver(name) {
      if (name && !this.drivers.includes(name)) {
        this.drivers.push(name);
        return true;
      }
      return false;
    },

    hasDriver(name) {
      return this.drivers.includes(name);
    },

    calculateTrip(distance) {
      const drivingTime = distance / this.avgSpeed;

      // Відпочинок: 1 година кожні 4 години водіння.
      // Якщо час рівно ділиться на 4 (наприклад, 8 годин)
      // то останній відпочинок не потрібен (ми вже приїхали).
      let rests = Math.floor(drivingTime / 4);
      if (drivingTime % 4 === 0 && drivingTime > 0) rests--;

      const totalTime = drivingTime + rests;
      const requiredFuel = (distance / 100) * this.fuelConsumption;

      return {
        time: totalTime.toFixed(1),
        fuel: requiredFuel.toFixed(1),
      };
    },
  };

  const renderCarInfo = (carInfo) =>
    `<b>${carInfo.manufacturer} ${carInfo.model} (${carInfo.year})</b><br>
                    Швидкість: ${carInfo.avgSpeed} км/год | Бак: ${carInfo.fuelTank} л | Витрата: ${carInfo.fuelConsumption} л/100км<br>
                    Водії: ${carInfo.drivers.join(", ")}`;

  const updateCarInfo = () =>
    (document.getElementById("car-info").innerHTML = renderCarInfo(
      car.getInfo(),
    ));
  updateCarInfo();

  document.getElementById("add-driver-btn").addEventListener("click", () => {
    const name = document.getElementById("driver-input").value.trim();
    const out = document.getElementById("driver-output");
    if (car.addDriver(name)) {
      out.innerHTML = `<span style="color: green;">Водія ${name} додано!</span>`;
      updateCarInfo();
    } else {
      out.innerHTML = `<span style="color: red;">Помилка або водій вже є.</span>`;
    }
    document.getElementById("driver-input").value = "";
  });

  document.getElementById("check-driver-btn").addEventListener("click", () => {
    const name = document.getElementById("driver-input").value.trim();
    const out = document.getElementById("driver-output");
    if (car.hasDriver(name))
      out.innerHTML = `<span style="color: green;">Так, ${name} є у списку.</span>`;
    else
      out.innerHTML = `<span style="color: red;">Ні, ${name} немає у списку.</span>`;
  });

  document.getElementById("trip-btn").addEventListener("click", () => {
    const dist = Number(document.getElementById("distance-input").value);
    const out = document.getElementById("trip-output");
    if (dist > 0) {
      const trip = car.calculateTrip(dist);
      out.innerHTML = `Час у дорозі: <b>${trip.time} год</b>. Потрібно палива: <b>${trip.fuel} л</b>.`;
    }
  });

  const clock = {
    hours: 20,
    minutes: 59,
    seconds: 45,

    getFormattedTime() {
      const pad = (n) => n.toString().padStart(2, "0");
      return `${pad(this.hours)}:${pad(this.minutes)}:${pad(this.seconds)}`;
    },

    updateTimeBySeconds(totalSecondsToAdd) {
      let currentTotalSeconds =
        this.hours * 3600 + this.minutes * 60 + this.seconds;

      currentTotalSeconds += totalSecondsToAdd;

      while (currentTotalSeconds < 0) {
        currentTotalSeconds += 24 * 3600;
      }

      this.hours = Math.floor(currentTotalSeconds / 3600) % 24;
      this.minutes = Math.floor((currentTotalSeconds % 3600) / 60);
      this.seconds = currentTotalSeconds % 60;
    },

    addSeconds(s) {
      this.updateTimeBySeconds(s);
    },
    addMinutes(m) {
      this.updateTimeBySeconds(m * 60);
    },
    addHours(h) {
      this.updateTimeBySeconds(h * 3600);
    },
  };

  const updateClockDisplay = () => {
    document.getElementById("time-display").textContent =
      clock.getFormattedTime();
  };
  updateClockDisplay();

  document.getElementById("add-secs-btn").addEventListener("click", () => {
    clock.addSeconds(Number(document.getElementById("add-secs-input").value));
    updateClockDisplay();
  });
  document.getElementById("add-mins-btn").addEventListener("click", () => {
    clock.addMinutes(Number(document.getElementById("add-mins-input").value));
    updateClockDisplay();
  });
  document.getElementById("add-hours-btn").addEventListener("click", () => {
    clock.addHours(Number(document.getElementById("add-hours-input").value));
    updateClockDisplay();
  });

  const fractionMath = {
    gcd(a, b) {
      a = Math.abs(a);
      b = Math.abs(b);
      while (b) {
        let temp = b;
        b = a % b;
        a = temp;
      }
      return a;
    },

    simplify(frac) {
      const divisor = this.gcd(frac.num, frac.den);
      let simplifiedNum = frac.num / divisor;
      let simplifiedDen = frac.den / divisor;

      if (simplifiedDen < 0) {
        simplifiedNum *= -1;
        simplifiedDen *= -1;
      }
      return { num: simplifiedNum, den: simplifiedDen };
    },

    add(f1, f2) {
      return this.simplify({
        num: f1.num * f2.den + f2.num * f1.den,
        den: f1.den * f2.den,
      });
    },

    subtract(f1, f2) {
      return this.simplify({
        num: f1.num * f2.den - f2.num * f1.den,
        den: f1.den * f2.den,
      });
    },

    multiply(f1, f2) {
      return this.simplify({
        num: f1.num * f2.num,
        den: f1.den * f2.den,
      });
    },

    divide(f1, f2) {
      return this.simplify({
        num: f1.num * f2.den,
        den: f1.den * f2.num,
      });
    },

    format(frac) {
      const f = this.simplify(frac);
      if (f.den === 1) return `${f.num}`;
      if (f.num === 0) return `0`;
      return `${f.num}/${f.den}`;
    },
  };

  const getFractions = () => {
    return {
      f1: {
        num: Number(document.getElementById("num1").value),
        den: Number(document.getElementById("den1").value) || 1,
      },
      f2: {
        num: Number(document.getElementById("num2").value),
        den: Number(document.getElementById("den2").value) || 1,
      },
    };
  };

  const outFrac = document.getElementById("fraction-output");

  document.getElementById("frac-add").addEventListener("click", () => {
    const { f1, f2 } = getFractions();
    outFrac.innerHTML = `Результат: <b>${fractionMath.format(fractionMath.add(f1, f2))}</b>`;
  });

  document.getElementById("frac-sub").addEventListener("click", () => {
    const { f1, f2 } = getFractions();
    outFrac.innerHTML = `Результат: <b>${fractionMath.format(fractionMath.subtract(f1, f2))}</b>`;
  });

  document.getElementById("frac-mul").addEventListener("click", () => {
    const { f1, f2 } = getFractions();
    outFrac.innerHTML = `Результат: <b>${fractionMath.format(fractionMath.multiply(f1, f2))}</b>`;
  });

  document.getElementById("frac-div").addEventListener("click", () => {
    const { f1, f2 } = getFractions();
    if (f2.num === 0) {
      outFrac.innerHTML = `<span style="color:red">На нуль ділити не можна!</span>`;
      return;
    }
    outFrac.innerHTML = `Результат: <b>${fractionMath.format(fractionMath.divide(f1, f2))}</b>`;
  });
});
