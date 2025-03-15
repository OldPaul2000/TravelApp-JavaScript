import { login } from "../model/user/user";
import { query } from "../util/query";

class LoginView {
  // Used instead of blank space in order to keep margin applying for <p>
  #NON_BREAKING_SPACE = "\u00A0";
  #BLANK = "Blank";
  #INVALID_USERNAME = "Invalid username";
  #INVALID_PASSWORD = "Invalid password";

  #loginFields = query(".login-fields");
  #usernameWarn = query(".username-warn");
  #passwordWarn = query(".password-warn");
  #usernameInput = query(".username");
  #passwordInput = query(".password");
  #loginBtn = query(".login-btn");

  removeUserWarn() {
    if (this.#usernameInput.value.length > 0) {
      this.#usernameWarn.textContent = this.#NON_BREAKING_SPACE;
    }
  }

  removePasswordWarn() {
    if (this.#passwordInput.value.length > 0) {
      this.#passwordWarn.textContent = this.#NON_BREAKING_SPACE;
    }
  }

  setEmptyUsernameWarn() {
    if (this.#usernameInput.value.length === 0) {
      this.#usernameWarn.textContent = this.#BLANK;
      return true;
    } else {
      this.#usernameWarn.textContent = this.#NON_BREAKING_SPACE;
      return false;
    }
  }

  setEmptyPasswordWarn() {
    if (this.#passwordInput.value.length === 0) {
      this.#passwordWarn.textContent = this.#BLANK;
      return true;
    } else {
      this.#passwordWarn.textContent = this.#NON_BREAKING_SPACE;
      return false;
    }
  }

  setInvalidUsernameWarn() {
    this.#usernameWarn.textContent = this.#INVALID_USERNAME;
  }

  setInvalidPasswordWarn() {
    this.#passwordWarn.textContent = this.#INVALID_PASSWORD;
  }

  #handleUsernameInput() {
    this.#usernameInput.addEventListener("input", () => {
      this.removeUserWarn();
    });
  }

  #handlePasswordInput() {
    this.#passwordInput.addEventListener("input", () => {
      this.removePasswordWarn();
    });
  }

  handleLogin(handler) {
    this.#loginBtn.addEventListener("click", handler);
    this.#loginFields.addEventListener("keydown", handler);
  }

  initHandlers() {
    this.#handleUsernameInput();
    this.#handlePasswordInput();
  }

  getLoginCredentials() {
    return {
      username: this.#usernameInput.value,
      passwrod: this.#passwordInput.value,
    };
  }
}

export default new LoginView();
