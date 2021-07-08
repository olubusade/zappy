(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-274abd17.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-274abd17.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-29df6f59.js */ "./node_modules/@ionic/core/dist/esm/index-29df6f59.js");
/* harmony import */ var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-eea61379.js */ "./node_modules/@ionic/core/dist/esm/index-eea61379.js");
/* harmony import */ var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-7b8ba70a.js */ "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js");




const createButtonActiveGesture = (el, isButton) => {
    let touchedButton;
    const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
        if (typeof document === 'undefined') {
            return;
        }
        const target = document.elementFromPoint(x, y);
        if (!target || !isButton(target)) {
            clearActiveButton();
            return;
        }
        if (target !== touchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
        }
    };
    const setActiveButton = (button, hapticFeedbackFn) => {
        touchedButton = button;
        const buttonToModify = touchedButton;
        Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => buttonToModify.classList.add('ion-activated'));
        hapticFeedbackFn();
    };
    const clearActiveButton = (dispatchClick = false) => {
        if (!touchedButton) {
            return;
        }
        const buttonToModify = touchedButton;
        Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => buttonToModify.classList.remove('ion-activated'));
        if (dispatchClick) {
            touchedButton.click();
        }
        touchedButton = undefined;
    };
    return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
        el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
        onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
        onEnd: () => {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
        }
    });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
    getEngine() {
        const win = window;
        return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
    },
    available() {
        return !!this.getEngine();
    },
    isCordova() {
        return !!window.TapticEngine;
    },
    isCapacitor() {
        const win = window;
        return !!win.Capacitor;
    },
    impact(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({ style });
    },
    notification(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({ style });
    },
    selection() {
        this.impact({ style: 'light' });
    },
    selectionStart() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionStart();
        }
        else {
            engine.gestureSelectionStart();
        }
    },
    selectionChanged() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    },
    selectionEnd() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionEnd();
        }
        else {
            engine.gestureSelectionEnd();
        }
    }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
    HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
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
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction, animation);
        }
    }
    return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fund-transfer/transfer2/transfer2.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fund-transfer/transfer2/transfer2.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"header-bg\">\n  <div class=\"container\">    \n    <ion-toolbar color=\"none\" class=\"text-white\">\n      <ion-buttons slot=\"start\" (click)=\"goBack()\">\n        <ion-icon ios=\"arrow-back-outline\" md=\"arrow-back\"></ion-icon>\n      </ion-buttons>\n      <ion-title color=\"primary\">Fund Transfer</ion-title>\n    </ion-toolbar>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <ion-buttons class=\"ion-align-items-center\">\n      <ion-button slot=\"start\" class=\"tool-text\" fill=\"clear\" (click)=\"goToService('fund-transfer')\">          \n        Make transfer here\n      </ion-button>\n      <ion-button slot=\"end\" class=\"tool-text\" fill=\"clear\" (click)=\"goToService('add-money')\">          \n        Add money\n        <img src=\"../../assets/icon/add_money_icon.svg\" alt=\"add-money\" class=\"ml-1\">\n      </ion-button>\n    </ion-buttons>\n   \n    <ion-card color=\"primary\" mode=\"ios\">  \n      <ion-card-content >\n        <p class=\"text\">Available Balance</p>\n        <div class=\"amount\">N 0.00</div>\n      </ion-card-content>\n    </ion-card>\n      <div class=\"most-recent\">        \n        <h4>\n          <img src=\"../../assets/icon/most_recent_icon.svg\" alt=\"most recent\">\n          Most recent\n        </h4>\n        <div class=\"slides\" id=\"slides\">\n          <ion-slides pager=\"false\" [options]=\"slideOpts\">\n            <ion-slide>\n              <div class=\"m-recent\">        \n                <span class=\"circle-sm\">\n                  GE\n                </span>\n                <p>          \n                  Grace Emmanuel\n                </p>\n              </div>\n            </ion-slide>\n            <ion-slide>\n              <div class=\"m-recent\">        \n                <span class=\"circle-sm\">\n                  GE\n                </span>\n                <p>          \n                  Grace Emmanuel\n                </p>\n              </div>\n            </ion-slide>\n            <ion-slide>\n              <div class=\"m-recent\">        \n                <span class=\"circle-sm\">\n                  GE\n                </span>\n                <p>          \n                  Grace Emmanuel\n                </p>\n              </div>\n            </ion-slide>\n            <ion-slide>\n              <div class=\"m-recent\">        \n                <span class=\"circle-sm\">\n                  GE\n                </span>\n                <p>          \n                  Grace Emmanuel\n                </p>\n              </div>\n            </ion-slide>\n            <ion-slide>\n              <div class=\"m-recent\">        \n                <span class=\"circle-sm\">\n                  GE\n                </span>\n                <p>          \n                  Grace Emmanuel\n                </p>\n              </div>\n            </ion-slide>\n          </ion-slides>\n        </div>\n      </div>\n      <ion-item lines=\"none\">\n        <ion-input placeholder=\"Amount\" type=\"text\" required></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label mode=\"ios\">Select Bank</ion-label>\n        <ion-select okText=\"Okay\" cancelText=\"Dismiss\" required>\n          <ion-select-option value=\"gtb\">GTBank</ion-select-option>\n          <ion-select-option value=\"first bank\">First Bank Nigeria</ion-select-option>\n          <ion-select-option value=\"uba\">UBA</ion-select-option>\n          <ion-select-option value=\"zenith\">Zenith</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-input placeholder=\"Account number\" size=\"number\" type=\"text\" required></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-input placeholder=\"Glory Emmanuel\" type=\"text\" required></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-input placeholder=\"Add a note (optional)\"></ion-input>\n      </ion-item> \n      <div class=\"ion-text-center\">\n        <ion-button color=\"primary\" (click)=\"goToService('success')\">\n          Send again\n        </ion-button>\n      </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/fund-transfer/transfer2/transfer2-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/fund-transfer/transfer2/transfer2-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: Transfer2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transfer2PageRoutingModule", function() { return Transfer2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _transfer2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transfer2.page */ "./src/app/fund-transfer/transfer2/transfer2.page.ts");




