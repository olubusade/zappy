(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard2-dashboard2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard2/dashboard2.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard2/dashboard2.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"container\">\n    <div class=\"container-fixed\">      \n      <ion-buttons class=\"ion-align-items-center\" mode='ios'>\n        <ion-button slot=\"start\" class=\"tool-text\" fill=\"clear\" (click)=\"gotoService('fund-transfer')\">          \n          <div class=\"avatar\">\n            <span>Hi, 08069311722</span>\n          </div>\n        </ion-button>\n        <ion-button slot=\"end\" class=\"tool-text\" fill=\"clear\" (click)=\"gotoService('add-money')\">          \n          Add money\n          <img src=\"../../assets/icon/add_money_icon.svg\" alt=\"add-money\" class=\"ml-1\">\n        </ion-button>\n      </ion-buttons>\n      \n      <ion-card color=\"primary\" mode=\"ios\">  \n        <ion-card-content >\n          <p class=\"text\">Available Balance</p> \n          <div class=\"amount\">N 5,030.39</div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n  <div class=\"container container-bg\">\n    <ion-buttons class=\"ion-align-items-center \" mode=\"ios\">\n      <ion-button slot=\"start\" class=\"tool-text\" fill=\"clear\" (click)=\"gotoService('fund-transfer')\">          \n        <h6>Services</h6>\n      </ion-button>\n      <ion-button slot=\"end\">          \n      </ion-button>\n    </ion-buttons>\n\n    <ion-grid > \n      <ion-row class=\" products\">\n        <div class=\"box-sm\" (click)=\"gotoService('mobile-airtime')\">\n          <img src=\"../../assets/icon/mobile_airtime_icon.svg\" alt=\"\"> <br>\n          Mobile Airtime\n        </div>\n        <div class=\"box-sm\" (click)=\"gotoService('data-bundle')\">\n          <img src=\"../../assets/icon/data_bundles_icon.svg\" alt=\"\"> <br>\n          Data Bundle\n        </div>\n      </ion-row>\n      <ion-row class=\" products\">\n        <div class=\"box-sm\" (click)=\"gotoService('electricity')\">\n          <img src=\"../../assets/icon/electricity_bill_icon.svg\" alt=\"\"> <br>\n          Electricity Bill\n        </div>\n        <div class=\"box-sm\" (click)=\"gotoService('cable-tv')\">\n          <img src=\"../../assets/icon/cable_tv_icon.svg\" alt=\"\"> <br>\n          Cable TV\n        </div>\n      </ion-row>\n      <ion-row class=\" products\">\n        <div class=\"box-sm\" (click)=\"gotoService('add-money')\">\n          <img src=\"../../assets/icon/fund_wallet_icon.svg\" alt=\"\"> <br>\n          Fund Wallet\n        </div>\n        <div class=\"box-sm\" (click)=\"gotoService('add-money')\">\n          <img src=\"../../assets/icon/graduation-cap-1.svg\" alt=\"\"> <br>\n          WAEC/NECO/JAMB\n        </div>\n      </ion-row>\n      <ion-row class=\" products\">\n        <div class=\"box-sm\" (click)=\"gotoService('fund-transfer')\">\n          <img src=\"../../assets/icon/funds_transfer_icon.svg\" alt=\"\"> <br>\n          Fund Transfer\n        </div>\n        <div class=\"box-sm\" (click)=\"gotoService('mobile-airtime')\">\n          <img src=\"../../assets/icon/international_topup_icon.svg\" alt=\"\"> <br>\n          International Top up\n        </div>\n      </ion-row>\n    </ion-grid>\n    <ion-grid>\n      <ion-row>\n        <div class=\"box-md bg-primary\">\n          <span>MTN 1GB <br>\n          for 30days <br>\n          N475</span> <br>\n          <button ion-button (click)=\"gotoService('data-bundle')\">Top up</button>\n        </div>\n        <div class=\"box-md bg-purple\">\n          <span>MTN 2GB <br>\n            for 30days <br>\n            N950</span> <br>\n            <button ion-button (click)=\"gotoService('data-bundle')\">Top up</button>\n        </div>\n      </ion-row>\n      <ion-row>\n        <div class=\"box-md bg-secondary\">\n          <span>MTN 5GB <br>\n          for 30days \n          N2375</span> <br>\n          <button ion-button (click)=\"gotoService('data-bundle')\">Top up</button>\n        </div>\n        <div class=\"box-md bg-light\">\n         <span>Up to 5% off <br>\n          on mobile \n          recharge</span> <br>\n          <button ion-button (click)=\"gotoService('mobile-airtime')\">Recharge</button>\n        </div>\n      </ion-row>\n    </ion-grid>\n    <div class=\"slides\" id=\"slides\">\n      <ion-slides pager=\"false\" [options]=\"slideOpts\" >\n        <ion-slide>\n         <img src=\"../../assets/imgs/Banner1.jpg\" alt=\"banner1\">\n        </ion-slide>\n        <ion-slide>\n          <img src=\"../../assets/imgs/Banner2.jpg\" alt=\"banner2\">\n        </ion-slide>\n        <ion-slide>\n          <img src=\"../../assets/imgs/Banner3.jpg\" alt=\"banner3\">\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/dashboard2/dashboard2-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/dashboard2/dashboard2-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: Dashboard2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard2PageRoutingModule", function() { return Dashboard2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard2.page */ "./src/app/dashboard2/dashboard2.page.ts");




const routes = [
    {
        path: '',
        component: _dashboard2_page__WEBPACK_IMPORTED_MODULE_3__["Dashboard2Page"]
    }
];
let Dashboard2PageRoutingModule = class Dashboard2PageRoutingModule {
};
Dashboard2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Dashboard2PageRoutingModule);



