import { createElement } from "../templates/templates";

const toast = {
  init() {
    this.hideTimeout = null;
    this.el = createElement(
      "div",
      "toast",
      "Данный сайт создан командой YoungBerries !"
    );
    document.body.append(this.el);
    return document.body;
  },

  show(message, state) {
    clearTimeout(this.hideTimeout);

    this.el.textContent = message;
    this.el.className = "toast toast-visible";

    if (state) {
      this.el.classList.add(`toast-${state}`);
    }

    this.hideTimeout = setTimeout(() => {
      this.el.classList.remove("toast-visible");
    }, 3000);
  },
};

document.addEventListener("DOMContentLoaded", () => toast.init());
