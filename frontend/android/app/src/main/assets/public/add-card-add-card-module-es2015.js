(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-card-add-card-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-card/add-card/add-card.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-card/add-card/add-card.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <div class=\"containner\">    \n    <ion-toolbar color=\"none\" mode=\"ios\">\n      <ion-buttons  (click)=\"goBack()\">\n      <ion-button >\n        <ion-icon ios=\"arrow-back-outline\" md=\"arrow-back\"></ion-icon>\n      </ion-button>\n      </ion-buttons>\n      <ion-title color=\"primary\">Wallet</ion-title>\n    </ion-toolbar>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">    \n    <ion-buttons class=\"justify-content-between\">\n      <h4>My Cards</h4>\n      <ion-button>      \n      </ion-button>\n    </ion-buttons>\n  </div>\n  <div class=\"slides\" id=\"slides\">\n    <ion-slides pager=\"true\" [options]=\"slideOpts\" speed=\"2\" mode=\"ios\">\n      <ion-slide>\n        <ion-card mode=\"ios\" color=\"primary\">  \n          <ion-card-content class=\"debit-card\">\n            <div class=\"caption text-white\">\n              <h5>xxxx xxxx xxxx 6743</h5>\n              <div class=\"bottom\">\n                <h5>25/05/2020</h5>\n                <span class=\"d-flexs mr-2\">\n                  <img src=\"../../assets/icon/mastercard_circles_icon.svg\" alt=\"\">                  \n                </span>\n              </div>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n\n      <ion-slide>\n        <ion-card mode=\"ios\" class=\"bg-secondary-light\">  \n          <ion-card-content class=\"debit-card\">\n            <div class=\"caption text-primary\">\n              <h5>xxxx xxxx xxxx 6743</h5>\n              <div class=\"bottom\">\n                <h5>25/05/2020</h5>\n                <span class=\"d-flexs mr-2\">\n                  <img src=\"../../assets/icon/mastercard_circles_icon.svg\" alt=\"\">                  \n                </span>\n              </div>\n            </div>\n          </ion-card-content>\n        </ion-card>       \n      </ion-slide>\n\n      <ion-slide>\n          <ion-card mode=\"ios\" class=\"bg-purple\">  \n            <ion-card-content class=\"debit-card\">\n              <div class=\"caption text-white\">\n                <h5>xxxx xxxx xxxx 6743</h5>\n                <div class=\"bottom\">\n                  <h5>25/05/2020</h5>\n                  <span class=\"d-flexs mr-2\">\n                    <img src=\"../../assets/icon/mastercard_circles_icon.svg\" alt=\"\">                  \n                  </span>\n                </div>\n              </div>\n            </ion-card-content>\n          </ion-card>\n      </ion-slide>\n\n    </ion-slides>\n\n  </div>\n\n  <div class=\"wrapper\">\n    <div class=\"inner\">\n      <ion-buttons class=\"justify-content-between\">\n        <h6>Add your card here</h6>\n        <ion-button>      \n        </ion-button>\n      </ion-buttons>\n\n      <ion-item lines=\"none\">\n        <ion-label position='stacked'>Card number</ion-label>\n        <ion-input type=\"number\"></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-label position='stacked'>Card holder name</ion-label>\n        <ion-input type=\"text\"></ion-input>\n      </ion-item>\n\n      <div class=\"d-flex\">\n        <ion-item lines=\"none\" class=\"field-sm\">\n          <ion-label position='stacked'>Expiry Date</ion-label>\n          <ion-input type=\"text\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"field-sm\">\n          <ion-label position='stacked'>CVV (Security code)</ion-label>\n          <ion-input type=\"password\"></ion-input>\n        </ion-item>\n      </div>\n\n      <div class=\"ion-text-center\">\n        <ion-button color='primary' mode='ios' (click)=\"addCard()\">Submit</ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/add-card/add-card-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/add-card/add-card-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AddCardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardPageRoutingModule", function() { return AddCardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_card_add_card_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-card/add-card.page */ "./src/app/add-card/add-card/add-card.page.ts");




const routes = [
    {
        path: '',
        component: _add_card_add_card_page__WEBPACK_IMPORTED_MODULE_3__["AddCardPage"]
    }
];
let AddCardPageRoutingModule = class AddCardPageRoutingModule {
};
AddCardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddCardPageRoutingModule);



