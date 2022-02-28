
import { addProduct } from "./templates/templates.js";
=======
import { containerCard, createCard } from "./templates/templates.js";
import { CATALOG } from "./data/data.js";
import {
  onModalBasket,
  onDeleteBasket,
  basketModalPriceSum,
} from "./components/basket.js";
import {
  createBasketCard,
  createBigCard,
} from "./components/quick-view-modal-window.js";
import {
  searchCard
} from "./components/search.js";
const search = document.querySelector('.header__input')
search.oninput = searchCard


const containerCard = document.querySelector("#container-card");
addProduct();

export { containerCard };