/***/ }),

/***/ "./src/app/dashboard2/dashboard2.module.ts":
/*!*************************************************!*\
  !*** ./src/app/dashboard2/dashboard2.module.ts ***!
  \*************************************************/
/*! exports provided: Dashboard2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard2PageModule", function() { return Dashboard2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _dashboard2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard2-routing.module */ "./src/app/dashboard2/dashboard2-routing.module.ts");
/* harmony import */ var _dashboard2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard2.page */ "./src/app/dashboard2/dashboard2.page.ts");







let Dashboard2PageModule = class Dashboard2PageModule {
};
Dashboard2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dashboard2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Dashboard2PageRoutingModule"]
        ],
        declarations: [_dashboard2_page__WEBPACK_IMPORTED_MODULE_6__["Dashboard2Page"]]
    })
], Dashboard2PageModule);



/***/ }),

/***/ "./src/app/dashboard2/dashboard2.page.scss":
/*!*************************************************!*\
  !*** ./src/app/dashboard2/dashboard2.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  text-align: center;\n  margin: 10px auto 0px auto !important;\n  width: 299px !important;\n}\n\nh6 {\n  width: 72px !important;\n}\n\nion-buttons {\n  padding: 10px 0px !important;\n  justify-content: center;\n  margin: 0px auto 0px auto;\n  width: 299px;\n}\n\nion-buttons ion-button {\n  margin: 0 !important;\n  min-height: 40px;\n  --padding-end: 0px !important;\n  --padding-start: 0px !important;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 18px;\n}\n\n.box-md {\n  margin: 10px !important;\n}\n\n.container {\n  padding: 20px 30px 0px 30px !important;\n  margin: 0 auto;\n  position: relative;\n}\n\n.container-bg {\n  margin-top: 155px;\n  z-index: 1;\n  background: #f9fbff;\n}\n\n.container-bg ion-buttons {\n  padding-top: 5px !important;\n  padding-bottom: 5px !important;\n}\n\nion-grid {\n  margin: 0px !important;\n  padding: 0px !important;\n}\n\n.title {\n  padding: 0px !important;\n}\n\n@media screen and (min-width: 320px) and (max-width: 399px) {\n  .container {\n    padding: 10px 0px 0px 0px !important;\n  }\n  .container .box-sm, .container .box-md {\n    margin: 5px !important;\n  }\n}\n\nion-row {\n  color: #003679 !important;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.box-sm {\n  width: 140px !important;\n  margin: 10px !important;\n}\n\n.products {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 10px;\n  line-height: 16px;\n}\n\n.slides {\n  margin: 20px 0px !important;\n}\n\n.container-fixed {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: #ffffff;\n  z-index: 99;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkMi9DOlxcVXNlcnNcXExlbm92b1xcZG9jdW1lbnRzXFx2c2NfbG9jYWxfZGV2XFxuYXRpdmUtbW9iaWxlLWFwcFxcemFwcHlcXGZyb250ZW5kL3NyY1xcYXBwXFxkYXNoYm9hcmQyXFxkYXNoYm9hcmQyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkMi9kYXNoYm9hcmQyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSx1QkFBQTtBQ0NGOztBRENBO0VBQ0csc0JBQUE7QUNFSDs7QURBQTtFQUNFLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNHRjs7QURGRTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDSUo7O0FEREE7RUFDRSx1QkFBQTtBQ0lGOztBRERBO0VBQ0Usc0NBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNJRjs7QUREQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDSUY7O0FESEk7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FDS0o7O0FEQUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FDR0Y7O0FEQUE7RUFDRyx1QkFBQTtBQ0dIOztBRERBO0VBRUU7SUFDRSxvQ0FBQTtFQ0dGO0VEQUU7SUFDRSxzQkFBQTtFQ0VKO0FBQ0Y7O0FER0E7RUFDRSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDREY7O0FER0E7RUFDQyx1QkFBQTtFQUNDLHVCQUFBO0FDQUY7O0FERUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQyL2Rhc2hib2FyZDIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweCBhdXRvIDBweCBhdXRvICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyOTlweCAhaW1wb3J0YW50O1xufVxuaDYge1xuICAgd2lkdGg6IDcycHggIWltcG9ydGFudDtcbn1cbmlvbi1idXR0b25zIHtcbiAgcGFkZGluZzogMTBweCAwcHggIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMHB4IGF1dG8gMHB4IGF1dG87XG4gIHdpZHRoOiAyOTlweDtcbiAgaW9uLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogNDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHggIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICB9XG59XG4uYm94LW1kIHtcbiAgbWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXJ7XG4gIHBhZGRpbmc6IDIwcHggMzBweCAwcHggMzBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG59XG4uY29udGFpbmVyLWJnIHtcbiAgbWFyZ2luLXRvcDogMTU1cHg7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJGNvbG9yOiAjMDAzNjc5LCAkYW1vdW50OiA3NSk7XG4gICAgaW9uLWJ1dHRvbnMge1xuICAgIHBhZGRpbmctdG9wOiA1cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuXG5pb24tZ3JpZCB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuXG59XG4udGl0bGUge1xuICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDM5OXB4KSB7XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTBweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xuXG4gIFxuICAgIC5ib3gtc20sIC5ib3gtbWQge1xuICAgICAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgfVxufVxuXG5pb24tcm93IHtcbiAgY29sb3I6ICMwMDM2NzkgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5ib3gtc20ge1xuIHdpZHRoOiAxNDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDEwcHggICFpbXBvcnRhbnQ7XG59XG4ucHJvZHVjdHMge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5zbGlkZXMge1xuICBtYXJnaW46IDIwcHggMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXItZml4ZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgei1pbmRleDogOTk7XG4gIHdpZHRoOiAxMDAlO1xufSIsImlvbi1jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDEwcHggYXV0byAwcHggYXV0byAhaW1wb3J0YW50O1xuICB3aWR0aDogMjk5cHggIWltcG9ydGFudDtcbn1cblxuaDYge1xuICB3aWR0aDogNzJweCAhaW1wb3J0YW50O1xufVxuXG5pb24tYnV0dG9ucyB7XG4gIHBhZGRpbmc6IDEwcHggMHB4ICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDBweCBhdXRvIDBweCBhdXRvO1xuICB3aWR0aDogMjk5cHg7XG59XG5pb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLmJveC1tZCB7XG4gIG1hcmdpbjogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjBweCAzMHB4IDBweCAzMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb250YWluZXItYmcge1xuICBtYXJnaW4tdG9wOiAxNTVweDtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZDogI2Y5ZmJmZjtcbn1cbi5jb250YWluZXItYmcgaW9uLWJ1dHRvbnMge1xuICBwYWRkaW5nLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA1cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWdyaWQge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnRpdGxlIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMzk5cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTBweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5jb250YWluZXIgLmJveC1zbSwgLmNvbnRhaW5lciAuYm94LW1kIHtcbiAgICBtYXJnaW46IDVweCAhaW1wb3J0YW50O1xuICB9XG59XG5pb24tcm93IHtcbiAgY29sb3I6ICMwMDM2NzkgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmJveC1zbSB7XG4gIHdpZHRoOiAxNDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDEwcHggIWltcG9ydGFudDtcbn1cblxuLnByb2R1Y3RzIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5zbGlkZXMge1xuICBtYXJnaW46IDIwcHggMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXItZml4ZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgei1pbmRleDogOTk7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/dashboard2/dashboard2.page.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard2/dashboard2.page.ts ***!
  \***********************************************/
/*! exports provided: Dashboard2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard2Page", function() { return Dashboard2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let Dashboard2Page = class Dashboard2Page {
    constructor(router) {
        this.router = router;
        this.slideOpts = {
            slidesPerView: 1.2,
            spaceBetween: 16,
        };
    }
    ngOnInit() {
    }
    buyData() {
        this.router.navigate(['/data-bundle']);
    }
    gotoService(data) {
        // console.log(data)
        this.router.navigate(['user-dashboard2/home/' + data]);
    }
};
Dashboard2Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
Dashboard2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard2/dashboard2.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard2.page.scss */ "./src/app/dashboard2/dashboard2.page.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../assets/css/main.scss */ "./src/assets/css/main.scss")).default]
    })
], Dashboard2Page);



/***/ })

}]);
//# sourceMappingURL=dashboard2-dashboard2-module-es2015.js.map