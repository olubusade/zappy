function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-cards-blank-my-cards-blank-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/my-cards-blank/my-cards-blank.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-cards-blank/my-cards-blank.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMyCardsBlankMyCardsBlankPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons mode=\"ios\">\n      <ion-button>\n      </ion-button>\n      <ion-button></ion-button>\n    </ion-buttons>\n    <ion-title >Wallet</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">    \n    <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"cards\" mode=\"ios\">\n      <ion-segment-button value=\"wallet\">\n        <ion-label>My balance</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"cards\">\n        <ion-label>My cards</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n\n    <ion-buttons class=\"ion-align-items-center\" mode=\"ios\">\n      <ion-button  fill=\"clear\"> \n      </ion-button>\n      <ion-button slot=\"end\" class=\"tool-text\" fill=\"clear\" (click)=\"navigatePage('add-card')\">          \n        Add card\n        <img src=\"../../assets/icon/add_money_icon.svg\" alt=\"add-money\" class=\"ml-1\">\n      </ion-button>\n    </ion-buttons>\n\n    <p class=\"text-center\">You haven't added <br> any debit card yet</p>\n    \n  </div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/my-cards-blank/my-cards-blank-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/my-cards-blank/my-cards-blank-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: MyCardsBlankPageRoutingModule */

  /***/
  function srcAppMyCardsBlankMyCardsBlankRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyCardsBlankPageRoutingModule", function () {
      return MyCardsBlankPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _my_cards_blank_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-cards-blank.page */
    "./src/app/my-cards-blank/my-cards-blank.page.ts");

    var routes = [{
      path: '',
      component: _my_cards_blank_page__WEBPACK_IMPORTED_MODULE_3__["MyCardsBlankPage"]
    }];

    var MyCardsBlankPageRoutingModule = function MyCardsBlankPageRoutingModule() {
      _classCallCheck(this, MyCardsBlankPageRoutingModule);
    };

    MyCardsBlankPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyCardsBlankPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/my-cards-blank/my-cards-blank.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/my-cards-blank/my-cards-blank.module.ts ***!
    \*********************************************************/

  /*! exports provided: MyCardsBlankPageModule */

  /***/
  function srcAppMyCardsBlankMyCardsBlankModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyCardsBlankPageModule", function () {
      return MyCardsBlankPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _my_cards_blank_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./my-cards-blank-routing.module */
    "./src/app/my-cards-blank/my-cards-blank-routing.module.ts");
    /* harmony import */


    var _my_cards_blank_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./my-cards-blank.page */
    "./src/app/my-cards-blank/my-cards-blank.page.ts");

    var MyCardsBlankPageModule = function MyCardsBlankPageModule() {
      _classCallCheck(this, MyCardsBlankPageModule);
    };

    MyCardsBlankPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _my_cards_blank_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyCardsBlankPageRoutingModule"]],
      declarations: [_my_cards_blank_page__WEBPACK_IMPORTED_MODULE_6__["MyCardsBlankPage"]]
    })], MyCardsBlankPageModule);
    /***/
  },

  /***/
  "./src/app/my-cards-blank/my-cards-blank.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/my-cards-blank/my-cards-blank.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMyCardsBlankMyCardsBlankPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  text-align: center;\n  color: #003679;\n}\n\nion-card {\n  text-align: center;\n  padding: 20px;\n  margin: 0 20px;\n  color: #ffffff;\n}\n\nion-card strong {\n  margin-top: 20rem;\n  font-size: 26px;\n}\n\n.tool-text {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 18px;\n}\n\n.m-recent {\n  margin: 1px !important;\n  font-size: 12px !important;\n  font-weight: 600 !important;\n  color: #003679 !important;\n}\n\n.m-recent p {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 8px;\n  line-height: 14px;\n}\n\n.most-recent {\n  padding: 10px 0px;\n}\n\n.most-recent h4 {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 8px;\n  line-height: 14px;\n  align-items: center;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-shrink: 2;\n  width: 70px;\n}\n\n.circle-sm {\n  width: 40px !important;\n  height: 40px !important;\n  background: rgba(0, 54, 121, 0.6);\n  margin: 0 auto !important;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 12px;\n}\n\nion-title {\n  text-align: center;\n}\n\nion-toolbar {\n  --paddin-end: 0px;\n  --padding-start: 0px;\n}\n\nion-buttons {\n  justify-content: space-between;\n  padding: 15px 0px;\n}\n\nion-buttons ion-button {\n  width: auto;\n  margin: 0 !important;\n  --padding-end: 0px !important;\n  --padding-start: 0px !important;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 10px;\n  line-height: 15px;\n  color: #003679;\n}\n\nion-button {\n  width: 241px;\n  --border-radius: 6px;\n  margin: 0 auto;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 12px;\n}\n\nion-item {\n  color: #003679;\n  border-radius: 6px;\n  --background: rgba(0, 54, 121, 0.1);\n  --min-height: 40px;\n  --background-hover: #ffffff;\n  margin: 0px;\n}\n\nion-item ion-label {\n  --font-size: 12px !important;\n  line-height: 18px;\n  --font-weight: 500;\n  --color: rgba(0, 54, 121, 0.6);\n}\n\nion-input, ion-select {\n  --placeholder-color: rgba(0, 54, 121, 0.6);\n  --placeholder-font-weight: 500;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 18px;\n}\n\np {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 22px;\n  text-align: center;\n  color: rgba(0, 54, 121, 0.6);\n  margin-top: 20vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktY2FyZHMtYmxhbmsvQzpcXFVzZXJzXFxMZW5vdm9cXGRvY3VtZW50c1xcdnNjX2xvY2FsX2RldlxcbmF0aXZlLW1vYmlsZS1hcHBcXHphcHB5XFxmcm9udGVuZC9zcmNcXGFwcFxcbXktY2FyZHMtYmxhbmtcXG15LWNhcmRzLWJsYW5rLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbXktY2FyZHMtYmxhbmsvbXktY2FyZHMtYmxhbmsucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0NGOztBRENFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtBQ0NGOztBRENFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREdBO0VBQ0UsaUJBQUE7QUNBRjs7QURDRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNDSjs7QURJQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7QUNERjs7QURJQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUNERjs7QURJQTtFQUNFLDhCQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURFRTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQUo7O0FESUE7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQ0RGOztBREdFO0VBQ0UsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUNESjs7QURLQTtFQUNFLDBDQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRko7O0FES0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL215LWNhcmRzLWJsYW5rL215LWNhcmRzLWJsYW5rLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAwMzY3OTtcbn1cblxuaW9uLWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMCAyMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcblxuICBzdHJvbmcge1xuICAgIG1hcmdpbi10b3A6IDIwcmVtO1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgfVxufVxuLnRvb2wtdGV4dCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLm0tcmVjZW50IHtcbiAgbWFyZ2luOiAxcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDM2NzkgIWltcG9ydGFudDtcblxuICBwIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgfVxufVxuXG4ubW9zdC1yZWNlbnQge1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgaDQge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LXNocmluazogMjtcbiAgICB3aWR0aDogNzBweDtcbiAgfVxuXG59XG5cbi5jaXJjbGUtc20ge1xuICB3aWR0aDogNDBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCA1NCwgMTIxLCAwLjYpO1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tcGFkZGluLWVuZDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cblxuaW9uLWJ1dHRvbnMge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDE1cHggMHB4O1xuICBpb24tYnV0dG9uIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHggIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgIGNvbG9yOiAjMDAzNjc5O1xuICB9XG59XG5cbmlvbi1idXR0b24ge1xuICB3aWR0aDogMjQxcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xufVxuXG5pb24taXRlbSB7XG4gIGNvbG9yOiAjMDAzNjc5O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgwLCA1NCwgMTIxLCAwLjEpO1xuICAtLW1pbi1oZWlnaHQ6IDQwcHg7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2ZmZmZmZjtcbiAgbWFyZ2luOiAwcHg7XG5cbiAgaW9uLWxhYmVsIHtcbiAgICAtLWZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIC0tZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAtLWNvbG9yOiByZ2JhKDAsIDU0LCAxMjEsIDAuNik7XG4gIH1cbn1cblxuaW9uLWlucHV0LCBpb24tc2VsZWN0IHtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiYSgwLCA1NCwgMTIxLCAwLjYpO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA1MDA7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJnYmEoMCwgNTQsIDEyMSwgMC42KTtcbiAgbWFyZ2luLXRvcDogMjB2aDtcbn1cbiIsImlvbi1jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAwMzY3OTtcbn1cblxuaW9uLWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMCAyMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbmlvbi1jYXJkIHN0cm9uZyB7XG4gIG1hcmdpbi10b3A6IDIwcmVtO1xuICBmb250LXNpemU6IDI2cHg7XG59XG5cbi50b29sLXRleHQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5tLXJlY2VudCB7XG4gIG1hcmdpbjogMXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDAzNjc5ICFpbXBvcnRhbnQ7XG59XG4ubS1yZWNlbnQgcCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiA4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4ubW9zdC1yZWNlbnQge1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbn1cbi5tb3N0LXJlY2VudCBoNCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiA4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtc2hyaW5rOiAyO1xuICB3aWR0aDogNzBweDtcbn1cblxuLmNpcmNsZS1zbSB7XG4gIHdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDU0LCAxMjEsIDAuNik7XG4gIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xufVxuXG5pb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW4tZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xufVxuXG5pb24tYnV0dG9ucyB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTVweCAwcHg7XG59XG5pb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctZW5kOiAwcHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIGNvbG9yOiAjMDAzNjc5O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgd2lkdGg6IDI0MXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbn1cblxuaW9uLWl0ZW0ge1xuICBjb2xvcjogIzAwMzY3OTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMCwgNTQsIDEyMSwgMC4xKTtcbiAgLS1taW4taGVpZ2h0OiA0MHB4O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmZmZmY7XG4gIG1hcmdpbjogMHB4O1xufVxuaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgLS1mb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tZm9udC13ZWlnaHQ6IDUwMDtcbiAgLS1jb2xvcjogcmdiYSgwLCA1NCwgMTIxLCAwLjYpO1xufVxuXG5pb24taW5wdXQsIGlvbi1zZWxlY3Qge1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2JhKDAsIDU0LCAxMjEsIDAuNik7XG4gIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDUwMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmdiYSgwLCA1NCwgMTIxLCAwLjYpO1xuICBtYXJnaW4tdG9wOiAyMHZoO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/my-cards-blank/my-cards-blank.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/my-cards-blank/my-cards-blank.page.ts ***!
    \*******************************************************/

  /*! exports provided: MyCardsBlankPage */

  /***/
  function srcAppMyCardsBlankMyCardsBlankPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyCardsBlankPage", function () {
      return MyCardsBlankPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MyCardsBlankPage = /*#__PURE__*/function () {
      function MyCardsBlankPage(router) {
        _classCallCheck(this, MyCardsBlankPage);

        this.router = router;
      }

      _createClass(MyCardsBlankPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "segmentChanged",
        value: function segmentChanged(ev) {
          var page = ev.detail.value;

          if (page === 'wallet') {
            this.router.navigate(['/user-dashboard/wallet']);
          } else {
            this.router.navigate(['/user-dashboard/wallet/' + page]);
          }
        }
      }, {
        key: "navigatePage",
        value: function navigatePage(data) {
          this.router.navigate(['/user-dashboard/wallet/' + data]);
        }
      }]);

      return MyCardsBlankPage;
    }();

    MyCardsBlankPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    MyCardsBlankPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-cards-blank',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./my-cards-blank.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/my-cards-blank/my-cards-blank.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./my-cards-blank.page.scss */
      "./src/app/my-cards-blank/my-cards-blank.page.scss"))["default"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ../../assets/css/main.scss */
      "./src/assets/css/main.scss"))["default"]]
    })], MyCardsBlankPage);
    /***/
  }
}]);
//# sourceMappingURL=my-cards-blank-my-cards-blank-module-es5.js.map