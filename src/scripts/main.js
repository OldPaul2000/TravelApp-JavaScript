import "core-js/stable";
// For Polifilling async functions
import "regenerator-runtime";
import { query } from "./util/query";
import { loginCache } from "../cache/loginSessionCredentials";
import * as user from "/src/scripts/model/user/user.js";
import * as place from "/src/scripts/model/place/place.js";
import * as picture from "/src/scripts/model/touristicPicture/picture.js";
import * as collage from "/src/scripts/model/collage/collage.js";
import ExifReader from "exifreader";
import { likePicture } from "./model/touristicPicture/picture";

const loginBtn = query(".login");
const logoutBtn = query(".logout");
const registerBtn = query(".register");
const printResponseBtn = query(".resp");
const inputFile = query(".inputFile");
const submitFile = query(".submitFile");

logoutBtn.addEventListener("click", () => {
  user.logout().then((resp) => {
    console.log(resp);
  });
});
loginBtn.addEventListener("click", () => {
  user.login({ username: "Paul", password: "paul1234" }).then((resp) => {
    console.log(resp);
    console.log(loginCache.loginInfo());
  });
});
registerBtn.addEventListener("click", () => {});
submitFile.addEventListener("click", () => {
  // uploadPicture();
  setProfilePicture();
});

printResponseBtn.addEventListener("click", () => {
  picture.getPicturesByPlaceName("Pestera ursilor", 3, 4).then((resp) => {
    console.log(resp);
  });
});

// ================= Examples For Testing =================

const setProfilePicture = function () {
  const file = inputFile.files[0];
  user.updateProfilePicture(file).then((resp) => {
    console.log(resp);
  });
};

const getPicture = function (pictureId) {
  picture.getPictureById(7).then((resp) => {
    console.log(resp);
    const bytes = resp.fileBytes;
    console.log(bytes.length);

    photo.style.width = "200px";
    // photo.src = `data:image/jpg;base64,${bytes}`;
    const blob = new Blob([bytes]);
    const url = URL.createObjectURL(blob);
    photo.src = `data:image/jpeg;base64,${bytes}`;
  });
};

const register = function () {
  console.log("Register");
  const registerInfoBody = {
    username: "Gabe",
    password: "gabe1234",
    roles: ["USER"],
    userInfo: {
      firstName: "Gabriel",
      lastName: "Jones",
      email: "michaeljns@gmail.com",
      birthDate: new Date(1990, 5, 23),
    },
  };
  user.register(registerInfoBody).then((resp) => console.log(resp));
};

const uploadPicture = function () {
  const file = inputFile.files[0];
  picture
    .postNewPicture(
      {
        description: "A very nice waterfall",
        country: "Romania",
        city: "Alba Iulia",
        commune: "Garda de sus",
        village: "Dealu Frumos",
        placeName: "Cascada Cascadelor",
        placeType: "Cascada",
        latitude: 41.41211,
        longitude: 44.14214,
      },
      file
    )
    .then((res) => {
      console.log(res);
    });
};
// ================= Examples For Testing =================
