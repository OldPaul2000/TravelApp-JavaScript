import { login } from "../model/user/user";
import { query } from "../util/query";

class LoginView {
  // Used instead of blank space in order to keep margin applying for <p>
  #NON_BREAKING_SPACE = "\u00A0";
  #BLANK = "Blank";
  #INVALID_USERNAME = "Invalid username";
  #INVALID_PASSWORD = "Invalid password";

  #loginContainer = query(".login-container");

  #loginFields = query(".login-fields");
  #usernameWarn = query(".login-username-warn");
  #passwordWarn = query(".login-password-warn");
  #usernameInput = query(".login-username");
  #passwordInput = query(".login-password");
  #loginBtn = query(".login-btn");

  #registerLink = query(".register-link");
  #mainPageLink = query(".main-page-link");

  #removeUserWarn() {
    if (this.#usernameInput.value.length > 0) {
      this.#usernameWarn.textContent = this.#NON_BREAKING_SPACE;
    }
  }

  #removePasswordWarn() {
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
      this.#removeUserWarn();
    });
  }

  #handlePasswordInput() {
    this.#passwordInput.addEventListener("input", () => {
      this.#removePasswordWarn();
    });
  }

  handleLogin(handler) {
    this.#loginBtn.addEventListener("click", handler);
    this.#loginFields.addEventListener("keydown", handler);
  }

  displayLoginView(display) {
    if (display) {
      this.#loginContainer.classList.remove("disp-n");
    } else {
      this.#loginContainer.classList.add("disp-n");
    }
  }

  #setLinksHandlers() {
    const registerContainer = query(".register-container");
    const mainPageContainer = query(".main-page-container");
    this.#registerLink.addEventListener("click", () => {
      this.#loginContainer.classList.add("disp-n");
      registerContainer.classList.remove("disp-n");
    });
    this.#mainPageLink.addEventListener("click", () => {
      this.#loginContainer.classList.add("disp-n");
      mainPageContainer.classList.remove("disp-n");
    });
  }

  getLoginCredentials() {
    return {
      username: this.#usernameInput.value,
      password: this.#passwordInput.value,
    };
  }

  initHandlers() {
    this.#handleUsernameInput();
    this.#handlePasswordInput();
    this.#setLinksHandlers();
  }
}

export default new LoginView();
