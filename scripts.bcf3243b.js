// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"scripts/components/Slider.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slider = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Slider() {
  var _this = this;

  this.root = document.querySelector(".slider");
  this.dots = _toConsumableArray(document.querySelectorAll(".slider__dot"));
  this.slides = document.querySelectorAll(".slider__slide");
  this.totalSlides = this.slides.length;
  this.slideNumber = 0;
  this.interval = null;

  this.init = function () {
    _this.root.addEventListener("click", _this.handleSlider);

    _this.root.addEventListener("mouseover", _this.stopInterval);

    _this.root.addEventListener("mouseout", _this.startInterval);

    _this.startInterval();
  };

  this.handleSlider = function (event) {
    switch (event.target.parentElement.classList[0]) {
      case "slider__previous-btn":
        _this.previousSlide();

        break;

      case "slider__next-btn":
        _this.nextSlide();

        break;

      case "slider__dots-container":
        _this.selectedSlide(event);

    }
  };

  this.removeClassActive = function () {
    _this.slides.forEach(function (slide) {
      slide.classList.remove("slider__slide--active");
    });

    _this.dots.forEach(function (dot) {
      dot.classList.remove("slider__dot--active");
    });
  };

  this.nextSlide = function () {
    _this.removeClassActive();

    _this.slideNumber++;

    if (_this.slideNumber > _this.totalSlides - 1) {
      _this.slideNumber = 0;
    }

    _this.dots[_this.slideNumber].classList.add("slider__dot--active");

    _this.slides[_this.slideNumber].classList.add("slider__slide--active");
  };

  this.previousSlide = function () {
    _this.removeClassActive();

    _this.slideNumber--;

    if (_this.slideNumber < 0) {
      _this.slideNumber = _this.totalSlides - 1;
    }

    _this.dots[_this.slideNumber].classList.add("slider__dot--active");

    _this.slides[_this.slideNumber].classList.add("slider__slide--active");
  };

  this.selectedSlide = function (event) {
    _this.removeClassActive();

    var SlideNumber = _this.dots.findIndex(function (dot) {
      return event.target.classList === dot.classList;
    });

    _this.dots[SlideNumber].classList.add("slider__dot--active");

    _this.slides[SlideNumber].classList.add("slider__slide--active");
  };

  this.startInterval = function () {
    _this.interval = setInterval(_this.nextSlide, 10000);
  };

  this.stopInterval = function () {
    clearInterval(_this.interval);
  };

  this.hideSlider = function () {
    _this.root.classList.add("slider--hide");
  };

  this.visibleSlider = function () {
    _this.root.classList.remove("slider--hide");
  };
}

var slider = new Slider();
exports.slider = slider;
},{}],"scripts/services/localStorageApi.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOCAL_STORAGE_API = void 0;
var LOCAL_STORAGE_API = {
  key: {
    basket: "basket-data"
  },
  getStorageData: function getStorageData() {
    var data = JSON.parse(localStorage.getItem(this.key.basket));
    return data ? data : [];
  },
  setStorageData: function setStorageData(data) {
    localStorage.setItem(this.key.basket, JSON.stringify(data));
  }
};
exports.LOCAL_STORAGE_API = LOCAL_STORAGE_API;
},{}],"scripts/templates/templates.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createElement = createElement;

function createElement(tag, className) {
  var text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var element = document.createElement(tag);
  element.className = className;
  var textElement = document.createTextNode(text);
  element.append(textElement);
  return element;
}
},{}],"scripts/components/Basket.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basket = void 0;

var _localStorageApi = require("../services/localStorageApi.js");

var _baseService = require("../services/baseService.js");

