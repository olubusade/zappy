(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transaction-pin-transaction-pin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/transaction-pin/transaction-pin.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/transaction-pin/transaction-pin.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>transaction-pin</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/signup/transaction-pin/transaction-pin-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/signup/transaction-pin/transaction-pin-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: TransactionPinPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionPinPageRoutingModule", function() { return TransactionPinPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _transaction_pin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transaction-pin.page */ "./src/app/signup/transaction-pin/transaction-pin.page.ts");




const routes = [
    {
        path: '',
        component: _transaction_pin_page__WEBPACK_IMPORTED_MODULE_3__["TransactionPinPage"]
    }
];
let TransactionPinPageRoutingModule = class TransactionPinPageRoutingModule {
};
TransactionPinPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TransactionPinPageRoutingModule);



/***/ }),

/***/ "./src/app/signup/transaction-pin/transaction-pin.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/signup/transaction-pin/transaction-pin.module.ts ***!
  \******************************************************************/
/*! exports provided: TransactionPinPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionPinPageModule", function() { return TransactionPinPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _transaction_pin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transaction-pin-routing.module */ "./src/app/signup/transaction-pin/transaction-pin-routing.module.ts");
/* harmony import */ var _transaction_pin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transaction-pin.page */ "./src/app/signup/transaction-pin/transaction-pin.page.ts");







let TransactionPinPageModule = class TransactionPinPageModule {
};
TransactionPinPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _transaction_pin_routing_module__WEBPACK_IMPORTED_MODULE_5__["TransactionPinPageRoutingModule"]
        ],
        declarations: [_transaction_pin_page__WEBPACK_IMPORTED_MODULE_6__["TransactionPinPage"]]
    })
], TransactionPinPageModule);



/***/ }),

/***/ "./src/app/signup/transaction-pin/transaction-pin.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/signup/transaction-pin/transaction-pin.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC90cmFuc2FjdGlvbi1waW4vdHJhbnNhY3Rpb24tcGluLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/signup/transaction-pin/transaction-pin.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/signup/transaction-pin/transaction-pin.page.ts ***!
  \****************************************************************/
/*! exports provided: TransactionPinPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionPinPage", function() { return TransactionPinPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TransactionPinPage = class TransactionPinPage {
    constructor() { }
    ngOnInit() {
    }
};
TransactionPinPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transaction-pin',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./transaction-pin.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/transaction-pin/transaction-pin.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./transaction-pin.page.scss */ "./src/app/signup/transaction-pin/transaction-pin.page.scss")).default]
    })
], TransactionPinPage);



/***/ })

}]);
//# sourceMappingURL=transaction-pin-transaction-pin-module-es2015.js.map