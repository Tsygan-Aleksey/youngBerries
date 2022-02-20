import { getUUID } from "./utils.js";
import {
  containerCard,
  createCard,
  createModalCard,
  createModalBasket,
} from "./templates.js";
import {
  getStorageData,
  setStorageData,
  WILDBERRIES_BASKET_KEY,
} from "./localStorageApi.js";

const CATALOG = [
  {
    text: "МедЗащита / Маски",
    price: "3$",
    id: getUUID(),
    src: "images/catalog/catalog-product-3.png",
  },
  {
    text: "Honor / Умный браслет Band",
    price: "25$",
    id: getUUID(),
    src: "images/catalog/catalog-product-1.jpeg",
  },
  {
    text: "МедЗащита / Маски",
    price: "3$",
    id: getUUID(),
    src: "images/catalog/catalog-product-3.png",
  },
  {
    text: "Scarlett / Блендер SC-HB42F81",
    price: "40$",
    id: getUUID(),
    src: "images/catalog/catalog-product-2.png",
  },
  {
    text: "МедЗащита / Маски",
    price: "3$",
    id: getUUID(),
    src: "images/catalog/catalog-product-3.png",
  },
];

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
  switch (event.target.className) {
    case "loop-add-basket-card":
      creatBasketCard();
      break;
    case "loop-quick-view":
      creatBigCard();
      break;
  }
}

function creatBasketCard() {
  const basket = getStorageData(WILDBERRIES_BASKET_KEY);
  const ourCard = CATALOG.find((card) => {
    return (
      card.text ===
      event.target.previousElementSibling.firstElementChild.textContent
    );
  });
  basket.push(ourCard);
  setStorageData(WILDBERRIES_BASKET_KEY, basket);
  basketProduct.innerHTML = "";
  basket.forEach((item) => {
    const section = createModalBasket(item);
    basketProduct.append(section);
  });
}

function creatBigCard() {
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
  const buttonClose = document.querySelector(".button-close");
  buttonClose.addEventListener("click", onCloseButton);

  function onCloseButton() {
    document.querySelector(".big-card").remove();
  }
  // Добавить в корзину из большой карточки
  const buttonAddBasket = document.querySelector(".big-loop-add-basket-card");
  buttonAddBasket.addEventListener("click", onBasketButton);

  function onBasketButton() {
    const basket = getStorageData(WILDBERRIES_BASKET_KEY);
    basket.push(ourCard);
    setStorageData(WILDBERRIES_BASKET_KEY, basket);
    basketProduct.innerHTML = "";
    basket.forEach((item) => {
      const section = createModalBasket(item);
      basketProduct.append(section);
    });
  }
}

const modalBasket = document.querySelector("#modal-basket");
modalBasket.addEventListener("click", onModalBasket);

const basketProduct = document.querySelector("#basket-product");
const modalBasketProduct = document.querySelector("#modal-basket-product");

function onModalBasket() {
  basketProduct.innerHTML = "";
  modalBasketProduct.classList.toggle("display-block");
  const basket = getStorageData(WILDBERRIES_BASKET_KEY);
  basket.forEach((item) => {
    const section = createModalBasket(item);
    basketProduct.append(section);
  });
}

const btnDeleteBasket = document.querySelector("#delete-basket");
btnDeleteBasket.addEventListener("click", onDeletBasket);

function onDeletBasket() {
  const basket = getStorageData(WILDBERRIES_BASKET_KEY);
  basket.length = 0;
  basketProduct.innerHTML = "";
  setStorageData(WILDBERRIES_BASKET_KEY, basket);
}
