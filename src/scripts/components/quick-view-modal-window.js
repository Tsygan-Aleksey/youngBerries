import {
  getStorageData,
  setStorageData,
  API_BASKET_KEY,
} from "../services/localStorageApi.js";
import { CATALOG } from "../data/data.js";
import { basketProduct, basketModalPriceSum } from "../components/basket.js";
import {
  createBasket,
  createModalCard,
  containerCard,
} from "../templates/templates.js";

function createBasketCard() {
  const basket = getStorageData(API_BASKET_KEY);
  const ourCard = CATALOG.find((card) => {
    return (
      card.text ===
      event.target.parentElement.parentElement.lastElementChild
        .firstElementChild.textContent
    );
  });
  basket.push(ourCard);
  setStorageData(API_BASKET_KEY, basket);
  basketProduct.innerHTML = "";
  basket.forEach((item) => {
    const section = createBasket(item);
    basketProduct.append(section);
  });
  basketModalPriceSum();
}

function createBigCard() {
  const ourCard = CATALOG.find((card) => {
    return (
      card.text ===
      event.target.parentElement.nextElementSibling.firstElementChild
        .textContent
    );
  });
  const section = createModalCard(ourCard);
  containerCard.append(section);
  //При быстром просмотре закрыть карточку
  const buttonClose = document.querySelector(
    "#quick-view-modal-window__close-btn"
  );
  buttonClose.addEventListener("click", onCloseButton);

  function onCloseButton() {
    document.querySelector(".quick-view-modal-window").remove();
  }
  //При быстром просмотре добавить в корзину
  const buttonAddBasket = document.querySelector(
    "#quick-view-modal-window-basket"
  );
  buttonAddBasket.addEventListener("click", onBasketButton);

  function onBasketButton() {
    const basket = getStorageData(API_BASKET_KEY);
    basket.push(ourCard);
    setStorageData(API_BASKET_KEY, basket);
    basketProduct.innerHTML = "";
    basket.forEach((item) => {
      const section = createBasket(item);
      basketProduct.append(section);
    });
    basketModalPriceSum();
  }
}

export { createBasketCard, createBigCard };