const routes = [
    {
        path: '',
        component: _transfer2_page__WEBPACK_IMPORTED_MODULE_3__["Transfer2Page"]
    }
];
let Transfer2PageRoutingModule = class Transfer2PageRoutingModule {
};
Transfer2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Transfer2PageRoutingModule);



/***/ }),

/***/ "./src/app/fund-transfer/transfer2/transfer2.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/fund-transfer/transfer2/transfer2.module.ts ***!
  \*************************************************************/
/*! exports provided: Transfer2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transfer2PageModule", function() { return Transfer2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _transfer2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transfer2-routing.module */ "./src/app/fund-transfer/transfer2/transfer2-routing.module.ts");
/* harmony import */ var _transfer2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transfer2.page */ "./src/app/fund-transfer/transfer2/transfer2.page.ts");







let Transfer2PageModule = class Transfer2PageModule {
};
Transfer2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _transfer2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Transfer2PageRoutingModule"]
        ],
        declarations: [_transfer2_page__WEBPACK_IMPORTED_MODULE_6__["Transfer2Page"]]
    })
], Transfer2PageModule);



/***/ }),

/***/ "./src/app/fund-transfer/transfer2/transfer2.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/fund-transfer/transfer2/transfer2.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  border: solid 1px #003679 !important;\n  --background: #ffffff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVuZC10cmFuc2Zlci90cmFuc2ZlcjIvQzpcXFVzZXJzXFxMZW5vdm9cXGRvY3VtZW50c1xcdnNjX2xvY2FsX2RldlxcbmF0aXZlLW1vYmlsZS1hcHBcXHphcHB5XFxmcm9udGVuZC9zcmNcXGFwcFxcZnVuZC10cmFuc2ZlclxcdHJhbnNmZXIyXFx0cmFuc2ZlcjIucGFnZS5zY3NzIiwic3JjL2FwcC9mdW5kLXRyYW5zZmVyL3RyYW5zZmVyMi90cmFuc2ZlcjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7RUFDQSxnQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZnVuZC10cmFuc2Zlci90cmFuc2ZlcjIvdHJhbnNmZXIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzAwMzY3OSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbn0iLCJpb24taXRlbSB7XG4gIGJvcmRlcjogc29saWQgMXB4ICMwMDM2NzkgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/fund-transfer/transfer2/transfer2.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/fund-transfer/transfer2/transfer2.page.ts ***!
  \***********************************************************/
