import L from "leaflet";
import { zoom } from "leaflet/src/control/Control.Zoom";

class Maps {
  #mapContainer = document.querySelector(".map");
  #map;

  renderMap() {
    this.#map = L.map(this.#mapContainer, {
      zoomControl: false,
    }).setView([46.194693, 21.303485], 15);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.#map);
  }
}

export const map = new Maps();
