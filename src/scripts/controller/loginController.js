import LoginView from "../view/loginView";
import { login } from "../model/user/user";
import * as LoginControllerUtil from "../util/loginControllerUtil";

LoginView.initHandlers();

LoginView.handleLogin((e) => {
  if (e.key === "Enter" || e.type === "click") {
    loginHandler();
  }
});

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
      window.location = "index.html";
    }
  }
  console.log("Login");
};
