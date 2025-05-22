import { loginCache } from "../../../cache/loginSessionCredentials";
import * as csrfUtil from "/src/scripts/util/csrfUtil.js";
import * as modelUtil from "../../util/modelUtil.js";
import { myHeaders } from "/src/cache/headers.js";

export const getPictureById = async function (pictureId) {
  try {
    const response = await fetch(
      `http://${API_URL}:${API_PORT}/api/v1/pictures/${pictureId}`,
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

export const getPicturesFromUser = async function (userId, pageStart, offset) {
  try {
    const response = await fetch(
      `http://${API_URL}:${API_PORT}/api/v1/users/${userId}/pictures?pageStart=${pageStart}&offset=${offset}`,
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

export const getPicturesFromUserAndPlaceType = async function (
  userId,
  placeType,
  pageStart,
  offset
) {
  try {
    const response = await fetch(
      `http://${API_URL}:${API_PORT}/api/v1/users/${userId}/place-types/pictures?placeType=${placeType}&pageStart=${pageStart}&offset=${offset}`,
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

export const getPicturesByCity = async function (city, pageStart, offset) {
  try {
    const response = await fetch(
      `http://${API_URL}:${API_PORT}/api/v1/cities/pictures?city=${city}&pageStart=${pageStart}&offset=${offset}`,
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

export const getPicturesByCityAndPlaceType = async function (
  city,
  placeType,
  pageStart,
  offset
) {
  try {
    const response = await fetch(
      `http://${API_URL}:${API_PORT}/api/v1/cities/place-types/pictures?city=${city}&placeType=${placeType}&pageStart=${pageStart}&offset=${offset}`,
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

export const getPicturesByCommune = async function (
  commune,
  pageStart,
  offset
) {
  try {
    const response = await fetch(
      `http://${API_URL}:${API_PORT}/api/v1/communes/pictures?commune=${commune}&pageStart=${pageStart}&offset=${offset}`,
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

export const getPicturesByCommuneAndPlaceType = async function (
  commune,
  placeType,
  pageStart,
  offset
) {
  try {
    const response = await fetch(
      `http://${API_URL}:${API_PORT}/api/v1/communes/place-types/pictures?commune=${commune}&placeType=${placeType}&pageStart=${pageStart}&offset=${offset}`,
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

export const getPicturesByVillage = async function (
  village,
  pageStart,
  offset
) {
  try {
    const response = await fetch(
      `http://${API_URL}:${API_PORT}/api/v1/villages/pictures?village=${village}&pageStart=${pageStart}&offset=${offset}`,
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

export const getPicturesByVillageAndPlaceType = async function (
  village,
  placeType,
  pageStart,
  offset
) {
  try {
    const response = await fetch(
      `http://${API_URL}:${API_PORT}/api/v1/villages/place-types/pictures?village=${village}&placeType=${placeType}&pageStart=${pageStart}&offset=${offset}`,
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

export const getPicturesByPlaceName = async function (
  placeName,
  pageStart,
  offset
) {
  try {
    const response = await fetch(
      `http://${API_URL}:${API_PORT}/api/v1/place-names/pictures?placeName=${placeName}&pageStart=${pageStart}&offset=${offset}`,
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

export const postNewPicture = async function (pictureInfo, file) {
  await csrfUtil.fetchCsrf();
  myHeaders.set("X-XSRF-TOKEN", csrfUtil.getCsrfFromCookies());
  myHeaders.set("Accept", "*/*");
  myHeaders.delete("Content-Type");
  const formData = new FormData();
  formData.append(
    "pictureInfo",
    new Blob([JSON.stringify(pictureInfo)], { type: "application/json" })
  );
  formData.append("file", file);
  try {
    const response = await fetch(
      `http://${API_URL}:${API_PORT}/api/v1/pictures/${loginCache.getUserId()}`,
      {
        method: "POST",
        mode: "cors",
        credentials: "include",
        body: formData,
        headers: myHeaders,
      }
    );
    myHeaders.delete("Accept", "*/*");
    myHeaders.set("Content-Type", "application/json");
    return response;
  } catch (err) {
    return err.message;
  }
};

export const deletePicture = async function (pictureId) {
  await csrfUtil.fetchCsrf();
  myHeaders.set("X-XSRF-TOKEN", csrfUtil.getCsrfFromCookies());
  try {
    const response = await fetch(
      `http://${API_URL}:${API_PORT}/api/v1/pictures/${loginCache.getUserId()}/${pictureId}`,
      {
        method: "DELETE",
        mode: "cors",
        credentials: "include",
        headers: myHeaders,
      }
    );
    return await modelUtil.getResponse(response);
  } catch (err) {
    return err.message;
  }
};

export const commentPicture = async function (pictureId, comment) {
  await csrfUtil.fetchCsrf();
  myHeaders.set("X-XSRF-TOKEN", csrfUtil.getCsrfFromCookies());
  try {
    const response = await fetch(
      `http://${API_URL}:${API_PORT}/api/v1/pictures/comments/${loginCache.getUserId()}/${pictureId}`,
      {
        method: "POST",
        mode: "cors",
        credentials: "include",
        body: JSON.stringify(comment),
        headers: myHeaders,
      }
    );
    return await modelUtil.getResponse(response);
  } catch (err) {
    return err.message;
  }
};

export const editPictureComment = async function (commentId, editedComment) {
  await csrfUtil.fetchCsrf();
  myHeaders.set("X-XSRF-TOKEN", csrfUtil.getCsrfFromCookies());
  try {
    const response = await fetch(
      `http://${API_URL}:${API_PORT}/api/v1/pictures/comments/${loginCache.getUserId()}/${commentId}`,
      {
        method: "PUT",
        mode: "cors",
        credentials: "include",
        body: JSON.stringify(editedComment),
        headers: myHeaders,
      }
    );
    return await modelUtil.getResponse(response);
  } catch (err) {
    return err.message;
  }
};

export const getPictureComments = async function (
  pictureId,
  pageStart,
  offset
) {
  try {
    const response = await fetch(
      `http://${API_URL}:${API_PORT}/api/v1/pictures/comments/${pictureId}?pageStart=${pageStart}&offset=${offset}`,
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

export const getPictureCommentsCount = async function (pictureId) {
  try {
    const response = await fetch(
      `http://${API_URL}:${API_PORT}/api/v1/pictures/comments/count/${pictureId}`,
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

export const deleteComment = async function (commentId) {
  await csrfUtil.fetchCsrf();
  myHeaders.set("X-XSRF-TOKEN", csrfUtil.getCsrfFromCookies());
  try {
    const response = await fetch(
      `http://${API_URL}:${API_PORT}/api/v1/pictures/comments/${loginCache.getUserId()}/${commentId}`,
      {
        method: "DELETE",
        mode: "cors",
        credentials: "include",
        headers: myHeaders,
      }
    );
    return await modelUtil.getResponse(response);
  } catch (err) {
    return err.message;
  }
};

export const likePicture = async function (pictureId) {
  await csrfUtil.fetchCsrf();
  myHeaders.set("X-XSRF-TOKEN", csrfUtil.getCsrfFromCookies());
  try {
    const response = await fetch(
      `http://${API_URL}:${API_PORT}/api/v1/pictures/likes/${loginCache.getUserId()}/${pictureId}`,
      {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: myHeaders,
      }
    );
    return await modelUtil.getResponse(response);
  } catch (err) {
    return err.message;
  }
};

export const getPictureLikes = async function (pictureId, pageStart, offset) {
  try {
    const response = await fetch(
      `http://${API_URL}:${API_PORT}/api/v1/pictures/likes/${pictureId}?pageStart=${pageStart}&offset=${offset}`,
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

export const getPictureLikesCount = async function (pictureId) {
  try {
    const response = await fetch(
      `http://${API_URL}:${API_PORT}/api/v1/pictures/likes/count/${pictureId}`,
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

export const dislikePicture = async function (pictureId) {
  await csrfUtil.fetchCsrf();
  myHeaders.set("X-XSRF-TOKEN", csrfUtil.getCsrfFromCookies());
  try {
    const response = await fetch(
      `http://${API_URL}:${API_PORT}/api/v1/pictures/likes/${loginCache.getUserId()}/${pictureId}`,
      {
        method: "DELETE",
        mode: "cors",
        credentials: "include",
        headers: myHeaders,
      }
    );
    return await modelUtil.getResponse(response);
  } catch (err) {
    return err.message;
  }
};
