import { getUUID } from "./utils.js";

const main = document.querySelector(".main");

function createElement(tag, className, text = "") {
  const element = document.createElement(tag);
  element.className = className;
  const textElement = document.createTextNode(text);
  element.append(textElement);
  return element;
}

function createCard(todo) {
  const card = createElement("div", "card");
  card.id = getUUID();
  const wrap = createElement("div", "wrap");
  const productWrap = createElement("div", "product-wrap");
  const productImages = createElement("img", "");
  productImages.src = todo.src;
  const loopAction = createElement("div", "loop-action");
  const buttonReview = createElement(
    "button",
    "add-to-card",
    "Быстрый просмотр"
  );
  const buttonBasket = createElement("button", "loop-add-to-cart", "В корзину");
  const productInfo = createElement("div", "product-info");
  const productTitle = createElement("h3", "product-title", todo.text);
  const productPrice = createElement("div", "price", todo.price);

  productWrap.append(productImages);
  loopAction.append(buttonReview, buttonBasket);
  productInfo.append(productTitle, productPrice);
  wrap.append(productWrap, loopAction, productInfo);
  card.append(wrap);
  return card;
}

export { main, createCard };
