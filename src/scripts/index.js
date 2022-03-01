import { searchCard } from "./components/search.js";
import { addProduct } from "./templates/templates.js";
import { initToast } from "./components/toast.js";

const search = document.querySelector(".header__input");
const containerCard = document.querySelector("#container-card");

search.oninput = searchCard;
addProduct();

export { containerCard };

setTimeout(initToast, 15000);
