import { CATALOG } from "../data/data";
import { containerCard } from "../index.js";
import { createBasketCard } from "../components/basket.js";
import { createBigCard } from "../components/quick-view-modal-window.js";

const addProduct = function () {
  CATALOG.forEach((element) => {
    const section = createCard(element);
    containerCard.append(section);
  });
};

function onCard(event) {
  switch (event.target.className) {
    case "card__basket": //Кнопка "в корзину" на карточке
      createBasketCard();
      break;
    case "card__quick-view": //Кнопка "быстрый просмотр" на карточке
      createBigCard();
      break;
  }
}

function createElement(tag, className, text = "") {
  const element = document.createElement(tag);
  element.className = className;
  const textElement = document.createTextNode(text);
  element.append(textElement);
  return element;
}

function createCard(todo) {
  const card = createElement("div", "card");
  card.addEventListener("click", onCard);
  card.id = todo.id;
  const cardMain = createElement("div", "card__main");
  const cardImages = createElement("img", "card__images");
  cardImages.src = todo.src;
  const cardReview = createElement("div", "card__review");
  const reviewButton = createElement(
    "button",
    "card__quick-view",
    "Быстрый просмотр"
  );
  const cardBasketButton = createElement("button", "card__basket", "В корзину");
  const cardInfo = createElement("div", "card__info");
  const cardTitle = createElement("h3", "card__info-title", todo.text);
  const cardPrice = createElement("div", "card__info-price", `$${todo.price}`);

  cardMain.append(cardImages, cardBasketButton);
  cardReview.append(reviewButton);
  cardInfo.append(cardTitle, cardPrice);
  card.append(cardMain, cardReview, cardInfo);

  return card;
}

function createModalCard(todo) {
  const card = createElement("div", "quick-view-modal");
  card.id = todo.id;
  const cardContent = createElement("div", "quick-view-modal__content");
  const closeButton = createElement(
    "button",
    "quick-view-modal__close-button",
    "✕"
  );
  const cardImages = createElement("img", "quick-view-modal__images");
  cardImages.src = todo.src;
  const cardTitle = createElement("h3", "quick-view-modal__title", todo.text);
  const cardPrice = createElement(
    "div",
    "quick-view-modal__price",
    `$${todo.price}`
  );
  const basketButton = createElement(
    "button",
    "quick-view-modal__basket",
    "В корзину"
  );
  cardContent.append(
    cardTitle,
    closeButton,
    cardPrice,
    cardImages,
    basketButton
  );
  card.append(cardContent);
  return card;
}

function createBasket({ text, price }) {
  const product = createElement("div", "basket-item");
  const productTitle = createElement("h3", "basket-item__title", text);
  const productPrice = createElement("div", "basket-item__price", price);

  product.append(productTitle, productPrice);
  return product;
}

export { createCard, createModalCard, createBasket, addProduct };
