import FooterView from "../view/footerView";

class FeedController {
  #homeBtnHandler() {
    console.log("To feed section");
  }

  initialize() {
    FooterView.setHomeBtnHandler(this.#homeBtnHandler);
  }
}

export default new FeedController();
