import LoginView from "../view/loginView";
import MainPageView from "../view/mainPageView";
import { login } from "../model/user/user";
import * as LoginControllerUtil from "../util/loginControllerUtil";

const loginHandler = async function () {
  const userEmpty = LoginView.setEmptyUsernameWarn();
  const passwordEmpty = LoginView.setEmptyPasswordWarn();
  if (!userEmpty && !passwordEmpty) {
    const response = await login(LoginView.getLoginCredentials());
    if (LoginControllerUtil.isUsernameNotFoundMessage(response.message)) {
      LoginView.setInvalidUsernameWarn();
    }
    if (LoginControllerUtil.isInvalidPasswordMessage(response.message)) {
      LoginView.setInvalidPasswordWarn();
    }
    if (response.status === 200) {
      LoginView.displayLoginView(false);
      MainPageView.displayMainPage(true);
    }
  }
  console.log("Login");
};

export const initializeLoginController = function () {
  LoginView.initHandlers();

  LoginView.handleLogin((e) => {
    if (e.key === "Enter" || e.type === "click") {
      loginHandler();
    }
  });
};
