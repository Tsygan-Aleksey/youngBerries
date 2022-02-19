// import { createModalCard, containerCard } from "./templates/templates.js";
// import { CATALOG } from "./data/data.js";
// import {
//   getStorageData,
//   setStorageData,
//   API_BASKET_KEY,
// } from "./services/localStorageApi.js";
// import { basketProduct } from "./index.js";

// function createBigCard() {
//   const ourCard = CATALOG.find((card) => {
//     return (
//       card.text ===
//       event.target.parentElement.nextElementSibling.firstElementChild
//         .textContent
//     );
//   });
//   const section = createModalCard(ourCard);
//   containerCard.append(section);
//   // Закрыть карточку
//   const buttonClose = document.querySelector("#modal-card__close-btn");
//   buttonClose.addEventListener("click", onCloseButton);

//   function onCloseButton() {
//     document.querySelector(".modal-card").remove();
//   }
//   // Добавить в корзину из большой карточки
//   const buttonAddBasket = document.querySelector("#modal-card-basket");
//   buttonAddBasket.addEventListener("click", onBasketButton);

//   function onBasketButton() {
//     const basket = getStorageData(API_BASKET_KEY);
//     basket.push(ourCard);
//     setStorageData(API_BASKET_KEY, basket);
//     basketProduct.innerHTML = "";
//     basket.forEach((item) => {
//       const section = createBasket(item);
//       basketProduct.append(section);
//     });
//   }
// }

// export { createBigCard };
