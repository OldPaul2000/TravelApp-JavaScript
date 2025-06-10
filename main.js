var $hnA9p$leaflet = require("leaflet");
require("leaflet/src/control/Control.Zoom");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}


class $926d97260bd64691$var$Maps {
    #mapContainer = document.querySelector(".map");
    #map;
    renderMap() {
        this.#map = (0, ($parcel$interopDefault($hnA9p$leaflet))).map(this.#mapContainer, {
            zoomControl: false
        }).setView([
            46.194693,
            21.303485
        ], 15);
        (0, ($parcel$interopDefault($hnA9p$leaflet))).tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(this.#map);
    }
}
const $926d97260bd64691$export$871de8747c9eaa88 = new $926d97260bd64691$var$Maps();


class $9633ccb90f21f6fe$var$LoginCache {
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
            jwt: this.#jwt
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
const $9633ccb90f21f6fe$export$50ccdb6194b9cae = new $9633ccb90f21f6fe$var$LoginCache();


const $9ca267e83c32477d$export$ae84d5b11df39dd7 = function() {
    const cookies = document.cookie;
    if (cookies.length > 0) return document.cookie.split("; ").filter((val)=>{
        if (val.match(/XSRF.+/) !== null) return "Matches";
    })[0].slice(11);
};
const $9ca267e83c32477d$export$31d3b41ce7c0630a = async function() {
    if (document.cookie.match(/XSRF.+/) === null) try {
        const response = await fetch("http://localhost:8080/api/v1/csrf", {
            method: "GET",
            mode: "cors",
            credentials: "include",
            headers: {
                Authorization: (0, $9633ccb90f21f6fe$export$50ccdb6194b9cae).getJwt()
            }
        });
        return response;
    } catch (err) {
        return err.message;
    }
};


const $193eb638393b2440$export$fd3c80c00b3490e = async function(response, customMessage = "") {
    if (!response.ok) {
        const jsonResponse = await response.json();
        return {
            status: jsonResponse.status,
            message: jsonResponse.message,
            timestamp: jsonResponse.timestamp
        };
    }
    customMessage = customMessage === "" ? response.message : customMessage;
    return {
        status: response.status,
        message: customMessage
    };
};
const $193eb638393b2440$export$7a343b3497a897a = async function(response) {
    const jsonResponse = await response.json();
    if (!response.ok) return {
        status: jsonResponse.status,
        message: jsonResponse.message,
        timestamp: jsonResponse.timestamp
    };
    return jsonResponse;
};


const $c753975ef5a4fdfb$export$923ea8233b386e99 = "192.168.0.103";
const $c753975ef5a4fdfb$export$1f20cd23d4912bd9 = "8080";


let $abe576d488ba8d5a$export$70dd6790042097ea = new Headers();



const $4ae425838adc5a73$export$84e4772154052003 = async function(id) {
    try {
        const response = await fetch(`http://${(0, $c753975ef5a4fdfb$export$923ea8233b386e99)}:${(0, $c753975ef5a4fdfb$export$1f20cd23d4912bd9)}/api/v1/users/${id}`, {
            method: "GET",
            mode: "cors"
        });
        return await response.json();
    } catch (err) {
        return err.message;
    }
};
const $4ae425838adc5a73$export$722b43f61d29139e = async function(userId, startPage, offset) {
    try {
        const response = await fetch(`http://${(0, $c753975ef5a4fdfb$export$923ea8233b386e99)}:${(0, $c753975ef5a4fdfb$export$1f20cd23d4912bd9)}/api/v1/users/collages/${userId}?startPage=${startPage}&offset=${offset}`, {
            method: "GET",
            mode: "cors",
            credentials: "include",
            headers: (0, $abe576d488ba8d5a$export$70dd6790042097ea)
        });
        return await $193eb638393b2440$export$7a343b3497a897a(response);
    } catch (err) {
        return err.message;
    }
};
const $4ae425838adc5a73$export$596d806903d1f59e = async function(credentials) {
    (0, $abe576d488ba8d5a$export$70dd6790042097ea).set("Content-Type", "application/json");
    try {
        const response = await fetch(`http://${(0, $c753975ef5a4fdfb$export$923ea8233b386e99)}:${(0, $c753975ef5a4fdfb$export$1f20cd23d4912bd9)}/api/v1/users/login`, {
            method: "POST",
            mode: "cors",
            credentials: "include",
            body: JSON.stringify(credentials),
            headers: (0, $abe576d488ba8d5a$export$70dd6790042097ea)
        });
        const jsonResponse = await response.json();
        if (!response.ok) return {
            status: jsonResponse.status,
            message: jsonResponse.message
        };
        else {
            (0, $9633ccb90f21f6fe$export$50ccdb6194b9cae).setUserId(jsonResponse.userId);
            (0, $9633ccb90f21f6fe$export$50ccdb6194b9cae).setRoles(jsonResponse.roles);
            (0, $9633ccb90f21f6fe$export$50ccdb6194b9cae).setFirstName(jsonResponse.firstName);
            (0, $9633ccb90f21f6fe$export$50ccdb6194b9cae).setLastName(jsonResponse.lastName);
            (0, $9633ccb90f21f6fe$export$50ccdb6194b9cae).setEmail(jsonResponse.email);
            (0, $9633ccb90f21f6fe$export$50ccdb6194b9cae).setBirthDate(jsonResponse.birthDate);
            (0, $9633ccb90f21f6fe$export$50ccdb6194b9cae).setRegistrationDate(jsonResponse.registrationDate);
            (0, $9633ccb90f21f6fe$export$50ccdb6194b9cae).setProfilePictureName(jsonResponse.profilePictureName);
            (0, $9633ccb90f21f6fe$export$50ccdb6194b9cae).setProfilePictureBytes(jsonResponse.profilePictureBytes);
            (0, $9633ccb90f21f6fe$export$50ccdb6194b9cae).setJwt(jsonResponse.jwtToken);
            (0, $abe576d488ba8d5a$export$70dd6790042097ea).set("Authorization", (0, $9633ccb90f21f6fe$export$50ccdb6194b9cae).getJwt());
            (0, $abe576d488ba8d5a$export$70dd6790042097ea).set("X-XSRF-TOKEN", $9ca267e83c32477d$export$ae84d5b11df39dd7());
            return {
                status: response.status,
                message: "Logged in succesfully"
            };
        }
    } catch (err) {
        return err.message;
    }
};
const $4ae425838adc5a73$export$6503ec6e8aabbaf = async function(registrationInfo) {
    (0, $abe576d488ba8d5a$export$70dd6790042097ea).set("Content-Type", "application/json");
    try {
        const response = await fetch(`http://${(0, $c753975ef5a4fdfb$export$923ea8233b386e99)}:${(0, $c753975ef5a4fdfb$export$1f20cd23d4912bd9)}/api/v1/users/register`, {
            method: "POST",
            mode: "cors",
            credentials: "include",
            body: JSON.stringify(registrationInfo),
            headers: {
                "Content-Type": "application/json"
            }
        });
        return await $193eb638393b2440$export$fd3c80c00b3490e(response, "Registered succesfully");
    } catch (err) {
        return err.message;
    }
};
const $4ae425838adc5a73$export$a0973bcfe11b05c9 = async function() {
    await $9ca267e83c32477d$export$31d3b41ce7c0630a();
    (0, $abe576d488ba8d5a$export$70dd6790042097ea).set("X-XSRF-TOKEN", $9ca267e83c32477d$export$ae84d5b11df39dd7());
    try {
        const response = await fetch(`http://${(0, $c753975ef5a4fdfb$export$923ea8233b386e99)}:${(0, $c753975ef5a4fdfb$export$1f20cd23d4912bd9)}/api/v1/users/logout`, {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: (0, $abe576d488ba8d5a$export$70dd6790042097ea)
        });
        if (!response.ok) return await response.json();
        $4ae425838adc5a73$var$clearHeaders();
        (0, $9633ccb90f21f6fe$export$50ccdb6194b9cae).clearData();
        return {
            status: response.status,
            message: "Logged out succesfully"
        };
    } catch (err) {
        return err.message;
    }
};
const $4ae425838adc5a73$var$clearHeaders = function() {
    (0, $abe576d488ba8d5a$export$70dd6790042097ea).delete("Authorization");
    (0, $abe576d488ba8d5a$export$70dd6790042097ea).delete("X-XSRF-TOKEN");
};
const $4ae425838adc5a73$export$65cf3f07a8e21a2c = async function(file) {
    await $9ca267e83c32477d$export$31d3b41ce7c0630a();
    (0, $abe576d488ba8d5a$export$70dd6790042097ea).set("X-XSRF-TOKEN", $9ca267e83c32477d$export$ae84d5b11df39dd7());
    (0, $abe576d488ba8d5a$export$70dd6790042097ea).set("Accept", "*/*");
    (0, $abe576d488ba8d5a$export$70dd6790042097ea).delete("Content-Type");
    const formData = new FormData();
    formData.append("file", file);
    try {
        const response = await fetch(`http://${(0, $c753975ef5a4fdfb$export$923ea8233b386e99)}:${(0, $c753975ef5a4fdfb$export$1f20cd23d4912bd9)}/api/v1/users/profile-pictures/${(0, $9633ccb90f21f6fe$export$50ccdb6194b9cae).getUserId()}`, {
            method: "PUT",
            mode: "cors",
            credentials: "include",
            body: formData,
            headers: (0, $abe576d488ba8d5a$export$70dd6790042097ea)
        });
        (0, $abe576d488ba8d5a$export$70dd6790042097ea).delete("Accept");
        (0, $abe576d488ba8d5a$export$70dd6790042097ea).set("Content-Type", "application/json");
        return await $193eb638393b2440$export$fd3c80c00b3490e(response, "Picture uploaded succesfully");
    } catch (err) {
        return err.message;
    }
};
const $4ae425838adc5a73$export$c305be0ec5c00f16 = async function(newUserInfo) {
    await $9ca267e83c32477d$export$31d3b41ce7c0630a();
    (0, $abe576d488ba8d5a$export$70dd6790042097ea).set("X-XSRF-TOKEN", $9ca267e83c32477d$export$ae84d5b11df39dd7());
    try {
        const response = await fetch(`http://${(0, $c753975ef5a4fdfb$export$923ea8233b386e99)}:${(0, $c753975ef5a4fdfb$export$1f20cd23d4912bd9)}/api/v1/users/user-info/${(0, $9633ccb90f21f6fe$export$50ccdb6194b9cae).getUserId()}`, {
            method: "PUT",
            mode: "cors",
            credentials: "include",
            body: JSON.stringify(newUserInfo),
            headers: (0, $abe576d488ba8d5a$export$70dd6790042097ea)
        });
        return await $193eb638393b2440$export$fd3c80c00b3490e(response, "User info updated succesfully");
    } catch (err) {
        return err.message;
    }
};
const $4ae425838adc5a73$export$45abfc3976589d02 = async function(deleteTouristicPictures) {
    await $9ca267e83c32477d$export$31d3b41ce7c0630a();
    (0, $abe576d488ba8d5a$export$70dd6790042097ea).set("X-XSRF-TOKEN", $9ca267e83c32477d$export$ae84d5b11df39dd7());
    try {
        const response = await fetch(`http://${(0, $c753975ef5a4fdfb$export$923ea8233b386e99)}:${(0, $c753975ef5a4fdfb$export$1f20cd23d4912bd9)}/api/v1/users/${(0, $9633ccb90f21f6fe$export$50ccdb6194b9cae).getUserId()}?deletePictures=${deleteTouristicPictures}`, {
            method: "DELETE",
            mode: "cors",
            credentials: "include",
            headers: (0, $abe576d488ba8d5a$export$70dd6790042097ea)
        });
        return await $193eb638393b2440$export$fd3c80c00b3490e($4ae425838adc5a73$export$6503ec6e8aabbaf, "Account deleted succesfully");
    } catch (err) {
        return err.message;
    }
};


const $f809d426beefc95d$export$2fa187e846a241c4 = function(element) {
    return document.querySelector(element);
};


class $01661bfb904286b0$var$LoginView {
    // Used instead of blank space in order to keep margin applying for <p>
    #NON_BREAKING_SPACE = "\u00A0";
    #BLANK = "Blank";
    #INVALID_USERNAME = "Invalid username";
    #INVALID_PASSWORD = "Invalid password";
    #loginContainer = (0, $f809d426beefc95d$export$2fa187e846a241c4)(".login-container");
    #loginFields = (0, $f809d426beefc95d$export$2fa187e846a241c4)(".login-fields");
    #usernameWarn = (0, $f809d426beefc95d$export$2fa187e846a241c4)(".login-username-warn");
    #passwordWarn = (0, $f809d426beefc95d$export$2fa187e846a241c4)(".login-password-warn");
    #usernameInput = (0, $f809d426beefc95d$export$2fa187e846a241c4)(".login-username");
    #passwordInput = (0, $f809d426beefc95d$export$2fa187e846a241c4)(".login-password");
    #loginBtn = (0, $f809d426beefc95d$export$2fa187e846a241c4)(".login-btn");
    removeUserWarn() {
        if (this.#usernameInput.value.length > 0) this.#usernameWarn.textContent = this.#NON_BREAKING_SPACE;
    }
    removePasswordWarn() {
        if (this.#passwordInput.value.length > 0) this.#passwordWarn.textContent = this.#NON_BREAKING_SPACE;
    }
    setEmptyUsernameWarn() {
        if (this.#usernameInput.value.length === 0) {
            this.#usernameWarn.textContent = this.#BLANK;
            return true;
        } else {
            this.#usernameWarn.textContent = this.#NON_BREAKING_SPACE;
            return false;
        }
    }
    setEmptyPasswordWarn() {
        if (this.#passwordInput.value.length === 0) {
            this.#passwordWarn.textContent = this.#BLANK;
            return true;
        } else {
            this.#passwordWarn.textContent = this.#NON_BREAKING_SPACE;
            return false;
        }
    }
    setInvalidUsernameWarn() {
        this.#usernameWarn.textContent = this.#INVALID_USERNAME;
    }
    setInvalidPasswordWarn() {
        this.#passwordWarn.textContent = this.#INVALID_PASSWORD;
    }
    #handleUsernameInput() {
        this.#usernameInput.addEventListener("input", ()=>{
            this.removeUserWarn();
        });
    }
    #handlePasswordInput() {
        this.#passwordInput.addEventListener("input", ()=>{
            this.removePasswordWarn();
        });
    }
    handleLogin(handler) {
        this.#loginBtn.addEventListener("click", handler);
        this.#loginFields.addEventListener("keydown", handler);
    }
    displayLoginView(display) {
        if (display) this.#loginContainer.classList.remove("disp-n");
        else this.#loginContainer.classList.add("disp-n");
    }
    initHandlers() {
        this.#handleUsernameInput();
        this.#handlePasswordInput();
    }
    getLoginCredentials() {
        return {
            username: this.#usernameInput.value,
            password: this.#passwordInput.value
        };
    }
}
var $01661bfb904286b0$export$2e2bcd8739ae039 = new $01661bfb904286b0$var$LoginView();



