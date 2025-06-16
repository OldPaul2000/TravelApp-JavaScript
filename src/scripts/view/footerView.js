import { query } from "../util/query";

class FooterView {
  #homeBtn = query(".home-btn");
  #takePictureBtn = query(".take-picture-btn");
  #myPicturesBtn = query(".my-pictures-btn");

  #feedContainer = query(".feed-container");
  #takePictureContainer = query(".take-picture-container");
  #myPicturesContainer = query(".my-pictures-container");

  setHomeBtnHandler(handler) {
    this.#homeBtn.addEventListener("click", () => {
      this.#displayFeed(true);
      this.#displayCamera(false);
      this.#displayMyPictures(false);
      handler();
    });
  }

  setTakePictureBtnHandler(handler) {
    this.#takePictureBtn.addEventListener("click", () => {
      this.#displayCamera(true);
      handler();
    });
  }

  setMyPicturesBtnHandler(handler) {
    this.#myPicturesBtn.addEventListener("click", () => {
      this.#displayFeed(false);
      this.#displayCamera(false);
      this.#displayMyPictures(true);
      handler();
    });
  }

  #displayFeed(display) {
    if (display) {
      this.#feedContainer.classList.remove("hide-feed");
    } else {
      this.#feedContainer.classList.add("hide-feed");
    }
  }

  #displayCamera(display) {
    if (display) {
      this.#takePictureContainer.classList.remove("hide-take-p");
    } else {
      this.#takePictureContainer.classList.add("hide-take-p");
    }
  }

  #displayMyPictures(display) {
    if (display) {
      this.#myPicturesContainer.classList.add("show-my-pics");
    } else {
      this.#myPicturesContainer.classList.remove("show-my-pics");
    }
  }
}

export default new FooterView();
