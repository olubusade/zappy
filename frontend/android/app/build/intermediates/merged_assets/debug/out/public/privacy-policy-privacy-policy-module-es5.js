function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["privacy-policy-privacy-policy-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/privacy-policy/privacy-policy.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/privacy-policy/privacy-policy.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPrivacyPolicyPrivacyPolicyPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons mode=\"ios\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n      <ion-button></ion-button>\n    </ion-buttons>\n    <ion-title >Privacy Policy</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"privacy-policy\">\n    <h4>ADIKPOPAY</h4>\n    <h4>END USER LICENSE AGREEMENT</h4>\n    <small class=\"text-danger\">\n      Please read carefully the terms and conditions of this End User License and Agreement (EULA) before downloading,\n      installing or using AdikpoPay website/app provided by Rulsoft Ltd(\"Rulsoft\"). By signing up on the AdikpoPay website/app\n      you are agreeing to be bound by the following terms and conditions.\n    </small>\n    <div class=\"py-4\">\n      <p>\n        This <strong>EULA</strong>  is a legal agreement between you and Rulsoft and govern your use of the AdikpoPay website/app on your device. \n        The content of the EULA is binding and is not subject to any varying terms or condition, unless as provided by RULSOFT LTD(\"RULSOFT\")bundleRenderer.renderToStreamsubsequently upon due notice to the End User.\n      </p>\n      <strong>Definitions</strong>\n      <p><strong>\"App\"</strong> the AdikpoPay application on the Google Play Store or Apple App Store</p>\n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/privacy-policy/privacy-policy-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/privacy-policy/privacy-policy-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: PrivacyPolicyPageRoutingModule */

  /***/
  function srcAppPrivacyPolicyPrivacyPolicyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPageRoutingModule", function () {
      return PrivacyPolicyPageRoutingModule;
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


    var _privacy_policy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./privacy-policy.page */
    "./src/app/privacy-policy/privacy-policy.page.ts");

    var routes = [{
      path: '',
      component: _privacy_policy_page__WEBPACK_IMPORTED_MODULE_3__["PrivacyPolicyPage"]
    }];

    var PrivacyPolicyPageRoutingModule = function PrivacyPolicyPageRoutingModule() {
      _classCallCheck(this, PrivacyPolicyPageRoutingModule);
    };

    PrivacyPolicyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PrivacyPolicyPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/privacy-policy/privacy-policy.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/privacy-policy/privacy-policy.module.ts ***!
    \*********************************************************/

  /*! exports provided: PrivacyPolicyPageModule */

  /***/
  function srcAppPrivacyPolicyPrivacyPolicyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPageModule", function () {
      return PrivacyPolicyPageModule;
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


    var _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./privacy-policy-routing.module */
    "./src/app/privacy-policy/privacy-policy-routing.module.ts");
    /* harmony import */


    var _privacy_policy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./privacy-policy.page */
    "./src/app/privacy-policy/privacy-policy.page.ts");

    var PrivacyPolicyPageModule = function PrivacyPolicyPageModule() {
      _classCallCheck(this, PrivacyPolicyPageModule);
    };

    PrivacyPolicyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrivacyPolicyPageRoutingModule"]],
      declarations: [_privacy_policy_page__WEBPACK_IMPORTED_MODULE_6__["PrivacyPolicyPage"]]
    })], PrivacyPolicyPageModule);
    /***/
  },

  /***/
  "./src/app/privacy-policy/privacy-policy.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/privacy-policy/privacy-policy.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPrivacyPolicyPrivacyPolicyPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: rgba(0, 0, 92, 0.02);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpdmFjeS1wb2xpY3kvQzpcXFVzZXJzXFxMZW5vdm9cXGRvY3VtZW50c1xcdnNjX2xvY2FsX2RldlxcbmF0aXZlLW1vYmlsZS1hcHBcXHphcHB5XFxmcm9udGVuZC9zcmNcXGFwcFxccHJpdmFjeS1wb2xpY3lcXHByaXZhY3ktcG9saWN5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDkyLCAwLjAyKTtcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgwLCAwLCA5MiwgMC4wMik7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/privacy-policy/privacy-policy.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/privacy-policy/privacy-policy.page.ts ***!
    \*******************************************************/

  /*! exports provided: PrivacyPolicyPage */

  /***/
  function srcAppPrivacyPolicyPrivacyPolicyPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPage", function () {
      return PrivacyPolicyPage;
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

    var PrivacyPolicyPage = /*#__PURE__*/function () {
      function PrivacyPolicyPage(router, navService) {
        _classCallCheck(this, PrivacyPolicyPage);

        this.router = router;
        this.navService = navService;
      }

      _createClass(PrivacyPolicyPage, [{
        key: "goBack",
        value: function goBack() {
          this.navService.navigateToPreviousPage();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PrivacyPolicyPage;
    }();

    PrivacyPolicyPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_3__["NavigationServiceService"]
      }];
    };

    PrivacyPolicyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-privacy-policy',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./privacy-policy.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/privacy-policy/privacy-policy.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./privacy-policy.page.scss */
      "./src/app/privacy-policy/privacy-policy.page.scss"))["default"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ../../assets/css/main.scss */
      "./src/assets/css/main.scss"))["default"]]
    })], PrivacyPolicyPage);
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
  }
}]);
//# sourceMappingURL=privacy-policy-privacy-policy-module-es5.js.map