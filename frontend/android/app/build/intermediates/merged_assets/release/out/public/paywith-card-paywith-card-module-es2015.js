(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paywith-card-paywith-card-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/paywith-card/paywith-card/paywith-card.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paywith-card/paywith-card/paywith-card.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <div class=\"containner\">    \n    <ion-toolbar color=\"none\" mode=\"ios\">\n      <ion-buttons  (click)=\"goBack()\">\n      <ion-button >\n        <ion-icon ios=\"arrow-back-outline\" md=\"arrow-back\"></ion-icon>\n      </ion-button>\n      </ion-buttons>\n      <ion-title color=\"primary\">Pay with Card</ion-title>\n    </ion-toolbar>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <div class=\"brand\">\n      <img src=\"../../assets/imgs/logo.png\" alt=\"\">\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"innner\">\n      <ion-buttons class=\"justify-content-between\">\n        <h6>Add your debit card here</h6>\n        <ion-button>      \n        </ion-button>\n      </ion-buttons>\n\n      <ion-item lines=\"none\">\n        <ion-label position='stacked'>Card number</ion-label>\n        <ion-input type=\"number\"></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-label position='stacked'>Card holder name</ion-label>\n        <ion-input type=\"text\"></ion-input>\n      </ion-item>\n\n      <div class=\"d-flex\">\n        <ion-item lines=\"none\" class=\"field-sm\">\n          <ion-label position='stacked'>Expiry Date</ion-label>\n          <ion-input type=\"text\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"field-sm\">\n          <ion-label position='stacked'>CVV (Security code)</ion-label>\n          <ion-input type=\"password\"></ion-input>\n        </ion-item>\n      </div>\n\n      <div class=\"ion-text-center\">\n        <ion-button color='primary' mode='ios'>Submit</ion-button>\n      </div>\n    </div>\n  </div>\n  <div class=\"paystack text-primary\">\n    <img src=\"../../assets/icon/paystack_icon.svg\" alt=\"\">\n    <h6 class=\"ml-2\">Secured by Paystack</h6>\n    \n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/paywith-card/paywith-card-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/paywith-card/paywith-card-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: PaywithCardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaywithCardPageRoutingModule", function() { return PaywithCardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _paywith_card_paywith_card_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paywith-card/paywith-card.page */ "./src/app/paywith-card/paywith-card/paywith-card.page.ts");




const routes = [
    {
        path: '',
        component: _paywith_card_paywith_card_page__WEBPACK_IMPORTED_MODULE_3__["PaywithCardPage"]
    }
];
let PaywithCardPageRoutingModule = class PaywithCardPageRoutingModule {
};
PaywithCardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaywithCardPageRoutingModule);



/***/ }),

/***/ "./src/app/paywith-card/paywith-card.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/paywith-card/paywith-card.module.ts ***!
  \*****************************************************/
/*! exports provided: PaywithCardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaywithCardPageModule", function() { return PaywithCardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _paywith_card_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paywith-card-routing.module */ "./src/app/paywith-card/paywith-card-routing.module.ts");
/* harmony import */ var _paywith_card_paywith_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paywith-card/paywith-card.page */ "./src/app/paywith-card/paywith-card/paywith-card.page.ts");







let PaywithCardPageModule = class PaywithCardPageModule {
};
PaywithCardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _paywith_card_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaywithCardPageRoutingModule"]
        ],
        declarations: [_paywith_card_paywith_card_page__WEBPACK_IMPORTED_MODULE_6__["PaywithCardPage"]]
    })
], PaywithCardPageModule);



/***/ }),