class $13183c674aedf1ed$var$MainPageView {
    #mainPageContainer = (0, $f809d426beefc95d$export$2fa187e846a241c4)(".main-page-container");
    displayMainPage(display) {
        if (display) this.#mainPageContainer.classList.remove("disp-n");
        else this.#mainPageContainer.classList.add("disp-n");
    }
}
var $13183c674aedf1ed$export$2e2bcd8739ae039 = new $13183c674aedf1ed$var$MainPageView();



const $96229e75522791b3$export$7001abfcf0584d94 = function(message) {
    const matchValue = message.match("Username not found:");
    if (matchValue !== null) return true;
    return false;
};
const $96229e75522791b3$export$e96d666548aa1a0f = function(message) {
    const matchValue = message.match("Invalid password!");
    if (matchValue !== null) return true;
    return false;
};
const $96229e75522791b3$export$9da875a24b0b2b28 = function(email) {};


const $019d5de0aed9d37f$var$loginHandler = async function() {
    const userEmpty = (0, $01661bfb904286b0$export$2e2bcd8739ae039).setEmptyUsernameWarn();
    const passwordEmpty = (0, $01661bfb904286b0$export$2e2bcd8739ae039).setEmptyPasswordWarn();
    if (!userEmpty && !passwordEmpty) {
        const response = await (0, $4ae425838adc5a73$export$596d806903d1f59e)((0, $01661bfb904286b0$export$2e2bcd8739ae039).getLoginCredentials());
        if ($96229e75522791b3$export$7001abfcf0584d94(response.message)) (0, $01661bfb904286b0$export$2e2bcd8739ae039).setInvalidUsernameWarn();
        if ($96229e75522791b3$export$e96d666548aa1a0f(response.message)) (0, $01661bfb904286b0$export$2e2bcd8739ae039).setInvalidPasswordWarn();
        if (response.status === 200) {
            (0, $01661bfb904286b0$export$2e2bcd8739ae039).displayLoginView(false);
            (0, $13183c674aedf1ed$export$2e2bcd8739ae039).displayMainPage(true);
        }
    }
    console.log("Login");
};
const $019d5de0aed9d37f$export$81ea6467782f4df = function() {
    (0, $01661bfb904286b0$export$2e2bcd8739ae039).initHandlers();
    (0, $01661bfb904286b0$export$2e2bcd8739ae039).handleLogin((e)=>{
        if (e.key === "Enter" || e.type === "click") $019d5de0aed9d37f$var$loginHandler();
    });
};




