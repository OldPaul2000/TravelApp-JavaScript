const main = document.querySelector(".main-container");
import { map } from "../scripts/view/map.js";

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

console.log(loc());

// loc().then((resp) => {
//   console.log(resp);
// });
