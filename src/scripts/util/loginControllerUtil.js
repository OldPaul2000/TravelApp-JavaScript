export const isUsernameNotFoundMessage = function (message) {
  const matchValue = message.match("Username not found:");
  if (matchValue !== null) {
    return true;
  }
  return false;
};

export const isInvalidPasswordMessage = function (message) {
  const matchValue = message.match("Invalid password!");
  if (matchValue !== null) {
    return true;
  }
  return false;
};

export const emailFormatIsValid = function (email) {};
