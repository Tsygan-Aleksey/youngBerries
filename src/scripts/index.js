import {
  containerCard,
  createCard,
  createModalCard,
  createBasket,
} from "./templates/templates.js";
import {
  getStorageData,
  setStorageData,
  API_BASKET_KEY,
} from "./services/localStorageApi.js";
import { CATALOG } from "./data/data.js";

const addProduct = function () {
  CATALOG.forEach((element) => {
    const section = createCard(element);
    containerCard.append(section);
  });
};
addProduct();

const btnBasketCard = document.querySelector("#container-card");
btnBasketCard.addEventListener("click", onCard);

function onCard(event) {
  switch (event.target.id) {
    case "card-basket":
      createBasketCard();
      break;
    case "card-quick-view":
      createBigCard();
      break;
  }
}

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
  // Закрыть карточку
  const buttonClose = document.querySelector(
    "#quick-view-modal-window__close-btn"
  );
  buttonClose.addEventListener("click", onCloseButton);

  function onCloseButton() {
    document.querySelector(".quick-view-modal-window").remove();
  }
  // Добавить в корзину из большой карточки
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
  }
}

const modalBasket = document.querySelector("#modal-basket");
modalBasket.addEventListener("click", onModalBasket);

const basketProduct = document.querySelector("#basket-product");
const modalBasketProduct = document.querySelector("#basket-modal-product");

function onModalBasket() {
  basketProduct.innerHTML = "";
  modalBasketProduct.classList.toggle("display-block");
  const basket = getStorageData(API_BASKET_KEY);
  basket.forEach((item) => {
    const section = createBasket(item);
    basketProduct.append(section);
  });
}

const btnDeleteBasket = document.querySelector("#delete-basket");
btnDeleteBasket.addEventListener("click", onDeletBasket);

function onDeletBasket() {
  const basket = getStorageData(API_BASKET_KEY);
  basket.length = 0;
  basketProduct.innerHTML = "";
  setStorageData(API_BASKET_KEY, basket);
}
