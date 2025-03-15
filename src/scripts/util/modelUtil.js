export const getResponse = async function (response, customMessage = "") {
  if (!response.ok) {
    const jsonResponse = await response.json();
    return {
      status: jsonResponse.status,
      message: jsonResponse.message,
      timestamp: jsonResponse.timestamp,
    };
  }
  customMessage = customMessage === "" ? response.message : customMessage;
  return { status: response.status, message: customMessage };
};

export const getJsonResponse = async function (response) {
  const jsonResponse = await response.json();
  if (!response.ok) {
    return {
      status: jsonResponse.status,
      message: jsonResponse.message,
      timestamp: jsonResponse.timestamp,
    };
  }
  return jsonResponse;
};
