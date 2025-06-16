import FooterView from "../view/footerView";

class MyPicturesController {
  #myPicturesHandler() {
    console.log("To my pictures section");
  }

  initialize() {
    FooterView.setMyPicturesBtnHandler(this.#myPicturesHandler);
  }
}

export default new MyPicturesController();
