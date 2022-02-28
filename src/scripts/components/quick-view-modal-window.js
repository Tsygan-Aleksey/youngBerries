import { CATALOG } from "../data/data.js";
import { BasketCard } from "./basket.js";
import { containerCard } from "../index.js";
import { createElement } from "../templates/templates.js";

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

function isOurCard() {
  const ourCard = CATALOG.find((card) => {
    return (
      card.text ===
      event.target.parentElement.nextElementSibling.firstElementChild
        .textContent
    );
  });
  const section = createModalCard(ourCard);
  containerCard.append(section);

  //Быстрый просмотр - закрыть карточку
  document
    .querySelector(".quick-view-modal__close-button")
    .addEventListener("click", onCloseButton);
  function onCloseButton() {
    document.querySelector(".quick-view-modal").remove();
  }

  //Быстрый просмотр - добавить карточку в корзину
  document
    .querySelector(".quick-view-modal__basket")
    .addEventListener("click", onModalBasket);
  function onModalBasket() {
    const card = new BasketCard();
    card.add();
  }
}

export { isOurCard };