class $a8765a910c4e806a$var$RegisterView {
    #NON_BREAKING_SPACE = "\u00A0";
    #BLANK = "Blank";
    #ALREADY_EXISTING_USERNAME = "Username already exists";
    #PASSWORDS_NOT_MATCHING = "Passwords don't match";
    #PASSWORD_TOO_SHORT = "At least 8 characters";
    #INVALID_EMAIL_FORMAT = "Invalid email format";
    #registerContainer = (0, $f809d426beefc95d$export$2fa187e846a241c4)(".register-container");
    #usernameWarn = (0, $f809d426beefc95d$export$2fa187e846a241c4)(".register-username-warn");
    #passwordWarn = (0, $f809d426beefc95d$export$2fa187e846a241c4)(".register-password-warn");
    #repeatPasswordWarn = (0, $f809d426beefc95d$export$2fa187e846a241c4)(".repeat-password-warn");
    #firstNameWarn = (0, $f809d426beefc95d$export$2fa187e846a241c4)(".first-name-warn");
    #lastNameWarn = (0, $f809d426beefc95d$export$2fa187e846a241c4)(".last-name-warn");
    #emailWarn = (0, $f809d426beefc95d$export$2fa187e846a241c4)(".email-warn");
    #birthDateWarn = (0, $f809d426beefc95d$export$2fa187e846a241c4)(".birth-date-warn");
    #usernameInput = (0, $f809d426beefc95d$export$2fa187e846a241c4)(".register-username");
    #passwordInput = (0, $f809d426beefc95d$export$2fa187e846a241c4)(".register-password");
    #passwordRepeatInput = (0, $f809d426beefc95d$export$2fa187e846a241c4)(".password-repeat");
    #firstNameInput = (0, $f809d426beefc95d$export$2fa187e846a241c4)(".first-name");
    #lastNameInput = (0, $f809d426beefc95d$export$2fa187e846a241c4)(".last-name");
    #emailInput = (0, $f809d426beefc95d$export$2fa187e846a241c4)(".email");
    #birthDateInput = (0, $f809d426beefc95d$export$2fa187e846a241c4)(".birth-date");
    #registerBtn = (0, $f809d426beefc95d$export$2fa187e846a241c4)(".register-btn");
    usernameIsBlank = true;
    passwordIsBlank = true;
    passwordsMatch = false;
    firstNameIsBlank = true;
    lastNameIsBlank = true;
    emailIsBlank = true;
    emailFormatIsCorrect = false;
    birthDateIsBlank = true;
    #addValidFieldStyle(element) {
        element.classList.add("valid-field");
        element.classList.add("valid-field:focus");
    }
    #removeValidFieldStyle(element) {
        element.classList.remove("valid-field");
        element.classList.remove("valid-field:focus");
    }
    setEmptyUsernameWarn() {
        if (this.#usernameInput.value.length === 0) {
            this.#usernameWarn.textContent = this.#BLANK;
            this.#removeValidFieldStyle(this.#usernameInput);
            this.usernameIsBlank = true;
        } else {
            this.#usernameWarn.textContent = this.#NON_BREAKING_SPACE;
            this.#addValidFieldStyle(this.#usernameInput);
            this.usernameIsBlank = false;
        }
    }
    setAlreadyExistingUsernameWarn() {
        this.#usernameWarn.textContent = this.#ALREADY_EXISTING_USERNAME;
        this.usernameIsBlank = true;
    }
    setEmptyPasswordWarn() {
        if (this.#passwordInput.value.length === 0) {
            this.#passwordWarn.textContent = this.#BLANK;
            this.#removeValidFieldStyle(this.#passwordInput);
            this.passwordIsBlank = true;
        } else {
            this.#passwordWarn.textContent = this.#NON_BREAKING_SPACE;
            this.#addValidFieldStyle(this.#passwordInput);
            this.passwordIsBlank = false;
        }
    }
    setPasswordsNotMatchWarn() {
        if (this.#passwordInput.value === this.#passwordRepeatInput.value) {
            this.#passwordWarn.textContent = this.#NON_BREAKING_SPACE;
            this.#repeatPasswordWarn.textContent = this.#NON_BREAKING_SPACE;
            this.#addValidFieldStyle(this.#passwordInput);
            this.#addValidFieldStyle(this.#passwordRepeatInput);
            this.passwordsMatch = true;
        }
        if (this.#passwordInput.value !== this.#passwordRepeatInput.value) {
            this.#passwordWarn.textContent = this.#PASSWORDS_NOT_MATCHING;
            this.#repeatPasswordWarn.textContent = this.#PASSWORDS_NOT_MATCHING;
            this.#removeValidFieldStyle(this.#passwordInput);
            this.#removeValidFieldStyle(this.#passwordRepeatInput);
            this.passwordsMatch = false;
        }
        if (this.#passwordInput.value.length === 0 && this.#passwordRepeatInput.value.length === 0) {
            this.#passwordWarn.textContent = this.#BLANK;
            this.#repeatPasswordWarn.textContent = this.#BLANK;
            this.#removeValidFieldStyle(this.#passwordInput);
            this.#removeValidFieldStyle(this.#passwordRepeatInput);
            this.passwordsMatch = false;
        }
    }
    setPasswordTooShortWarn() {
        if (this.#passwordInput.value.length < 8) {
            this.#removeValidFieldStyle(this.#passwordInput);
            this.#passwordWarn.textContent = this.#PASSWORD_TOO_SHORT;
        }
        if (this.#passwordInput.value.length === 0) {
            this.#passwordWarn.textContent = this.#BLANK;
            this.#removeValidFieldStyle(this.#passwordInput);
            this.passwordIsBlank = true;
        }
    }
    setEmptyFirstNameWarn() {
        if (this.#firstNameInput.value.length === 0) {
            this.#firstNameWarn.textContent = this.#BLANK;
            this.#removeValidFieldStyle(this.#firstNameInput);
            this.firstNameIsBlank = true;
        } else {
            this.#firstNameWarn.textContent = this.#NON_BREAKING_SPACE;
            this.#addValidFieldStyle(this.#firstNameInput);
            this.firstNameIsBlank = false;
        }
    }
    setEmptyLastNameWarn() {
        if (this.#lastNameInput.value.length === 0) {
            this.#lastNameWarn.textContent = this.#BLANK;
            this.#removeValidFieldStyle(this.#lastNameInput);
            this.lastNameIsBlank = true;
        } else {
            this.#lastNameWarn.textContent = this.#NON_BREAKING_SPACE;
            this.#addValidFieldStyle(this.#lastNameInput);
            this.lastNameIsBlank = false;
        }
    }
    setEmptyEmailWarn() {
        if (this.#emailInput.value.length === 0) {
            this.#emailWarn.textContent = this.#BLANK;
            this.#removeValidFieldStyle(this.#lastNameInput);
            this.emailIsBlank = true;
            this.emailFormatIsCorrect = false;
        } else {
            this.#emailWarn.textContent = this.#NON_BREAKING_SPACE;
            this.#addValidFieldStyle(this.#lastNameInput);
            this.emailIsBlank = false;
        }
    }
    setInvalidEmailWarn() {
        const match = this.#emailInput.value.match(/[0-9a-zA-z_]+@[0-9a-zA-z_]+\.[a-z]+/);
        this.setEmptyEmailWarn();
        if (!this.emailIsBlank) {
            if (match) {
                this.#emailWarn.textContent = this.#NON_BREAKING_SPACE;
                this.#addValidFieldStyle(this.#emailInput);
                this.emailFormatIsCorrect = true;
                this.emailIsBlank = false;
            } else {
                this.#emailWarn.textContent = this.#INVALID_EMAIL_FORMAT;
                this.#removeValidFieldStyle(this.#emailInput);
                this.emailFormatIsCorrect = false;
            }
        }
    }
    setEmptyBirthDateWarn() {
        const date = this.#birthDateInput.value;
        const year = date.slice(0, 4);
        if (year.startsWith("1") || year.startsWith("2")) {
            this.#birthDateWarn.textContent = this.#NON_BREAKING_SPACE;
            this.#addValidFieldStyle(this.#birthDateInput);
            this.birthDateIsBlank = false;
        } else {
            this.#birthDateWarn.textContent = this.#BLANK;
            this.#removeValidFieldStyle(this.#birthDateInput);
            this.birthDateIsBlank = true;
        }
    }
    handleEmptyUsername() {
        this.#usernameInput.addEventListener("input", ()=>{
            this.setEmptyUsernameWarn();
        });
    }
    handleInvalidPassword() {
        this.#passwordInput.addEventListener("input", ()=>{
            this.setEmptyPasswordWarn();
            this.setPasswordsNotMatchWarn();
            this.setPasswordTooShortWarn();
        });
        this.#passwordRepeatInput.addEventListener("input", ()=>{
            this.setEmptyPasswordWarn();
            this.setPasswordsNotMatchWarn();
        });
    }
    handleEmptyFirstName() {
        this.#firstNameInput.addEventListener("input", ()=>{
            this.setEmptyFirstNameWarn();
        });
    }
    handleEmptyLastName() {
        this.#lastNameInput.addEventListener("input", ()=>{
            this.setEmptyLastNameWarn();
        });
    }
    handleInvalidEmail() {
        this.#emailInput.addEventListener("input", ()=>{
            this.setInvalidEmailWarn();
        });
    }
    handleEmptyBirthDate() {
        this.#birthDateInput.addEventListener("input", ()=>{
            this.setEmptyBirthDateWarn();
        });
    }
    fieldsAreValid() {
        return !this.usernameIsBlank && !this.passwordIsBlank && this.passwordsMatch && !this.firstNameIsBlank && !this.lastNameIsBlank && !this.emailIsBlank && this.emailFormatIsCorrect && !this.birthDateIsBlank;
    }
    resetFieldsValues() {
        this.#usernameInput.value = "";
        this.#passwordInput.value = "";
        this.#passwordRepeatInput.value = "";
        this.#firstNameInput.value = "";
        this.#lastNameInput.value = "";
        this.#emailInput.value = "";
        this.#birthDateInput.value = "";
    }
    resetFieldsValidityValues() {
        this.usernameIsBlank = true;
        this.passwordIsBlank = true;
        this.passwordsMatch = false;
        this.firstNameIsBlank = true;
        this.lastNameIsBlank = true;
        this.emailIsBlank = true;
        this.emailFormatIsCorrect = false;
        this.birthDateIsBlank = true;
    }
    handleRegister(handler) {
        this.#registerBtn.addEventListener("click", handler);
    }
    getInputCredentials() {
        return {
            username: this.#usernameInput.value,
            password: this.#passwordInput.value,
            roles: [
                "USER"
            ],
            userInfo: {
                firstName: this.#firstNameInput.value,
                lastName: this.#lastNameInput.value,
                email: this.#emailInput.value,
                birthDate: new Date(this.#birthDateInput.value)
            }
        };
    }
    displayRegisterView(display) {
        if (display) this.#registerContainer.classList.remove("disp-n");
        else this.#registerContainer.classList.add("disp-n");
    }
    initHandlers() {
        this.handleEmptyUsername();
        this.handleInvalidPassword();
        this.handleEmptyFirstName();
        this.handleEmptyLastName();
        this.handleInvalidEmail();
        this.handleEmptyBirthDate();
    }
}
var $a8765a910c4e806a$export$2e2bcd8739ae039 = new $a8765a910c4e806a$var$RegisterView();








