import { basket } from "./Basket.js";
import { openQuickViewWindow } from "./quick-view-modal-window.js";
import { createElement } from "../templates/templates";

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
    case "card__basket":
      basket.add();
      break;
    case "card__quick-view":
      openQuickViewWindow();
      break;
  }
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

export { renderCards };
