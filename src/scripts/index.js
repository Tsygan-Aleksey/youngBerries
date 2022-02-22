import { containerCard, createCard } from "./templates/templates.js";
import { CATALOG } from "./data/data.js";
import {
  onModalBasket,
  onDeletBasket,
  basketModalPriceSum,
} from "./components/basket.js";
import {
  createBasketCard,
  createBigCard,
} from "./components/quick-view-modal-window.js";

const addProduct = function () {
  CATALOG.forEach((element) => {
    const section = createCard(element);
    containerCard.append(section);
  });
  basketModalPriceSum();
};
addProduct();

const btnBasketCard = document.querySelector("#container-card");
btnBasketCard.addEventListener("click", onCard);

function onCard(event) {
  switch (event.target.id) {
    case "card-basket": //Кнопка "в корзину" на карточке
      createBasketCard();
      break;
    case "card-quick-view": //Кнопка "быстрый просмотр" на карточке
      createBigCard();
      break;
  }
}

//Кнопка корзина в header - basket.js
const modalBasket = document.querySelector("#modal-basket");
modalBasket.addEventListener("click", onModalBasket);

//Кнопка очистить корзину - basket.js
const btnDeleteBasket = document.querySelector("#delete-basket");
btnDeleteBasket.addEventListener("click", onDeletBasket);