var _templates = require("../templates/templates.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Basket() {
  var _this = this;

  this.root = document.querySelector(".basket-modal");

  this.init = function () {
    _this.root.addEventListener("click", _this.handleBasket);

    _this.render();
  };

  this.add = function () {
    _this.findCard();

    _this.render();
  };

  this.findCard = function () {
    var basket = _localStorageApi.LOCAL_STORAGE_API.getStorageData();

    var card = _baseService.CATALOG.find(function (card) {
      return card.id === event.target.parentElement.parentElement.id;
    });

    if (basket.find(function (item) {
      return item.id === card.id;
    })) {
      basket.forEach(function (item) {
        if (item.id === card.id) {
          item.amount++;
        }
      });
    } else {
      card.amount = 1;
      basket.push(card);
    }

    _localStorageApi.LOCAL_STORAGE_API.setStorageData(basket);
  };

  this.remove = function () {
    var basket = _localStorageApi.LOCAL_STORAGE_API.getStorageData();

    var filterBasket = basket.filter(function (item) {
      console.log(event.target.parentElement.id);
      return item.text !== event.target.parentElement.firstElementChild.textContent;
    });

    _localStorageApi.LOCAL_STORAGE_API.setStorageData(filterBasket);

    _this.render();
  };

  this.increase = function () {
    var basket = _localStorageApi.LOCAL_STORAGE_API.getStorageData();

    basket.forEach(function (item) {
      if (item.text === event.target.parentElement.firstElementChild.textContent) {
        item.amount++;
      }
    });

    _localStorageApi.LOCAL_STORAGE_API.setStorageData(basket);

    _this.render();
  };

  this.reduce = function () {
    var basket = _localStorageApi.LOCAL_STORAGE_API.getStorageData();

    var _iterator = _createForOfIteratorHelper(basket),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var el = _step.value;

        if (el.text === event.target.parentElement.firstElementChild.textContent && el.amount > 1) {
          el.amount--;

          _localStorageApi.LOCAL_STORAGE_API.setStorageData(basket);

          break;
        } else if (el.text === event.target.parentElement.firstElementChild.textContent) {
          _this.remove();

          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    _this.render();
  };

  this.render = function () {
    var basket = _localStorageApi.LOCAL_STORAGE_API.getStorageData();

    var containerBasketCard = document.querySelector(".basket-modal__container");
    containerBasketCard.innerHTML = "";
    basket.forEach(function (element) {
      var card = _this.createBasketElement(element);

      containerBasketCard.append(card);
    });

    _this.calcBasketSum();

    _this.totalAmount();
  };

  this.toggle = function () {
    if (_this.root.classList.contains("basket-modal--active")) {
      _this.close();
    } else {
      _this.open();
    }
  };

  this.open = function () {
    this.root.classList.add("basket-modal--active");
  };

  this.close = function () {
    this.root.classList.remove("basket-modal--active");
  };

  this.clearBasket = function () {
    var basket = _localStorageApi.LOCAL_STORAGE_API.getStorageData();

    basket.length = 0;

    _localStorageApi.LOCAL_STORAGE_API.setStorageData(basket);

    _this.render();
  };

  this.calcBasketSum = function () {
    var basket = _localStorageApi.LOCAL_STORAGE_API.getStorageData();

    var sumValue = basket.reduce(function (acc, item) {
      return acc + Number(item.price * item.amount);
    }, 0);
    document.querySelector("#sum-basket").textContent = "$".concat(sumValue);
  };

  this.totalAmount = function () {
    var basket = _localStorageApi.LOCAL_STORAGE_API.getStorageData();

    var totalAmount = basket.reduce(function (acc, item) {
      return acc + Number(item.amount);
    }, 0);

    if (totalAmount === 0) {
      document.querySelector("#modal-basket").textContent = "\u041A\u043E\u0440\u0437\u0438\u043D\u0430";
    } else document.querySelector("#modal-basket").textContent = "\u041A\u043E\u0440\u0437\u0438\u043D\u0430: ".concat(totalAmount);
  };

  this.createBasketElement = function (_ref) {
    var text = _ref.text,
        price = _ref.price,
        amount = _ref.amount;
    var product = (0, _templates.createElement)("div", "basket-item");
    var productTitle = (0, _templates.createElement)("h3", "basket-item__title", text);
    var productReduce = (0, _templates.createElement)("button", "basket-item__reduce", "-");
    var productAmount = (0, _templates.createElement)("div", "basket-item__amount", "".concat(amount, " x $").concat(price));
    var productIncrease = (0, _templates.createElement)("button", "basket-item__increase", "+");
    var productPrice = (0, _templates.createElement)("div", "basket-item__price", "$".concat(amount * price));
    var productRemove = (0, _templates.createElement)("button", "basket-item__remove", "Удалить");
    productRemove.addEventListener("click", this.remove);
    productIncrease.addEventListener("click", this.increase);
    productReduce.addEventListener("click", this.reduce);
    product.append(productTitle, productReduce, productAmount, productIncrease, productPrice, productRemove);
    return product;
  };

  this.handleBasket = function (event) {
    switch (event.target.classList[0]) {
      case "basket-modal__clear-all-button":
        _this.clearBasket();

    }
  };
}

var basket = new Basket();
exports.basket = basket;
},{"../services/localStorageApi.js":"scripts/services/localStorageApi.js","../services/baseService.js":"scripts/services/baseService.js","../templates/templates.js":"scripts/templates/templates.js"}],"scripts/components/quick-view-modal-window.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openQuickViewWindow = openQuickViewWindow;

var _baseService = require("../services/baseService.js");

var _Basket = require("./Basket.js");

var _templates = require("../templates/templates.js");

