import { query } from "../util/query";

class HeaderView {
  #profilePictureContainer = query(".profile-picture-container");
  #profilePicture = query(".profile-picture");
  #userFirstName = query(".user-first-name");

  #searchBtn = query(".search-btn");
  #searchInput = query(".search-input");
  #appMenuBtn = query(".app-menu-btn");

  #profileOptionsContainer = query(".profile-options-container");
  #appMenuContainer = query(".app-menu-container");

  setProfilePicturePressHandler(handler) {
    this.#profilePictureContainer.addEventListener("click", () => {
      this.#displayAppMenu(false);
      this.#displayProfileOptions(true);
      handler();
    });
  }

  setAppMenuBtnHandler(handler) {
    this.#appMenuBtn.addEventListener("click", () => {
      this.#displayProfileOptions(false);
      this.#displayAppMenu(true);
      handler();
    });
  }

  #displayProfileOptions(display) {
    if (display) {
      this.#profileOptionsContainer.classList.add("show-profile-options");
    } else {
      this.#profileOptionsContainer.classList.remove("show-profile-options");
    }
  }

  #displayAppMenu(display) {
    if (display) {
      this.#appMenuContainer.classList.add("show-app-menu");
    } else {
      this.#appMenuContainer.classList.remove("show-app-menu");
    }
  }

  getProfileImageResolution() {
    return {
      width: this.#profilePicture.naturalWidth,
      height: this.#profilePicture.naturalHeight,
    };
  }
}

export default new HeaderView();
