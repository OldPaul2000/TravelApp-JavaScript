import HeaderView from "../view/headerView";

class AppMenuController {
  #handler() {
    console.log("App menu");
  }

  initialize() {
    HeaderView.setAppMenuBtnHandler(this.#handler);
  }
}

export default new AppMenuController();
