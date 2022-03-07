import { renderCards } from "./templates/templates.js";
import { slider } from "./components/Slider.js";
import { CATALOG } from "./data/data.js";
import { basket } from "./components/Basket.js";
import { toast } from "./components/Toast.js";
import { header } from "./components/Header.js";

document.addEventListener('DOMContentLoaded', app)

function app() {
  header.init();
  renderCards(CATALOG);
  slider.init();
  basket.init();
  toast.init();
}


