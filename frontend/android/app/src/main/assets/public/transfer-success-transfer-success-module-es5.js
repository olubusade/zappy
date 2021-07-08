function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transfer-success-transfer-success-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/transfer-success/transfer-success.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/transfer-success/transfer-success.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTransferSuccessTransferSuccessPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"header-bg\">\n  <div class=\"container ion-align-items-center ion-justify-content-center\">    \n    <ion-toolbar color=\"none\" class=\"text-white\" mode=\"ios\">\n      <ion-buttons slot=\"start\" (click)=\"goBack()\">\n        <ion-icon ios=\"arrow-back-outline\" md=\"arrow-back\"></ion-icon>\n      </ion-buttons>\n      <ion-title color=\"primary\">Success</ion-title>\n    </ion-toolbar>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div class=\"container full-height\">\n    <h6 class=\"text-center text-primary\">\n      Hurray!! your transaction <br>\n      was successfull\n    </h6>\n    <div class=\"circle-lg\">\n      <img src=\"../../assets/icon/success.png\" alt=\"success\">\n    </div>\n    <ion-button color=\"primary\">Share</ion-button>\n    <ion-button color=\"secondary\" (click)=\"goToService('home')\">Go Home</ion-button>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/services/navigation-service.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/services/navigation-service.service.ts ***!
    \********************************************************/

  /*! exports provided: NavigationServiceService */

  /***/
  function srcAppServicesNavigationServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationServiceService", function () {
      return NavigationServiceService;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var NavigationServiceService = /*#__PURE__*/function () {
      function NavigationServiceService(router, navController) {
        _classCallCheck(this, NavigationServiceService);

        this.router = router;
        this.navController = navController;
      }

      _createClass(NavigationServiceService, [{
        key: "navigateToPreviousPage",
        value: function navigateToPreviousPage() {
          var url = this.router.url;

          if (url.match("(^\/[a-zA-Z0-9\-\.]*)$")) {
            navigator['app'].exitApp();
          } else {
            this.navController.navigateBack(url.replace(new RegExp("(\/([a-zA-Z0-9\-\.])*)$"), ""));
          }
        }
      }]);

      return NavigationServiceService;
    }();

    NavigationServiceService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }];
    };

    NavigationServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NavigationServiceService);
    /***/
  },

  /***/
  "./src/app/transfer-success/transfer-success-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/transfer-success/transfer-success-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: TransferSuccessPageRoutingModule */

  /***/
  function srcAppTransferSuccessTransferSuccessRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransferSuccessPageRoutingModule", function () {
      return TransferSuccessPageRoutingModule;
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


    var _transfer_success_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./transfer-success.page */
    "./src/app/transfer-success/transfer-success.page.ts");

    var routes = [{
      path: '',
      component: _transfer_success_page__WEBPACK_IMPORTED_MODULE_3__["TransferSuccessPage"]
    }];

    var TransferSuccessPageRoutingModule = function TransferSuccessPageRoutingModule() {
      _classCallCheck(this, TransferSuccessPageRoutingModule);
    };

    TransferSuccessPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TransferSuccessPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/transfer-success/transfer-success.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/transfer-success/transfer-success.module.ts ***!
    \*************************************************************/

  /*! exports provided: TransferSuccessPageModule */

  /***/
  function srcAppTransferSuccessTransferSuccessModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransferSuccessPageModule", function () {
      return TransferSuccessPageModule;
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


    var _transfer_success_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./transfer-success-routing.module */
    "./src/app/transfer-success/transfer-success-routing.module.ts");
    /* harmony import */


    var _transfer_success_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./transfer-success.page */
    "./src/app/transfer-success/transfer-success.page.ts");

    var TransferSuccessPageModule = function TransferSuccessPageModule() {
      _classCallCheck(this, TransferSuccessPageModule);
    };

    TransferSuccessPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _transfer_success_routing_module__WEBPACK_IMPORTED_MODULE_5__["TransferSuccessPageRoutingModule"]],
      declarations: [_transfer_success_page__WEBPACK_IMPORTED_MODULE_6__["TransferSuccessPage"]]
    })], TransferSuccessPageModule);
    /***/
  },

  /***/
  "./src/app/transfer-success/transfer-success.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/transfer-success/transfer-success.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTransferSuccessTransferSuccessPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-title {\n  color: #ffffff !important;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.05em;\n}\n\nion-header {\n  padding: 0px !important;\n}\n\nion-toolbar ion-icon {\n  color: #ffffff !important;\n}\n\nion-button {\n  width: 241px;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 12px;\n  border-radius: 6px !important;\n}\n\n.container {\n  align-items: center;\n}\n\n.container h6 {\n  margin: 30px 0px 70px 0px;\n}\n\n.container div {\n  margin: 20px 0px 50px 0px;\n}\n\n.full-height {\n  height: auto;\n}\n\nh6 {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  /* or 150% */\n  text-align: center;\n}\n\n.circle-lg {\n  width: 159px !important;\n  height: 159px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbnNmZXItc3VjY2Vzcy9DOlxcVXNlcnNcXExlbm92b1xcZG9jdW1lbnRzXFx2c2NfbG9jYWxfZGV2XFxuYXRpdmUtbW9iaWxlLWFwcFxcemFwcHlcXGZyb250ZW5kL3NyY1xcYXBwXFx0cmFuc2Zlci1zdWNjZXNzXFx0cmFuc2Zlci1zdWNjZXNzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdHJhbnNmZXItc3VjY2Vzcy90cmFuc2Zlci1zdWNjZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHlCQUFBO0VBRUEsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsc0JBQUE7QUNGRjs7QURJQTtFQUNFLHVCQUFBO0FDREY7O0FES0U7RUFDRSx5QkFBQTtBQ0ZKOztBREtBO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FDRkY7O0FETUE7RUFDRSxtQkFBQTtBQ0hGOztBREtFO0VBQ0UseUJBQUE7QUNISjs7QURLRTtFQUNFLHlCQUFBO0FDSEo7O0FET0E7RUFDRSxZQUFBO0FDSkY7O0FETUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7QUNKRjs7QURPQTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zZmVyLXN1Y2Nlc3MvdHJhbnNmZXItc3VjY2Vzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi10aXRsZSB7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIC8vdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG5cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbn1cbmlvbi1oZWFkZXIge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cbmlvbi10b29sYmFyIHtcbiAgLy9oZWlnaHQ6IDgwcHg7XG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICB9XG59XG5pb24tYnV0dG9uIHtcbiAgd2lkdGg6IDI0MXB4O1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xufVxuXG5cbi5jb250YWluZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGg2IHtcbiAgICBtYXJnaW46IDMwcHggMHB4IDcwcHggMHB4O1xuICB9XG4gIGRpdiB7XG4gICAgbWFyZ2luOiAyMHB4IDBweCA1MHB4IDBweDtcbiAgfVxufVxuXG4uZnVsbC1oZWlnaHQge1xuICBoZWlnaHQ6IGF1dG87XG59XG5oNiB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIC8qIG9yIDE1MCUgKi9cbiAgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNpcmNsZS1sZyB7XG4gIHdpZHRoOiAxNTlweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE1OXB4ICFpbXBvcnRhbnQ7XG59IiwiaW9uLXRpdGxlIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG59XG5cbmlvbi1oZWFkZXIge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLXRvb2xiYXIgaW9uLWljb24ge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgd2lkdGg6IDI0MXB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRhaW5lciBoNiB7XG4gIG1hcmdpbjogMzBweCAwcHggNzBweCAwcHg7XG59XG4uY29udGFpbmVyIGRpdiB7XG4gIG1hcmdpbjogMjBweCAwcHggNTBweCAwcHg7XG59XG5cbi5mdWxsLWhlaWdodCB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuaDYge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAvKiBvciAxNTAlICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNpcmNsZS1sZyB7XG4gIHdpZHRoOiAxNTlweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE1OXB4ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/transfer-success/transfer-success.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/transfer-success/transfer-success.page.ts ***!
    \***********************************************************/

  /*! exports provided: TransferSuccessPage */

  /***/
  function srcAppTransferSuccessTransferSuccessPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransferSuccessPage", function () {
      return TransferSuccessPage;
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


    var _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/navigation-service.service */
    "./src/app/services/navigation-service.service.ts");

    var TransferSuccessPage = /*#__PURE__*/function () {
      function TransferSuccessPage(router, navService) {
        _classCallCheck(this, TransferSuccessPage);

        this.router = router;
        this.navService = navService;
      }

      _createClass(TransferSuccessPage, [{
        key: "goBack",
        value: function goBack() {
          this.navService.navigateToPreviousPage();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToService",
        value: function goToService(data) {
          this.router.navigate(['/user-dashboard/home/']);
        }
      }]);

      return TransferSuccessPage;
    }();

    TransferSuccessPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_3__["NavigationServiceService"]
      }];
    };

    TransferSuccessPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-transfer-success',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./transfer-success.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/transfer-success/transfer-success.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./transfer-success.page.scss */
      "./src/app/transfer-success/transfer-success.page.scss"))["default"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ../../assets/css/main.scss */
      "./src/assets/css/main.scss"))["default"]]
    })], TransferSuccessPage);
    /***/
  }
}]);
//# sourceMappingURL=transfer-success-transfer-success-module-es5.js.map