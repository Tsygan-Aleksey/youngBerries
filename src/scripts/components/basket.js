import {
  getStorageData,
  setStorageData,
  API_BASKET_KEY,
} from "../services/localStorageApi.js";
import { CATALOG } from "../data/data.js";
import { createElement } from "../templates/templates.js";

function Basket() {
  this.root = document.querySelector("#basket-modal-product");

  this.add = () => {
    const basket = getStorageData(API_BASKET_KEY);
    const card = CATALOG.find((card) => {
      // card.id === event.target.parentElement.parentElement.id;
      return (
        card.text ===
        event.target.parentElement.parentElement.lastElementChild
          .firstElementChild.textContent
      );
    });
    basket.push(card);
    setStorageData(API_BASKET_KEY, basket);
    this.render();
  };

  this.render = () => {
    const basket = getStorageData(API_BASKET_KEY);
    this.root.addEventListener("click", (event) => {
      if (event.target.type === "button") {
        this.clearBasket();
      }
    });
    document.querySelector("#basket-product").innerHTML = "";
    basket.forEach((element) => {
      const card = this.createBasketElement(element);
      document.querySelector("#basket-product").append(card);
    });
    this.calcBasketSum();
  };

  this.toggle = function () {
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
    const basket = getStorageData(API_BASKET_KEY);
    basket.length = 0;
    setStorageData(API_BASKET_KEY, basket);
    this.render();
  };

  this.calcBasketSum = function () {
    const basket = getStorageData(API_BASKET_KEY);
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
}

const basket = new Basket();

export { basket };
