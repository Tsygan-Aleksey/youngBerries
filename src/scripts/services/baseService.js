import { renderCards } from "../components/card.js";

const BASE_SERVICE = {
  url: "https://621b7dedfaa12ee4500f1271.mockapi.io/youngBerries/",
  endPoints: {
    data: "DATA",
  },
  getData() {
    return this.url + this.endPoints.data;
  },
};

function getData() {
  return new Promise((resolve, reject) => {
    return fetch(`${BASE_SERVICE.getData()}`).then((response) => {
      if (response.ok) {
        const post = response.json();
        resolve(post);
      } else {
        reject(new Error("нет данных"));
      }
    });
  });
}
let CATALOG = [];
function getCatalog() {
  getData().then((result) => {
    result.forEach((item) => {
      CATALOG.push(item);
      renderCards(result);
    });
  });
}
export { CATALOG, getCatalog };
