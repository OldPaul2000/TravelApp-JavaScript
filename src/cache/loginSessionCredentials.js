export let userId;
export let userRoles;
export let jwtToken;

export const setUserId = function (id) {
  userId = id;
};

export const setRoles = function (roles) {
  userRoles = roles;
};

export const setJwt = function (jwt) {
  jwtToken = jwt;
};
