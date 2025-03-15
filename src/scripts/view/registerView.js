import { register } from "../model/user/user";
import { query } from "../util/query";

class RegisterView {
  #NON_BREAKING_SPACE = "\u00A0";
  #BLANK = "Blank";
  #ALREADY_EXISTING_USERNAME = "Username already exists";
  #PASSWORDS_NOT_MATCHING = "Passwords don't match";
  #PASSWORD_TOO_SHORT = "At least 8 characters";
  #INVALID_EMAIL_FORMAT = "Invalid email format";

  #usernameWarn = query(".username-warn");
  #passwordWarn = query(".password-warn");
  #repeatPasswordWarn = query(".repeat-password-warn");
  #firstNameWarn = query(".first-name-warn");
  #lastNameWarn = query(".last-name-warn");
  #emailWarn = query(".email-warn");
  #birthDateWarn = query(".birth-date-warn");

  #usernameInput = query(".username");
  #passwordInput = query(".password");
  #passwordRepeatInput = query(".password-repeat");
  #firstNameInput = query(".first-name");
  #lastNameInput = query(".last-name");
  #emailInput = query(".email");
  #birthDateInput = query(".birth-date");

  #registerBtn = query(".register-btn");

  usernameIsBlank = true;
  passwordIsBlank = true;
  passwordsMatch = false;
  firstNameIsBlank = true;
  lastNameIsBlank = true;
  emailIsBlank = true;
  emailFormatIsCorrect = false;
  birthDateIsBlank = true;

