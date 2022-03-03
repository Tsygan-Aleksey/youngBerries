import { basket } from "../components/basket.js";
import { handleSearchCard } from "../components/search.js";

function Header() {
  this.root = document.querySelector(".header");

  this.init = () => {
    this.root.addEventListener("click", (event) => {
      if (event.target.type === "button") {
        basket.toggle();
      }
    });
    this.root.addEventListener("input", (event) => {
      if (event.target.type === "text") {
        handleSearchCard();
      }
    });
  };
}

const header = new Header();

export { header };
