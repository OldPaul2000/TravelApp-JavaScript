export const getCsrfFromCookies = function () {
  return document.cookie
    .split("; ")
    .filter((val) => {
      if (val.match(/XSRF.+/) !== null) {
        return "Matches";
      }
    })[0]
    .slice(11);
};
