import RegisterView from "../view/registerView";
import { register, login } from "../model/user/user";
import { likePicture } from "../model/touristicPicture/picture";

RegisterView.initHandlers();

RegisterView.handleRegister(() => {
  if (RegisterView.fieldsAreValid()) {
    register(RegisterView.getInputCredentials()).then((resp) => {
      if (resp.message === "User already exists") {
        RegisterView.setAlreadyExistingUsernameWarn();
      }
      if (resp.status === 201) {
        login({
          username: RegisterView.getInputCredentials().username,
          password: RegisterView.getInputCredentials().password,
        }).then((resp) => {
          RegisterView.resetFieldsValues();
          RegisterView.resetFieldsValidityValues();
          window.location = "index.html";
        });
      }
    });
  }
});