const $eef46e2d33235eb6$export$d544908989d471e1 = async function(pictureId) {
    try {
        const response = await fetch(`http://${API_URL}:${API_PORT}/api/v1/pictures/${pictureId}`, {
            method: "GET",
            mode: "cors"
        });
        return await response.json();
    } catch (err) {
        return err.message;
    }
};
const $eef46e2d33235eb6$export$b4ebf6c90209897e = async function(userId, pageStart, offset) {
    try {
        const response = await fetch(`http://${API_URL}:${API_PORT}/api/v1/users/${userId}/pictures?pageStart=${pageStart}&offset=${offset}`, {
            method: "GET",
            mode: "cors"
        });
        return await response.json();
    } catch (err) {
        return err.message;
    }
};
const $eef46e2d33235eb6$export$5a3de95bd96b4be4 = async function(userId, placeType, pageStart, offset) {
    try {
        const response = await fetch(`http://${API_URL}:${API_PORT}/api/v1/users/${userId}/place-types/pictures?placeType=${placeType}&pageStart=${pageStart}&offset=${offset}`, {
            method: "GET",
            mode: "cors"
        });
        return await response.json();
    } catch (err) {
        return err.message;
    }
};
const $eef46e2d33235eb6$export$a94c9f36f1284cc = async function(city, pageStart, offset) {
    try {
        const response = await fetch(`http://${API_URL}:${API_PORT}/api/v1/cities/pictures?city=${city}&pageStart=${pageStart}&offset=${offset}`, {
            method: "GET",
            mode: "cors"
        });
        return await response.json();
    } catch (err) {
        return err.message;
    }
};
const $eef46e2d33235eb6$export$7ededf6ee4ca2ee5 = async function(city, placeType, pageStart, offset) {
    try {
        const response = await fetch(`http://${API_URL}:${API_PORT}/api/v1/cities/place-types/pictures?city=${city}&placeType=${placeType}&pageStart=${pageStart}&offset=${offset}`, {
            method: "GET",
            mode: "cors"
        });
        return await response.json();
    } catch (err) {
        return err.message;
    }
};
const $eef46e2d33235eb6$export$9525572eec76364a = async function(commune, pageStart, offset) {
    try {
        const response = await fetch(`http://${API_URL}:${API_PORT}/api/v1/communes/pictures?commune=${commune}&pageStart=${pageStart}&offset=${offset}`, {
            method: "GET",
            mode: "cors"
        });
        return await response.json();
    } catch (err) {
        return err.message;
    }
};
const $eef46e2d33235eb6$export$cb0e14d645039bc5 = async function(commune, placeType, pageStart, offset) {
    try {
        const response = await fetch(`http://${API_URL}:${API_PORT}/api/v1/communes/place-types/pictures?commune=${commune}&placeType=${placeType}&pageStart=${pageStart}&offset=${offset}`, {
            method: "GET",
            mode: "cors"
        });
        return await response.json();
    } catch (err) {
        return err.message;
    }
};
const $eef46e2d33235eb6$export$9b36d94c7f49bc54 = async function(village, pageStart, offset) {
    try {
        const response = await fetch(`http://${API_URL}:${API_PORT}/api/v1/villages/pictures?village=${village}&pageStart=${pageStart}&offset=${offset}`, {
            method: "GET",
            mode: "cors"
        });
        return await response.json();
    } catch (err) {
        return err.message;
    }
};
const $eef46e2d33235eb6$export$20daed8b38ba86da = async function(village, placeType, pageStart, offset) {
    try {
        const response = await fetch(`http://${API_URL}:${API_PORT}/api/v1/villages/place-types/pictures?village=${village}&placeType=${placeType}&pageStart=${pageStart}&offset=${offset}`, {
            method: "GET",
            mode: "cors"
        });
        return await response.json();
    } catch (err) {
        return err.message;
    }
};
const $eef46e2d33235eb6$export$23994a2c03565db4 = async function(placeName, pageStart, offset) {
    try {
        const response = await fetch(`http://${API_URL}:${API_PORT}/api/v1/place-names/pictures?placeName=${placeName}&pageStart=${pageStart}&offset=${offset}`, {
            method: "GET",
            mode: "cors"
        });
        return await response.json();
    } catch (err) {
        return err.message;
    }
};
const $eef46e2d33235eb6$export$fb8215fc94321214 = async function(pictureInfo, file) {
    await $9ca267e83c32477d$export$31d3b41ce7c0630a();
    (0, $abe576d488ba8d5a$export$70dd6790042097ea).set("X-XSRF-TOKEN", $9ca267e83c32477d$export$ae84d5b11df39dd7());
    (0, $abe576d488ba8d5a$export$70dd6790042097ea).set("Accept", "*/*");
    (0, $abe576d488ba8d5a$export$70dd6790042097ea).delete("Content-Type");
    const formData = new FormData();
    formData.append("pictureInfo", new Blob([
        JSON.stringify(pictureInfo)
    ], {
        type: "application/json"
    }));
    formData.append("file", file);
    try {
        const response = await fetch(`http://${API_URL}:${API_PORT}/api/v1/pictures/${(0, $9633ccb90f21f6fe$export$50ccdb6194b9cae).getUserId()}`, {
            method: "POST",
            mode: "cors",
            credentials: "include",
            body: formData,
            headers: (0, $abe576d488ba8d5a$export$70dd6790042097ea)
        });
        (0, $abe576d488ba8d5a$export$70dd6790042097ea).delete("Accept", "*/*");
        (0, $abe576d488ba8d5a$export$70dd6790042097ea).set("Content-Type", "application/json");
        return response;
    } catch (err) {
        return err.message;
    }
};
const $eef46e2d33235eb6$export$5360c639b27a4f05 = async function(pictureId) {
    await $9ca267e83c32477d$export$31d3b41ce7c0630a();
    (0, $abe576d488ba8d5a$export$70dd6790042097ea).set("X-XSRF-TOKEN", $9ca267e83c32477d$export$ae84d5b11df39dd7());
    try {
        const response = await fetch(`http://${API_URL}:${API_PORT}/api/v1/pictures/${(0, $9633ccb90f21f6fe$export$50ccdb6194b9cae).getUserId()}/${pictureId}`, {
            method: "DELETE",
            mode: "cors",
            credentials: "include",
            headers: (0, $abe576d488ba8d5a$export$70dd6790042097ea)
        });
        return await $193eb638393b2440$export$fd3c80c00b3490e(response);
    } catch (err) {
        return err.message;
    }
};
const $eef46e2d33235eb6$export$9a1ff82a571f0f78 = async function(pictureId, comment) {
    await $9ca267e83c32477d$export$31d3b41ce7c0630a();
    (0, $abe576d488ba8d5a$export$70dd6790042097ea).set("X-XSRF-TOKEN", $9ca267e83c32477d$export$ae84d5b11df39dd7());
    try {
        const response = await fetch(`http://${API_URL}:${API_PORT}/api/v1/pictures/comments/${(0, $9633ccb90f21f6fe$export$50ccdb6194b9cae).getUserId()}/${pictureId}`, {
            method: "POST",
            mode: "cors",
            credentials: "include",
            body: JSON.stringify(comment),
            headers: (0, $abe576d488ba8d5a$export$70dd6790042097ea)
        });
        return await $193eb638393b2440$export$fd3c80c00b3490e(response);
    } catch (err) {
        return err.message;
    }
};
const $eef46e2d33235eb6$export$857459a43632c748 = async function(commentId, editedComment) {
    await $9ca267e83c32477d$export$31d3b41ce7c0630a();
    (0, $abe576d488ba8d5a$export$70dd6790042097ea).set("X-XSRF-TOKEN", $9ca267e83c32477d$export$ae84d5b11df39dd7());
    try {
        const response = await fetch(`http://${API_URL}:${API_PORT}/api/v1/pictures/comments/${(0, $9633ccb90f21f6fe$export$50ccdb6194b9cae).getUserId()}/${commentId}`, {
            method: "PUT",
            mode: "cors",
            credentials: "include",
            body: JSON.stringify(editedComment),
            headers: (0, $abe576d488ba8d5a$export$70dd6790042097ea)
        });
        return await $193eb638393b2440$export$fd3c80c00b3490e(response);
    } catch (err) {
        return err.message;
    }
};
const $eef46e2d33235eb6$export$1d6dfbfa508968c2 = async function(pictureId, pageStart, offset) {
    try {
        const response = await fetch(`http://${API_URL}:${API_PORT}/api/v1/pictures/comments/${pictureId}?pageStart=${pageStart}&offset=${offset}`, {
            method: "GET",
            mode: "cors"
        });
        return await response.json();
    } catch (err) {
        return err.message;
    }
};
const $eef46e2d33235eb6$export$e705fc43a5ce5eed = async function(pictureId) {
    try {
        const response = await fetch(`http://${API_URL}:${API_PORT}/api/v1/pictures/comments/count/${pictureId}`, {
            method: "GET",
            mode: "cors"
        });
        return await response.json();
    } catch (err) {
        return err.message;
    }
};
const $eef46e2d33235eb6$export$2e6e3ad634e3776 = async function(commentId) {
    await $9ca267e83c32477d$export$31d3b41ce7c0630a();
    (0, $abe576d488ba8d5a$export$70dd6790042097ea).set("X-XSRF-TOKEN", $9ca267e83c32477d$export$ae84d5b11df39dd7());
    try {
        const response = await fetch(`http://${API_URL}:${API_PORT}/api/v1/pictures/comments/${(0, $9633ccb90f21f6fe$export$50ccdb6194b9cae).getUserId()}/${commentId}`, {
            method: "DELETE",
            mode: "cors",
            credentials: "include",
            headers: (0, $abe576d488ba8d5a$export$70dd6790042097ea)
        });
        return await $193eb638393b2440$export$fd3c80c00b3490e(response);
    } catch (err) {
        return err.message;
    }
};
const $eef46e2d33235eb6$export$6c77ee3ddb9ab824 = async function(pictureId) {
    await $9ca267e83c32477d$export$31d3b41ce7c0630a();
    (0, $abe576d488ba8d5a$export$70dd6790042097ea).set("X-XSRF-TOKEN", $9ca267e83c32477d$export$ae84d5b11df39dd7());
    try {
        const response = await fetch(`http://${API_URL}:${API_PORT}/api/v1/pictures/likes/${(0, $9633ccb90f21f6fe$export$50ccdb6194b9cae).getUserId()}/${pictureId}`, {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: (0, $abe576d488ba8d5a$export$70dd6790042097ea)
        });
        return await $193eb638393b2440$export$fd3c80c00b3490e(response);
    } catch (err) {
        return err.message;
    }
};
const $eef46e2d33235eb6$export$f566a22877a22451 = async function(pictureId, pageStart, offset) {
    try {
        const response = await fetch(`http://${API_URL}:${API_PORT}/api/v1/pictures/likes/${pictureId}?pageStart=${pageStart}&offset=${offset}`, {
            method: "GET",
            mode: "cors"
        });
        return await response.json();
    } catch (err) {
        return err.message;
    }
};
const $eef46e2d33235eb6$export$e90143b3db1828ff = async function(pictureId) {
    try {
        const response = await fetch(`http://${API_URL}:${API_PORT}/api/v1/pictures/likes/count/${pictureId}`, {
            method: "GET",
            mode: "cors"
        });
        return await response.json();
    } catch (err) {
        return err.message;
    }
};
const $eef46e2d33235eb6$export$434f5ae192f05d29 = async function(pictureId) {
    await $9ca267e83c32477d$export$31d3b41ce7c0630a();
    (0, $abe576d488ba8d5a$export$70dd6790042097ea).set("X-XSRF-TOKEN", $9ca267e83c32477d$export$ae84d5b11df39dd7());
    try {
        const response = await fetch(`http://${API_URL}:${API_PORT}/api/v1/pictures/likes/${(0, $9633ccb90f21f6fe$export$50ccdb6194b9cae).getUserId()}/${pictureId}`, {
            method: "DELETE",
            mode: "cors",
            credentials: "include",
            headers: (0, $abe576d488ba8d5a$export$70dd6790042097ea)
        });
        return await $193eb638393b2440$export$fd3c80c00b3490e(response);
    } catch (err) {
        return err.message;
    }
};


