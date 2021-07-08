(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-methods-payment-methods-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment-methods/payment-methods/payment-methods.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment-methods/payment-methods/payment-methods.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons mode=\"ios\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n      <ion-button></ion-button>\n    </ion-buttons>\n    <ion-title >Payment Methods</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"signup-upper\">\n    <div class=\"d-flex p-2\">\n      <span>\n        <img src=\"../../assets/icon/pay_with_card_icon.svg\" alt=\"card\">\n      </span>\n      <span>Pay with Card</span>\n    </div>\n    <div class=\"d-flex p-2\">\n      <span>\n        <img src=\"../../assets/icon/pay_with_bank_transfer_icon.svg\" alt=\"card\">\n      </span>\n      <span>Pay with Bank Transfer</span>\n    </div>\n    <div class=\"d-flex p-2\">\n      <span>\n        <img src=\"../../assets/icon/gtb_737_icon.svg\" alt=\"gtbank\">\n      </span>\n      <span>Pay with GTBank 737</span>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/payment-methods/payment-methods-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/payment-methods/payment-methods-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: PaymentMethodsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodsPageRoutingModule", function() { return PaymentMethodsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _payment_methods_payment_methods_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-methods/payment-methods.page */ "./src/app/payment-methods/payment-methods/payment-methods.page.ts");




const routes = [
    {
        path: '',
        component: _payment_methods_payment_methods_page__WEBPACK_IMPORTED_MODULE_3__["PaymentMethodsPage"]
    }
];
let PaymentMethodsPageRoutingModule = class PaymentMethodsPageRoutingModule {
};
PaymentMethodsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentMethodsPageRoutingModule);



/***/ }),

/***/ "./src/app/payment-methods/payment-methods.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/payment-methods/payment-methods.module.ts ***!
  \***********************************************************/
/*! exports provided: PaymentMethodsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodsPageModule", function() { return PaymentMethodsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _payment_methods_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-methods-routing.module */ "./src/app/payment-methods/payment-methods-routing.module.ts");
/* harmony import */ var _payment_methods_payment_methods_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-methods/payment-methods.page */ "./src/app/payment-methods/payment-methods/payment-methods.page.ts");







let PaymentMethodsPageModule = class PaymentMethodsPageModule {
};
PaymentMethodsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _payment_methods_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentMethodsPageRoutingModule"]
        ],
        declarations: [_payment_methods_payment_methods_page__WEBPACK_IMPORTED_MODULE_6__["PaymentMethodsPage"]]
    })
], PaymentMethodsPageModule);



/***/ }),

/***/ "./src/app/payment-methods/payment-methods/payment-methods.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/payment-methods/payment-methods/payment-methods.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #f5f5f5;\n}\n\n.signup-upper div {\n  background: #ffffff;\n  width: 100%;\n  margin: 15px 20px;\n  align-items: center;\n  justify-content: center;\n}\n\n.signup-upper span {\n  color: #003679;\n  margin: 0 10px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC1tZXRob2RzL3BheW1lbnQtbWV0aG9kcy9DOlxcVXNlcnNcXExlbm92b1xcZG9jdW1lbnRzXFx2c2NfbG9jYWxfZGV2XFxuYXRpdmUtbW9iaWxlLWFwcFxcemFwcHlcXGZyb250ZW5kL3NyY1xcYXBwXFxwYXltZW50LW1ldGhvZHNcXHBheW1lbnQtbWV0aG9kc1xccGF5bWVudC1tZXRob2RzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGF5bWVudC1tZXRob2RzL3BheW1lbnQtbWV0aG9kcy9wYXltZW50LW1ldGhvZHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUNDRjs7QURHRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0FKOztBREVFO0VBQ0MsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0FIIiwiZmlsZSI6InNyYy9hcHAvcGF5bWVudC1tZXRob2RzL3BheW1lbnQtbWV0aG9kcy9wYXltZW50LW1ldGhvZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XG59XG5cbi5zaWdudXAtdXBwZXIge1xuICBkaXYge1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxNXB4IDIwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBzcGFuIHtcbiAgIGNvbG9yOiAjMDAzNjc5O1xuICAgbWFyZ2luOiAwIDEwcHg7XG4gICBmb250LXdlaWdodDogNjAwO1xuICB9XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XG59XG5cbi5zaWdudXAtdXBwZXIgZGl2IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTVweCAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zaWdudXAtdXBwZXIgc3BhbiB7XG4gIGNvbG9yOiAjMDAzNjc5O1xuICBtYXJnaW46IDAgMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/payment-methods/payment-methods/payment-methods.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/payment-methods/payment-methods/payment-methods.page.ts ***!
  \*************************************************************************/
/*! exports provided: PaymentMethodsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodsPage", function() { return PaymentMethodsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/navigation-service.service */ "./src/app/services/navigation-service.service.ts");




let PaymentMethodsPage = class PaymentMethodsPage {
    constructor(router, navService) {
        this.router = router;
        this.navService = navService;
    }
    goBack() {
        this.navService.navigateToPreviousPage();
    }
    ngOnInit() {
    }
};
PaymentMethodsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_3__["NavigationServiceService"] }
];
PaymentMethodsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment-methods',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./payment-methods.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment-methods/payment-methods/payment-methods.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./payment-methods.page.scss */ "./src/app/payment-methods/payment-methods/payment-methods.page.scss")).default]
    })
], PaymentMethodsPage);



/***/ }),

/***/ "./src/app/services/navigation-service.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/navigation-service.service.ts ***!
  \********************************************************/
/*! exports provided: NavigationServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationServiceService", function() { return NavigationServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let NavigationServiceService = class NavigationServiceService {
    constructor(router, navController) {
        this.router = router;
        this.navController = navController;
    }
    navigateToPreviousPage() {
        const url = this.router.url;
        if (url.match("(^\/[a-zA-Z0-9\-\.]*)$")) {
            navigator['app'].exitApp();
        }
        else {
            this.navController.navigateBack(url.replace(new RegExp("(\/([a-zA-Z0-9\-\.])*)$"), ""));
        }
    }
};
NavigationServiceService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
NavigationServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NavigationServiceService);



/***/ })

}]);
//# sourceMappingURL=payment-methods-payment-methods-module-es2015.js.map