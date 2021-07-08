(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["confirm-payment-confirm-payment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/confirm-payment/confirm-payment/confirm-payment.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/confirm-payment/confirm-payment/confirm-payment.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons mode=\"ios\">\n      <ion-button>\n      </ion-button>\n    </ion-buttons>\n    <ion-title >Confirm your payment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"signup text-center\">\n    <h6 class=\"text-primary text-center\">Enter PIN</h6>\n    <div>\n      <ion-input type=\"password\"></ion-input>\n      <ion-button routerLink=\"/user-dashboard/transactions/success\" color=\"primary\" mode=\"ios\">Confirm Payment</ion-button>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/confirm-payment/confirm-payment-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/confirm-payment/confirm-payment-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ConfirmPaymentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPaymentPageRoutingModule", function() { return ConfirmPaymentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _confirm_payment_confirm_payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm-payment/confirm-payment.page */ "./src/app/confirm-payment/confirm-payment/confirm-payment.page.ts");




const routes = [
    {
        path: '',
        component: _confirm_payment_confirm_payment_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmPaymentPage"]
    }
];
let ConfirmPaymentPageRoutingModule = class ConfirmPaymentPageRoutingModule {
};
ConfirmPaymentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConfirmPaymentPageRoutingModule);



/***/ }),

/***/ "./src/app/confirm-payment/confirm-payment.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/confirm-payment/confirm-payment.module.ts ***!
  \***********************************************************/
/*! exports provided: ConfirmPaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPaymentPageModule", function() { return ConfirmPaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _confirm_payment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirm-payment-routing.module */ "./src/app/confirm-payment/confirm-payment-routing.module.ts");
/* harmony import */ var _confirm_payment_confirm_payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm-payment/confirm-payment.page */ "./src/app/confirm-payment/confirm-payment/confirm-payment.page.ts");







let ConfirmPaymentPageModule = class ConfirmPaymentPageModule {
};
ConfirmPaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _confirm_payment_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmPaymentPageRoutingModule"]
        ],
        declarations: [_confirm_payment_confirm_payment_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmPaymentPage"]]
    })
], ConfirmPaymentPageModule);



/***/ }),

/***/ "./src/app/confirm-payment/confirm-payment/confirm-payment.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/confirm-payment/confirm-payment/confirm-payment.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-input {\n  --placeholder-color: #003679;\n  --placeholder-font-weight: 600;\n  --placeholder-opacity: .8;\n  --padding-start: 10px;\n  border: solid 1px #003679;\n  border-radius: 6px;\n  color: #003679;\n  text-align: left !important;\n}\n\nh6 {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n}\n\n.signup {\n  display: flex;\n  flex-direction: column;\n  justify-content: center !important;\n  align-items: center !important;\n  height: 80vh;\n}\n\nion-toolbar ion-buttons {\n  padding-left: 5px !important;\n  padding-right: 5px !important;\n  width: 100% !important;\n}\n\nion-toolbar ion-title {\n  font-size: 16px;\n  line-height: 24px !important;\n  padding: 0px !important;\n}\n\nion-button {\n  width: 241px;\n  --border-radius: 6px !important;\n  margin: 30px;\n  min-height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlybS1wYXltZW50L2NvbmZpcm0tcGF5bWVudC9DOlxcVXNlcnNcXExlbm92b1xcZG9jdW1lbnRzXFx2c2NfbG9jYWxfZGV2XFxuYXRpdmUtbW9iaWxlLWFwcFxcemFwcHlcXGZyb250ZW5kL3NyY1xcYXBwXFxjb25maXJtLXBheW1lbnRcXGNvbmZpcm0tcGF5bWVudFxcY29uZmlybS1wYXltZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29uZmlybS1wYXltZW50L2NvbmZpcm0tcGF5bWVudC9jb25maXJtLXBheW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURHRTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtBQ0FKOztBREVFO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7QUNBSjs7QURHQTtFQUNFLFlBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvY29uZmlybS1wYXltZW50L2NvbmZpcm0tcGF5bWVudC9jb25maXJtLXBheW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWlucHV0IHtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzAwMzY3OTtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNjAwO1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IC44O1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICMwMDM2Nzk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY29sb3I6ICMwMDM2Nzk7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbn1cblxuaDYge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4uc2lnbnVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDgwdmg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgaW9uLWJ1dHRvbnMge1xuICAgIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuICBpb24tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjRweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICB9XG59XG5pb24tYnV0dG9uIHtcbiAgd2lkdGg6IDI0MXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDMwcHg7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG59IiwiaW9uLWlucHV0IHtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzAwMzY3OTtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNjAwO1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IC44O1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICMwMDM2Nzk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY29sb3I6ICMwMDM2Nzk7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbn1cblxuaDYge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4uc2lnbnVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDgwdmg7XG59XG5cbmlvbi10b29sYmFyIGlvbi1idXR0b25zIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5pb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgd2lkdGg6IDI0MXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDMwcHg7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/confirm-payment/confirm-payment/confirm-payment.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/confirm-payment/confirm-payment/confirm-payment.page.ts ***!
  \*************************************************************************/
/*! exports provided: ConfirmPaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPaymentPage", function() { return ConfirmPaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ConfirmPaymentPage = class ConfirmPaymentPage {
    constructor() { }
    ngOnInit() {
    }
};
ConfirmPaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirm-payment',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./confirm-payment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/confirm-payment/confirm-payment/confirm-payment.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./confirm-payment.page.scss */ "./src/app/confirm-payment/confirm-payment/confirm-payment.page.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../assets/css/main.scss */ "./src/assets/css/main.scss")).default]
    })
], ConfirmPaymentPage);



/***/ })

}]);
//# sourceMappingURL=confirm-payment-confirm-payment-module-es2015.js.map