  #addValidFieldStyle(element) {
    element.classList.add("valid-field");
    element.classList.add("valid-field:focus");
  }

  #removeValidFieldStyle(element) {
    element.classList.remove("valid-field");
    element.classList.remove("valid-field:focus");
  }

  setEmptyUsernameWarn() {
    if (this.#usernameInput.value.length === 0) {
      this.#usernameWarn.textContent = this.#BLANK;
      this.#removeValidFieldStyle(this.#usernameInput);
      this.usernameIsBlank = true;
    } else {
      this.#usernameWarn.textContent = this.#NON_BREAKING_SPACE;
      this.#addValidFieldStyle(this.#usernameInput);
      this.usernameIsBlank = false;
    }
  }

  setAlreadyExistingUsernameWarn() {
    this.#usernameWarn.textContent = this.#ALREADY_EXISTING_USERNAME;
    this.usernameIsBlank = true;
  }

  setEmptyPasswordWarn() {
    if (this.#passwordInput.value.length === 0) {
      this.#passwordWarn.textContent = this.#BLANK;
      this.#removeValidFieldStyle(this.#passwordInput);
      this.passwordIsBlank = true;
    } else {
      this.#passwordWarn.textContent = this.#NON_BREAKING_SPACE;
      this.#addValidFieldStyle(this.#passwordInput);
      this.passwordIsBlank = false;
    }
  }

  setPasswordsNotMatchWarn() {
    if (this.#passwordInput.value === this.#passwordRepeatInput.value) {
      this.#passwordWarn.textContent = this.#NON_BREAKING_SPACE;
      this.#repeatPasswordWarn.textContent = this.#NON_BREAKING_SPACE;
      this.#addValidFieldStyle(this.#passwordInput);
      this.#addValidFieldStyle(this.#passwordRepeatInput);
      this.passwordsMatch = true;
    }
    if (this.#passwordInput.value !== this.#passwordRepeatInput.value) {
      this.#passwordWarn.textContent = this.#PASSWORDS_NOT_MATCHING;
      this.#repeatPasswordWarn.textContent = this.#PASSWORDS_NOT_MATCHING;
      this.#removeValidFieldStyle(this.#passwordInput);
      this.#removeValidFieldStyle(this.#passwordRepeatInput);
      this.passwordsMatch = false;
    }
    if (
      this.#passwordInput.value.length === 0 &&
      this.#passwordRepeatInput.value.length === 0
    ) {
      this.#passwordWarn.textContent = this.#BLANK;
      this.#repeatPasswordWarn.textContent = this.#BLANK;
      this.#removeValidFieldStyle(this.#passwordInput);
      this.#removeValidFieldStyle(this.#passwordRepeatInput);
      this.passwordsMatch = false;
    }
  }

  setPasswordTooShortWarn() {
    if (this.#passwordInput.value.length < 8) {
      this.#removeValidFieldStyle(this.#passwordInput);
      this.#passwordWarn.textContent = this.#PASSWORD_TOO_SHORT;
    }
    if (this.#passwordInput.value.length === 0) {
      this.#passwordWarn.textContent = this.#BLANK;
      this.#removeValidFieldStyle(this.#passwordInput);
      this.passwordIsBlank = true;
    }
  }

  setEmptyFirstNameWarn() {
    if (this.#firstNameInput.value.length === 0) {
      this.#firstNameWarn.textContent = this.#BLANK;
      this.#removeValidFieldStyle(this.#firstNameInput);
      this.firstNameIsBlank = true;
    } else {
      this.#firstNameWarn.textContent = this.#NON_BREAKING_SPACE;
      this.#addValidFieldStyle(this.#firstNameInput);
      this.firstNameIsBlank = false;
    }
  }

  setEmptyLastNameWarn() {
    if (this.#lastNameInput.value.length === 0) {
      this.#lastNameWarn.textContent = this.#BLANK;
      this.#removeValidFieldStyle(this.#lastNameInput);
      this.lastNameIsBlank = true;
    } else {
      this.#lastNameWarn.textContent = this.#NON_BREAKING_SPACE;
      this.#addValidFieldStyle(this.#lastNameInput);
      this.lastNameIsBlank = false;
    }
  }

  setEmptyEmailWarn() {
    if (this.#emailInput.value.length === 0) {
      this.#emailWarn.textContent = this.#BLANK;
      this.#removeValidFieldStyle(this.#lastNameInput);
      this.emailIsBlank = true;
      this.emailFormatIsCorrect = false;
    } else {
      this.#emailWarn.textContent = this.#NON_BREAKING_SPACE;
      this.#addValidFieldStyle(this.#lastNameInput);
      this.emailIsBlank = false;
    }
  }

  setInvalidEmailWarn() {
    const match = this.#emailInput.value.match(
      /[0-9a-zA-z_]+@[0-9a-zA-z_]+\.[a-z]+/
    );
    this.setEmptyEmailWarn();
    if (!this.emailIsBlank) {
      if (match) {
        this.#emailWarn.textContent = this.#NON_BREAKING_SPACE;
        this.#addValidFieldStyle(this.#emailInput);
        this.emailFormatIsCorrect = true;
        this.emailIsBlank = false;
      } else {
        this.#emailWarn.textContent = this.#INVALID_EMAIL_FORMAT;
        this.#removeValidFieldStyle(this.#emailInput);
        this.emailFormatIsCorrect = false;
      }
    }
  }

  setEmptyBirthDateWarn() {
    const date = this.#birthDateInput.value;
    const year = date.slice(0, 4);
    if (year.startsWith("1") || year.startsWith("2")) {
      this.#birthDateWarn.textContent = this.#NON_BREAKING_SPACE;
      this.#addValidFieldStyle(this.#birthDateInput);
      this.birthDateIsBlank = false;
    } else {
      this.#birthDateWarn.textContent = this.#BLANK;
      this.#removeValidFieldStyle(this.#birthDateInput);
      this.birthDateIsBlank = true;
    }
  }

  handleEmptyUsername() {
    this.#usernameInput.addEventListener("input", () => {
      this.setEmptyUsernameWarn();
    });
  }

  handleInvalidPassword() {
    this.#passwordInput.addEventListener("input", () => {
      this.setEmptyPasswordWarn();
      this.setPasswordsNotMatchWarn();
      this.setPasswordTooShortWarn();
    });

    this.#passwordRepeatInput.addEventListener("input", () => {
      this.setEmptyPasswordWarn();
      this.setPasswordsNotMatchWarn();
    });
  }

  handleEmptyFirstName() {
    this.#firstNameInput.addEventListener("input", () => {
      this.setEmptyFirstNameWarn();
    });
  }

  handleEmptyLastName() {
    this.#lastNameInput.addEventListener("input", () => {
      this.setEmptyLastNameWarn();
    });
  }

  handleInvalidEmail() {
    this.#emailInput.addEventListener("input", () => {
      this.setInvalidEmailWarn();
    });
  }

  handleEmptyBirthDate() {
    this.#birthDateInput.addEventListener("input", () => {
      this.setEmptyBirthDateWarn();
    });
  }

  fieldsAreValid() {
    return (
      !this.usernameIsBlank &&
      !this.passwordIsBlank &&
      this.passwordsMatch &&
      !this.firstNameIsBlank &&
      !this.lastNameIsBlank &&
      !this.emailIsBlank &&
      this.emailFormatIsCorrect &&
      !this.birthDateIsBlank
    );
  }

  resetFieldsValues() {
    this.#usernameInput.value = "";
    this.#passwordInput.value = "";
    this.#passwordRepeatInput.value = "";
    this.#firstNameInput.value = "";
    this.#lastNameInput.value = "";
    this.#emailInput.value = "";
    this.#birthDateInput.value = "";
  }

  resetFieldsValidityValues() {
    this.usernameIsBlank = true;
    this.passwordIsBlank = true;
    this.passwordsMatch = false;
    this.firstNameIsBlank = true;
    this.lastNameIsBlank = true;
    this.emailIsBlank = true;
    this.emailFormatIsCorrect = false;
    this.birthDateIsBlank = true;
  }

  handleRegister(handler) {
    this.#registerBtn.addEventListener("click", handler);
  }

  getInputCredentials() {
    return {
      username: this.#usernameInput.value,
      password: this.#passwordInput.value,
      roles: ["USER"],
      userInfo: {
        firstName: this.#firstNameInput.value,
        lastName: this.#lastNameInput.value,
        email: this.#emailInput.value,
        birthDate: new Date(this.#birthDateInput.value),
      },
    };
  }

  initHandlers() {
    this.handleEmptyUsername();
    this.handleInvalidPassword();
    this.handleEmptyFirstName();
    this.handleEmptyLastName();
    this.handleInvalidEmail();
    this.handleEmptyBirthDate();
  }
}

export default new RegisterView();