/*! exports provided: Transfer2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transfer2Page", function() { return Transfer2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/navigation-service.service */ "./src/app/services/navigation-service.service.ts");




let Transfer2Page = class Transfer2Page {
    constructor(router, navService) {
        this.router = router;
        this.navService = navService;
        this.slideOpts = {
            slidesPerView: 4,
        };
    }
    goBack() {
        this.navService.navigateToPreviousPage();
    }
    ngOnInit() {
    }
    goToService(data) {
        if (data === 'success') {
            this.router.navigate(['/user-dashboard/transactions/' + data]);
        }
        else {
            this.router.navigate(['/user-dashboard/wallet/' + data]);
        }
    }
};
Transfer2Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_3__["NavigationServiceService"] }
];
Transfer2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transfer2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./transfer2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fund-transfer/transfer2/transfer2.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./transfer2.page.scss */ "./src/app/fund-transfer/transfer2/transfer2.page.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../fund-transfer.page.scss */ "./src/app/fund-transfer/fund-transfer.page.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../assets/css/main.scss */ "./src/assets/css/main.scss")).default]
    })
], Transfer2Page);



/***/ }),

/***/ "./src/app/services/otp-service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/otp-service.ts ***!
  \*****************************************/
/*! exports provided: OtpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpService", function() { return OtpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _core_config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/config/config */ "./src/app/core/config/config.ts");




let OtpService = 
// 
class OtpService {
    constructor(http) {
        this.http = http;
    }
    otpVerifyMobileNo(mobile_no, otp) {
        let data = { mobile_no, otp };
        return this.http.post(_core_config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiURL + '/otp_verify_mobile_no', data);
    }
    verifyOtp(mobile, otp) {
        let data = { mobile, otp };
        return this.http.post(_core_config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiURL + '/verify_otp', data);
    }
};
OtpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
OtpService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
    // 
], OtpService);



/***/ }),

/***/ "./src/app/services/storage-service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/storage-service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage-angular */ "./node_modules/@ionic/storage-angular/__ivy_ngcc__/fesm2015/ionic-storage-angular.js");
/* harmony import */ var _core_config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/config/config */ "./src/app/core/config/config.ts");




let StorageService = class StorageService {
    constructor(storage) {
        this.storage = storage;
        this._storage = null;
        this.init();
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // If using, define drivers here: await this.storage.defineDriver(/*...*/);
            const storage = yield this.storage.create();
            this._storage = storage;
        });
    }
    // Create and expose methods that users of this service can
    // call, for example:
    set(key, value) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            (_a = this._storage) === null || _a === void 0 ? void 0 : _a.set(key, value);
        });
    }
    get(mobile) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let localStorage_mobile;
            // console.log('Testing:', mobile);
            // return this.storage.get(mobile);
            // console.log(result);
            // return result;
            this.storage.forEach((key, value, index) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
                return yield this.getMobileNo(this.user_mobile);
            }));
        });
    }
    //console.log(this.user_mobile);
    passMobileNo() {
        console.log(this.getMobileNo(this.user_mobile));
        let mob = this.getMobileNo(this.user_mobile);
        return mob;
    }
    getMobileNo(mobile) {
        return mobile;
        // console.log(mobile);
    }
    getAll(key) {
        var _a;
        return (_a = this._storage) === null || _a === void 0 ? void 0 : _a.get(key);
    }
    remove(key) {
        var _a;
        (_a = this._storage) === null || _a === void 0 ? void 0 : _a.remove(key);
    }
    clear() {
        var _a;
        (_a = this._storage) === null || _a === void 0 ? void 0 : _a.clear();
    }
    length() {
        var _a;
        (_a = this._storage) === null || _a === void 0 ? void 0 : _a.length();
    }
    setEncryptionKey(key) {
        var _a;
        (_a = this._storage) === null || _a === void 0 ? void 0 : _a.setEncryptionKey(key);
    }
    enumerateRecords(key, value, index) {
        var _a;
        (_a = this._storage) === null || _a === void 0 ? void 0 : _a.forEach((key, value, index) => {
            console.log(key);
        });
    }
};
StorageService.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StorageService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map