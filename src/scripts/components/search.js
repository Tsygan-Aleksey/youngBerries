import { CATALOG } from "../data/data.js";
import { renderCards } from "../templates/templates.js";
import { slider } from "./Slider.js";

function onSearchCard() {
  const input = document.querySelector(".header__input");

  const value = input.value;

  if (value.trim()) {
    slider.hideSlider();
    const sortedCatalog = CATALOG.filter((card) => {
      return card.text.toLowerCase().includes(value.toLowerCase());
    });
    renderCards(sortedCatalog);
  } else {
    slider.visibleSlider()
    renderCards(CATALOG);
  }
}
export { onSearchCard };
