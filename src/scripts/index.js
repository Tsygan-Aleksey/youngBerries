// import { initSearch } from "./components/search.js";
import { renderCards } from "./templates/templates.js";
// import { initSlider } from "./components/slider.js";
import { CATALOG } from "./data/data.js";
import { basket } from "./components/basket.js";

function app() {
  renderCards(CATALOG);
  // initSlider();
  // initSearch();
  basket.render();
}

app();
