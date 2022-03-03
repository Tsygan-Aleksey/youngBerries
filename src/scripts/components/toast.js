const options = {
  message: "Данная страница создана командой YoungBerries!",
  root: document.querySelector("#toast"),
};

function Toast({ message, root }) {
  this.root = root;
  this.message = message;
  this.OPEN_DELAY = 15000;
  this.CLOSE_DELAY = 5000;

  this.init = function () {
    this.render();
    this.open();
    this.closeTimeout();
    this.root.addEventListener("click", this.handleToast);
  };

  this.handleToast = (event) => {
    if (event.target.type === "button") {
      this.close();
    }
  };

  this.open = function () {
    setTimeout(() => {
      this.root.classList.add("toast--visible");
    }, this.OPEN_DELAY);
  };

  this.close = function () {
    this.root.classList.remove("toast--visible");
  };

  this.closeTimeout = function () {
    setTimeout(() => {
      this.root.classList.remove("toast--visible");
    }, this.OPEN_DELAY + this.CLOSE_DELAY);
  };

  this.render = function () {
    root.querySelector(".toast__title").textContent = this.message;
  };
}

const toast = new Toast(options);

export { toast };
