(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["walk-through-walk-through-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/walk-through/walk-through/walk-through.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/walk-through/walk-through/walk-through.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"brand\">\n    <img src=\"../../assets/imgs/logo.png\" alt=\"logo\">\n  </div>\n  <div class=\"slides\" id=\"slides\">\n    <ion-slides pager=\"true\" [options]=\"slideOpts\">\n      <ion-slide>\n        <div class=\"main-layout\">            \n          <img src=\"../../assets/imgs/vector1.png\" alt=\"vector1\">\n          <span>\n            Make easy payments on all transactions\n          </span>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class=\"main-layout\">            \n          <img src=\"../../assets/imgs/vector2.png\" alt=\"vector2\">\n          <span>\n            Enjoy best rates for your Mobile Recharge, \n            Electricity Bill payment, Data Top-up, \n            Cable TV subscription.\n          </span>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class=\"main-layout\">            \n          <img src=\"../../assets/imgs/vector3.png\" alt=\"vector3\">\n          <span>\n            <strong>Zappy</strong> gives you upto 5% cashback \n            on Data and Airtime top upon every \n            Purchases or Transactions.\n          </span>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class=\"main-layout\">            \n          <img src=\"../../assets/imgs/vector4.png\" alt=\"vector4\">\n          <span>\n            Become a <strong>Zappy</strong> bills App Agent and make\n            money on every purchase or transaction\n          </span>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div> \n  <div class=\"pull-right\" (click)=\"skip()\">          \n    Skip\n    <img style = \"color:#9ACD32;\" src=\"../../assets/icon/skip_icon.svg\" alt=\"skip\">\n  </div>        \n</ion-content>\n");

/***/ }),

/***/ "./src/app/walk-through/walk-through-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/walk-through/walk-through-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: WalkThroughPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkThroughPageRoutingModule", function() { return WalkThroughPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _walk_through_walk_through_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./walk-through/walk-through.page */ "./src/app/walk-through/walk-through/walk-through.page.ts");




const routes = [
    {
        path: '',
        component: _walk_through_walk_through_page__WEBPACK_IMPORTED_MODULE_3__["WalkThroughPage"]
    }
];
let WalkThroughPageRoutingModule = class WalkThroughPageRoutingModule {
};
WalkThroughPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WalkThroughPageRoutingModule);



/***/ }),

/***/ "./src/app/walk-through/walk-through.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/walk-through/walk-through.module.ts ***!
  \*****************************************************/
/*! exports provided: WalkThroughPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkThroughPageModule", function() { return WalkThroughPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _walk_through_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./walk-through-routing.module */ "./src/app/walk-through/walk-through-routing.module.ts");
/* harmony import */ var _walk_through_walk_through_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./walk-through/walk-through.page */ "./src/app/walk-through/walk-through/walk-through.page.ts");







let WalkThroughPageModule = class WalkThroughPageModule {
};
WalkThroughPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _walk_through_routing_module__WEBPACK_IMPORTED_MODULE_5__["WalkThroughPageRoutingModule"]
        ],
        declarations: [_walk_through_walk_through_page__WEBPACK_IMPORTED_MODULE_6__["WalkThroughPage"]]
    })
], WalkThroughPageModule);



/***/ }),

