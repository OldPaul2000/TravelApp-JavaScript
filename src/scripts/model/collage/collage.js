import { loginCache } from "../../../cache/loginSessionCredentials";
import * as csrfUtil from "/src/scripts/util/csrfUtil.js";
import { myHeaders } from "/src/cache/headers.js";

export const postNewCollage = async function (collagePost) {
  await csrfUtil.fetchCsrf();
  myHeaders.set("X-XSRF-TOKEN", csrfUtil.getCsrfFromCookies());
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/collages/${loginCache.getUserId()}`,
      {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: myHeaders,
        body: JSON.stringify(collagePost),
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

export const deleteCollage = async function (collageId) {
  await csrfUtil.fetchCsrf();
  myHeaders.set("X-XSRF-TOKEN", csrfUtil.getCsrfFromCookies());
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/collages/${loginCache.getUserId()}/${collageId}`,
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

export const getCollage = async function (collageId) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/collages/${collageId}`,
      {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: myHeaders,
      }
    );
    const jsonResponse = await response.json();
    if (!response.ok) {
      return { status: jsonResponse.status, message: jsonResponse.message };
    }
    return jsonResponse;
  } catch (err) {
    return err.message;
  }
};

export const postCollageComment = async function (collageId, comment) {
  await csrfUtil.fetchCsrf();
  myHeaders.set("X-XSRF-TOKEN", csrfUtil.getCsrfFromCookies());
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/collages/comments/${loginCache.getUserId()}/${collageId}`,
      {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: myHeaders,
        body: JSON.stringify(comment),
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

export const editCollageComment = async function (commentId, comment) {
  await csrfUtil.fetchCsrf();
  myHeaders.set("X-XSRF-TOKEN", csrfUtil.getCsrfFromCookies());
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/collages/comments/${loginCache.getUserId()}/${commentId}`,
      {
        method: "PUT",
        mode: "cors",
        credentials: "include",
        headers: myHeaders,
        body: JSON.stringify(comment),
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

export const deleteCollageComment = async function (commentId) {
  await csrfUtil.fetchCsrf();
  myHeaders.set("X-XSRF-TOKEN", csrfUtil.getCsrfFromCookies());
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/collages/comments/${loginCache.getUserId()}/${commentId}`,
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

export const getCollageComments = async function (collageId) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/collages/comments/${collageId}`,
      {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: myHeaders,
      }
    );
    const jsonResponse = await response.json();
    if (!response.ok) {
      return { status: jsonResponse.status, message: jsonResponse.message };
    }
    return jsonResponse;
  } catch (err) {
    return err.message;
  }
};

export const getCollageCommentsCount = async function (collageId) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/collages/comments/count/${collageId}`,
      {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: myHeaders,
      }
    );
    const jsonResponse = await response.json();
    if (!response.ok) {
      return { status: jsonResponse.status, message: jsonResponse.message };
    }
    return jsonResponse;
  } catch (err) {
    return err.message;
  }
};

export const likeCollage = async function (collageId) {
  await csrfUtil.fetchCsrf();
  myHeaders.set("X-XSRF-TOKEN", csrfUtil.getCsrfFromCookies());
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/collages/likes/${loginCache.getUserId()}/${collageId}`,
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

export const dislikeCollage = async function (collageId) {
  await csrfUtil.fetchCsrf();
  myHeaders.set("X-XSRF-TOKEN", csrfUtil.getCsrfFromCookies());
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/collages/likes/${loginCache.getUserId()}/${collageId}`,
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

export const getCollageLikes = async function (collageId) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/collages/likes/${collageId}`,
      {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: myHeaders,
      }
    );
    const jsonResponse = await response.json();
    if (!response.ok) {
      return { status: jsonResponse.status, message: jsonResponse.message };
    }
    return jsonResponse;
  } catch (err) {
    return err.message;
  }
};

export const getCollageLikesCount = async function (collageId) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/collages/likes/count/${collageId}`,
      {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: myHeaders,
      }
    );
    const jsonResponse = await response.json();
    if (!response.ok) {
      return { status: jsonResponse.status, message: jsonResponse.message };
    }
    return jsonResponse;
  } catch (err) {
    return err.message;
  }
};
