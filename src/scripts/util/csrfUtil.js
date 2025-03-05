import { loginCache } from "../../cache/loginSessionCredentials";

export const getCsrfFromCookies = function () {
  const cookies = document.cookie;
  if (cookies.length > 0) {
    return document.cookie
      .split("; ")
      .filter((val) => {
        if (val.match(/XSRF.+/) !== null) {
          return "Matches";
        }
      })[0]
      .slice(11);
  }
};

export const fetchCsrf = async function () {
  if (document.cookie.match(/XSRF.+/) === null) {
    try {
      const response = await fetch("http://localhost:8080/api/v1/csrf", {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: { Authorization: loginCache.getJwt() },
      });
      return response;
    } catch (err) {
      return err.message;
    }
  }
};
