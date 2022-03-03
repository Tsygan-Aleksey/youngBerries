import { initSearch } from "./components/search.js";
import { renderCards } from "./templates/templates.js";
// import { initSlider } from "./components/slider.js";
import { CATALOG } from "./data/data.js";
import { basket } from "./components/basket.js";
import { toast } from "./components/toast.js";

function app() {
  renderCards(CATALOG);
  // initSlider();
  initSearch();
  basket.render();
  toast.init();
}

app();
