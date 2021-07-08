(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-page-landing-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page/landing-page.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page/landing-page.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"main-layout\">\n    <img src=\"../../assets/imgs/logo.png\" alt=\"Zappy Logo\">\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/landing-page/landing-page-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/landing-page/landing-page-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: LandingPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPagePageRoutingModule", function() { return LandingPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _landing_page_landing_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing-page/landing-page.page */ "./src/app/landing-page/landing-page/landing-page.page.ts");




const routes = [
    {
        path: '',
        component: _landing_page_landing_page_page__WEBPACK_IMPORTED_MODULE_3__["LandingPagePage"]
    }
];
let LandingPagePageRoutingModule = class LandingPagePageRoutingModule {
};
LandingPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LandingPagePageRoutingModule);



/***/ }),

/***/ "./src/app/landing-page/landing-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/landing-page/landing-page.module.ts ***!
  \*****************************************************/
/*! exports provided: LandingPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPagePageModule", function() { return LandingPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing-page-routing.module */ "./src/app/landing-page/landing-page-routing.module.ts");
/* harmony import */ var _landing_page_landing_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing-page/landing-page.page */ "./src/app/landing-page/landing-page/landing-page.page.ts");







let LandingPagePageModule = class LandingPagePageModule {
};
LandingPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["LandingPagePageRoutingModule"]
        ],
        declarations: [_landing_page_landing_page_page__WEBPACK_IMPORTED_MODULE_6__["LandingPagePage"]]
    })
], LandingPagePageModule);



/***/ }),

/***/ "./src/app/landing-page/landing-page/landing-page.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/landing-page/landing-page/landing-page.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-layout {\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100vh;\n}\n.main-layout img {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS9DOlxcVXNlcnNcXExlbm92b1xcZG9jdW1lbnRzXFx2c2NfbG9jYWxfZGV2XFxuYXRpdmUtbW9iaWxlLWFwcFxcemFwcHlcXGZyb250ZW5kL3NyY1xcYXBwXFxsYW5kaW5nLXBhZ2VcXGxhbmRpbmctcGFnZVxcbGFuZGluZy1wYWdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7QUNDRjtBRENFO0VBQ0UsVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tbGF5b3V0IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMHZoO1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxufSIsIi5tYWluLWxheW91dCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5tYWluLWxheW91dCBpbWcge1xuICB3aWR0aDogNTAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/landing-page/landing-page/landing-page.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/landing-page/landing-page/landing-page.page.ts ***!
  \****************************************************************/
/*! exports provided: LandingPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPagePage", function() { return LandingPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let LandingPagePage = class LandingPagePage {
    constructor() { }
    ngOnInit() {
    }
};
LandingPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./landing-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page/landing-page.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./landing-page.page.scss */ "./src/app/landing-page/landing-page/landing-page.page.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../assets/css/main.scss */ "./src/assets/css/main.scss")).default]
    })
], LandingPagePage);



/***/ })

}]);
//# sourceMappingURL=landing-page-landing-page-module-es2015.js.map