import { renderCards } from "./templates/templates.js";
import { slider } from "./components/slider.js";
import { CATALOG } from "./data/data.js";
import { basket } from "./components/basket.js";
import { toast } from "./components/toast.js";
import { header } from "./components/header.js";

function app() {
  header.init();
  renderCards(CATALOG);
  slider.init();
  basket.init();
  toast.init();
}

document.addEventListener('DOMContentLoaded', app)
