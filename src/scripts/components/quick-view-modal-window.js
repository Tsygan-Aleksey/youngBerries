import { CATALOG } from "../data/data.js";
import { BasketCard } from "./basket.js";
import { createModalCard } from "../templates/templates.js";
import { containerCard } from "../index.js";

function createBigCard() {
  const ourCard = CATALOG.find((card) => {
    return (
      card.text ==
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

export { createBigCard };
