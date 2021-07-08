function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/button-active-274abd17.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/button-active-274abd17.js ***!
    \*********************************************************************/

  /*! exports provided: c */

  /***/
  function node_modulesIonicCoreDistEsmButtonActive274abd17Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createButtonActiveGesture;
    });
    /* harmony import */


    var _index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-29df6f59.js */
    "./node_modules/@ionic/core/dist/esm/index-29df6f59.js");
    /* harmony import */


    var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index-eea61379.js */
    "./node_modules/@ionic/core/dist/esm/index-eea61379.js");
    /* harmony import */


    var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./haptic-7b8ba70a.js */
    "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js");

    var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
      var touchedButton;

      var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
        if (typeof document === 'undefined') {
          return;
        }

        var target = document.elementFromPoint(x, y);

        if (!target || !isButton(target)) {
          clearActiveButton();
          return;
        }

        if (target !== touchedButton) {
          clearActiveButton();
          setActiveButton(target, hapticFeedbackFn);
        }
      };

      var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
        touchedButton = button;
        var buttonToModify = touchedButton;
        Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__["w"])(function () {
          return buttonToModify.classList.add('ion-activated');
        });
        hapticFeedbackFn();
      };

      var clearActiveButton = function clearActiveButton() {
        var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (!touchedButton) {
          return;
        }

        var buttonToModify = touchedButton;
        Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__["w"])(function () {
          return buttonToModify.classList.remove('ion-activated');
        });

        if (dispatchClick) {
          touchedButton.click();
        }

        touchedButton = undefined;
      };

      return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
        el: el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: function onStart(ev) {
          return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
        },
        onMove: function onMove(ev) {
          return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
        },
        onEnd: function onEnd() {
          clearActiveButton(true);
          Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
        }
      });
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
    \**************************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegateD1eb6504Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });

    var attachComponent = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);

                if (!el.componentOnReady) {
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return el.componentOnReady();

              case 11:
                return _context.abrupt("return", el);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();

    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
    \**************************************************************/

  /*! exports provided: a, b, c, d, h */

  /***/
  function node_modulesIonicCoreDistEsmHaptic7b8ba70aJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return hapticImpact;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelectionEnd;
    });

    var HapticEngine = {
      getEngine: function getEngine() {
        var win = window;
        return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
      },
      available: function available() {
        return !!this.getEngine();
      },
      isCordova: function isCordova() {
        return !!window.TapticEngine;
      },
      isCapacitor: function isCapacitor() {
        var win = window;
        return !!win.Capacitor;
      },
      impact: function impact(options) {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({
          style: style
        });
      },
      notification: function notification(options) {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({
          style: style
        });
      },
      selection: function selection() {
        this.impact({
          style: 'light'
        });
      },
      selectionStart: function selectionStart() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionStart();
        } else {
          engine.gestureSelectionStart();
        }
      },
      selectionChanged: function selectionChanged() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionChanged();
        } else {
          engine.gestureSelectionChanged();
        }
      },
      selectionEnd: function selectionEnd() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionEnd();
        } else {
          engine.gestureSelectionEnd();
        }
      }
    };
    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */

    var hapticSelection = function hapticSelection() {
      HapticEngine.selection();
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    var hapticSelectionStart = function hapticSelectionStart() {
      HapticEngine.selectionStart();
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    var hapticSelectionChanged = function hapticSelectionChanged() {
      HapticEngine.selectionChanged();
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    var hapticSelectionEnd = function hapticSelectionEnd() {
      HapticEngine.selectionEnd();
    };
    /**
     * Use this to indicate success/failure/warning to the user.
     * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
     */


    var hapticImpact = function hapticImpact(options) {
      HapticEngine.impact(options);
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
    \***********************************************************************/

  /*! exports provided: S */

  /***/
  function node_modulesIonicCoreDistEsmSpinnerConfigsC78e170eJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return SPINNERS;
    });

    var spinners = {
      'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function fn(dur, index, total) {
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          var angle = 2 * Math.PI * index / total;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circles': {
        dur: 1000,
        circles: 8,
        fn: function fn(dur, index, total) {
          var step = index / total;
          var animationDelay = "".concat(dur * step - dur, "ms");
          var angle = 2 * Math.PI * step;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function fn() {
          return {
            r: 20,
            cx: 48,
            cy: 48,
            fill: 'none',
            viewBox: '24 24 48 48',
            transform: 'translate(0,0)',
            style: {}
          };
        }
      },
      'crescent': {
        dur: 750,
        circles: 1,
        fn: function fn() {
          return {
            r: 26,
            style: {}
          };
        }
      },
      'dots': {
        dur: 750,
        circles: 3,
        fn: function fn(_, index) {
          var animationDelay = -(110 * index) + 'ms';
          return {
            r: 6,
            style: {
              'left': "".concat(9 - 9 * index, "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 17,
            y2: 29,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 12,
            y2: 20,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      }
    };
    var SPINNERS = spinners;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmTheme3f0b0c04Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    var createColorClasses = function createColorClasses(color) {
      return typeof color === 'string' && color.length > 0 ? _defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true) : undefined;
    };

    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }

      return [];
    };

    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };

    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    var openURL = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
        var router;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context2.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context2.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context2.abrupt("return", router.push(url, direction, animation));

              case 5:
                return _context2.abrupt("return", false);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function openURL(_x6, _x7, _x8, _x9) {
        return _ref3.apply(this, arguments);
      };
    }();
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/fund-transfer/transfer2/transfer2.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fund-transfer/transfer2/transfer2.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFundTransferTransfer2Transfer2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"header-bg\">\n  <div class=\"container\">    \n    <ion-toolbar color=\"none\" class=\"text-white\">\n      <ion-buttons slot=\"start\" (click)=\"goBack()\">\n        <ion-icon ios=\"arrow-back-outline\" md=\"arrow-back\"></ion-icon>\n      </ion-buttons>\n      <ion-title color=\"primary\">Fund Transfer</ion-title>\n    </ion-toolbar>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <ion-buttons class=\"ion-align-items-center\">\n      <ion-button slot=\"start\" class=\"tool-text\" fill=\"clear\" (click)=\"goToService('fund-transfer')\">          \n        Make transfer here\n      </ion-button>\n      <ion-button slot=\"end\" class=\"tool-text\" fill=\"clear\" (click)=\"goToService('add-money')\">          \n        Add money\n        <img src=\"../../assets/icon/add_money_icon.svg\" alt=\"add-money\" class=\"ml-1\">\n      </ion-button>\n    </ion-buttons>\n   \n    <ion-card color=\"primary\" mode=\"ios\">  \n      <ion-card-content >\n        <p class=\"text\">Available Balance</p>\n        <div class=\"amount\">N 0.00</div>\n      </ion-card-content>\n    </ion-card>\n      <div class=\"most-recent\">        \n        <h4>\n          <img src=\"../../assets/icon/most_recent_icon.svg\" alt=\"most recent\">\n          Most recent\n        </h4>\n        <div class=\"slides\" id=\"slides\">\n          <ion-slides pager=\"false\" [options]=\"slideOpts\">\n            <ion-slide>\n              <div class=\"m-recent\">        \n                <span class=\"circle-sm\">\n                  GE\n                </span>\n                <p>          \n                  Grace Emmanuel\n                </p>\n              </div>\n            </ion-slide>\n            <ion-slide>\n              <div class=\"m-recent\">        \n                <span class=\"circle-sm\">\n                  GE\n                </span>\n                <p>          \n                  Grace Emmanuel\n                </p>\n              </div>\n            </ion-slide>\n            <ion-slide>\n              <div class=\"m-recent\">        \n                <span class=\"circle-sm\">\n                  GE\n                </span>\n                <p>          \n                  Grace Emmanuel\n                </p>\n              </div>\n            </ion-slide>\n            <ion-slide>\n              <div class=\"m-recent\">        \n                <span class=\"circle-sm\">\n                  GE\n                </span>\n                <p>          \n                  Grace Emmanuel\n                </p>\n              </div>\n            </ion-slide>\n            <ion-slide>\n              <div class=\"m-recent\">        \n                <span class=\"circle-sm\">\n                  GE\n                </span>\n                <p>          \n                  Grace Emmanuel\n                </p>\n              </div>\n            </ion-slide>\n          </ion-slides>\n        </div>\n      </div>\n      <ion-item lines=\"none\">\n        <ion-input placeholder=\"Amount\" type=\"text\" required></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label mode=\"ios\">Select Bank</ion-label>\n        <ion-select okText=\"Okay\" cancelText=\"Dismiss\" required>\n          <ion-select-option value=\"gtb\">GTBank</ion-select-option>\n          <ion-select-option value=\"first bank\">First Bank Nigeria</ion-select-option>\n          <ion-select-option value=\"uba\">UBA</ion-select-option>\n          <ion-select-option value=\"zenith\">Zenith</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-input placeholder=\"Account number\" size=\"number\" type=\"text\" required></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-input placeholder=\"Glory Emmanuel\" type=\"text\" required></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-input placeholder=\"Add a note (optional)\"></ion-input>\n      </ion-item> \n      <div class=\"ion-text-center\">\n        <ion-button color=\"primary\" (click)=\"goToService('success')\">\n          Send again\n        </ion-button>\n      </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/fund-transfer/transfer2/transfer2-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/fund-transfer/transfer2/transfer2-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: Transfer2PageRoutingModule */

  /***/
  function srcAppFundTransferTransfer2Transfer2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Transfer2PageRoutingModule", function () {
      return Transfer2PageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _transfer2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./transfer2.page */
    "./src/app/fund-transfer/transfer2/transfer2.page.ts");

    var routes = [{
      path: '',
      component: _transfer2_page__WEBPACK_IMPORTED_MODULE_3__["Transfer2Page"]
    }];

    var Transfer2PageRoutingModule = function Transfer2PageRoutingModule() {
      _classCallCheck(this, Transfer2PageRoutingModule);
    };

    Transfer2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Transfer2PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/fund-transfer/transfer2/transfer2.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/fund-transfer/transfer2/transfer2.module.ts ***!
    \*************************************************************/

  /*! exports provided: Transfer2PageModule */

  /***/
  function srcAppFundTransferTransfer2Transfer2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Transfer2PageModule", function () {
      return Transfer2PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _transfer2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./transfer2-routing.module */
    "./src/app/fund-transfer/transfer2/transfer2-routing.module.ts");
    /* harmony import */


    var _transfer2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./transfer2.page */
    "./src/app/fund-transfer/transfer2/transfer2.page.ts");

    var Transfer2PageModule = function Transfer2PageModule() {
      _classCallCheck(this, Transfer2PageModule);
    };

    Transfer2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _transfer2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Transfer2PageRoutingModule"]],
      declarations: [_transfer2_page__WEBPACK_IMPORTED_MODULE_6__["Transfer2Page"]]
    })], Transfer2PageModule);
    /***/
  },

  /***/
  "./src/app/fund-transfer/transfer2/transfer2.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/fund-transfer/transfer2/transfer2.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFundTransferTransfer2Transfer2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item {\n  border: solid 1px #003679 !important;\n  --background: #ffffff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVuZC10cmFuc2Zlci90cmFuc2ZlcjIvQzpcXFVzZXJzXFxMZW5vdm9cXGRvY3VtZW50c1xcdnNjX2xvY2FsX2RldlxcbmF0aXZlLW1vYmlsZS1hcHBcXHphcHB5XFxmcm9udGVuZC9zcmNcXGFwcFxcZnVuZC10cmFuc2ZlclxcdHJhbnNmZXIyXFx0cmFuc2ZlcjIucGFnZS5zY3NzIiwic3JjL2FwcC9mdW5kLXRyYW5zZmVyL3RyYW5zZmVyMi90cmFuc2ZlcjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7RUFDQSxnQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZnVuZC10cmFuc2Zlci90cmFuc2ZlcjIvdHJhbnNmZXIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzAwMzY3OSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbn0iLCJpb24taXRlbSB7XG4gIGJvcmRlcjogc29saWQgMXB4ICMwMDM2NzkgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/fund-transfer/transfer2/transfer2.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/fund-transfer/transfer2/transfer2.page.ts ***!
    \***********************************************************/

  /*! exports provided: Transfer2Page */

  /***/
  function srcAppFundTransferTransfer2Transfer2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Transfer2Page", function () {
      return Transfer2Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/navigation-service.service */
    "./src/app/services/navigation-service.service.ts");

    var Transfer2Page = /*#__PURE__*/function () {
      function Transfer2Page(router, navService) {
        _classCallCheck(this, Transfer2Page);

        this.router = router;
        this.navService = navService;
        this.slideOpts = {
          slidesPerView: 4
        };
      }

      _createClass(Transfer2Page, [{
        key: "goBack",
        value: function goBack() {
          this.navService.navigateToPreviousPage();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToService",
        value: function goToService(data) {
          if (data === 'success') {
            this.router.navigate(['/user-dashboard/transactions/' + data]);
          } else {
            this.router.navigate(['/user-dashboard/wallet/' + data]);
          }
        }
      }]);

      return Transfer2Page;
    }();

    Transfer2Page.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_3__["NavigationServiceService"]
      }];
    };

    Transfer2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-transfer2',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./transfer2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/fund-transfer/transfer2/transfer2.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./transfer2.page.scss */
      "./src/app/fund-transfer/transfer2/transfer2.page.scss"))["default"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ../fund-transfer.page.scss */
      "./src/app/fund-transfer/fund-transfer.page.scss"))["default"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ../../../assets/css/main.scss */
      "./src/assets/css/main.scss"))["default"]]
    })], Transfer2Page);
    /***/
  },

  /***/
  "./src/app/services/otp-service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/otp-service.ts ***!
    \*****************************************/

  /*! exports provided: OtpService */

  /***/
  function srcAppServicesOtpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtpService", function () {
      return OtpService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _core_config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../core/config/config */
    "./src/app/core/config/config.ts");

    var OtpService =
    /*#__PURE__*/
    // 
    function () {
      function OtpService(http) {
        _classCallCheck(this, OtpService);

        this.http = http;
      }

      _createClass(OtpService, [{
        key: "otpVerifyMobileNo",
        value: function otpVerifyMobileNo(mobile_no, otp) {
          var data = {
            mobile_no: mobile_no,
            otp: otp
          };
          return this.http.post(_core_config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiURL + '/otp_verify_mobile_no', data);
        }
      }, {
        key: "verifyOtp",
        value: function verifyOtp(mobile, otp) {
          var data = {
            mobile: mobile,
            otp: otp
          };
          return this.http.post(_core_config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiURL + '/verify_otp', data);
        }
      }]);

      return OtpService;
    }();

    OtpService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    OtpService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }) // 
    ], OtpService);
    /***/
  },

  /***/
  "./src/app/services/storage-service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/storage-service.ts ***!
    \*********************************************/

  /*! exports provided: StorageService */

  /***/
  function srcAppServicesStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageService", function () {
      return StorageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage-angular */
    "./node_modules/@ionic/storage-angular/__ivy_ngcc__/fesm2015/ionic-storage-angular.js");
    /* harmony import */


    var _core_config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../core/config/config */
    "./src/app/core/config/config.ts");

    var StorageService = /*#__PURE__*/function () {
      function StorageService(storage) {
        _classCallCheck(this, StorageService);

        this.storage = storage;
        this._storage = null;
        this.init();
      }

      _createClass(StorageService, [{
        key: "init",
        value: function init() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var storage;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.storage.create();

                  case 2:
                    storage = _context3.sent;
                    this._storage = storage;

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } // Create and expose methods that users of this service can
        // call, for example:

      }, {
        key: "set",
        value: function set(key, value) {
          var _a;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    (_a = this._storage) === null || _a === void 0 ? void 0 : _a.set(key, value);

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "get",
        value: function get(mobile) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this = this;

            var localStorage_mobile;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    // console.log('Testing:', mobile);
                    // return this.storage.get(mobile);
                    // console.log(result);
                    // return result;
                    this.storage.forEach(function (key, value, index) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                        return regeneratorRuntime.wrap(function _callee5$(_context5) {
                          while (1) {
                            switch (_context5.prev = _context5.next) {
                              case 0:
                                console.log(index);
                                console.log(key);
                                console.log(value);

                                if (value == mobile) {
                                  console.log(index);
                                  console.log(key);
                                  console.log(value);
                                  this.user_mobile = key;
                                  _core_config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].mobile = key;
                                }

                                console.log('MOBILE #:', this.user_mobile);
                                _context5.next = 7;
                                return this.getMobileNo(this.user_mobile);

                              case 7:
                                return _context5.abrupt("return", _context5.sent);

                              case 8:
                              case "end":
                                return _context5.stop();
                            }
                          }
                        }, _callee5, this);
                      }));
                    });

                  case 1:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        } //console.log(this.user_mobile);

      }, {
        key: "passMobileNo",
        value: function passMobileNo() {
          console.log(this.getMobileNo(this.user_mobile));
          var mob = this.getMobileNo(this.user_mobile);
          return mob;
        }
      }, {
        key: "getMobileNo",
        value: function getMobileNo(mobile) {
          return mobile; // console.log(mobile);
        }
      }, {
        key: "getAll",
        value: function getAll(key) {
          var _a;

          return (_a = this._storage) === null || _a === void 0 ? void 0 : _a.get(key);
        }
      }, {
        key: "remove",
        value: function remove(key) {
          var _a;

          (_a = this._storage) === null || _a === void 0 ? void 0 : _a.remove(key);
        }
      }, {
        key: "clear",
        value: function clear() {
          var _a;

          (_a = this._storage) === null || _a === void 0 ? void 0 : _a.clear();
        }
      }, {
        key: "length",
        value: function length() {
          var _a;

          (_a = this._storage) === null || _a === void 0 ? void 0 : _a.length();
        }
      }, {
        key: "setEncryptionKey",
        value: function setEncryptionKey(key) {
          var _a;

          (_a = this._storage) === null || _a === void 0 ? void 0 : _a.setEncryptionKey(key);
        }
      }, {
        key: "enumerateRecords",
        value: function enumerateRecords(key, value, index) {
          var _a;

          (_a = this._storage) === null || _a === void 0 ? void 0 : _a.forEach(function (key, value, index) {
            console.log(key);
          });
        }
      }]);

      return StorageService;
    }();

    StorageService.ctorParameters = function () {
      return [{
        type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }];
    };

    StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StorageService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map