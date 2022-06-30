/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/card.ts":
/*!************************!*\
  !*** ./src/js/card.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

function shuffle(array) {
  var _a;

  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
  }

  return array;
}

var uniqueCards = [{
  id: "1",
  description: "card1",
  img: "01.png"
}, {
  id: "2",
  description: "card2",
  img: "02.png"
}, {
  id: "3",
  description: "card3",
  img: "03.png"
}, {
  id: "4",
  description: "card4",
  img: "04.png"
}, {
  id: "5",
  description: "card5",
  img: "05.png"
}, {
  id: "6",
  description: "card6",
  img: "06.png"
}, {
  id: "7",
  description: "card7",
  img: "07.png"
}, {
  id: "8",
  description: "card8",
  img: "08.png"
}];
var originalsCards = [];
uniqueCards.forEach(function (card) {
  originalsCards.push(__assign({}, card));
  originalsCards.push(__assign({}, card));
});
var cards = shuffle(originalsCards);
/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./src/js/game.ts":
/*!************************!*\
  !*** ./src/js/game.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var Game =
/** @class */
function () {
  function Game(dom, cards) {
    this.dom = dom;
    this.cards = cards;
    this.firstCard = undefined;
    this.secondCard = undefined;
  }

  Game.prototype.reset = function () {
    var _a, _b;

    (_a = this.secondCard) === null || _a === void 0 ? void 0 : _a.classList.remove("show");
    (_b = this.firstCard) === null || _b === void 0 ? void 0 : _b.classList.remove("show");
    this.firstCard = undefined;
    this.secondCard = undefined;
  };

  Game.prototype.checkWinner = function () {
    var _a;

    var cards = Array.from(this.dom.querySelectorAll("[data-card]"));
    var cardsWithShow = Array.from(this.dom.querySelectorAll(".show[data-card]"));

    if (cards.length === cardsWithShow.length) {
      var resetGameDiv = document.querySelector("[reset-game]");
      resetGameDiv.classList.remove("hidden");
      (_a = resetGameDiv.querySelector("button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        document.location.reload();
      });
    }
  };

  Game.prototype.addListeners = function () {
    var _this = this;

    Array.from(this.dom.querySelectorAll("[data-card]")).forEach(function (card, i) {
      card.addEventListener("click", function (e) {
        var _a, _b;

        var cardClicked = e.currentTarget;
        if (_this.firstCard === cardClicked || _this.secondCard === cardClicked || cardClicked.classList.contains("show")) return;

        if (!_this.firstCard) {
          _this.firstCard = cardClicked;

          _this.firstCard.classList.add("show");
        } else if (!_this.secondCard) {
          _this.secondCard = cardClicked;

          _this.secondCard.classList.add("show");

          var firstDataCardId = (_a = _this.firstCard) === null || _a === void 0 ? void 0 : _a.getAttribute("data-card");
          var secondDataCardId = (_b = _this.secondCard) === null || _b === void 0 ? void 0 : _b.getAttribute("data-card");

          if (firstDataCardId !== secondDataCardId) {
            setTimeout(_this.reset.bind(_this), 1000);
          } else {
            _this.firstCard = undefined;
            _this.secondCard = undefined;
          }

          _this.checkWinner();
        }
      });
    });
  };

  Game.prototype.init = function () {
    console.log("initing...");
    document.querySelector("[reset-game]").classList.add("hidden");
    this.dom.innerHTML = "\n            ".concat(this.cards.map(function (card) {
      return "\n                <div class=\"card\" data-card=\"".concat(card.id, "\">\n                    <img src=\"img/").concat(card.img, "\" class=\"card-front\" alt=\"").concat(card.description, "\"/>\n                    <img src=\"img/back.png\" class=\"card-back\" alt=\"Kau\xE3 Landi logo\"/>\n                </div>\n            ");
    }).join(""), "\n        ");
    this.addListeners();
  };

  return Game;
}();

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./src/js/card.ts");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/js/game.ts");


var $game = document.querySelector('[data-game]');
var game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"]($game, _card__WEBPACK_IMPORTED_MODULE_0__["default"]);
game.init();
console.log(_card__WEBPACK_IMPORTED_MODULE_0__["default"]);
}();
/******/ })()
;
//# sourceMappingURL=index.js.map