import { CATALOG } from "../services/baseService.js";
import { basket } from "./Basket.js";
import { createElement } from "../templates/templates.js";

function createQuickViewModal(item) {
  const card = createElement("div", "quick-view-modal");
  card.addEventListener("click", handleQuickViewCard);
  const cardContent = createElement("div", "quick-view-modal__content");
  const closeButton = createElement(
    "button",
    "quick-view-modal__close-button",
    "✕"
  );
  const cardImages = createElement("img", "quick-view-modal__images");
  const cardTitle = createElement("h3", "quick-view-modal__title", item.text);
  const cardPrice = createElement(
    "div",
    "quick-view-modal__price",
    `$${item.price}`
  );
  const basketButton = createElement(
    "button",
    "quick-view-modal__basket",
    "В корзину"
  );

  card.id = item.id;
  cardImages.src = item.src;

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
    return card.id === event.target.parentElement.parentElement.id;
  });
  const containerCard = document.querySelector("#container-card");
  const section = createQuickViewModal(ourCard);

  containerCard.append(section);
  triggerBasket();
}

function handleQuickViewCard(event) {
  if (event.target.classList.contains("quick-view-modal__close-button")) {
    document.querySelector(".quick-view-modal").remove();
    triggerBasket();
  } else if (event.target.classList.contains("quick-view-modal__basket")) {
    basket.add();
  }
}

const triggerBasket = () => {
  const basket = document.querySelector(".basket-modal");
  if (basket.classList.contains("basket-modal--active")) {
    basket.classList.remove("basket-modal--active");
  } 
}

export { openQuickViewWindow };
