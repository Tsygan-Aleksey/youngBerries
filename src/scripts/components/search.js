import { CATALOG } from "../data/data.js";
import { renderCards } from "../templates/templates.js";

function initSearch() {
  const search = document.querySelector(".header__input");
  search.addEventListener("input", searchCard);
}
function searchCard() {
  const value = document.querySelector(".header__input").value.trim();
  //   const slider = document.querySelector(".slider");

  if (value) {
    // slider.classList.add("hide");
    const sortedCatalog = CATALOG.filter((card) => {
      return card.text.toLowerCase().includes(value.toLowerCase());
    });
    renderCards(sortedCatalog);
  } else {
    renderCards(CATALOG);
    // slider.classList.remove("hide");
  }
}
export { searchCard };
