(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$":
/*!*****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j|t)sx?$ ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_12__.Controller);



/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_seats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/seats */ "./assets/js/seats.js");
/* harmony import */ var _js_seats__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_seats__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)

 // import './js/jquery';

 // start the Stimulus application


console.log('test');

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/js/seats.js":
/*!****************************!*\
  !*** ./assets/js/seats.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

$(document).ready(function () {
  var seats = {
    row_number: $('#rows_number').val(),
    seats_number: $('#seats_number').val(),
    screening_id: $('#screening_id').val(),
    reserved_seats: [],
    init: function init() {
      this.cacheDom();
      this.renderSeats();
      this.bindEvents();
    },
    cacheDom: function cacheDom() {
      this.$seats__container = $('.seats__container');
      this.$seat = this.$seats__container.find('.seats__seat');
      this.$form = $('#reservation__form');
      this.$btn = this.$form.find('button');
      this.$email = $('#email');
      this.$alert_container = $('.alert');
    },
    bindEvents: function bindEvents() {
      this.$seats__container.delegate(this.$seat, 'click', this.bookASeat.bind(this));
      this.$btn.click(this.sendData.bind(this));
    },
    renderSeats: function renderSeats() {
      var row_number = this.row_number,
          seats_number = this.seats_number,
          seats_container = this.$seats__container;
      var url = $('#reservation_url').val();
      $.ajax({
        dataType: 'json',
        url: url,
        type: 'POST'
      }).done(function (data) {
        var currently_booked_seats = data.current_reservations;
        seats_container.html('');

        for (var i = 0; i < row_number; i++) {
          var row = $('<ul/>', {
            'class': 'seats__row'
          });

          for (var j = 0; j < seats_number; j++) {
            row.append($('<li/>', {
              "class": 'seats__seat',
              'data-row': i + 1,
              'data-seat': j + 1
            }).append(j + 1));

            for (var k = 0; k < currently_booked_seats.length; k++) {
              if (j == currently_booked_seats[k].seat - 1 && i == currently_booked_seats[k].row - 1) {
                row[0].children[j].classList.add('seats__seat-booked', 'disabled');
              }
            }
          }

          seats_container.append(row);
        }
      });
    },
    bookASeat: function bookASeat(e) {
      var $seat = $(e.target),
          row_number = $seat.data('row'),
          seat_number = $seat.data('seat');

      if (e.target.parentNode.parentNode === e.delegateTarget) {
        if (!$seat.hasClass('seats__seat-active')) {
          $seat.addClass('seats__seat-active');
          this.reserved_seats.push({
            'row': row_number,
            'seat': seat_number
          });
        } else {
          $.each(this.reserved_seats, $.proxy(function (index, value) {
            if (value.row == row_number && value.seat == seat_number) {
              this.reserved_seats.splice(index, 1);
              return false;
            }
          }, this));
          $seat.removeClass('seats__seat-active');
        }
      }
    },
    sendData: function sendData(e) {
      e.preventDefault();
      var reserved_seats = this.reserved_seats,
          screening_id = this.screening_id,
          renderSeats = this.renderSeats.bind(this),
          alert_container = this.$alert_container,
          $email = this.$email;

      if (this.validateData()) {
        $.ajax({
          url: this.$form.attr('action'),
          data: {
            seats: reserved_seats,
            screeningId: screening_id,
            email: $email.val()
          },
          type: 'post'
        }).done(function (data) {
          alert_container.addClass('alert-success').html(data.info);
          alert_container.fadeIn().delay(3000).fadeOut();
          renderSeats();
          $email.val("");
        });
        this.reserved_seats = [];
      }
    },
    validateData: function validateData() {
      var reserved_seats = this.reserved_seats,
          $email = this.$email;

      if (reserved_seats.length == 0) {
        this.checkField('Please choose seats');
        return;
      }

      if ($email.val() == "") {
        this.checkField('Please fill email');
        return;
      }

      this.$alert_container.removeClass('alert-danger');
      return true;
    },
    checkField: function checkField(info) {
      this.$alert_container.addClass('alert-danger').html(info);
      this.$alert_container.fadeIn().delay(3000).fadeOut();
    }
  };
  seats.init();
});

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-020d6d"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2VhdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJuYW1lcyI6WyJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJDb250cm9sbGVyIiwiY29uc29sZSIsImxvZyIsImFwcCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJyZXF1aXJlIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJzZWF0cyIsInJvd19udW1iZXIiLCJ2YWwiLCJzZWF0c19udW1iZXIiLCJzY3JlZW5pbmdfaWQiLCJyZXNlcnZlZF9zZWF0cyIsImluaXQiLCJjYWNoZURvbSIsInJlbmRlclNlYXRzIiwiYmluZEV2ZW50cyIsIiRzZWF0c19fY29udGFpbmVyIiwiJHNlYXQiLCJmaW5kIiwiJGZvcm0iLCIkYnRuIiwiJGVtYWlsIiwiJGFsZXJ0X2NvbnRhaW5lciIsImRlbGVnYXRlIiwiYm9va0FTZWF0IiwiYmluZCIsImNsaWNrIiwic2VuZERhdGEiLCJzZWF0c19jb250YWluZXIiLCJ1cmwiLCJhamF4IiwiZGF0YVR5cGUiLCJ0eXBlIiwiZG9uZSIsImRhdGEiLCJjdXJyZW50bHlfYm9va2VkX3NlYXRzIiwiY3VycmVudF9yZXNlcnZhdGlvbnMiLCJodG1sIiwiaSIsInJvdyIsImoiLCJhcHBlbmQiLCJrIiwibGVuZ3RoIiwic2VhdCIsImNoaWxkcmVuIiwiY2xhc3NMaXN0IiwiYWRkIiwiZSIsInRhcmdldCIsInNlYXRfbnVtYmVyIiwicGFyZW50Tm9kZSIsImRlbGVnYXRlVGFyZ2V0IiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsInB1c2giLCJlYWNoIiwicHJveHkiLCJpbmRleCIsInZhbHVlIiwic3BsaWNlIiwicmVtb3ZlQ2xhc3MiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0X2NvbnRhaW5lciIsInZhbGlkYXRlRGF0YSIsImF0dHIiLCJzY3JlZW5pbmdJZCIsImVtYWlsIiwiaW5mbyIsImZhZGVJbiIsImRlbGF5IiwiZmFkZU91dCIsImNoZWNrRmllbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEk7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQSxpRUFBZTtBQUNmLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREQ7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztXQUVJLG1CQUFVO0FBQ04sV0FBS0EsT0FBTCxDQUFhQyxXQUFiLEdBQTJCLG1FQUEzQjtBQUNIOzs7O0VBSHdCQyxpRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtDQUVBOztDQUdBOztBQUNBO0FBRUFDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRTs7Ozs7Ozs7Ozs7Ozs7OztDQ2RBOztBQUNPLElBQU1DLEdBQUcsR0FBR0MsMEVBQWdCLENBQUNDLDBJQUFELENBQTVCLEMsQ0FNUDtBQUNBLGdFOzs7Ozs7Ozs7Ozs7Ozs7O0FDVkFDLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUMxQixNQUFJQyxLQUFLLEdBQUc7QUFFUkMsY0FBVSxFQUFFSixDQUFDLENBQUMsY0FBRCxDQUFELENBQWtC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QixFQUF0QjtBQUNIO0FBRUosS0F4SU87QUEwSVJxRCxnQkFBWSxFQUFFLHdCQUFZO0FBQ3RCLFVBQUlyRCxjQUFjLEdBQUcsS0FBS0EsY0FBMUI7QUFBQSxVQUNJVSxNQUFNLEdBQUcsS0FBS0EsTUFEbEI7O0FBR0EsVUFBSVYsY0FBYyxDQUFDZ0MsTUFBZixJQUF5QixDQUE3QixFQUFnQztBQUM1QixhQUFLNkIsVUFBTCxDQUFnQixxQkFBaEI7QUFDQTtBQUNIOztBQUVELFVBQUluRCxNQUFNLENBQUNiLEdBQVAsTUFBZ0IsRUFBcEIsRUFBd0I7QUFDcEIsYUFBS2dFLFVBQUwsQ0FBZ0IsbUJBQWhCO0FBQ0E7QUFDSDs7QUFFRCxXQUFLbEQsZ0JBQUwsQ0FBc0J1QyxXQUF0QixDQUFrQyxjQUFsQztBQUVBLGFBQU8sSUFBUDtBQUNILEtBM0pPO0FBNkpSVyxjQUFVLEVBQUUsb0JBQVVKLElBQVYsRUFBZ0I7QUFDeEIsV0FBSzlDLGdCQUFMLENBQXNCZ0MsUUFBdEIsQ0FBK0IsY0FBL0IsRUFBK0NqQixJQUEvQyxDQUFvRCtCLElBQXBEO0FBQ0EsV0FBSzlDLGdCQUFMLENBQXNCK0MsTUFBdEIsR0FBK0JDLEtBQS9CLENBQXFDLElBQXJDLEVBQTJDQyxPQUEzQztBQUNIO0FBaEtPLEdBQVo7QUFvS0FqRSxPQUFLLENBQUNNLElBQU47QUFHSCxDQXhLRCxFOzs7Ozs7Ozs7Ozs7QUNBQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuKGp8dClzeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcbmltcG9ydCBqcXVlcnkgZnJvbSAnanF1ZXJ5Jztcbi8vIGltcG9ydCAnLi9qcy9qcXVlcnknO1xuaW1wb3J0ICcuL2pzL3NlYXRzJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcblxuY29uc29sZS5sb2coJ3Rlc3QnKTsiLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuKGp8dClzeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc2VhdHMgPSB7XHJcblxyXG4gICAgICAgIHJvd19udW1iZXI6ICQoJyNyb3dzX251bWJlcicpLnZhbCgpLFxyXG4gICAgICAgIHNlYXRzX251bWJlcjogJCgnI3NlYXRzX251bWJlcicpLnZhbCgpLFxyXG4gICAgICAgIHNjcmVlbmluZ19pZDogJCgnI3NjcmVlbmluZ19pZCcpLnZhbCgpLFxyXG4gICAgICAgIHJlc2VydmVkX3NlYXRzOiBbXSxcclxuXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhY2hlRG9tKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyU2VhdHMoKTtcclxuICAgICAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY2FjaGVEb206IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy4kc2VhdHNfX2NvbnRhaW5lciA9ICQoJy5zZWF0c19fY29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgIHRoaXMuJHNlYXQgPSB0aGlzLiRzZWF0c19fY29udGFpbmVyLmZpbmQoJy5zZWF0c19fc2VhdCcpO1xyXG4gICAgICAgICAgICB0aGlzLiRmb3JtID0gJCgnI3Jlc2VydmF0aW9uX19mb3JtJyk7XHJcbiAgICAgICAgICAgIHRoaXMuJGJ0biA9IHRoaXMuJGZvcm0uZmluZCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtYWlsID0gJCgnI2VtYWlsJyk7XHJcbiAgICAgICAgICAgIHRoaXMuJGFsZXJ0X2NvbnRhaW5lciA9ICQoJy5hbGVydCcpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGJpbmRFdmVudHM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy4kc2VhdHNfX2NvbnRhaW5lci5kZWxlZ2F0ZSh0aGlzLiRzZWF0LCAnY2xpY2snLCB0aGlzLmJvb2tBU2VhdC5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgdGhpcy4kYnRuLmNsaWNrKHRoaXMuc2VuZERhdGEuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcmVuZGVyU2VhdHM6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciByb3dfbnVtYmVyID0gdGhpcy5yb3dfbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgc2VhdHNfbnVtYmVyID0gdGhpcy5zZWF0c19udW1iZXIsXHJcbiAgICAgICAgICAgICAgICBzZWF0c19jb250YWluZXIgPSB0aGlzLiRzZWF0c19fY29udGFpbmVyO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciB1cmwgPSAkKCcjcmVzZXJ2YXRpb25fdXJsJykudmFsKCk7XHJcblxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnXHJcbiAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50bHlfYm9va2VkX3NlYXRzID0gZGF0YS5jdXJyZW50X3Jlc2VydmF0aW9ucztcclxuXHJcbiAgICAgICAgICAgICAgICBzZWF0c19jb250YWluZXIuaHRtbCgnJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dfbnVtYmVyOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcm93ID0gJCgnPHVsLz4nLCB7J2NsYXNzJzogJ3NlYXRzX19yb3cnfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzZWF0c19udW1iZXI7IGorKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93LmFwcGVuZCgkKCc8bGkvPicsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnc2VhdHNfX3NlYXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtcm93JzogaSArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS1zZWF0JzogaiArIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYXBwZW5kKGogKyAxKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGN1cnJlbnRseV9ib29rZWRfc2VhdHMubGVuZ3RoOyBrKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PSAoY3VycmVudGx5X2Jvb2tlZF9zZWF0c1trXS5zZWF0IC0gMSkgJiYgaSA9PSBjdXJyZW50bHlfYm9va2VkX3NlYXRzW2tdLnJvdyAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dbMF0uY2hpbGRyZW5bal0uY2xhc3NMaXN0LmFkZCgnc2VhdHNfX3NlYXQtYm9va2VkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzZWF0c19jb250YWluZXIuYXBwZW5kKHJvdyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYm9va0FTZWF0OiBmdW5jdGlvbiAoZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciAkc2VhdCA9ICgkKGUudGFyZ2V0KSksXHJcbiAgICAgICAgICAgICAgICByb3dfbnVtYmVyID0gJHNlYXQuZGF0YSgncm93JyksXHJcbiAgICAgICAgICAgICAgICBzZWF0X251bWJlciA9ICRzZWF0LmRhdGEoJ3NlYXQnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUgPT09IGUuZGVsZWdhdGVUYXJnZXQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoISRzZWF0Lmhhc0NsYXNzKCdzZWF0c19fc2VhdC1hY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzZWF0LmFkZENsYXNzKCdzZWF0c19fc2VhdC1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2VydmVkX3NlYXRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAncm93Jzogcm93X251bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3NlYXQnOiBzZWF0X251bWJlclxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKHRoaXMucmVzZXJ2ZWRfc2VhdHMsICQucHJveHkoZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUucm93ID09IHJvd19udW1iZXIgJiYgdmFsdWUuc2VhdCA9PSBzZWF0X251bWJlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNlcnZlZF9zZWF0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgdGhpcykpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2VhdC5yZW1vdmVDbGFzcygnc2VhdHNfX3NlYXQtYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNlbmREYXRhOiBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlc2VydmVkX3NlYXRzID0gdGhpcy5yZXNlcnZlZF9zZWF0cyxcclxuICAgICAgICAgICAgICAgIHNjcmVlbmluZ19pZCA9IHRoaXMuc2NyZWVuaW5nX2lkLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyU2VhdHMgPSB0aGlzLnJlbmRlclNlYXRzLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgICAgICBhbGVydF9jb250YWluZXIgPSB0aGlzLiRhbGVydF9jb250YWluZXIsXHJcbiAgICAgICAgICAgICAgICAkZW1haWwgPSB0aGlzLiRlbWFpbDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkYXRlRGF0YSgpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzLiRmb3JtLmF0dHIoJ2FjdGlvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VhdHM6IHJlc2VydmVkX3NlYXRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JlZW5pbmdJZDogc2NyZWVuaW5nX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogJGVtYWlsLnZhbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncG9zdCdcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhbGVydF9jb250YWluZXIuYWRkQ2xhc3MoJ2FsZXJ0LXN1Y2Nlc3MnKS5odG1sKGRhdGEuaW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnRfY29udGFpbmVyLmZhZGVJbigpLmRlbGF5KDMwMDApLmZhZGVPdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJTZWF0cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICRlbWFpbC52YWwoXCJcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2VydmVkX3NlYXRzID0gW107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgdmFsaWRhdGVEYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByZXNlcnZlZF9zZWF0cyA9IHRoaXMucmVzZXJ2ZWRfc2VhdHMsXHJcbiAgICAgICAgICAgICAgICAkZW1haWwgPSB0aGlzLiRlbWFpbDtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNlcnZlZF9zZWF0cy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZpZWxkKCdQbGVhc2UgY2hvb3NlIHNlYXRzJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICgkZW1haWwudmFsKCkgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZpZWxkKCdQbGVhc2UgZmlsbCBlbWFpbCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLiRhbGVydF9jb250YWluZXIucmVtb3ZlQ2xhc3MoJ2FsZXJ0LWRhbmdlcicpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY2hlY2tGaWVsZDogZnVuY3Rpb24gKGluZm8pIHtcclxuICAgICAgICAgICAgdGhpcy4kYWxlcnRfY29udGFpbmVyLmFkZENsYXNzKCdhbGVydC1kYW5nZXInKS5odG1sKGluZm8pO1xyXG4gICAgICAgICAgICB0aGlzLiRhbGVydF9jb250YWluZXIuZmFkZUluKCkuZGVsYXkoMzAwMCkuZmFkZU91dCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHNlYXRzLmluaXQoKTtcclxuXHJcblxyXG59KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9