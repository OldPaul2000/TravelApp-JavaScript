import { query } from "../util/query";

class MainPageView {
  #mainPageContainer = query(".main-page-container");

  displayMainPage(display) {
    if (display) {
      this.#mainPageContainer.classList.remove("disp-n");
    } else {
      this.#mainPageContainer.classList.add("disp-n");
    }
  }
}

export default new MainPageView();
