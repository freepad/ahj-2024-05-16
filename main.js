/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 930:
/***/ (function() {



console.log(this);
function Cart(name) {
  this.items = [];
  this.name = name;
  this.hello = () => {
    console.log("Hello ", this.name);
  };
  this.addToCart = item => {
    this.items.push(item);
  };
  this.print = () => {
    console.log(this.items);
  };

  // return this
}

// demo();
const cart1 = new Cart("Евгений"); // this - 1
const cart2 = new Cart("Дамир"); // this - 2

cart1.hello();
cart2.hello();
const hello2 = cart2.hello.bind({});
hello2();
const User = {
  name: "User",
  sayHello(...args) {
    console.log("User.this", this);
    console.log("User ...args", args);
    console.log("Hello ", this.name);
  }
};
User.sayHello();
let sayHello = User.sayHello.bind(User, 1, 2, 3);
sayHello = sayHello.bind({
  name: "Дамир"
}, 4, 5, 6);
sayHello();
function fetchUsers(pagination = {}) {
  console.log("pagination", pagination);
}
const pagination = {
  page: 1,
  itemsPerPage: 100
};
const fetchUsersWithPagination = fetchUsers.bind(null, pagination);
fetchUsersWithPagination();
setTimeout(() => {
  pagination.page = 2;
  fetchUsersWithPagination();
}, 1_000);
class Book {
  constructor(title) {
    this.title = title;
    this.print = this.print.bind(this);
  }
  print() {
    console.log("Book name ", this.title);
  }
}
const book = new Book("JavaScript");
book.print(); // JavaScript

const print = book.print;
print(); // undefined

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_app__WEBPACK_IMPORTED_MODULE_0__);



// TODO: write your code in app.js
})();

/******/ })()
;