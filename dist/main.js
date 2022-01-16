/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/form4mock.js":
/*!**************************!*\
  !*** ./src/form4mock.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createForm": () => (/* binding */ createForm),
/* harmony export */   "submitForm": () => (/* binding */ submitForm)
/* harmony export */ });


function createForm() {
    var form = document.createElement("form");
    form.setAttribute('method',"get");
    form.setAttribute('id', "form4mockme")

    var name = document.createElement("input");
    name.setAttribute('type',"text");
    name.setAttribute('name',"Name");
    name.setAttribute('placeholder', "Name");

    var email = document.createElement("input");
    email.setAttribute('type',"text");
    email.setAttribute('name',"Email");
    email.setAttribute('inputmode', "email");
    email.setAttribute('placeholder', "Email");

    var id = document.createElement("input");
    id.setAttribute('type',"text");
    id.setAttribute('name',"ID");
    id.setAttribute('placeholder', "ID");

    var phone = document.createElement("input");
    phone.setAttribute('type',"text");
    phone.setAttribute('name',"Phone");
    phone.setAttribute('inputmode', "tel");
    phone.setAttribute('placeholder', "Phone");

    var submit = document.createElement("input");
    submit.setAttribute('type',"submit");
    submit.setAttribute('value',"Submit");
    submit.setAttribute('id','submitFormButton');


    form.appendChild(id);
    form.appendChild(name);
    form.appendChild(email);
    form.appendChild(phone);
    form.appendChild(submit);

    document.getElementsByClassName('contacts')[0].appendChild(form);
};

function submitForm() {
    var ext = document.getElementById('form4mockme').children;
        var id = ext.ID.value;
        var name = ext.Name.value;
        var email = ext.Email.value;
        var phone = ext.Phone.value;

        var request = ('http://127.0.0.1:2525/contacts?' + ((id) ? `id=${id}`:'') + ((name) ? `name=${name}`:'') + ((email) ? `email=${email}`:'') + ((phone) ? `phone=${phone}`:''));
        
        window.open(request);
}

    






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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _form4mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form4mock */ "./src/form4mock.js");




var coll = document.getElementsByClassName("content");
var i;

(0,_form4mock__WEBPACK_IMPORTED_MODULE_1__.createForm)();

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
};

document.getElementById('submitFormButton').addEventListener("click", _form4mock__WEBPACK_IMPORTED_MODULE_1__.submitForm, false);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUVBQXlFLEdBQUcsMEJBQTBCLEtBQUssNEJBQTRCLE1BQU0sNEJBQTRCLE1BQU07QUFDL0s7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztVQ3hEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNvQjtBQUNBOztBQUV6QztBQUNBOztBQUVBLHNEQUFVOztBQUVWLFlBQVksaUJBQWlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzRUFBc0Usa0RBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzP2ZjYzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvcm00bW9jay5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIlxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRm9ybSgpIHtcbiAgICB2YXIgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLFwiZ2V0XCIpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsIFwiZm9ybTRtb2NrbWVcIilcblxuICAgIHZhciBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJyxcInRleHRcIik7XG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLFwiTmFtZVwiKTtcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBcIk5hbWVcIik7XG5cbiAgICB2YXIgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZW1haWwuc2V0QXR0cmlidXRlKCd0eXBlJyxcInRleHRcIik7XG4gICAgZW1haWwuc2V0QXR0cmlidXRlKCduYW1lJyxcIkVtYWlsXCIpO1xuICAgIGVtYWlsLnNldEF0dHJpYnV0ZSgnaW5wdXRtb2RlJywgXCJlbWFpbFwiKTtcbiAgICBlbWFpbC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgXCJFbWFpbFwiKTtcblxuICAgIHZhciBpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLFwidGV4dFwiKTtcbiAgICBpZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLFwiSURcIik7XG4gICAgaWQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIFwiSURcIik7XG5cbiAgICB2YXIgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcGhvbmUuc2V0QXR0cmlidXRlKCd0eXBlJyxcInRleHRcIik7XG4gICAgcGhvbmUuc2V0QXR0cmlidXRlKCduYW1lJyxcIlBob25lXCIpO1xuICAgIHBob25lLnNldEF0dHJpYnV0ZSgnaW5wdXRtb2RlJywgXCJ0ZWxcIik7XG4gICAgcGhvbmUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIFwiUGhvbmVcIik7XG5cbiAgICB2YXIgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLFwic3VibWl0XCIpO1xuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxcIlN1Ym1pdFwiKTtcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsJ3N1Ym1pdEZvcm1CdXR0b24nKTtcblxuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChpZCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGVtYWlsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHBob25lKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb250YWN0cycpWzBdLmFwcGVuZENoaWxkKGZvcm0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHN1Ym1pdEZvcm0oKSB7XG4gICAgdmFyIGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtNG1vY2ttZScpLmNoaWxkcmVuO1xuICAgICAgICB2YXIgaWQgPSBleHQuSUQudmFsdWU7XG4gICAgICAgIHZhciBuYW1lID0gZXh0Lk5hbWUudmFsdWU7XG4gICAgICAgIHZhciBlbWFpbCA9IGV4dC5FbWFpbC52YWx1ZTtcbiAgICAgICAgdmFyIHBob25lID0gZXh0LlBob25lLnZhbHVlO1xuXG4gICAgICAgIHZhciByZXF1ZXN0ID0gKCdodHRwOi8vMTI3LjAuMC4xOjI1MjUvY29udGFjdHM/JyArICgoaWQpID8gYGlkPSR7aWR9YDonJykgKyAoKG5hbWUpID8gYG5hbWU9JHtuYW1lfWA6JycpICsgKChlbWFpbCkgPyBgZW1haWw9JHtlbWFpbH1gOicnKSArICgocGhvbmUpID8gYHBob25lPSR7cGhvbmV9YDonJykpO1xuICAgICAgICBcbiAgICAgICAgd2luZG93Lm9wZW4ocmVxdWVzdCk7XG59XG5cbiAgICBcblxuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHN1Ym1pdEZvcm0gfSBmcm9tICcuL2Zvcm00bW9jayc7XG5pbXBvcnQgeyBjcmVhdGVGb3JtIH0gZnJvbSAnLi9mb3JtNG1vY2snO1xuXG52YXIgY29sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb250ZW50XCIpO1xudmFyIGk7XG5cbmNyZWF0ZUZvcm0oKTtcblxuZm9yIChpID0gMDsgaSA8IGNvbGwubGVuZ3RoOyBpKyspIHtcbiAgY29sbFtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIHZhciBjb250ZW50ID0gdGhpcy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgaWYgKGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XG4gICAgICBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cbiAgfSk7XG59O1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0Rm9ybUJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRGb3JtLCBmYWxzZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=