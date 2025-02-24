import * as loginCredentials from "/src/cache/loginSessionCredentials.js";
import * as csrfExtractor from "/src/scripts/util/csrfExtractor.js";

const loginBtn = document.querySelector(".login");
const logoutBtn = document.querySelector(".logout");
const userIdP = document.querySelector(".userId");
const jwtP = document.querySelector(".jwt");
const printResponseBtn = document.querySelector(".resp");

let myHeaders = new Headers();

const login = async function (credentials) {
  myHeaders.set("Content-Type", "application/json");
  try {
    const response = await fetch("http://localhost:8080/api/v1/users/login", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      body: JSON.stringify(credentials),
      headers: myHeaders,
    });
    const loginSessionInfo = await response.json();
    if (!response.ok) {
      return {
        status: loginSessionInfo.status,
        message: loginSessionInfo.message,
      };
    } else {
      loginCredentials.setUserId(loginSessionInfo.userId);
      loginCredentials.setRoles(loginSessionInfo.roles);
      loginCredentials.setJwt(loginSessionInfo.jwtToken);
      myHeaders.set("Authorization", loginCredentials.jwtToken);
      myHeaders.set("X-XSRF-TOKEN", csrfExtractor.getCsrfFromCookies());
      return { status: 200, message: "Logged in successfully" };
    }
  } catch (err) {
    return err.message;
  }
};
loginBtn.addEventListener("click", () => {
  login({ username: "Paul", password: "paul1234" }).then((resp) => {
    console.log(resp);
    console.log(loginCredentials.userId);
    console.log(loginCredentials.userRoles);
    console.log(loginCredentials.jwtToken);
  });
});

const logout = async function () {
  try {
    const response = await fetch("http://localhost:8080/api/v1/users/logout", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: myHeaders,
    });
    console.log(response);
    if (!response.ok) {
      return await response.json();
    }
    return { status: 200, message: "Logged out successfully" };
  } catch (err) {}
};
logoutBtn.addEventListener("click", () => {
  logout().then((resp) => console.log(resp));
});

printResponseBtn.addEventListener("click", () => {
  // console.log(loginCredentials.userId);
  // console.log(loginCredentials.userRoles);
  // console.log(loginCredentials.jwtToken);
  console.log(myHeaders.get("Authorization"));
  console.log(myHeaders.get("X-XSRF-TOKEN"));
});