const $ea37b78c1355d6c7$var$registerHandler = async function() {
    if ((0, $a8765a910c4e806a$export$2e2bcd8739ae039).fieldsAreValid()) {
        const response = await (0, $4ae425838adc5a73$export$6503ec6e8aabbaf)((0, $a8765a910c4e806a$export$2e2bcd8739ae039).getInputCredentials());
        if (response.message === "User already exists") (0, $a8765a910c4e806a$export$2e2bcd8739ae039).setAlreadyExistingUsernameWarn();
        if (response.status === 201) {
            await (0, $4ae425838adc5a73$export$596d806903d1f59e)({
                username: (0, $a8765a910c4e806a$export$2e2bcd8739ae039).getInputCredentials().username,
                password: (0, $a8765a910c4e806a$export$2e2bcd8739ae039).getInputCredentials().password
            });
            (0, $a8765a910c4e806a$export$2e2bcd8739ae039).resetFieldsValues();
            (0, $a8765a910c4e806a$export$2e2bcd8739ae039).resetFieldsValidityValues();
            (0, $a8765a910c4e806a$export$2e2bcd8739ae039).displayRegisterView(false);
            (0, $13183c674aedf1ed$export$2e2bcd8739ae039).displayMainPage(true);
        }
        console.log("Register");
    }
};
const $ea37b78c1355d6c7$export$bf217dbf6dd4005c = function() {
    (0, $a8765a910c4e806a$export$2e2bcd8739ae039).initHandlers();
    (0, $a8765a910c4e806a$export$2e2bcd8739ae039).handleRegister(()=>{
        $ea37b78c1355d6c7$var$registerHandler();
    });
};


(0, $019d5de0aed9d37f$export$81ea6467782f4df)();
(0, $ea37b78c1355d6c7$export$bf217dbf6dd4005c)();
(0, $926d97260bd64691$export$871de8747c9eaa88).renderMap();
const $0deca00998e39925$var$loc = async function() {
    const promise = new Promise((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition((pos)=>{
            resolve({
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude
            });
        });
        (error)=>reject(error);
    });
    const location = await promise;
    return location;
};
console.log($0deca00998e39925$var$loc()); // loc().then((resp) => {
 //   console.log(resp);
 // });


//# sourceMappingURL=main.js.map
