(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["empty-transaction-empty-transaction-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/empty-transaction/empty-transaction/empty-transaction.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/empty-transaction/empty-transaction/empty-transaction.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons mode=\"ios\">\n      <ion-button>\n      </ion-button>\n      <ion-button></ion-button>\n    </ion-buttons>\n    <ion-title >Transactions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"empty\" mode=\"ios\">\n      <ion-segment-button value=\"empty\">\n        <ion-label>All</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"debit\">\n        <ion-label>Debit</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"credit\">\n        <ion-label>Credit</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div class=\"signup-upper\">\n    <img src=\"../../assets/icon/transaction_empty_state_icon.svg\" alt=\"\">\n    <h6 class=\"text-primary\">Opps! no history of <br> transaction yet</h6>\n  </div>\n</ion-content>\n ");

/***/ }),

/***/ "./src/app/empty-transaction/empty-transaction-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/empty-transaction/empty-transaction-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: EmptyTransactionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyTransactionPageRoutingModule", function() { return EmptyTransactionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _empty_transaction_empty_transaction_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./empty-transaction/empty-transaction.page */ "./src/app/empty-transaction/empty-transaction/empty-transaction.page.ts");




const routes = [
    {
        path: '',
        component: _empty_transaction_empty_transaction_page__WEBPACK_IMPORTED_MODULE_3__["EmptyTransactionPage"]
    }
];
let EmptyTransactionPageRoutingModule = class EmptyTransactionPageRoutingModule {
};
EmptyTransactionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EmptyTransactionPageRoutingModule);



/***/ }),

/***/ "./src/app/empty-transaction/empty-transaction.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/empty-transaction/empty-transaction.module.ts ***!
  \***************************************************************/
/*! exports provided: EmptyTransactionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyTransactionPageModule", function() { return EmptyTransactionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _empty_transaction_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./empty-transaction-routing.module */ "./src/app/empty-transaction/empty-transaction-routing.module.ts");
/* harmony import */ var _empty_transaction_empty_transaction_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./empty-transaction/empty-transaction.page */ "./src/app/empty-transaction/empty-transaction/empty-transaction.page.ts");







let EmptyTransactionPageModule = class EmptyTransactionPageModule {
};
EmptyTransactionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _empty_transaction_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmptyTransactionPageRoutingModule"]
        ],
        declarations: [_empty_transaction_empty_transaction_page__WEBPACK_IMPORTED_MODULE_6__["EmptyTransactionPage"]]
    })
], EmptyTransactionPageModule);



/***/ }),

/***/ "./src/app/empty-transaction/empty-transaction/empty-transaction.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/empty-transaction/empty-transaction/empty-transaction.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".signup-upper {\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wdHktdHJhbnNhY3Rpb24vZW1wdHktdHJhbnNhY3Rpb24vQzpcXFVzZXJzXFxMZW5vdm9cXGRvY3VtZW50c1xcdnNjX2xvY2FsX2RldlxcbmF0aXZlLW1vYmlsZS1hcHBcXHphcHB5XFxmcm9udGVuZC9zcmNcXGFwcFxcZW1wdHktdHJhbnNhY3Rpb25cXGVtcHR5LXRyYW5zYWN0aW9uXFxlbXB0eS10cmFuc2FjdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2VtcHR5LXRyYW5zYWN0aW9uL2VtcHR5LXRyYW5zYWN0aW9uL2VtcHR5LXRyYW5zYWN0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9lbXB0eS10cmFuc2FjdGlvbi9lbXB0eS10cmFuc2FjdGlvbi9lbXB0eS10cmFuc2FjdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbnVwLXVwcGVyIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn0iLCIuc2lnbnVwLXVwcGVyIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/empty-transaction/empty-transaction/empty-transaction.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/empty-transaction/empty-transaction/empty-transaction.page.ts ***!
  \*******************************************************************************/
/*! exports provided: EmptyTransactionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyTransactionPage", function() { return EmptyTransactionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let EmptyTransactionPage = class EmptyTransactionPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    segmentChanged(ev) {
        const page = ev.detail.value;
        if (page === 'all') {
            this.router.navigate(['/user-dashboard/transactions']);
        }
        else {
            this.router.navigate(['/user-dashboard/transactions/' + page]);
        }
    }
};
EmptyTransactionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
EmptyTransactionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-empty-transaction',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./empty-transaction.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/empty-transaction/empty-transaction/empty-transaction.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./empty-transaction.page.scss */ "./src/app/empty-transaction/empty-transaction/empty-transaction.page.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../assets/css/main.scss */ "./src/assets/css/main.scss")).default]
    })
], EmptyTransactionPage);



/***/ })

}]);
//# sourceMappingURL=empty-transaction-empty-transaction-module-es2015.js.map