/***/ }),

/***/ "./src/app/add-card/add-card.module.ts":
/*!*********************************************!*\
  !*** ./src/app/add-card/add-card.module.ts ***!
  \*********************************************/
/*! exports provided: AddCardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardPageModule", function() { return AddCardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_card_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-card-routing.module */ "./src/app/add-card/add-card-routing.module.ts");
/* harmony import */ var _add_card_add_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-card/add-card.page */ "./src/app/add-card/add-card/add-card.page.ts");







let AddCardPageModule = class AddCardPageModule {
};
AddCardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_card_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddCardPageRoutingModule"]
        ],
        declarations: [_add_card_add_card_page__WEBPACK_IMPORTED_MODULE_6__["AddCardPage"]]
    })
], AddCardPageModule);



/***/ }),

/***/ "./src/app/add-card/add-card/add-card.page.scss":
/*!******************************************************!*\
  !*** ./src/app/add-card/add-card/add-card.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  text-align: center;\n  margin-top: 20px !important;\n  width: 299px !important;\n  height: 150px !important;\n}\nion-card .caption {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16px;\n  padding-left: 10px !important;\n}\nion-title {\n  text-align: center;\n}\nion-toolbar {\n  --paddin-end: 0px;\n  --padding-start: 0px;\n}\n.swiper-pagination {\n  position: absolute;\n  display: none !important;\n}\nion-slide {\n  --padding-start: 0px !important;\n  --padding-end: 0px !important;\n  --margin: 10px 0px 10px 0px !important;\n  width: 100% !important;\n}\nion-slide > :first-child {\n  width: 100%;\n  margin: 30px 30px 35px 30px !important;\n}\nion-slide > :first-child .slider .slider-pager {\n  color: red !important;\n}\n.text-right {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500 !important;\n  font-size: 12px !important;\n  line-height: 12px !important;\n  text-align: center;\n  color: rgba(0, 54, 121, 0.6) !important;\n}\n.details {\n  padding: 0px 10px !important;\n}\nion-button {\n  width: 241px;\n  --border-radius: 6px;\n  margin: 0 auto;\n  font-style: normal;\n  font-weight: 500 !important;\n  font-size: 14px !important;\n  line-height: 22px !important;\n}\nion-bottons ion-button {\n  text-transform: lowercase !important;\n}\nion-row {\n  padding: 18px 20px !important;\n}\n.inner {\n  padding: 30px !important;\n}\n.d-flex {\n  justify-content: space-evenly;\n  margin-top: -10px !important;\n}\n.field-sm {\n  width: 116px;\n}\n.label {\n  margin: 0;\n}\n.item-inner {\n  padding-right: 0px !important;\n}\nion-item {\n  color: #003679;\n  border-radius: 6px;\n  --background: rgba(0, 54, 121, 0.1);\n  --min-height: 40px !important;\n  margin: 10px 0px !important;\n}\nion-item ion-label {\n  --color: rgba(0, 54, 121, 0.6);\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 7px;\n  line-height: 12px;\n  padding: 0px !important;\n  --min-height: 10px !important;\n}\nion-item ion-input {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500 !important;\n  font-size: 12px !important;\n  line-height: 18px !important;\n  --padding-top: 0px !important;\n  --padding-bottom: 2px !important;\n  color: #003679 !important;\n}\nh6 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  color: #003679;\n}\nh4 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  color: #003679;\n}\nion-slide {\n  --padding-start: 0px !important;\n  --padding-end: 0px !important;\n  --margin: 10px 0px 10px 0px !important;\n  width: 100% !important;\n}\nion-slide > :first-child {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWNhcmQvYWRkLWNhcmQvQzpcXFVzZXJzXFxMZW5vdm9cXGRvY3VtZW50c1xcdnNjX2xvY2FsX2RldlxcbmF0aXZlLW1vYmlsZS1hcHBcXHphcHB5XFxmcm9udGVuZC9zcmNcXGFwcFxcYWRkLWNhcmRcXGFkZC1jYXJkXFxhZGQtY2FyZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkZC1jYXJkL2FkZC1jYXJkL2FkZC1jYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0FDQ0Y7QURFRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FDQUo7QURJQTtFQUNFLGtCQUFBO0FDREY7QURJQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUNERjtBRElBO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtBQ0RGO0FESUE7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQkFBQTtBQ0RGO0FER0E7RUFDRSxXQUFBO0VBQ0Esc0NBQUE7QUNBRjtBRENFO0VBQ0UscUJBQUE7QUNDSjtBREdBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7QUNBRjtBRElBO0VBQ0UsNEJBQUE7QUNERjtBRElBO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FDREY7QURNRTtFQUNFLG9DQUFBO0FDSEo7QURPQTtFQUNFLDZCQUFBO0FDSkY7QURPQTtFQUNFLHdCQUFBO0FDSkY7QURNQTtFQUNFLDZCQUFBO0VBQ0EsNEJBQUE7QUNIRjtBREtBO0VBQ0UsWUFBQTtBQ0ZGO0FESUE7RUFDRSxTQUFBO0FDREY7QURJQTtFQUNFLDZCQUFBO0FDREY7QURHQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsNkJBQUE7RUFDRSwyQkFBQTtBQ0FKO0FESUU7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDRCxnQkFBQTtFQUNDLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUNGSjtBREtFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNELDJCQUFBO0VBQ0MsMEJBQUE7RUFDQSw0QkFBQTtFQUNELDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQyx5QkFBQTtBQ0hKO0FET0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0FDTEY7QURRQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNMRjtBRFFBO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7QUNMRjtBRE9BO0VBQ0UsV0FBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvYWRkLWNhcmQvYWRkLWNhcmQvYWRkLWNhcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDI5OXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTUwcHggIWltcG9ydGFudDtcblxuXG4gIC5jYXB0aW9uIHtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgfVxufVxuXG5pb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW4tZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuaW9uLXNsaWRlIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4ICFpbXBvcnRhbnQ7XG4gIC0tbWFyZ2luOiAxMHB4IDBweCAxMHB4IDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuaW9uLXNsaWRlID46Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAzMHB4IDMwcHggMzVweCAzMHB4ICFpbXBvcnRhbnQ7XG4gIC5zbGlkZXIgLnNsaWRlci1wYWdlciB7XG4gICAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi50ZXh0LXJpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTJweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2JhKDAsIDU0LCAxMjEsIDAuNikgIWltcG9ydGFudDtcbn1cblxuXG4uZGV0YWlscyB7XG4gIHBhZGRpbmc6IDBweCAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1idXR0b24ge1xuICB3aWR0aDogMjQxcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMjJweCAhaW1wb3J0YW50O1xuICBcbn1cblxuaW9uLWJvdHRvbnMge1xuICBpb24tYnV0dG9uIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuaW9uLXJvdyB7XG4gIHBhZGRpbmc6IDE4cHggMjBweCAhaW1wb3J0YW50O1xufVxuXG4uaW5uZXIge1xuICBwYWRkaW5nOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG4uZC1mbGV4IHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIG1hcmdpbi10b3A6IC0xMHB4ICFpbXBvcnRhbnQ7XG59XG4uZmllbGQtc20ge1xuICB3aWR0aDogMTE2cHg7XG59XG4ubGFiZWwge1xuICBtYXJnaW46IDA7XG59XG5cbi5pdGVtLWlubmVyIHtcbiAgcGFkZGluZy1yaWdodDogMHB4IWltcG9ydGFudDtcbn1cbmlvbi1pdGVtIHtcbiAgY29sb3I6ICMwMDM2Nzk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDU0LCAxMjEsIDAuMSk7XG4gIC0tbWluLWhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTBweCAwcHggIWltcG9ydGFudDtcbiAgICAvLyAtLWlubmVyLXBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICAvLyAtLWlubmVyLXBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcblxuICBpb24tbGFiZWwge1xuICAgIC0tY29sb3I6IHJnYmEoMCwgNTQsIDEyMSwgMC42KTtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiA3cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgLS1taW4taGVpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpb24taW5wdXQge1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAtLXBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgIC0tcGFkZGluZy1ib3R0b206IDJweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMDAzNjc5ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuaDYge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG5cbiAgY29sb3I6ICMwMDM2Nzk7XG59XG5cbmg0IHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogIzAwMzY3OTtcbn1cblxuaW9uLXNsaWRlIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4ICFpbXBvcnRhbnQ7XG4gIC0tbWFyZ2luOiAxMHB4IDBweCAxMHB4IDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuaW9uLXNsaWRlID46Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogMTAwJTtcbiAgLy9tYXJnaW46IDMwcHggMzBweCAzNXB4IDMwcHggIWltcG9ydGFudDtcblxufSIsImlvbi1jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyOTlweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XG59XG5pb24tY2FyZCAuY2FwdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tcGFkZGluLWVuZDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zbGlkZSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1lbmQ6IDBweCAhaW1wb3J0YW50O1xuICAtLW1hcmdpbjogMTBweCAwcHggMTBweCAwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuaW9uLXNsaWRlID4gOmZpcnN0LWNoaWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMzBweCAzMHB4IDM1cHggMzBweCAhaW1wb3J0YW50O1xufVxuaW9uLXNsaWRlID4gOmZpcnN0LWNoaWxkIC5zbGlkZXIgLnNsaWRlci1wYWdlciB7XG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbn1cblxuLnRleHQtcmlnaHQge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDEycHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmdiYSgwLCA1NCwgMTIxLCAwLjYpICFpbXBvcnRhbnQ7XG59XG5cbi5kZXRhaWxzIHtcbiAgcGFkZGluZzogMHB4IDEwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAyNDFweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1ib3R0b25zIGlvbi1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1yb3cge1xuICBwYWRkaW5nOiAxOHB4IDIwcHggIWltcG9ydGFudDtcbn1cblxuLmlubmVyIHtcbiAgcGFkZGluZzogMzBweCAhaW1wb3J0YW50O1xufVxuXG4uZC1mbGV4IHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIG1hcmdpbi10b3A6IC0xMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5maWVsZC1zbSB7XG4gIHdpZHRoOiAxMTZweDtcbn1cblxuLmxhYmVsIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaXRlbS1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSB7XG4gIGNvbG9yOiAjMDAzNjc5O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgwLCA1NCwgMTIxLCAwLjEpO1xuICAtLW1pbi1oZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAxMHB4IDBweCAhaW1wb3J0YW50O1xufVxuaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgLS1jb2xvcjogcmdiYSgwLCA1NCwgMTIxLCAwLjYpO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiA3cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgLS1taW4taGVpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5pb24taXRlbSBpb24taW5wdXQge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1ib3R0b206IDJweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwMzY3OSAhaW1wb3J0YW50O1xufVxuXG5oNiB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBjb2xvcjogIzAwMzY3OTtcbn1cblxuaDQge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6ICMwMDM2Nzk7XG59XG5cbmlvbi1zbGlkZSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1lbmQ6IDBweCAhaW1wb3J0YW50O1xuICAtLW1hcmdpbjogMTBweCAwcHggMTBweCAwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuaW9uLXNsaWRlID4gOmZpcnN0LWNoaWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/add-card/add-card/add-card.page.ts":
/*!****************************************************!*\
  !*** ./src/app/add-card/add-card/add-card.page.ts ***!
  \****************************************************/
/*! exports provided: AddCardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardPage", function() { return AddCardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/navigation-service.service */ "./src/app/services/navigation-service.service.ts");




let AddCardPage = class AddCardPage {
    constructor(router, navService) {
        this.router = router;
        this.navService = navService;
        this.slideOpts = {
            slidesPerView: 1,
            spaceBetween: -45
        };
    }
    ngOnInit() {
    }
    addCard() {
        this.router.navigate(['/user-dashboard/wallet/cards']);
    }
    goBack() {
        this.navService.navigateToPreviousPage();
    }
};
AddCardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_3__["NavigationServiceService"] }
];
AddCardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-card',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-card.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-card/add-card/add-card.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-card.page.scss */ "./src/app/add-card/add-card/add-card.page.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../assets/css/main.scss */ "./src/assets/css/main.scss")).default]
    })
], AddCardPage);



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
//# sourceMappingURL=add-card-add-card-module-es2015.js.map