function createQuickViewModal(item) {
  var card = (0, _templates.createElement)("div", "quick-view-modal");
  card.addEventListener("click", handleQuickViewCard);
  var cardContent = (0, _templates.createElement)("div", "quick-view-modal__content");
  var closeButton = (0, _templates.createElement)("button", "quick-view-modal__close-button", "✕");
  var cardImages = (0, _templates.createElement)("img", "quick-view-modal__images");
  var cardTitle = (0, _templates.createElement)("h3", "quick-view-modal__title", item.text);
  var cardPrice = (0, _templates.createElement)("div", "quick-view-modal__price", "$".concat(item.price));
  var basketButton = (0, _templates.createElement)("button", "quick-view-modal__basket", "В корзину");
  card.id = item.id;
  cardImages.src = item.src;
  cardContent.append(cardTitle, closeButton, cardPrice, cardImages, basketButton);
  card.append(cardContent);
  return card;
}

function openQuickViewWindow() {
  var ourCard = _baseService.CATALOG.find(function (card) {
    return card.id === event.target.parentElement.parentElement.id;
  });

  var containerCard = document.querySelector("#container-card");
  var section = createQuickViewModal(ourCard);
  containerCard.append(section);
  triggerBasket();
}

function handleQuickViewCard(event) {
  if (event.target.classList.contains("quick-view-modal__close-button")) {
    document.querySelector(".quick-view-modal").remove();
    triggerBasket();
  } else if (event.target.classList.contains("quick-view-modal__basket")) {
    _Basket.basket.add();
  }
}

var triggerBasket = function triggerBasket() {
  var basket = document.querySelector(".basket-modal");

  if (basket.classList.contains("basket-modal--active")) {
    basket.classList.remove("basket-modal--active");
  }
};
},{"../services/baseService.js":"scripts/services/baseService.js","./Basket.js":"scripts/components/Basket.js","../templates/templates.js":"scripts/templates/templates.js"}],"scripts/components/card.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderCards = renderCards;

var _Basket = require("./Basket.js");

var _quickViewModalWindow = require("./quick-view-modal-window.js");

var _templates = require("../templates/templates");

function renderCards(data) {
  var containerCard = document.querySelector("#container-card");
  containerCard.innerHTML = "";
  data.forEach(function (element) {
    var section = createCard(element);
    containerCard.append(section);
  });
}

function onCard(event) {
  switch (event.target.className) {
    case "card__basket":
      _Basket.basket.add();

      break;

    case "card__quick-view":
      (0, _quickViewModalWindow.openQuickViewWindow)();
      break;
  }
}

function createCard(todo) {
  var card = (0, _templates.createElement)("div", "card");
  card.id = todo.id;
  var cardMain = (0, _templates.createElement)("div", "card__main");
  var cardImages = (0, _templates.createElement)("img", "card__images");
  cardImages.src = todo.src;
  var cardReview = (0, _templates.createElement)("div", "card__review");
  var reviewButton = (0, _templates.createElement)("button", "card__quick-view", "Быстрый просмотр");
  var cardBasketButton = (0, _templates.createElement)("button", "card__basket", "В корзину");
  var cardInfo = (0, _templates.createElement)("div", "card__info");
  var cardTitle = (0, _templates.createElement)("h3", "card__info-title", todo.text);
  var cardPrice = (0, _templates.createElement)("div", "card__info-price", "$".concat(todo.price));
  card.addEventListener("click", onCard);
  cardMain.append(cardImages, cardBasketButton);
  cardReview.append(reviewButton);
  cardInfo.append(cardTitle, cardPrice);
  card.append(cardMain, cardReview, cardInfo);
  return card;
}
},{"./Basket.js":"scripts/components/Basket.js","./quick-view-modal-window.js":"scripts/components/quick-view-modal-window.js","../templates/templates":"scripts/templates/templates.js"}],"scripts/services/baseService.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CATALOG = void 0;
exports.getCatalog = getCatalog;

var _card = require("../components/card.js");

var BASE_SERVICE = {
  url: "https://621b7dedfaa12ee4500f1271.mockapi.io/youngBerries/",
  endPoints: {
    data: "DATA"
  },
  getData: function getData() {
    return this.url + this.endPoints.data;
  }
};

function getData() {
  return new Promise(function (resolve, reject) {
    return fetch("".concat(BASE_SERVICE.getData())).then(function (response) {
      if (response.ok) {
        var post = response.json();
        resolve(post);
      } else {
        reject(new Error("нет данных"));
      }
    });
  });
}

var CATALOG = [];
exports.CATALOG = CATALOG;

function getCatalog() {
  getData().then(function (result) {
    result.forEach(function (item) {
      CATALOG.push(item);
      (0, _card.renderCards)(result);
    });
  });
}
},{"../components/card.js":"scripts/components/card.js"}],"scripts/components/Toast.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toast = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var options = {
  message: "Данная страница создана командой YoungBerries!",
  root: document.querySelector("#toast"),
  OPEN_DELAY: 15000,
  CLOSE_DELAY: 5000
};

