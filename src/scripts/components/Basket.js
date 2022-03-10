import { LOCAL_STORAGE_API } from "../services/localStorageApi.js";
import { CATALOG } from "../data/data.js";
import { createElement } from "../templates/templates.js";

function Basket() {
  this.root = document.querySelector(".basket-modal");

  this.init = () => {
    this.root.addEventListener("click", this.handleBasket);
    this.render();
  };

  this.add = () => {
    this.findCard();
    this.render();
  };

  this.findCard = () => {
    const basket = LOCAL_STORAGE_API.getStorageData();
    const card = CATALOG.find((card) => {
      return (
        card.text ===
        event.target.parentElement.parentElement.lastElementChild
          .firstElementChild.textContent
      );
    });
    if (
      basket.find((item) => {
        return item.text === card.text;
      })
    ) {
      basket.forEach((item) => {
        if (item.text === card.text) {
          item.amount++;
        }
      });
    } else {
      card.amount = 1;
      basket.push(card);
    }
    LOCAL_STORAGE_API.setStorageData(basket);
  };

  this.remove = () => {
    const basket = LOCAL_STORAGE_API.getStorageData();
    basket.filter((item, index) => {
      if (
        item.text === event.target.parentElement.firstElementChild.textContent
      ) {
        basket.splice(index, 1);
      }
    });
    LOCAL_STORAGE_API.setStorageData(basket);
    this.render();
  };

  this.increase = () => {
    const basket = LOCAL_STORAGE_API.getStorageData();
    basket.filter((item, index) => {
      if (
        item.text === event.target.parentElement.firstElementChild.textContent
      ) {
        item.amount++;
      }
    });
    LOCAL_STORAGE_API.setStorageData(basket);
    this.render();
  };

  this.reduce = () => {
    const basket = LOCAL_STORAGE_API.getStorageData();
    basket.filter((item, index) => {
      if (
        item.text ===
          event.target.parentElement.firstElementChild.textContent &&
        item.amount > 1
      ) {
        item.amount--;
      } else if (
        item.text === event.target.parentElement.firstElementChild.textContent
      ) {
        basket.splice(index, 1);
        // this.remove(); не понял почему так не хочет
      }
    });
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
    this.totalAmount();
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
      return acc + Number(item.price * item.amount);
    }, 0);
    document.querySelector("#sum-basket").textContent = `$${sumValue}`;
  };

  this.totalAmount = function () {
    const basket = LOCAL_STORAGE_API.getStorageData();
    const totalAmount = basket.reduce((acc, item) => {
      return acc + Number(item.amount);
    }, 0);
    if (totalAmount === 0) {
      document.querySelector("#modal-basket").textContent = `Корзина`;
    } else
      document.querySelector(
        "#modal-basket"
      ).textContent = `Корзина: ${totalAmount}`;
  };

  this.createBasketElement = function ({ text, price, amount }) {
    const product = createElement("div", "basket-item");
    const productTitle = createElement("h3", "basket-item__title", text);
    const productIncrease = createElement(
      "button",
      "basket-item__increase",
      "+"
    );
    const productReduce = createElement("button", "basket-item__reduce", "-");
    const productAmount = createElement(
      "div",
      "basket-item__amount",
      `${amount} шт.`
    );
    const productPrice = createElement(
      "div",
      "basket-item__price",
      `$${amount * price}`
    );
    const productRemove = createElement(
      "button",
      "basket-item__remove",
      "Удалить"
    );

    productRemove.addEventListener("click", this.remove);
    productIncrease.addEventListener("click", this.increase);
    productReduce.addEventListener("click", this.reduce);

    product.append(
      productTitle,
      productIncrease,
      productReduce,
      productAmount,
      productPrice,
      productRemove
    );
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
