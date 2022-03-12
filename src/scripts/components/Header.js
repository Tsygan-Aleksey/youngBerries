import { basket } from "./Basket.js";
import { onSearchCard } from "./search.js";

function Header() {
  this.root = document.querySelector(".header");

  this.init = () => {
    this.root.addEventListener("click", this.toggleBasket);
    this.root.addEventListener("input", this.onSearchInput);
  };
  this.toggleBasket = (event) => {
    if (event.target.type === "button") {
      basket.toggle();
    }
  };
  this.onSearchInput = (event) => {
    if (event.target.type === "text") {
      onSearchCard();
    }
  };
}

const header = new Header();

export { header };
