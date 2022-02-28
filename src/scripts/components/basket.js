import {
  getStorageData,
  setStorageData,
  API_BASKET_KEY,
} from "../services/localStorageApi.js";
import { CATALOG } from "../data/data.js";
import { createElement } from "../templates/templates.js";

const basketProduct = document.querySelector("#basket-product");

function BasketCard(text, price) {
  this.text = text;
  this.price = `$${price}`;

  this.add = function () {
    const basket = getStorageData(API_BASKET_KEY);
    const card = CATALOG.find((card) => {
      // card.id === event.target.parentElement.parentElement.id;
      return (
        card.text ===
        event.target.parentElement.parentElement.lastElementChild
          .firstElementChild.textContent
      );
    });
    const element = new BasketCard(card.text, card.price);
    basket.push(element);
    setStorageData(API_BASKET_KEY, basket);
    this.render();
  };

  this.render = function () {
    const basket = getStorageData(API_BASKET_KEY);
    basketProduct.innerHTML = "";
    basket.forEach((element) => {
      const card = createBasket(element);
      basketProduct.append(card);
    });
    this.calcBasketSum();
  };

  const modalBasketProduct = document.querySelector("#basket-modal-product");

  this.toggle = function () {
    if (modalBasketProduct.classList.contains("active")) {
      this.close();
    } else {
      this.open();
    }
  };
  this.open = function () {
    modalBasketProduct.classList.add("active");
  };
  this.close = function () {
    modalBasketProduct.classList.remove("active");
  };

  this.clearBasket = function () {
    const basket = getStorageData(API_BASKET_KEY);
    basket.length = 0;
    setStorageData(API_BASKET_KEY, basket);
    this.render();
  };

  this.calcBasketSum = function () {
    const basket = getStorageData(API_BASKET_KEY);
    const sumValue = basket.reduce((acc, item) => {
      return acc + Number(item["price"].slice(1));
    }, 0);
    document.querySelector("#sum-basket").textContent = `$${sumValue}`;
  };
}

//Кнопка корзина в header
document
  .querySelector("#modal-basket")
  .addEventListener("click", onHeaderBasketBtn);

function onHeaderBasketBtn() {
  const card = new BasketCard();
  card.toggle();
  card.render();
}

//Кнопка очистить корзину
document
  .querySelector("#clear-all-basket")
  .addEventListener("click", onClearBasket);

function onClearBasket() {
  const card = new BasketCard();
  card.clearBasket();
}

//Кнопка добавить в корзину на карточке
function createBasketCard() {
  const card = new BasketCard();
  card.add();
}

function createBasket({ text, price }) {
  const product = createElement("div", "basket-item");
  const productTitle = createElement("h3", "basket-item__title", text);
  const productPrice = createElement("div", "basket-item__price", price);

  product.append(productTitle, productPrice);
  return product;
}

export { basketProduct, BasketCard, createBasketCard, createBasket };
