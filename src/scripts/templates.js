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
  const wrap = createElement("div", "wrap");
  const productWrap = createElement("div", "product-wrap");
  const productImages = createElement("img", "");
  productImages.src = todo.src;
  const loopAction = createElement("div", "loop-action");
  const buttonReview = createElement(
    "button",
    "loop-quick-view",
    "Быстрый просмотр"
  );
  const productInfo = createElement("div", "product-info");
  const productTitle = createElement("h3", "product-title", todo.text);
  const productPrice = createElement("div", "price", todo.price);
  const buttonBasket = createElement(
    "button",
    "loop-add-basket-card",
    "В корзину"
  );
  productWrap.append(productImages);
  loopAction.append(buttonReview);
  productInfo.append(productTitle, productPrice);
  wrap.append(productWrap, loopAction, productInfo, buttonBasket);

  card.append(wrap);
  return card;
}

function createModalCard(todo) {
  const card = createElement("div", "big-card");
  card.id = todo.id;
  const wrap = createElement("div", "big-wrap");
  const content = createElement("div", "big-content");
  const buttonClose = createElement("button", "button-close", "x");
  const productImages = createElement("img", "");
  productImages.src = todo.src;
  const productTitle = createElement("h3", "big-product-title", todo.text);
  const productPrice = createElement("div", "big-price", todo.price);
  const buttonBasket = createElement(
    "button",
    "big-loop-add-basket-card",
    "В корзину"
  );
  content.append(
    buttonClose,
    productTitle,
    productPrice,
    productImages,
    buttonBasket
  );
  wrap.append(content);
  card.append(wrap);
  return card;
}

function createModalBasket(todo) {
  const product = createElement("div", "product");
  const productTitle = createElement("h3", "modal-product-title", todo.text);
  const productPrice = createElement("div", "modal-price", todo.price);

  product.append(productTitle, productPrice);
  return product;
}

export { containerCard, createCard, createModalCard, createModalBasket };
