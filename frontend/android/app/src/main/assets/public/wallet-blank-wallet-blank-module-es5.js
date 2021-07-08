function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wallet-blank-wallet-blank-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/wallet-blank/wallet-blank.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wallet-blank/wallet-blank.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWalletBlankWalletBlankPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons mode=\"ios\">\n      <ion-button>\n      </ion-button>\n      <ion-button></ion-button>\n    </ion-buttons>\n    <ion-title >Wallet</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"empty\" mode=\"ios\">\n      <ion-segment-button value=\"all\">\n        <ion-label>All</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"empty\">\n        <ion-label>Debit</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"credit\">\n        <ion-label>Credit</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n\n    <ion-buttons class=\"ion-align-items-center\" mode=\"ios\">\n      <ion-button  fill=\"clear\"> \n      </ion-button>\n      <ion-button slot=\"end\" class=\"tool-text\" fill=\"clear\" (click)=\"navigatePage('add-money')\">          \n        Add money\n        <img src=\"../../assets/icon/add_money_icon.svg\" alt=\"add-money\" class=\"ml-1\">\n      </ion-button>\n    </ion-buttons>\n    \n    <div class=\"signup\">\n      <p>You haven't funded <br> your wallet yet</p>\n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/wallet-blank/wallet-blank-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/wallet-blank/wallet-blank-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: WalletBlankPageRoutingModule */

  /***/
  function srcAppWalletBlankWalletBlankRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalletBlankPageRoutingModule", function () {
      return WalletBlankPageRoutingModule;
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


    var _wallet_blank_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./wallet-blank.page */
    "./src/app/wallet-blank/wallet-blank.page.ts");

    var routes = [{
      path: '',
      component: _wallet_blank_page__WEBPACK_IMPORTED_MODULE_3__["WalletBlankPage"]
    }];

    var WalletBlankPageRoutingModule = function WalletBlankPageRoutingModule() {
      _classCallCheck(this, WalletBlankPageRoutingModule);
    };

    WalletBlankPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], WalletBlankPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/wallet-blank/wallet-blank.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/wallet-blank/wallet-blank.module.ts ***!
    \*****************************************************/

  /*! exports provided: WalletBlankPageModule */

  /***/
  function srcAppWalletBlankWalletBlankModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalletBlankPageModule", function () {
      return WalletBlankPageModule;
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


    var _wallet_blank_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./wallet-blank-routing.module */
    "./src/app/wallet-blank/wallet-blank-routing.module.ts");
    /* harmony import */


    var _wallet_blank_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./wallet-blank.page */
    "./src/app/wallet-blank/wallet-blank.page.ts");

    var WalletBlankPageModule = function WalletBlankPageModule() {
      _classCallCheck(this, WalletBlankPageModule);
    };

    WalletBlankPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _wallet_blank_routing_module__WEBPACK_IMPORTED_MODULE_5__["WalletBlankPageRoutingModule"]],
      declarations: [_wallet_blank_page__WEBPACK_IMPORTED_MODULE_6__["WalletBlankPage"]]
    })], WalletBlankPageModule);
    /***/
  },

  /***/
  "./src/app/wallet-blank/wallet-blank.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/wallet-blank/wallet-blank.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWalletBlankWalletBlankPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".signup {\n  height: 50vh;\n}\n\n.tool-bar-col-2 {\n  padding: 10px 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2FsbGV0LWJsYW5rL0M6XFxVc2Vyc1xcTGVub3ZvXFxkb2N1bWVudHNcXHZzY19sb2NhbF9kZXZcXG5hdGl2ZS1tb2JpbGUtYXBwXFx6YXBweVxcZnJvbnRlbmQvc3JjXFxhcHBcXHdhbGxldC1ibGFua1xcd2FsbGV0LWJsYW5rLnBhZ2Uuc2NzcyIsInNyYy9hcHAvd2FsbGV0LWJsYW5rL3dhbGxldC1ibGFuay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSw2QkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvd2FsbGV0LWJsYW5rL3dhbGxldC1ibGFuay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbnVwIHtcbiAgaGVpZ2h0OiA1MHZoO1xufVxuLnRvb2wtYmFyLWNvbC0yIHtcbiAgcGFkZGluZzogMTBweCAyMHB4ICFpbXBvcnRhbnQ7XG59IiwiLnNpZ251cCB7XG4gIGhlaWdodDogNTB2aDtcbn1cblxuLnRvb2wtYmFyLWNvbC0yIHtcbiAgcGFkZGluZzogMTBweCAyMHB4ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/wallet-blank/wallet-blank.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/wallet-blank/wallet-blank.page.ts ***!
    \***************************************************/

  /*! exports provided: WalletBlankPage */

  /***/
  function srcAppWalletBlankWalletBlankPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalletBlankPage", function () {
      return WalletBlankPage;
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

    var WalletBlankPage = /*#__PURE__*/function () {
      function WalletBlankPage(router) {
        _classCallCheck(this, WalletBlankPage);

        this.router = router;
      }

      _createClass(WalletBlankPage, [{
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

      return WalletBlankPage;
    }();

    WalletBlankPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    WalletBlankPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-wallet-blank',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./wallet-blank.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/wallet-blank/wallet-blank.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./wallet-blank.page.scss */
      "./src/app/wallet-blank/wallet-blank.page.scss"))["default"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ../../assets/css/main.scss */
      "./src/assets/css/main.scss"))["default"]]
    })], WalletBlankPage);
    /***/
  }
}]);
//# sourceMappingURL=wallet-blank-wallet-blank-module-es5.js.map