const containerCard = document.querySelector("#container-card");

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
  reviewButton.id = "card-quick-view";
  const cardBasketButton = createElement("button", "card__basket", "В корзину");
  cardBasketButton.id = "card-basket";
  const cardInfo = createElement("div", "card__info");
  const cardTitle = createElement("h3", "card__info-title", todo.text);
  const cardPrice = createElement("div", "card__info-price", todo.price);

  cardMain.append(cardImages, cardBasketButton);
  cardReview.append(reviewButton);
  cardInfo.append(cardTitle, cardPrice);
  card.append(cardMain, cardReview, cardInfo);

  return card;
}

function createModalCard(todo) {
  const card = createElement("div", "modal-card");
  card.id = todo.id;
  const cardContent = createElement("div", "modal-card__content");
  const closeButton = createElement("button", "modal-card__close-button", "✕");
  closeButton.id = "modal-card__close-btn";
  const cardImages = createElement("img", "modal-card__images");
  cardImages.src = todo.src;
  const cardTitle = createElement("h3", "modal-card__title", todo.text);
  const cardPrice = createElement("div", "modal-card__price", todo.price);
  const basketButton = createElement("button", "card__basket", "В корзину");
  basketButton.id = "modal-card-basket";
  cardContent.append(
    closeButton,
    cardTitle,
    cardPrice,
    cardImages,
    basketButton
  );
  card.append(cardContent);
  return card;
}

function createBasket(todo) {
  const product = createElement("div", "basket-item");
  const productTitle = createElement("h3", "basket-item__title", todo.text);
  const productPrice = createElement("div", "basket-item__price", todo.price);

  product.append(productTitle, productPrice);
  return product;
}

export { containerCard, createCard, createModalCard, createBasket };
