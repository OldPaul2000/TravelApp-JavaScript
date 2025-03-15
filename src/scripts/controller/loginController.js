import LoginView from "../view/loginView";
import { login } from "../model/user/user";
import * as LoginControllerUtil from "../util/loginControllerUtil";

LoginView.initHandlers();

LoginView.handleLogin((e) => {
  if (e.key === "Enter" || e.type === "click") {
    const userEmpty = LoginView.setEmptyUsernameWarn();
    const passwordEmpty = LoginView.setEmptyPasswordWarn();
    if (!userEmpty && !passwordEmpty) {
      const response = login(LoginView.getLoginCredentials());
      response.then((resp) => {
        if (LoginControllerUtil.isUsernameNotFoundMessage(resp.message)) {
          LoginView.setInvalidUsernameWarn();
        }
        if (LoginControllerUtil.isInvalidPasswordMessage(resp.message)) {
          LoginView.setInvalidPasswordWarn();
        }
        if (resp.status === 200) {
          window.location = "index.html";
        }
      });
    }
    console.log("Login");
  }
});
