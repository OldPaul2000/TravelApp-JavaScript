import * as csrfUtil from "/src/scripts/util/csrfUtil.js";
import * as modelUtil from "../../util/modelUtil.js";
import { API_URL, API_PORT } from "../../constants/apiAddress.js";
import { myHeaders } from "/src/cache/headers.js";
import { loginCache } from "../../../cache/loginSessionCredentials";

export const getUserById = async function (id) {
  try {
    const response = await fetch(
      `http://${API_URL}:${API_PORT}/api/v1/users/${id}`,
      {
        method: "GET",
        mode: "cors",
      }
    );
    return await response.json();
  } catch (err) {
    return err.message;
  }
};

export const getCollagesFromUser = async function (userId, startPage, offset) {
  try {
    const response = await fetch(
      `http://${API_URL}:${API_PORT}/api/v1/users/collages/${userId}?startPage=${startPage}&offset=${offset}`,
      {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: myHeaders,
      }
    );
    return await modelUtil.getJsonResponse(response);
  } catch (err) {
    return err.message;
  }
};

export const login = async function (credentials) {
  myHeaders.set("Content-Type", "application/json");
  try {
    const response = await fetch(
      `http://${API_URL}:${API_PORT}/api/v1/users/login`,
      {
        method: "POST",
        mode: "cors",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: myHeaders,
      }
    );
    const jsonResponse = await response.json();
    if (!response.ok) {
      return {
        status: jsonResponse.status,
        message: jsonResponse.message,
      };
    } else {
      loginCache.setUserId(jsonResponse.userId);
      loginCache.setRoles(jsonResponse.roles);
      loginCache.setFirstName(jsonResponse.firstName);
      loginCache.setLastName(jsonResponse.lastName);
      loginCache.setEmail(jsonResponse.email);
      loginCache.setBirthDate(jsonResponse.birthDate);
      loginCache.setRegistrationDate(jsonResponse.registrationDate);
      loginCache.setProfilePictureName(jsonResponse.profilePictureName);
      loginCache.setProfilePictureBytes(jsonResponse.profilePictureBytes);

      loginCache.setJwt(jsonResponse.jwtToken);
      myHeaders.set("Authorization", loginCache.getJwt());
      myHeaders.set("X-XSRF-TOKEN", csrfUtil.getCsrfFromCookies());
      return { status: response.status, message: "Logged in succesfully" };
    }
  } catch (err) {
    return err.message;
  }
};

export const register = async function (registrationInfo) {
  myHeaders.set("Content-Type", "application/json");
  try {
    const response = await fetch(
      `http://${API_URL}:${API_PORT}/api/v1/users/register`,
      {
        method: "POST",
        mode: "cors",
        credentials: "include",
        body: JSON.stringify(registrationInfo),
        headers: { "Content-Type": "application/json" },
      }
    );
    return await modelUtil.getResponse(response, "Registered succesfully");
  } catch (err) {
    return err.message;
  }
};

export const logout = async function () {
  await csrfUtil.fetchCsrf();
  myHeaders.set("X-XSRF-TOKEN", csrfUtil.getCsrfFromCookies());
  try {
    const response = await fetch(
      `http://${API_URL}:${API_PORT}/api/v1/users/logout`,
      {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: myHeaders,
      }
    );
    if (!response.ok) {
      return await response.json();
    }
    clearHeaders();
    loginCache.clearData();
    return { status: response.status, message: "Logged out succesfully" };
  } catch (err) {
    return err.message;
  }
};
const clearHeaders = function () {
  myHeaders.delete("Authorization");
  myHeaders.delete("X-XSRF-TOKEN");
};

export const updateProfilePicture = async function (file) {
  await csrfUtil.fetchCsrf();
  myHeaders.set("X-XSRF-TOKEN", csrfUtil.getCsrfFromCookies());
  myHeaders.set("Accept", "*/*");
  myHeaders.delete("Content-Type");

  const formData = new FormData();
  formData.append("file", file);
  try {
    const response = await fetch(
      `http://${API_URL}:${API_PORT}/api/v1/users/profile-pictures/${loginCache.getUserId()}`,
      {
        method: "PUT",
        mode: "cors",
        credentials: "include",
        body: formData,
        headers: myHeaders,
      }
    );
    myHeaders.delete("Accept");
    myHeaders.set("Content-Type", "application/json");
    return await modelUtil.getResponse(
      response,
      "Picture uploaded succesfully"
    );
  } catch (err) {
    return err.message;
  }
};

export const updateUserInfo = async function (newUserInfo) {
  await csrfUtil.fetchCsrf();
  myHeaders.set("X-XSRF-TOKEN", csrfUtil.getCsrfFromCookies());
  try {
    const response = await fetch(
      `http://${API_URL}:${API_PORT}/api/v1/users/user-info/${loginCache.getUserId()}`,
      {
        method: "PUT",
        mode: "cors",
        credentials: "include",
        body: JSON.stringify(newUserInfo),
        headers: myHeaders,
      }
    );
    return await modelUtil.getResponse(
      response,
      "User info updated succesfully"
    );
  } catch (err) {
    return err.message;
  }
};

export const deleteAccount = async function (deleteTouristicPictures) {
  await csrfUtil.fetchCsrf();
  myHeaders.set("X-XSRF-TOKEN", csrfUtil.getCsrfFromCookies());
  try {
    const response = await fetch(
      `http://${API_URL}:${API_PORT}/api/v1/users/${loginCache.getUserId()}?deletePictures=${deleteTouristicPictures}`,
      {
        method: "DELETE",
        mode: "cors",
        credentials: "include",
        headers: myHeaders,
      }
    );
    return await modelUtil.getResponse(register, "Account deleted succesfully");
  } catch (err) {
    return err.message;
  }
};
