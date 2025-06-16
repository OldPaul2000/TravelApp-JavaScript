import FooterView from "../view/footerView";

class TakePictureController {
  #takePictureHandler() {
    console.log("Camera");
  }

  initialize() {
    FooterView.setTakePictureBtnHandler(this.#takePictureHandler);
  }
}

export default new TakePictureController();
