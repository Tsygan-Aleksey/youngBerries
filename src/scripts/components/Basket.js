import {
  LOCAL_STORAGE_API
} from "../services/localStorageApi.js";
import { CATALOG } from "../data/data.js";
import { createElement } from "../templates/templates.js";

function Basket() {
  this.root = document.querySelector(".basket-modal");

  this.init = () => {
    this.root.addEventListener("click", this.handleBasket);
    this.render();
  };
  this.add = () => {
    const basket = LOCAL_STORAGE_API.getStorageData();
    const card = CATALOG.find((card) => {
      return (
        card.text ===
        event.target.parentElement.parentElement.lastElementChild
          .firstElementChild.textContent
      );
    });
    basket.push(card);
    LOCAL_STORAGE_API.setStorageData(basket);
    this.render();
  };
  this.render = () => {
    const basket = LOCAL_STORAGE_API.getStorageData();
    const containerBasketCard = document.querySelector(
      ".basket-modal__product"
    );
    containerBasketCard.innerHTML = "";
    basket.forEach((element) => {
      const card = this.createBasketElement(element);
      containerBasketCard.append(card);
    });
    this.calcBasketSum();
  };
  this.toggle = () => {
    if (this.root.classList.contains("active")) {
      this.close();
    } else {
      this.open();
    }
  };
  this.open = function () {
    this.root.classList.add("active");
  };
  this.close = function () {
    this.root.classList.remove("active");
  };
  this.clearBasket = () => {
    const basket = LOCAL_STORAGE_API.getStorageData();
    basket.length = 0;
    LOCAL_STORAGE_API.setStorageData(basket);
    this.render();
  };
  this.calcBasketSum = function () {
    const basket = LOCAL_STORAGE_API.getStorageData();
    const sumValue = basket.reduce((acc, item) => {
      return acc + Number(item["price"]);
    }, 0);
    document.querySelector("#sum-basket").textContent = `$${sumValue}`;
  };
  this.createBasketElement = function ({ text, price }) {
    const product = createElement("div", "basket-item");
    const productTitle = createElement("h3", "basket-item__title", text);
    const productPrice = createElement(
      "div",
      "basket-item__price",
      `$${price}`
    );
    product.append(productTitle, productPrice);
    return product;
  };
  this.handleBasket = (event) => {
    switch (event.target.classList[0]) {
      case "basket-modal__clear-all-button":
        this.clearBasket();
    }
  };
}

const basket = new Basket();

export { basket };
