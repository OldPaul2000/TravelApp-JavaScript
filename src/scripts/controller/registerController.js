import RegisterView from "../view/registerView";
import { register, login } from "../model/user/user";
import { likePicture } from "../model/touristicPicture/picture";

RegisterView.initHandlers();

RegisterView.handleRegister(() => {
  registerHandler();
});

const registerHandler = async function () {
  if (RegisterView.fieldsAreValid()) {
    const response = await register(RegisterView.getInputCredentials());
    if (response.message === "User already exists") {
      RegisterView.setAlreadyExistingUsernameWarn();
    }
    if (response.status === 201) {
      await login({
        username: RegisterView.getInputCredentials().username,
        password: RegisterView.getInputCredentials().password,
      });
      RegisterView.resetFieldsValues();
      RegisterView.resetFieldsValidityValues();
      window.location = "index.html";
    }
  }
};
