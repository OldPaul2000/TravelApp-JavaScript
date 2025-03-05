import { loginCache } from "../../../cache/loginSessionCredentials";
import * as csrfUtil from "/src/scripts/util/csrfUtil.js";
import { myHeaders } from "/src/cache/headers.js";

export const getPictureById = async function (pictureId) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/pictures/${pictureId}`,
      {
        method: "GET",
        mode: "cors",
      }
    );
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (err) {
    return err.message;
  }
};

export const getPicturesFromUser = async function (userId) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/users/${userId}/pictures`,
      {
        method: "GET",
        mode: "cors",
      }
    );
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (err) {
    return err.message;
  }
};

export const getPicturesByCity = async function (city) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/cities/pictures?city=${city}`,
      {
        method: "GET",
        mode: "cors",
      }
    );
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (err) {
    return err.message;
  }
};

export const getPicturesByCommune = async function (commune) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/communes/pictures?commune=${commune}`,
      {
        method: "GET",
        mode: "cors",
      }
    );
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (err) {
    return err.message;
  }
};

export const getPicturesByVillage = async function (village) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/villages/pictures?village=${village}`,
      {
        method: "GET",
        mode: "cors",
      }
    );
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (err) {
    return err.message;
  }
};

export const getPicturesByPlaceName = async function (placeName) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/place-names/pictures?placeName=${placeName}`,
      {
        method: "GET",
        mode: "cors",
      }
    );
    const jsonResponse = await response.json();
    return jsonResponse;
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
      `http://localhost:8080/api/v1/pictures/${loginCache.getUserId()}`,
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
      `http://localhost:8080/api/v1/pictures/${loginCache.getUserId()}/${pictureId}`,
      {
        method: "DELETE",
        mode: "cors",
        credentials: "include",
        headers: myHeaders,
      }
    );
    if (!response.ok) {
      const jsonResponse = await response.json();
      return { status: jsonResponse.status, message: jsonResponse.message };
    }
    return response.status;
  } catch (err) {
    return err.message;
  }
};

export const commentPicture = async function (pictureId, comment) {
  await csrfUtil.fetchCsrf();
  myHeaders.set("X-XSRF-TOKEN", csrfUtil.getCsrfFromCookies());
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/pictures/comments/${loginCache.getUserId()}/${pictureId}`,
      {
        method: "POST",
        mode: "cors",
        credentials: "include",
        body: JSON.stringify(comment),
        headers: myHeaders,
      }
    );
    if (!response.ok) {
      const jsonResponse = await response.json();
      return { status: jsonResponse.status, message: jsonResponse.message };
    }
    return response.status;
  } catch (err) {
    return err.message;
  }
};

export const editPictureComment = async function (commentId, editedComment) {
  await csrfUtil.fetchCsrf();
  myHeaders.set("X-XSRF-TOKEN", csrfUtil.getCsrfFromCookies());
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/pictures/comments/${loginCache.getUserId()}/${commentId}`,
      {
        method: "PUT",
        mode: "cors",
        credentials: "include",
        body: JSON.stringify(editedComment),
        headers: myHeaders,
      }
    );
    if (!response.ok) {
      const jsonResponse = await response.json();
      return { status: jsonResponse.status, message: jsonResponse.message };
    }
    return response.status;
  } catch (err) {
    return err.message;
  }
};

export const getPictureComments = async function (pictureId) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/pictures/comments/${pictureId}`,
      {
        method: "GET",
        mode: "cors",
      }
    );
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (err) {
    return err.message;
  }
};

export const getPictureCommentsCount = async function (pictureId) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/pictures/comments/count/${pictureId}`,
      {
        method: "GET",
        mode: "cors",
      }
    );
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (err) {
    return err.message;
  }
};

export const deleteComment = async function (commentId) {
  await csrfUtil.fetchCsrf();
  myHeaders.set("X-XSRF-TOKEN", csrfUtil.getCsrfFromCookies());
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/pictures/comments/${loginCache.getUserId()}/${commentId}`,
      {
        method: "DELETE",
        mode: "cors",
        credentials: "include",
        headers: myHeaders,
      }
    );
    if (!response.ok) {
      const jsonResponse = await response.json();
      return { status: jsonResponse.status, message: jsonResponse.message };
    }
    return response.status;
  } catch (err) {
    return err.message;
  }
};

export const likePicture = async function (pictureId) {
  await csrfUtil.fetchCsrf();
  myHeaders.set("X-XSRF-TOKEN", csrfUtil.getCsrfFromCookies());
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/pictures/likes/${loginCache.getUserId()}/${pictureId}`,
      {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: myHeaders,
      }
    );
    if (!response.ok) {
      const jsonResponse = await response.json();
      return { status: jsonResponse.status, message: jsonResponse.message };
    }
    return response.status;
  } catch (err) {
    return err.message;
  }
};

export const getPictureLikes = async function (pictureId) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/pictures/likes/${pictureId}`,
      {
        method: "GET",
        mode: "cors",
      }
    );
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (err) {
    return err.message;
  }
};

/* Works */
export const getPictureLikesCount = async function (pictureId) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/pictures/likes/count/${pictureId}`,
      {
        method: "GET",
        mode: "cors",
      }
    );
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (err) {
    return err.message;
  }
};

export const dislikePicture = async function (pictureId) {
  await csrfUtil.fetchCsrf();
  myHeaders.set("X-XSRF-TOKEN", csrfUtil.getCsrfFromCookies());
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/pictures/likes/${loginCache.getUserId()}/${pictureId}`,
      {
        method: "DELETE",
        mode: "cors",
        credentials: "include",
        headers: myHeaders,
      }
    );
    if (!response.ok) {
      const jsonResponse = await response.json();
      return { status: jsonResponse.status, message: jsonResponse.message };
    }
    return response.status;
  } catch (err) {
    return err.message;
  }
};
