import { renderCards } from "./templates/templates.js";
// import { initSlider } from "./components/slider.js";
import { CATALOG } from "./data/data.js";
import { basket } from "./components/basket.js";
import { toast } from "./components/toast.js";
import { header } from "./components/header.js";

function app() {
  header.init();
  renderCards(CATALOG);
  // initSlider();
  basket.render();
  toast.init();
}

app();