var _handleToast = /*#__PURE__*/new WeakMap();

var _open = /*#__PURE__*/new WeakMap();

var _close = /*#__PURE__*/new WeakMap();

var _closeTimeout = /*#__PURE__*/new WeakMap();

var _render = /*#__PURE__*/new WeakMap();

var Toast = /*#__PURE__*/_createClass(function Toast(_ref) {
  var _this = this;

  var message = _ref.message,
      root = _ref.root,
      OPEN_DELAY = _ref.OPEN_DELAY,
      CLOSE_DELAY = _ref.CLOSE_DELAY;

  _classCallCheck(this, Toast);

  _classPrivateFieldInitSpec(this, _handleToast, {
    writable: true,
    value: function value(event) {
      if (event.target.type === "button") {
        _classPrivateFieldGet(_this, _close).call(_this);
      }
    }
  });

  _classPrivateFieldInitSpec(this, _open, {
    writable: true,
    value: function value() {
      var _this2 = this;

      setTimeout(function () {
        _this2.root.classList.add("toast--visible");
      }, this.OPEN_DELAY);
    }
  });

  _classPrivateFieldInitSpec(this, _close, {
    writable: true,
    value: function value() {
      this.root.classList.remove("toast--visible");
    }
  });

  _classPrivateFieldInitSpec(this, _closeTimeout, {
    writable: true,
    value: function value() {
      var _this3 = this;

      setTimeout(function () {
        _this3.root.classList.remove("toast--visible");
      }, this.OPEN_DELAY + this.CLOSE_DELAY);
    }
  });

  _classPrivateFieldInitSpec(this, _render, {
    writable: true,
    value: function value() {
      this.root.querySelector(".toast__title").textContent = this.message;
    }
  });

  this.root = root;
  this.message = message;
  this.OPEN_DELAY = OPEN_DELAY;
  this.CLOSE_DELAY = CLOSE_DELAY;

  this.init = function () {
    _classPrivateFieldGet(this, _render).call(this);

    _classPrivateFieldGet(this, _open).call(this);

    _classPrivateFieldGet(this, _closeTimeout).call(this);

    this.root.addEventListener("click", _classPrivateFieldGet(this, _handleToast));
  };
});

var toast = new Toast(options);
exports.toast = toast;
},{}],"scripts/components/search.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onSearchCard = onSearchCard;

var _baseService = require("../services/baseService.js");

var _card = require("./card.js");

var _Slider = require("./Slider.js");

function onSearchCard() {
  var input = document.querySelector(".header__input");
  var value = input.value;

  if (value.trim()) {
    _Slider.slider.hideSlider();

    var sortedCatalog = _baseService.CATALOG.filter(function (card) {
      return card.text.toLowerCase().includes(value.toLowerCase());
    });

    (0, _card.renderCards)(sortedCatalog);
  } else {
    _Slider.slider.visibleSlider();

    (0, _card.renderCards)(_baseService.CATALOG);
  }
}
},{"../services/baseService.js":"scripts/services/baseService.js","./card.js":"scripts/components/card.js","./Slider.js":"scripts/components/Slider.js"}],"scripts/components/Header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.header = void 0;

var _Basket = require("./Basket.js");

var _search = require("./search.js");

function Header() {
  var _this = this;

  this.root = document.querySelector(".header");

  this.init = function () {
    _this.root.addEventListener("click", _this.toggleBasket);

    _this.root.addEventListener("input", _this.onSearchInput);
  };

  this.toggleBasket = function (event) {
    if (event.target.type === "button") {
      _Basket.basket.toggle();
    }
  };

  this.onSearchInput = function (event) {
    if (event.target.type === "text") {
      (0, _search.onSearchCard)();
    }
  };
}

var header = new Header();
exports.header = header;
},{"./Basket.js":"scripts/components/Basket.js","./search.js":"scripts/components/search.js"}],"scripts/index.js":[function(require,module,exports) {
"use strict";

var _Slider = require("./components/Slider.js");

var _baseService = require("./services/baseService.js");

var _Basket = require("./components/Basket.js");

var _Toast = require("./components/Toast.js");

var _Header = require("./components/Header.js");

document.addEventListener("DOMContentLoaded", app);

function app() {
  _Header.header.init();

  (0, _baseService.getCatalog)();

  _Slider.slider.init();

  _Basket.basket.init();

  _Toast.toast.init();
}
},{"./components/Slider.js":"scripts/components/Slider.js","./services/baseService.js":"scripts/services/baseService.js","./components/Basket.js":"scripts/components/Basket.js","./components/Toast.js":"scripts/components/Toast.js","./components/Header.js":"scripts/components/Header.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53481" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/index.js"], null)
//# sourceMappingURL=/scripts.bcf3243b.js.map