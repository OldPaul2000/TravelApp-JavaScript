import HeaderView from "../view/headerView";

class ProfileOptionsController {
  #handler() {
    console.log("Profile options");
  }

  initialize() {
    HeaderView.setProfilePicturePressHandler(this.#handler);
  }
}

export default new ProfileOptionsController();
