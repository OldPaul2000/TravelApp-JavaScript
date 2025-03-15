class LoginCache {
  #userId;
  #roles;
  #firstName;
  #lastName;
  #email;
  #birthDate;
  #registrationDate;
  #profilePictureName;
  #profilePictureBytes;
  #jwt;

  setUserId(id) {
    this.#userId = id;
  }
  setRoles(roles) {
    this.#roles = roles;
  }
  setFirstName(firstName) {
    this.#firstName = firstName;
  }
  setLastName(lastName) {
    this.#lastName = lastName;
  }
  setEmail(email) {
    this.#email = email;
  }
  setBirthDate(birthDate) {
    this.#birthDate = birthDate;
  }
  setRegistrationDate(registrationDate) {
    this.#registrationDate = registrationDate;
  }
  setProfilePictureName(profilePictureName) {
    this.#profilePictureName = profilePictureName;
  }
  setProfilePictureBytes(pictureBytes) {
    this.#profilePictureBytes = pictureBytes;
  }
  setJwt(jwt) {
    this.#jwt = jwt;
  }

  getUserId() {
    return this.#userId;
  }
  getRoles() {
    return this.#roles;
  }
  getFirstName() {
    return this.#firstName;
  }
  getLastName() {
    return this.#lastName;
  }
  getEmail() {
    return this.#email;
  }
  getBirthDate() {
    return this.#birthDate;
  }
  getRegistrationDate() {
    return this.#registrationDate;
  }
  getProfilePictureName() {
    return this.#profilePictureName;
  }
  getProfilePictureBytes() {
    return this.#profilePictureBytes;
  }
  getJwt() {
    return this.#jwt;
  }

  loginInfo() {
    return {
      userId: this.#userId,
      roles: this.#roles,
      firstName: this.#firstName,
      lastName: this.#lastName,
      email: this.#email,
      birthDate: this.#birthDate,
      registrationDate: this.#registrationDate,
      profilePictureName: this.#profilePictureName,
      profilePictureBytes: this.#profilePictureBytes,
      jwt: this.#jwt,
    };
  }

  clearData() {
    this.#userId = -1;
    this.#roles = null;
    this.#firstName = "";
    this.#lastName = "";
    this.#email = "";
    this.#birthDate = null;
    this.#registrationDate = null;
    this.#profilePictureName = "";
    this.#profilePictureBytes = null;
    this.#jwt = "";
  }
}
export const loginCache = new LoginCache();
