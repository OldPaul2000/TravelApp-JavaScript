import RegisterView from "../view/registerView";
import MainPageView from "../view/mainPageView";
import { register, login } from "../model/user/user";

const registerHandler = async function () {
  if (RegisterView.fieldsAreValid()) {
    const response = await register(RegisterView.getInputCredentials());
    if (response.message === "User already exists") {
      RegisterView.slideToFirstPage();
      RegisterView.setAlreadyExistingUsernameWarn();
    }
    if (response.status === 201) {
      await login({
        username: RegisterView.getInputCredentials().username,
        password: RegisterView.getInputCredentials().password,
      });
      RegisterView.resetFieldsValues();
      RegisterView.resetFieldsValidityValues();
      RegisterView.displayRegisterView(false);
      MainPageView.displayMainPage(true);
    }
    console.log("Register");
  }
};

export const initializeRegisterController = function () {
  RegisterView.initHandlers();

  RegisterView.handleRegister(() => {
    registerHandler();
  });
};
