import { map } from "../scripts/view/map.js";
import { initializeLoginController } from "./controller/loginController.js";
import { initializeRegisterController } from "./controller/registerController.js";

initializeLoginController();
initializeRegisterController();
map.renderMap();

const loc = async function () {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((pos) => {
      resolve({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
    (error) => reject(error);
  });

  const location = await promise;
  return location;
};

// console.log(loc());

// loc().then((resp) => {
//   console.log(resp);
// });
