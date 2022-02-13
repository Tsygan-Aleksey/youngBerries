import { getUUID } from "./utils.js";
import { main, createCard } from "./templates.js";

const CATALOG = [
  {
    text: "Honor / Умный браслет Band",
    price: "25$",
    id: getUUID(),
    src: "/images/catalog/catalog-product-1.jpeg",
  },
  {
    text: "Scarlett / Блендер SC-HB42F81",
    price: "40$",
    id: getUUID(),
    src: "/images/catalog/catalog-product-2.png",
  },
  {
    text: "МедЗащита / Маски",
    price: "3$",
    id: getUUID(),
    src: "/images/catalog/catalog-product-3.png",
  },
];

const addProduct = function () {
  CATALOG.forEach((element) => {
    const section = createCard(element);
    main.append(section);
  });
};

addProduct();
