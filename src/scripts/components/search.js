import { CATALOG } from "../data/data.js";
import { renderCards } from "../templates/templates.js";

function handleSearchCard() {
  const input = document.querySelector(".header__input");
  const value = input.value;

  if (value.trim()) {
    const sortedCatalog = CATALOG.filter((card) => {
      return card.text.toLowerCase().includes(value.toLowerCase());
    });
    renderCards(sortedCatalog);
  } else {
    renderCards(CATALOG);
  }
}
export { handleSearchCard };
