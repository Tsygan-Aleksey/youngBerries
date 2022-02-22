import {
  getStorageData,
  setStorageData,
  API_BASKET_KEY,
} from "../services/localStorageApi.js";
import { createBasket } from "../templates/templates.js";

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

function onDeletBasket() {
  const basket = getStorageData(API_BASKET_KEY);
  basket.length = 0;
  basketProduct.innerHTML = "";
  setStorageData(API_BASKET_KEY, basket);
  priceSum.textContent = "0$";
}

// Общая стоимость товара в корзине
const priceSum = document.querySelector("#price-sum");
function basketModalPriceSum() {
  const basket = getStorageData(API_BASKET_KEY);
  const sumValue = basket.reduce((acc, item) => {
    return acc + item["price"];
  }, 0);
  priceSum.textContent = `${sumValue}$`;
}

export { onModalBasket, onDeletBasket, basketProduct, basketModalPriceSum };
