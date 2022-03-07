import { basket } from "../components/Basket.js";
import { openQuickViewWindow } from "../components/quick-view-modal-window.js";

function renderCards(data) {
  const containerCard = document.querySelector("#container-card");
  containerCard.innerHTML = "";
  data.forEach((element) => {
    const section = createCard(element);
    containerCard.append(section);
  });
}

function onCard(event) {
  switch (event.target.className) {
    case "card__basket": //Кнопка "в корзину" на карточке
      basket.add();
      break;
    case "card__quick-view": //Кнопка "быстрый просмотр" на карточке
      openQuickViewWindow();
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

  card.addEventListener("click", onCard);
  cardMain.append(cardImages, cardBasketButton);
  cardReview.append(reviewButton);
  cardInfo.append(cardTitle, cardPrice);
  card.append(cardMain, cardReview, cardInfo);

  return card;
}

export { createCard, renderCards, createElement };