/***/ "./src/app/paywith-card/paywith-card/paywith-card.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/paywith-card/paywith-card/paywith-card.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  text-align: center;\n}\n\nion-toolbar {\n  --paddin-end: 0px;\n  --padding-start: 0px;\n}\n\nion-button {\n  width: 241px;\n  --border-radius: 6px;\n  margin: 0 auto;\n  font-style: normal;\n  font-weight: 500 !important;\n  font-size: 14px !important;\n  line-height: 22px !important;\n}\n\nion-bottons ion-button {\n  text-transform: lowercase !important;\n}\n\nion-row {\n  padding: 18px 20px !important;\n}\n\n.wrapper {\n  border-radius: 0 !important;\n  box-shadow: none !important;\n  margin-top: 0px;\n}\n\n.inner {\n  padding: 30px !important;\n}\n\n.d-flex {\n  justify-content: space-evenly;\n  margin-top: -10px !important;\n}\n\n.field-sm {\n  width: 116px;\n}\n\n.label {\n  margin: 0;\n}\n\n.item-inner {\n  padding-right: 0px !important;\n}\n\nion-item {\n  color: #003679;\n  border-radius: 6px;\n  --min-height: 40px !important;\n  margin: 10px 0px !important;\n  border: 1px solid #003679;\n}\n\nion-item ion-label {\n  --color: rgba(0, 54, 121, 0.6);\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 7px;\n  line-height: 12px;\n  padding: 0px !important;\n  --min-height: 10px !important;\n}\n\nion-item ion-input {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500 !important;\n  font-size: 12px !important;\n  line-height: 18px !important;\n  --padding-top: 0px !important;\n  --padding-bottom: 2px !important;\n  color: #003679 !important;\n}\n\nh6 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px !important;\n  line-height: 16px !important;\n  color: #003679 !important;\n}\n\nh4 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  color: #003679;\n}\n\n.brand {\n  margin-top: 40px;\n}\n\n.paystack {\n  box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.06);\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 22px;\n  text-align: center;\n  color: #003679;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5d2l0aC1jYXJkL3BheXdpdGgtY2FyZC9DOlxcVXNlcnNcXExlbm92b1xcZG9jdW1lbnRzXFx2c2NfbG9jYWxfZGV2XFxuYXRpdmUtbW9iaWxlLWFwcFxcemFwcHlcXGZyb250ZW5kL3NyY1xcYXBwXFxwYXl3aXRoLWNhcmRcXHBheXdpdGgtY2FyZFxccGF5d2l0aC1jYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGF5d2l0aC1jYXJkL3BheXdpdGgtY2FyZC9wYXl3aXRoLWNhcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQ0FGOztBREtFO0VBQ0Usb0NBQUE7QUNGSjs7QURNQTtFQUNFLDZCQUFBO0FDSEY7O0FES0E7RUFDRSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQ0ZGOztBRElBO0VBQ0Usd0JBQUE7QUNERjs7QURHQTtFQUNFLDZCQUFBO0VBQ0EsNEJBQUE7QUNBRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURDQTtFQUNFLFNBQUE7QUNFRjs7QURDQTtFQUNFLDZCQUFBO0FDRUY7O0FEQUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSw2QkFBQTtFQUNFLDJCQUFBO0VBQ0EseUJBQUE7QUNFSjs7QURFRTtFQUNFLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNELGdCQUFBO0VBQ0MsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtBQ0FKOztBREdFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNELDJCQUFBO0VBQ0MsMEJBQUE7RUFDQSw0QkFBQTtFQUNELDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQyx5QkFBQTtBQ0RKOztBREtBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUVBLHlCQUFBO0FDSEY7O0FETUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDSEY7O0FETUE7RUFDRSxnQkFBQTtBQ0hGOztBREtBO0VBQ0UsNENBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3BheXdpdGgtY2FyZC9wYXl3aXRoLWNhcmQvcGF5d2l0aC1jYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tcGFkZGluLWVuZDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAyNDFweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XG4gIFxufVxuXG5pb24tYm90dG9ucyB7XG4gIGlvbi1idXR0b24ge1xuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbiAgfVxufVxuXG5pb24tcm93IHtcbiAgcGFkZGluZzogMThweCAyMHB4ICFpbXBvcnRhbnQ7XG59XG4ud3JhcHBlciB7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAtMHB4O1xufVxuLmlubmVyIHtcbiAgcGFkZGluZzogMzBweCAhaW1wb3J0YW50O1xufVxuLmQtZmxleCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBtYXJnaW4tdG9wOiAtMTBweCAhaW1wb3J0YW50O1xufVxuLmZpZWxkLXNtIHtcbiAgd2lkdGg6IDExNnB4O1xufVxuLmxhYmVsIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaXRlbS1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweCFpbXBvcnRhbnQ7XG59XG5pb24taXRlbSB7XG4gIGNvbG9yOiAjMDAzNjc5O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIC8vLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDU0LCAxMjEsIDAuMSk7XG4gIC0tbWluLWhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTBweCAwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAzNjc5O1xuICAgIC8vIC0taW5uZXItcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgIC8vIC0taW5uZXItcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuXG4gIGlvbi1sYWJlbCB7XG4gICAgLS1jb2xvcjogcmdiYSgwLCA1NCwgMTIxLCAwLjYpO1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDdweDtcbiAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICAtLW1pbi1oZWlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi1pbnB1dCB7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgIC0tcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgLS1wYWRkaW5nLWJvdHRvbTogMnB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMwMDM2NzkgIWltcG9ydGFudDtcbiAgfVxufVxuXG5oNiB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XG5cbiAgY29sb3I6ICMwMDM2NzkgIWltcG9ydGFudDtcbn1cblxuaDQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjMDAzNjc5O1xufVxuXG4uYnJhbmQge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLnBheXN0YWNrIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxOXB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7ICBcbiAgdGV4dC1hbGlnbjogY2VudGVyOyAgXG4gIGNvbG9yOiAjMDAzNjc5O1xufVxuIiwiaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tcGFkZGluLWVuZDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAyNDFweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1ib3R0b25zIGlvbi1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1yb3cge1xuICBwYWRkaW5nOiAxOHB4IDIwcHggIWltcG9ydGFudDtcbn1cblxuLndyYXBwZXIge1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uaW5uZXIge1xuICBwYWRkaW5nOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kLWZsZXgge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgbWFyZ2luLXRvcDogLTEwcHggIWltcG9ydGFudDtcbn1cblxuLmZpZWxkLXNtIHtcbiAgd2lkdGg6IDExNnB4O1xufVxuXG4ubGFiZWwge1xuICBtYXJnaW46IDA7XG59XG5cbi5pdGVtLWlubmVyIHtcbiAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgY29sb3I6ICMwMDM2Nzk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgLS1taW4taGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTBweCAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMzY3OTtcbn1cbmlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIC0tY29sb3I6IHJnYmEoMCwgNTQsIDEyMSwgMC42KTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogN3B4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIC0tbWluLWhlaWdodDogMTBweCAhaW1wb3J0YW50O1xufVxuaW9uLWl0ZW0gaW9uLWlucHV0IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctYm90dG9tOiAycHggIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDM2NzkgIWltcG9ydGFudDtcbn1cblxuaDYge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDAzNjc5ICFpbXBvcnRhbnQ7XG59XG5cbmg0IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjMDAzNjc5O1xufVxuXG4uYnJhbmQge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4ucGF5c3RhY2sge1xuICBib3gtc2hhZG93OiAycHggMnB4IDE5cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAwMzY3OTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/paywith-card/paywith-card/paywith-card.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/paywith-card/paywith-card/paywith-card.page.ts ***!
  \****************************************************************/
/*! exports provided: PaywithCardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaywithCardPage", function() { return PaywithCardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/navigation-service.service */ "./src/app/services/navigation-service.service.ts");




let PaywithCardPage = class PaywithCardPage {
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
PaywithCardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_3__["NavigationServiceService"] }
];
PaywithCardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-paywith-card',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./paywith-card.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/paywith-card/paywith-card/paywith-card.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./paywith-card.page.scss */ "./src/app/paywith-card/paywith-card/paywith-card.page.scss")).default]
    })
], PaywithCardPage);



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
//# sourceMappingURL=paywith-card-paywith-card-module-es2015.js.map