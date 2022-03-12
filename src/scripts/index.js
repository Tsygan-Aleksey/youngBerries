import { slider } from "./components/Slider.js";
import { getCatalog } from "./services/baseService.js";
import { basket } from "./components/Basket.js";
import { toast } from "./components/Toast.js";
import { header } from "./components/Header.js";

document.addEventListener("DOMContentLoaded", app);

function app() {
  header.init();
  getCatalog()
  slider.init();
  basket.init();
  toast.init();
}