/***/ "./src/app/walk-through/walk-through/walk-through.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/walk-through/walk-through/walk-through.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-layout {\n  align-items: center !important;\n  margin: 60px 30px 0px 30px;\n}\n.main-layout span {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n  text-align: center;\n  color: #3b3b3b;\n  padding: 82px 25px 35px 25px;\n}\nion-button {\n  text-align: right !important;\n}\n.pull-right {\n  margin: 40px 30px 0px 30px;\n  text-align: right;\n  color: #9ACD32;\n  letter-spacing: 2px;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n}\n.brand {\n  margin: 40px 110px 0px 110px !important;\n}\n.brand img {\n  margin-top: 10px;\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2Fsay10aHJvdWdoL3dhbGstdGhyb3VnaC9DOlxcVXNlcnNcXExlbm92b1xcZG9jdW1lbnRzXFx2c2NfbG9jYWxfZGV2XFxuYXRpdmUtbW9iaWxlLWFwcFxcemFwcHlcXGZyb250ZW5kL3NyY1xcYXBwXFx3YWxrLXRocm91Z2hcXHdhbGstdGhyb3VnaFxcd2Fsay10aHJvdWdoLnBhZ2Uuc2NzcyIsInNyYy9hcHAvd2Fsay10aHJvdWdoL3dhbGstdGhyb3VnaC93YWxrLXRocm91Z2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsOEJBQUE7RUFDQSwwQkFBQTtBQ0NEO0FEQ0M7RUFDQyxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtBQ0NGO0FER0E7RUFDQyw0QkFBQTtBQ0FEO0FER0E7RUFDQywwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQUQ7QURHQTtFQUNDLHVDQUFBO0FDQUQ7QURFQztFQUNDLGdCQUFBO0VBQ0Esc0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3dhbGstdGhyb3VnaC93YWxrLXRocm91Z2gvd2Fsay10aHJvdWdoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWxheW91dCB7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcblx0bWFyZ2luOiA2MHB4IDMwcHggMHB4IDMwcHg7XG5cblx0c3BhbiB7XG5cdFx0Zm9udC1mYW1pbHk6ICdQb3BwaW5zJztcblx0XHRmb250LXN0eWxlOiBub3JtYWw7XG5cdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0bGluZS1oZWlnaHQ6IDE4cHg7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGNvbG9yOiAjM2IzYjNiO1xuXHRcdHBhZGRpbmc6IDgycHggMjVweCAzNXB4IDI1cHg7XG5cdH1cbn1cblxuaW9uLWJ1dHRvbiB7XG5cdHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbi5wdWxsLXJpZ2h0IHtcblx0bWFyZ2luOiA0MHB4IDMwcHggMHB4IDMwcHg7XG5cdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRjb2xvcjogIzlBQ0QzMjtcblx0bGV0dGVyLXNwYWNpbmc6IDJweDtcblx0Zm9udC1mYW1pbHk6ICdQb3BwaW5zJztcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4uYnJhbmQge1xuXHRtYXJnaW46IDQwcHggMTEwcHggMHB4IDExMHB4ICFpbXBvcnRhbnQ7XG5cblx0aW1nIHtcblx0XHRtYXJnaW4tdG9wOiAxMHB4O1xuXHRcdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cdH1cbn1cblxuLy8gLnNsaWRlcyB7XG4vLyAgIC8vcG9zaXRpb246IGFic29sdXRlO1xuLy8gICBtYXJnaW46IDYwcHggMHB4IDMwcHg7XG4vLyB9XG4iLCIubWFpbi1sYXlvdXQge1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNjBweCAzMHB4IDBweCAzMHB4O1xufVxuLm1haW4tbGF5b3V0IHNwYW4ge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzNiM2IzYjtcbiAgcGFkZGluZzogODJweCAyNXB4IDM1cHggMjVweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbi5wdWxsLXJpZ2h0IHtcbiAgbWFyZ2luOiA0MHB4IDMwcHggMHB4IDMwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogIzlBQ0QzMjtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5icmFuZCB7XG4gIG1hcmdpbjogNDBweCAxMTBweCAwcHggMTEwcHggIWltcG9ydGFudDtcbn1cbi5icmFuZCBpbWcge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/walk-through/walk-through/walk-through.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/walk-through/walk-through/walk-through.page.ts ***!
  \****************************************************************/
/*! exports provided: WalkThroughPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkThroughPage", function() { return WalkThroughPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let WalkThroughPage = class WalkThroughPage {
    constructor(router) {
        this.router = router;
        this.slideOpts = {
            slidesPerView: 1,
        };
    }
    ngOnInit() {
    }
    skip() {
        this.router.navigate(['/home']);
    }
};
WalkThroughPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
WalkThroughPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-walk-through',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./walk-through.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/walk-through/walk-through/walk-through.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./walk-through.page.scss */ "./src/app/walk-through/walk-through/walk-through.page.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../assets/css/main.scss */ "./src/assets/css/main.scss")).default]
    })
], WalkThroughPage);



/***/ })

}]);
//# sourceMappingURL=walk-through-walk-through-module-es2015.js.map