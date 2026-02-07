class Validators {
  static isNotEmpty(value) {
    return value.trim() !== "";
  }

  static isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  static passwordsMatch(password, confirmPassword) {
    return password === confirmPassword;
  }

  static isAdult(age) {
    return Number(age) >= 1;
  }

  static isChecked(checkbox) {
    return checkbox === true;
  }

  static nameNoDigits(value) {
    return value.trim() !== "" && !/\d/.test(value);
  }
}

class RegistrationData {
  constructor(form) {
    this.form = form;
  }

  getData() {
    return {
      fullName: this.form.fullName.value,
      email: this.form.email.value,
      password: this.form.password.value,
      gender:
        (this.form.querySelector('input[name="gender"]:checked') || {}).value ||
        "",
      age: this.form.age.value,
      course: this.form.course.value,
      address: this.form.address.value,
      agreement: this.form.agreement.checked,
    };
  }
}

class RegistrationController {
  constructor(formId) {
    this.form = document.getElementById(formId);
    this.errorBlock = document.getElementById("error");
    this.dataCollector = new RegistrationData(this.form);

    this.#init();
  }

  #init() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.#handleSubmit();
    });
  }

  #handleSubmit() {
    const data = this.dataCollector.getData();

    // 1xx — відсутні обов'язкові поля
    // 2xx — форматні / бізнес-правила
    const ERROR_MESSAGES = {
      100: "Будь ласка, введіть ваше повне ім'я",
      101: "Будь ласка, введіть email",
      102: "Будь ласка, введіть пароль",
      103: "Будь ласка, підтвердіть пароль",
      104: "Будь ласка, оберіть вашу стать",
      105: "Будь ласка, введіть ваш вік",
      106: "Будь ласка, оберіть курс",
      107: "Будь ласка, введіть вашу повну адресу",
      108: "Будь ласка, погодьтесь з умовами конфіденційності",

      200: "Введіть коректний email (наприклад: user@example.com)",
      201: "Паролі не збігаються. Перевірте введені дані",
      202: "Вік повинен бути не менше 1 року",
      203: "Ім'я не може містити цифр",
    };

    const validations = [
      { code: 100, valid: () => Validators.isNotEmpty(data.fullName) },
      { code: 101, valid: () => Validators.isNotEmpty(data.email) },
      { code: 102, valid: () => Validators.isNotEmpty(data.password) },
      {
        code: 103,
        valid: () => Validators.isNotEmpty(this.form.confirmPassword.value),
      },
      { code: 104, valid: () => Validators.isNotEmpty(data.gender) },
      { code: 105, valid: () => Validators.isNotEmpty(data.age) },
      { code: 106, valid: () => Validators.isNotEmpty(data.course) },
      { code: 107, valid: () => Validators.isNotEmpty(data.address) },
      { code: 108, valid: () => Validators.isChecked(data.agreement) },

      { code: 200, valid: () => Validators.isValidEmail(data.email) },
      {
        code: 201,
        valid: () =>
          Validators.passwordsMatch(
            data.password,
            this.form.confirmPassword.value,
          ),
      },
      { code: 202, valid: () => Validators.isAdult(data.age) },
      { code: 203, valid: () => Validators.nameNoDigits(data.fullName) },
    ];

    for (const v of validations) {
      if (!v.valid()) {
        const msg = ERROR_MESSAGES[v.code] || "Невідома помилка валідації";
        this.#showError(msg);
        return;
      }
    }

    this.#clearError();
    console.log("Дані користувача:", data);
    this.form.reset();
  }

  #showError(message) {
    this.errorBlock.textContent = message;
  }

  #clearError() {
    this.errorBlock.textContent = "";
  }
}

new RegistrationController("registrationForm");
