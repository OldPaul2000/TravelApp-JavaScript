const $0deca00998e39925$var$main = document.querySelector(".main-container");
// main.style.height = "100vh";
// main.style.background = "green";
const $0deca00998e39925$var$mapContainer = document.querySelector(".map");
const $0deca00998e39925$var$map = L.map($0deca00998e39925$var$mapContainer).setView([
    46.194693,
    21.303485
], 10);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo($0deca00998e39925$var$map); // for (let i = 0; i < 100; i++) {
 //   const square = `<div class="sq-${i + 1}"><p>${i + 1}</p></div>`;
 //   main.insertAdjacentHTML("beforeend", square);
 //   const addedSquare = main.querySelector(`.sq-${i + 1}`);
 //   addedSquare.style.width = "100px";
 //   addedSquare.style.height = "100px";
 //   addedSquare.style.display = "flex";
 //   addedSquare.style.border = "#000000 solid 0.1rem";
 //   addedSquare.style.fontSize = "40px";
 //   addedSquare.style.alignItems = "center";
 //   addedSquare.style.justifyContent = "center";
 //   const r = Number((Math.random() * 100).toFixed(2)) + 60;
 //   const g = Number((Math.random() * 100).toFixed(2)) + 60;
 //   const b = Number((Math.random() * 100).toFixed(2)) + 60;
 //   addedSquare.style.background = `rgb(${r}, ${g}, ${b})`;
 // }


//# sourceMappingURL=main.js.map
