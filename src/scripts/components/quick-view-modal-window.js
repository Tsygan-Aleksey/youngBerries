import { CATALOG} from "../services/baseService.js";
import { basket } from "./Basket.js";
import { createElement } from "../templates/templates.js";

function createQuickViewModal(todo) {
  const card = createElement("div", "quick-view-modal");
  card.addEventListener("click", handleQuickViewCard);
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

function openQuickViewWindow() {
  const ourCard = CATALOG.find((card) => {
    return (
      card.text ===
      event.target.parentElement.nextElementSibling.firstElementChild
        .textContent
    );
  });

  const containerCard = document.querySelector("#container-card");

  const section = createQuickViewModal(ourCard);

  containerCard.append(section);
}

function handleQuickViewCard(event) {
  if (event.target.classList.contains("quick-view-modal__close-button")) {
    document.querySelector(".quick-view-modal").remove(); //Быстрый просмотр - закрыть карточку
  } else if (event.target.classList.contains("quick-view-modal__basket")) {
    basket.add(); //Быстрый просмотр - добавить карточку в корзину
  }
}

export { openQuickViewWindow };
