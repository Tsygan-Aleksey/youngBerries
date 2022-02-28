import { createElement } from "../templates/templates";

const toast = {
  init() {
    this.hideTimeout = null;
    this.element = createElement(
      "div",
      "toast",
      "Данная страница создана командой YoungBerries!"
    );
    this.btn = createElement(
        'button',
        'toast__btn',
        'X'
    );

    this.btn.addEventListener('click', () =>{
      this.element.classList.remove("toast-visible");
    })

    this.element.append(this.btn)
    document.body.append(this.element);
    return document.body;
  },

  show(state) {

    clearTimeout(this.hideTimeOut);

    if (state) {
      this.element.classList.add(`toast-${state}`);
    }

    this.hideTimeOut = setTimeout(() => {
      this.element.classList.remove("toast-visible");
    }, 15000);
  },
  };

function initToast(){
  toast.init()
  toast.show('visible')
}


export {initToast}
