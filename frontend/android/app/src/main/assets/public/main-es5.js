function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n  <ion-menu side=\"start\" menuId=\"first\" contentId=\"main\" swipe-gesture=\"true\" type=\"push\"> \n    <ion-header>\n      <ion-toolbar>\n        <span class=\"avatar-main\">\n          <img src=\"../../assets/imgs/passport2.png\" alt=\"photo\"> \n          <h6>{{userData.fullname}}</h6>\n          <ion-menu-toggle>            \n            <button ion-button (click)=\"profile()\">Edit Profile</button>\n          </ion-menu-toggle>\n        </span>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let page of pages\">          \n          <ion-item detail=\"false\" auto-hide=\"false\" [routerLink]=\"page.path\" routerDirection=\"root\" [class.active-menu]=\"activePath === page.path\">\n            <img src=\"../../assets/icon/{{page.icon}}\" alt=\"about\">\n            <span class=\"{{page.color}} p-2\">{{page.name}}</span>\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n      <div class=\"paystack\">\n        Version 1.0.0\n      </div>\n    </ion-content>\n  </ion-menu>\n\n  <ion-menu side=\"start\" menuId=\"second\" contentId=\"main\" swipe-gesture=\"true\" type=\"push\"> \n    <ion-header>\n      <ion-toolbar>\n        <span class=\"brand\">\n          <img src=\"../assets/imgs/logo.png\" alt=\"logo\"> \n          <ion-menu-toggle>            \n            <button ion-button (click)=\"register()\">Register</button>\n          </ion-menu-toggle>\n        </span>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let page of pages\">          \n          <ion-item detail=\"false\" auto-hide=\"false\" [routerLink]=\"page.path\" routerDirection=\"root\" [class.active-menu]=\"activePath === page.path\">\n            <img src=\"../../assets/icon/{{page.icon}}\" alt=\"about\">\n            <span class=\"{{page.color}} p-2\">{{page.name}}</span>\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n      <div class=\"paystack\">\n        Version 1.0.0\n      </div>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); //import {RegisterPageModule} from './register/register.module'


    var routes = [{
      path: '',
      redirectTo: 'walk-through',
      pathMatch: 'full'
    }, {
      path: 'forgotpassword',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | login-forgotpassword-forgotpassword-module */
        "forgotpassword-forgotpassword-module").then(__webpack_require__.bind(null,
        /*! ./login/forgotpassword/forgotpassword.module */
        "./src/app/login/forgotpassword/forgotpassword.module.ts")).then(function (m) {
          return m.ForgotpasswordPageModule;
        });
      }
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'register',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | register-register-module */
        [__webpack_require__.e("common"), __webpack_require__.e("register-register-module")]).then(__webpack_require__.bind(null,
        /*! ./register/register.module */
        "./src/app/register/register.module.ts")).then(function (m) {
          return m.RegisterPageModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | login-login-module */
        [__webpack_require__.e("default~add-money-add-money-module~login-login-module~profile-profile-module~signup-signup-module"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null,
        /*! ./login/login.module */
        "./src/app/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'logout',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | login-logout-logout-module */
        "logout-logout-module").then(__webpack_require__.bind(null,
        /*! ./login/logout/logout.module */
        "./src/app/login/logout/logout.module.ts")).then(function (m) {
          return m.LogoutPageModule;
        });
      }
    }, {
      path: 'newlogin',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | newlogin-newlogin-module */
        "newlogin-newlogin-module").then(__webpack_require__.bind(null,
        /*! ./newlogin/newlogin.module */
        "./src/app/newlogin/newlogin.module.ts")).then(function (m) {
          return m.NewloginPageModule;
        });
      }
    }, {
      path: 'user-dashboard',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | user-dashboard-user-dashboard-module */
        "user-dashboard-user-dashboard-module").then(__webpack_require__.bind(null,
        /*! ./user-dashboard/user-dashboard.module */
        "./src/app/user-dashboard/user-dashboard.module.ts")).then(function (m) {
          return m.UserDashboardPageModule;
        });
      }
    }, {
      path: 'landing-page',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | landing-page-landing-page-module */
        "landing-page-landing-page-module").then(__webpack_require__.bind(null,
        /*! ./landing-page/landing-page.module */
        "./src/app/landing-page/landing-page.module.ts")).then(function (m) {
          return m.LandingPagePageModule;
        });
      }
    }, {
      path: 'walk-through',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | walk-through-walk-through-module */
        "walk-through-walk-through-module").then(__webpack_require__.bind(null,
        /*! ./walk-through/walk-through.module */
        "./src/app/walk-through/walk-through.module.ts")).then(function (m) {
          return m.WalkThroughPageModule;
        });
      }
    }, {
      path: 'user-dashboard2',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | user-dashboard2-user-dashboard2-module */
        "user-dashboard2-user-dashboard2-module").then(__webpack_require__.bind(null,
        /*! ./user-dashboard2/user-dashboard2.module */
        "./src/app/user-dashboard2/user-dashboard2.module.ts")).then(function (m) {
          return m.UserDashboard2PageModule;
        });
      }
    }, {
      path: 'dashboard',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | dashboard-dashboard-module */
        "dashboard-dashboard-module").then(__webpack_require__.bind(null,
        /*! ./dashboard/dashboard.module */
        "./src/app/dashboard/dashboard.module.ts")).then(function (m) {
          return m.DashboardPageModule;
        });
      }
    }, {
      path: 'dashboard2',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | dashboard2-dashboard2-module */
        "dashboard2-dashboard2-module").then(__webpack_require__.bind(null,
        /*! ./dashboard2/dashboard2.module */
        "./src/app/dashboard2/dashboard2.module.ts")).then(function (m) {
          return m.Dashboard2PageModule;
        });
      }
    }, {
      path: 'otp/:m',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | otp-otp-module */
        [__webpack_require__.e("common"), __webpack_require__.e("otp-otp-module")]).then(__webpack_require__.bind(null,
        /*! ./otp/otp.module */
        "./src/app/otp/otp.module.ts")).then(function (m) {
          return m.OtpPageModule;
        });
      }
    }, {
      path: 'signup/:m',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | signup-signup-module */
        [__webpack_require__.e("default~add-money-add-money-module~login-login-module~profile-profile-module~signup-signup-module"), __webpack_require__.e("common"), __webpack_require__.e("signup-signup-module")]).then(__webpack_require__.bind(null,
        /*! ./signup/signup.module */
        "./src/app/signup/signup.module.ts")).then(function (m) {
          return m.SignupPageModule;
        });
      }
    }, {
      path: 'transaction-pin',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | signup-transaction-pin-transaction-pin-module */
        "transaction-pin-transaction-pin-module").then(__webpack_require__.bind(null,
        /*! ./signup/transaction-pin/transaction-pin.module */
        "./src/app/signup/transaction-pin/transaction-pin.module.ts")).then(function (m) {
          return m.TransactionPinPageModule;
        });
      }
    }, {
      path: 'menu/referral',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | referral-referral-module */
        "referral-referral-module").then(__webpack_require__.bind(null,
        /*! ./referral/referral.module */
        "./src/app/referral/referral.module.ts")).then(function (m) {
          return m.ReferralPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item {\n  margin-left: 0 !important;\n}\n\nion-header {\n  --background: #ffffff !important;\n  --padding: 20px !important;\n}\n\nh6 {\n  color: #9ACD32;\n  text-transform: uppercase;\n  font-weight: 600;\n  font-size: 12px;\n}\n\nbutton {\n  border-radius: 20px !important;\n  background: #9ACD32;\n  color: #ffffff;\n  padding: 5px 7px;\n}\n\nion-toolbar {\n  text-align: center !important;\n}\n\n.avatar-main {\n  margin-bottom: 0px !important;\n}\n\n.paystack {\n  color: #1e1f1d !important;\n  box-shadow: none !important;\n}\n\n.brand {\n  padding: 30px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxMZW5vdm9cXGRvY3VtZW50c1xcdnNjX2xvY2FsX2RldlxcbmF0aXZlLW1vYmlsZS1hcHBcXHphcHB5XFxmcm9udGVuZC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7RUFDQSwwQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQ0E7RUFDRSw2QkFBQTtBQ0VGOztBRENBO0VBQ0UsNkJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0VBQ0EsMkJBQUE7QUNFRjs7QURDQTtFQUNFLGlCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmg2IHtcbiAgY29sb3I6ICM5QUNEMzI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbmJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzlBQ0QzMjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDVweCA3cHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5hdmF0YXItbWFpbiB7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4ucGF5c3RhY2sge1xuICBjb2xvcjogIzFlMWYxZCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5icmFuZCB7XG4gIHBhZGRpbmc6IDMwcHggMHB4O1xufSIsImlvbi1pdGVtIHtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmc6IDIwcHggIWltcG9ydGFudDtcbn1cblxuaDYge1xuICBjb2xvcjogIzlBQ0QzMjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICM5QUNEMzI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiA1cHggN3B4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uYXZhdGFyLW1haW4ge1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnBheXN0YWNrIHtcbiAgY29sb3I6ICMxZTFmMWQgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYnJhbmQge1xuICBwYWRkaW5nOiAzMHB4IDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! jwt-decode */
    "./node_modules/jwt-decode/build/jwt-decode.esm.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, router, authService) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.router = router;
        this.authService = authService;
        this.activePath = '';
        this.userData = {
          first_name: '',
          last_name: '',
          fullname: ''
        };
        this.pages = [{
          name: 'Referral',
          icon: 'referal_icon.svg',
          color: 'text-primary',
          path: '/user-dashboard/menu/referral'
        }, {
          name: 'Contact',
          icon: 'contact_us_icon.svg',
          color: 'text-primary',
          path: '/user-dashboard/menu/contact'
        }, {
          name: 'About Zappy',
          icon: 'about_rulpay_icon.svg',
          color: 'text-primary',
          path: '/user-dashboard/menu/about'
        }, {
          name: 'Logout',
          icon: 'logout_icon.svg',
          color: 'text-danger',
          path: '/logout'
        }];
        this.initializeApp();
        this.router.events.subscribe(function (event) {
          _this.activePath = event.url;
        });
        this.userData.first_name = localStorage.getItem("setting:first_name");
        this.userData.last_name = localStorage.getItem("setting:last_name");
        this.userData.fullname = this.userData.first_name + ' ' + this.userData.last_name;
      }

      _createClass(AppComponent, [{
        key: "profile",
        value: function profile() {
          console.log('profile');
          this.router.navigate(['/user-dashboard/profile']);
        }
      }, {
        key: "register",
        value: function register() {
          console.log('profile');
          this.router.navigate(['/signup']);
        }
      }, {
        key: "tokenExpired",
        value: function tokenExpired(token) {
          console.log('token', token); // const expiry = parseInt(token);

          var decode = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_7__["default"])(token);
          var expiry = decode.exp;
          console.log('today', Math.floor(new Date().getTime() / 1000));
          console.log('expiry', expiry);
          return Math.floor(new Date().getTime() / 1000) >= expiry;
        }
      }, {
        key: "initializeApp",
        value: function initializeApp() {
          var _this2 = this;

          this.platform.ready().then(function () {
            _this2.statusBar.styleDefault();

            _this2.splashScreen.hide();
          }); //This is can only be used to validate the user on the app
          //and not to be used to authenticate the api request

          /*
          if (this.tokenExpired(localStorage.getItem(`setting:access_token`))) {
            // token expired
            this.router.navigate(['/login'])
            console.log('Token expired');
          } else {
            // token valid
            console.log('Valid Token');
          }
          */
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ../assets/css/main.scss */
      "./src/assets/css/main.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _auth_auth_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./auth/auth.module */
    "./src/app/auth/auth.module.ts");
    /* harmony import */


    var _core_utils_GlobalErrorHandler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./core/utils/GlobalErrorHandler */
    "./src/app/core/utils/GlobalErrorHandler.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_core_utils_TokenInterceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./../app/core/utils/TokenInterceptor */
    "./src/app/core/utils/TokenInterceptor.ts");
    /* harmony import */


    var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic/storage-angular */
    "./node_modules/@ionic/storage-angular/__ivy_ngcc__/fesm2015/ionic-storage-angular.js");
    /* harmony import */


    var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/clipboard/ngx */
    "./node_modules/@ionic-native/clipboard/__ivy_ngcc__/ngx/index.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_9__["AuthModule"], _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_13__["IonicStorageModule"].forRoot()],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_14__["Clipboard"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
        useClass: _core_utils_GlobalErrorHandler__WEBPACK_IMPORTED_MODULE_10__["GlobalErrorHandler"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
        useClass: _app_core_utils_TokenInterceptor__WEBPACK_IMPORTED_MODULE_12__["TokenInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth/auth.module.ts":
  /*!*************************************!*\
    !*** ./src/app/auth/auth.module.ts ***!
    \*************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage-angular */
    "./node_modules/@ionic/storage-angular/__ivy_ngcc__/fesm2015/ionic-storage-angular.js");

    var AuthModule = function AuthModule() {
      _classCallCheck(this, AuthModule);
    };

    AuthModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__["IonicStorageModule"].forRoot()]
    })], AuthModule);
    /***/
  },

  /***/
  "./src/app/core/utils/GlobalErrorHandler.ts":
  /*!**************************************************!*\
    !*** ./src/app/core/utils/GlobalErrorHandler.ts ***!
    \**************************************************/

  /*! exports provided: GlobalErrorHandler */

  /***/
  function srcAppCoreUtilsGlobalErrorHandlerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalErrorHandler", function () {
      return GlobalErrorHandler;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var GlobalErrorHandler = /*#__PURE__*/function () {
      function GlobalErrorHandler() {
        _classCallCheck(this, GlobalErrorHandler);
      }

      _createClass(GlobalErrorHandler, [{
        key: "intercept",
        value: function intercept(request, next) {
          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            var errorMessage = '';

            if (error.error instanceof ErrorEvent) {
              // client-side error
              errorMessage = "Error: ".concat(error.error.message);
            } else {
              // server-side error
              errorMessage = "Error Status: ".concat(error.status, "\nMessage: ").concat(error.message);
            }

            console.log(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errorMessage);
          }));
        }
      }]);

      return GlobalErrorHandler;
    }();
    /***/

  },

  /***/
  "./src/app/core/utils/TokenInterceptor.ts":
  /*!************************************************!*\
    !*** ./src/app/core/utils/TokenInterceptor.ts ***!
    \************************************************/

  /*! exports provided: TokenInterceptor */

  /***/
  function srcAppCoreUtilsTokenInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
      return TokenInterceptor;
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");

    var TokenInterceptor = /*#__PURE__*/function () {
      function TokenInterceptor(auth) {
        _classCallCheck(this, TokenInterceptor);

        this.auth = auth;
      }

      _createClass(TokenInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          request = request.clone({
            setHeaders: {
              Authorization: "Bearer ".concat(this.auth.getToken())
            }
          });
          return next.handle(request);
        }
      }]);

      return TokenInterceptor;
    }();

    TokenInterceptor.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    TokenInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], TokenInterceptor);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
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

    var AuthService = /*#__PURE__*/function () {
      function AuthService(router) {
        _classCallCheck(this, AuthService);

        this.router = router;
      }

      _createClass(AuthService, [{
        key: "getToken",
        value: function getToken() {
          return localStorage.getItem("setting:access_token");
        }
      }, {
        key: "tokenExpired",
        value: function tokenExpired() {
          console.log('testing token');
          var token = parseInt(localStorage.getItem("setting:expiresIn")); // const expiry = (JSON.parse(atob(token.split('.')[1]))).expiresIn;

          return Math.floor(new Date().getTime() / 1000) >= token ? console.log('Valid Token') : this.router.navigate(['/login']);
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/assets/css/main.scss":
  /*!**********************************!*\
    !*** ./src/assets/css/main.scss ***!
    \**********************************/

  /*! exports provided: default */

  /***/
  function srcAssetsCssMainScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg-primary {\n  background-color: #9ACD32;\n}\n\n.bg-secondary {\n  background-color: #ddab14;\n}\n\n.bg-secondary-light {\n  background-color: #f2f3d9;\n}\n\n.bg-light {\n  background-color: #9ACD32;\n}\n\n.bg-purple {\n  background-color: #7e2e84;\n}\n\n.bg-white {\n  background-color: #ffffff;\n}\n\n.bg-danger {\n  background-color: #f53d3d;\n}\n\nbutton:focus {\n  outline: none;\n}\n\n#page-bg {\n  background: linear-gradient(90deg, #9ACD32 0%, #DDAB14 157.2%) !important;\n  padding: 20px;\n}\n\n.py-4 {\n  padding: 30px 0px;\n}\n\n.signup {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n}\n\n.signup p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #3b3b3b;\n}\n\nform {\n  width: 100%;\n}\n\nform input {\n  padding: 13px;\n  margin: 5px 0 20px 0;\n  width: 90%;\n  border-radius: 7px;\n  border: none;\n  background-color: #e4e7e9;\n}\n\nform input::-moz-placeholder {\n  color: #808080;\n  padding-left: 10px;\n}\n\nform input::-ms-input-placeholder {\n  color: #808080;\n  padding-left: 10px;\n}\n\nform input::placeholder {\n  color: #808080;\n  padding-left: 10px;\n}\n\nform input:focus {\n  outline: solid #9ACD32 1px;\n}\n\n.btn {\n  padding: 15px;\n  margin: 2px;\n  border-radius: 6px;\n  height: 40px;\n  width: 90%;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.btn-secondary {\n  background: #ddab14;\n}\n\n.btn-danger {\n  background: #eb445a;\n}\n\n.btn-primary {\n  background: linear-gradient(90deg, #9ACD32 0%, #056608 157.2%);\n}\n\n.btn-transparent {\n  background: transparent;\n}\n\n.btn-outline {\n  background: inherit;\n  border: solid 1px #9ACD32;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\n.divider {\n  border: 1px solid rgba(42, 43, 42, 0.1);\n}\n\n.mt-1 {\n  margin-top: 10px;\n}\n\n.mt-2 {\n  margin-top: 20px;\n}\n\n.mb-1 {\n  margin-bottom: 10px;\n}\n\n.mb-2 {\n  margin-bottom: 20px;\n}\n\n.mr-1 {\n  margin-right: 10px;\n}\n\n.mr-2 {\n  margin-right: 20px;\n}\n\n.ml-1 {\n  margin-left: 10px;\n}\n\n.ml-2 {\n  margin-left: 20px;\n}\n\n.p-1 {\n  padding: 10px;\n}\n\n.p-2 {\n  padding: 20px;\n}\n\n.p-3 {\n  padding: 30px;\n}\n\n.text-primary {\n  color: #3c3d3c;\n}\n\n.text-link {\n  color: #9ACD32;\n  font-size: 12px;\n}\n\nspan .text-link {\n  color: #9ACD32;\n}\n\n.text-danger {\n  color: #eb5757;\n}\n\n.text-white {\n  color: #ffffff;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.brand {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n  font-size: 40px;\n  line-height: 48px;\n  font-family: \"Nunito\";\n}\n\n.brand img {\n  width: 50%;\n}\n\n/*** Dashboard ***/\n\n.tool-bar-col-2 {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 10px;\n  color: #9ACD32 !important;\n}\n\n.avatar {\n  display: flex;\n  align-items: center;\n}\n\n.avatar img {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n}\n\n.avatar span {\n  margin: 15px;\n}\n\n.avatar-main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  padding: 15px;\n}\n\n.avatar-main img {\n  width: 98px;\n  height: 98px;\n  border-radius: 50%;\n}\n\n.avatar-main span {\n  font-size: 14px;\n}\n\n.right-panel {\n  display: flex;\n  align-items: center;\n}\n\n.right-panel span {\n  margin: 5px;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  padding: 0 30px;\n}\n\n.container h6 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 10px;\n  line-height: 16px;\n  color: #1e1f1d;\n}\n\n.box-sm {\n  height: 64px;\n  background: #ffffff;\n  box-shadow: 0px 4px 10px rgba(137, 137, 137, 0.16);\n  border-radius: 6px;\n  margin: 10px 0px;\n  padding: 10px;\n}\n\n.box-md {\n  color: #ffffff;\n  width: 138px;\n  height: 85px;\n  border-radius: 6px;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  margin: 5px;\n  padding: 10px;\n  position: relative;\n}\n\n.box-md button {\n  position: absolute;\n  color: #9ACD32;\n  left: 72px;\n  top: 61px;\n  border-radius: 20px;\n  min-height: 20px;\n  background: #ffffff;\n  border-radius: 6px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 8px;\n  line-height: 12px;\n  outline: none;\n}\n\n.box-md button:focus {\n  outline: 0 !important;\n}\n\nion-segment {\n  --background: #ffffff;\n  border: solid 1px #9ACD32;\n  height: 24px;\n  border-radius: 4px;\n  box-sizing: border-box;\n  margin: 20px 0px 0px 0px;\n}\n\n.segment-button-checked {\n  background: #9ACD32;\n}\n\n.segment-button-checked ion-label {\n  color: #ffffff;\n}\n\nion-segment-button {\n  --indicator-box-shadow: transparent !important;\n  --color-checked: #ffffff !important;\n  --indicator-color: transparent !important;\n  margin: 0 !important;\n  border-radius: 0px;\n  min-height: 24px !important;\n  padding: 0;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 16px;\n  color: #9ACD32;\n}\n\nion-segment-button:first-child::before {\n  display: none;\n}\n\nion-segment-button::before {\n  background-color: #9ACD32 !important;\n  margin: 0 !important;\n}\n\nion-segment-button ion-label {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 16px;\n  color: #9ACD32;\n}\n\n.radius-left {\n  border-top-left-radius: 7px;\n}\n\n.details {\n  padding: 0px 20px;\n  margin-top: 20px;\n  background: rgba(0, 0, 92, 0.02);\n}\n\n.details ion-row {\n  border-bottom: 1px solid rgba(42, 43, 42, 0.1);\n  padding: 18px 30px 18px 0px !important;\n  color: #9ACD32;\n}\n\n.details ion-row .label {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 10px;\n  line-height: 12px;\n}\n\n.details ion-row .text-right {\n  height: 12px;\n  font-family: \"Poppins\" !important;\n  font-style: normal !important;\n  font-weight: 500;\n  font-size: 10px;\n  line-height: 12px;\n  color: rgba(0, 54, 121, 0.6);\n}\n\n.d-flex {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.signup-upper {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  top: 40%;\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n  z-index: 99;\n}\n\n.signup-upper form {\n  border-top-right-radius: 30px;\n  border-top-left-radius: 30px;\n  background-color: #ffffff;\n  width: 100%;\n  padding: 50px 20px;\n}\n\n.signup-upper form input {\n  padding: 10px;\n  margin: 5px 0;\n  width: 90%;\n  border-radius: 7px;\n  border: none;\n  background-color: #e4e7e9;\n}\n\n.signup-upper form input::-moz-placeholder {\n  padding-left: 10px;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 10px;\n  line-height: 18px;\n  color: #808080;\n}\n\n.signup-upper form input::-ms-input-placeholder {\n  padding-left: 10px;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 10px;\n  line-height: 18px;\n  color: #808080;\n}\n\n.signup-upper form input::placeholder {\n  padding-left: 10px;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 10px;\n  line-height: 18px;\n  color: #808080;\n}\n\n.signup-upper form input:focus {\n  outline: none !important;\n  border-radius: 7px !important;\n  border: solid 1px #9ACD32;\n}\n\n.signup-upper form select {\n  width: 90%;\n  border-radius: 7px;\n  margin: 5px 0;\n  padding: 10px;\n  background-color: #e4e7e9;\n  border: none;\n}\n\n.signup-upper form select::-moz-placeholder {\n  color: #808080;\n}\n\n.signup-upper form select::-ms-input-placeholder {\n  color: #808080;\n}\n\n.signup-upper form select::placeholder {\n  color: #808080;\n}\n\n.signup-upper form button {\n  margin-top: 20px;\n  padding: 10px;\n}\n\nion-item,\nion-row {\n  --opacity: 0.9 !important;\n}\n\n.wrapper {\n  position: absolute;\n  top: 185px;\n  left: 0;\n  border-radius: 40px 40px 0px 0px;\n  background-color: #ffffff;\n  z-index: 999;\n  width: 100%;\n  box-shadow: 4px -10px 25px rgba(0, 0, 0, 0.04);\n}\n\n.wrapper .inner {\n  padding: 40px 40px;\n}\n\n.wrapper h4 {\n  text-align: left !important;\n  margin-bottom: 20px;\n  color: #1e1f1d;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 16px;\n}\n\nion-header {\n  box-shadow: none !important;\n}\n\n.mid-form {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  top: 63%;\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n  z-index: 99;\n}\n\n.title {\n  padding: 20px;\n  color: #1e1f1d;\n}\n\n.debit-card {\n  width: 303px;\n  height: 120px;\n  position: relative;\n  padding: 0 !important;\n}\n\n.debit-card .caption {\n  position: absolute;\n  bottom: -5px;\n  padding-left: 0;\n  width: 100%;\n  text-align: left;\n}\n\n.debit-card .caption .bottom {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.circle-sm {\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  margin-left: -10px;\n}\n\n.light {\n  opacity: 0.7;\n}\n\nion-card {\n  box-shadow: 0px 4px 20px rgba(137, 137, 137, 0.08);\n  border-radius: 10px;\n  height: 120px;\n  color: #ffffff;\n  padding: 10px;\n}\n\nion-card .amount {\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 30px;\n  margin-top: 10px;\n}\n\nion-card .text {\n  font-style: normal;\n  font-weight: 300 !important;\n  font-size: 10px !important;\n  line-height: 14px !important;\n  opacity: 0.7;\n}\n\n.circle-lg {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: solid 2px #9ACD32;\n  border-radius: 50%;\n  width: 159px;\n  height: 159px;\n  margin: 0 auto;\n  box-sizing: border-box;\n}\n\nion-toolbar {\n  --paddin-end: 0px;\n  --padding-start: 0px;\n}\n\nion-toolbar ion-icon {\n  color: #424242;\n}\n\nion-toolbar ion-buttons {\n  padding-left: 30px;\n  padding-right: 30px;\n  width: 299px;\n}\n\nion-toolbar ion-title {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 30px;\n  color: #1e1f1d;\n}\n\nion-item {\n  margin: 5px 0px;\n  font-family: \"Poppins\";\n}\n\n.text-left {\n  text-align: left !important;\n}\n\n.success {\n  color: #9ACD32;\n}\n\n.danger {\n  color: #eb5757;\n}\n\n.transactions {\n  background: #ffffff;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  font-family: \"Poppins\";\n  box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.06);\n}\n\n.transactions div {\n  margin: 0 20px;\n  align-items: center;\n  color: #9ACD32;\n}\n\n.transactions div span {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 22px;\n}\n\n.transactions div span h6 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 22px;\n}\n\n.transactions div span small {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 10px;\n  line-height: 20px;\n}\n\n.paystack {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.06);\n  padding: 10px 0;\n  font-weight: 500;\n  background-color: #ffffff;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.privacy-policy {\n  margin: 30px 20px;\n}\n\n.privacy-policy h4 {\n  font-size: 16px;\n}\n\n.privacy-policy small {\n  font-size: 10px;\n  line-height: 30px;\n  color: #eb5757;\n  font-family: \"Poppins\";\n}\n\n.privacy-policy p {\n  font-size: normal;\n  font-size: 16px !important;\n  line-height: 30px;\n  font-weight: 100;\n}\n\nselect {\n  width: 90%;\n  border-radius: 7px;\n  margin: 5px 0;\n  padding: 10px;\n  background-color: #e4e7e9;\n  border: none;\n}\n\nselect::-moz-placeholder {\n  color: #808080;\n}\n\nselect::-ms-input-placeholder {\n  color: #808080;\n}\n\nselect::placeholder {\n  color: #808080;\n}\n\n.header-bg {\n  background: linear-gradient(120deg, #9ACD32 0%, #056608 157.2%);\n}\n\n.main-layout {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\nion-input,\nion-select {\n  --placeholder-color: #808080;\n  --placeholder-opacity: .8;\n  font-size: 12px;\n}\n\nion-button {\n  border-radius: 6px;\n  --color: #9ACD32 !important;\n  margin-top: 20px;\n}\n\nion-buttons {\n  justify-content: space-between;\n  padding: 15px 0px;\n}\n\nion-buttons ion-button {\n  width: auto;\n  margin: 0 !important;\n  --padding-end: 0px !important;\n  --padding-start: 0px !important;\n}\n\n.loading {\n  --background: #222;\n  --spinner-color:#9ACD32;\n  color: #fff;\n}\n\nion-refresher {\n  margin-top: 300px;\n}\n\n/*.back-arrow {\n  padding-top:35px;\n  text-align: left !important;\n  margin-left: 10px !important;\n  color: #424242;\n}\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL0M6XFxVc2Vyc1xcTGVub3ZvXFxkb2N1bWVudHNcXHZzY19sb2NhbF9kZXZcXG5hdGl2ZS1tb2JpbGUtYXBwXFx6YXBweVxcZnJvbnRlbmQvc3JjXFxhc3NldHNcXGNzc1xcbWFpbi5zY3NzIiwic3JjL2Fzc2V0cy9jc3MvbWFpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MseUJBQUE7QUNDRDs7QURDQTtFQUNDLHlCQUFBO0FDRUQ7O0FEQUE7RUFDQyx5QkFBQTtBQ0dEOztBRERBO0VBQ0MseUJBQUE7QUNJRDs7QURGQTtFQUNDLHlCQUFBO0FDS0Q7O0FESEE7RUFDQyx5QkFBQTtBQ01EOztBREpBO0VBQ0MseUJBQUE7QUNPRDs7QURKQTtFQUNDLGFBQUE7QUNPRDs7QURKQTtFQUNDLHlFQUFBO0VBQ0EsYUFBQTtBQ09EOztBREpBO0VBQ0MsaUJBQUE7QUNPRDs7QURKQTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FDT0Q7O0FETEM7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDT0Y7O0FESkE7RUFDQyxXQUFBO0FDT0Q7O0FETEM7RUFDQyxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNPRjs7QURMRTtFQUNDLGNBQUE7RUFDQSxrQkFBQTtBQ09IOztBRFRFO0VBQ0MsY0FBQTtFQUNBLGtCQUFBO0FDT0g7O0FEVEU7RUFDQyxjQUFBO0VBQ0Esa0JBQUE7QUNPSDs7QURKRTtFQUNDLDBCQUFBO0FDTUg7O0FERkE7RUFDQyxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNLRDs7QURGQTtFQUNDLG1CQUFBO0FDS0Q7O0FESEE7RUFDQyxtQkFBQTtBQ01EOztBREhBO0VBQ0MsOERBQUE7QUNNRDs7QURI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dGVudCI6WyIuYmctcHJpbWFyeSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM5QUNEMzI7XG59XG4uYmctc2Vjb25kYXJ5IHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2RkYWIxNDtcbn1cbi5iZy1zZWNvbmRhcnktbGlnaHQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmM2Q5O1xufVxuLmJnLWxpZ2h0IHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzlBQ0QzMjtcbn1cbi5iZy1wdXJwbGUge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjN2UyZTg0O1xufVxuLmJnLXdoaXRlIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbi5iZy1kYW5nZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjUzZDNkO1xufVxuXG5idXR0b246Zm9jdXMge1xuXHRvdXRsaW5lOiBub25lO1xufVxuXG4jcGFnZS1iZyB7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzlBQ0QzMiAwJSwgI0REQUIxNCAxNTcuMiUpICFpbXBvcnRhbnQ7XG5cdHBhZGRpbmc6IDIwcHg7XG59XG5cbi5weS00IHtcblx0cGFkZGluZzogMzBweCAwcHg7XG59XG5cbi5zaWdudXAge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0cGFkZGluZzogMTBweDtcblxuXHRwIHtcblx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0bGluZS1oZWlnaHQ6IDIycHg7XG5cdFx0Y29sb3I6ICMzYjNiM2I7XG5cdH1cbn1cbmZvcm0ge1xuXHR3aWR0aDogMTAwJTtcblxuXHRpbnB1dCB7XG5cdFx0cGFkZGluZzogMTNweDtcblx0XHRtYXJnaW46IDVweCAwIDIwcHggMDtcblx0XHR3aWR0aDogOTAlO1xuXHRcdGJvcmRlci1yYWRpdXM6IDdweDtcblx0XHRib3JkZXI6IG5vbmU7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2U0ZTdlOTtcblxuXHRcdCY6OnBsYWNlaG9sZGVyIHtcblx0XHRcdGNvbG9yOiAjODA4MDgwO1xuXHRcdFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xuXHRcdH1cblxuXHRcdCY6Zm9jdXMge1xuXHRcdFx0b3V0bGluZTogc29saWQgIzlBQ0QzMiAxcHg7XG5cdFx0fVxuXHR9XG59XG4uYnRuIHtcblx0cGFkZGluZzogMTVweDtcblx0bWFyZ2luOiAycHg7XG5cdGJvcmRlci1yYWRpdXM6IDZweDtcblx0aGVpZ2h0OiA0MHB4O1xuXHR3aWR0aDogOTAlO1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5idG4tc2Vjb25kYXJ5IHtcblx0YmFja2dyb3VuZDogI2RkYWIxNDtcbn1cbi5idG4tZGFuZ2VyIHtcblx0YmFja2dyb3VuZDogI2ViNDQ1YTtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjOUFDRDMyIDAlLCAjMDU2NjA4IDE1Ny4yJSk7XG59XG5cbi5idG4tdHJhbnNwYXJlbnQge1xuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmJ0bi1vdXRsaW5lIHtcblx0YmFja2dyb3VuZDogaW5oZXJpdDtcblx0Ym9yZGVyOiBzb2xpZCAxcHggIzlBQ0QzMjtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZGl2aWRlciB7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCA0MiwgMC4xKTtcbn1cbi5tdC0xIHtcblx0bWFyZ2luLXRvcDogMTBweDtcbn1cbi5tdC0yIHtcblx0bWFyZ2luLXRvcDogMjBweDtcbn1cbi5tYi0xIHtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5tYi0yIHtcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5tci0xIHtcblx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLm1yLTIge1xuXHRtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4ubWwtMSB7XG5cdG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLm1sLTIge1xuXHRtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5wLTEge1xuXHRwYWRkaW5nOiAxMHB4O1xufVxuLnAtMiB7XG5cdHBhZGRpbmc6IDIwcHg7XG59XG4ucC0zIHtcblx0cGFkZGluZzogMzBweDtcbn1cbi50ZXh0LXByaW1hcnkge1xuXHRjb2xvcjogIzNjM2QzYztcbn1cbi50ZXh0LWxpbmsge1xuXHRjb2xvcjojOUFDRDMyO1xuXHRmb250LXNpemU6MTJweDtcbn1cbnNwYW4gLnRleHQtbGluayB7XG5cdGNvbG9yOiM5QUNEMzI7XG59XG5cbi50ZXh0LWRhbmdlciB7XG5cdGNvbG9yOiAjZWI1NzU3O1xufVxuXG4udGV4dC13aGl0ZSB7XG5cdGNvbG9yOiAjZmZmZmZmO1xufVxuXG4udGV4dC1jZW50ZXIge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5icmFuZCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRjb2xvcjogI2ZmZmZmZjtcblx0Zm9udC1zaXplOiA0MHB4O1xuXHRsaW5lLWhlaWdodDogNDhweDtcblx0Zm9udC1mYW1pbHk6ICdOdW5pdG8nO1xuXG5cdGltZyB7XG5cdFx0d2lkdGg6IDUwJTtcblx0Ly9cdGNvbG9yOiM5QUNEMzI7XG5cdH1cbn1cblxuLyoqKiBEYXNoYm9hcmQgKioqL1xuLnRvb2wtYmFyLWNvbC0yIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRjb2xvcjogIzlBQ0QzMiAhaW1wb3J0YW50O1xufVxuXG4uYXZhdGFyIHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmF2YXRhciBpbWcge1xuXHR3aWR0aDogMzBweDtcblx0aGVpZ2h0OiAzMHB4O1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uYXZhdGFyIHNwYW4ge1xuXHRtYXJnaW46IDE1cHg7XG59XG5cbi5hdmF0YXItbWFpbiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRtYXJnaW46IDAgYXV0bztcblx0cGFkZGluZzogMTVweDtcblxuXHRpbWcge1xuXHRcdHdpZHRoOiA5OHB4O1xuXHRcdGhlaWdodDogOThweDtcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdH1cblxuXHRzcGFuIHtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdH1cbn1cbi5yaWdodC1wYW5lbCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHNwYW4ge1xuXHRcdG1hcmdpbjogNXB4O1xuXHR9XG59XG5cbi5jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRwYWRkaW5nOiAwIDMwcHg7XG5cdGg2IHtcblx0XHRmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuXHRcdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdGZvbnQtc2l6ZTogMTBweDtcblx0XHRsaW5lLWhlaWdodDogMTZweDtcblx0XHRjb2xvcjogIzFlMWYxZDtcblx0XHQvL2NvbG9yOiByZ2JhKDAsIDU0LCAxMjEsIDAuNik7XG5cdH1cbn1cblxuLmJveC1zbSB7XG5cdC8vd2lkdGg6IDE0MHB4ICFpbXBvcnRhbnQ7XG5cdGhlaWdodDogNjRweDtcblx0YmFja2dyb3VuZDogI2ZmZmZmZjtcblx0Ym94LXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMTM3LCAxMzcsIDEzNywgMC4xNik7XG5cdGJvcmRlci1yYWRpdXM6IDZweDtcblx0bWFyZ2luOiAxMHB4IDBweDtcblx0cGFkZGluZzogMTBweDtcbn1cblxuLmJveC1tZCB7XG5cdGNvbG9yOiAjZmZmZmZmO1xuXHR3aWR0aDogMTM4cHg7XG5cdGhlaWdodDogODVweDtcblx0Ym9yZGVyLXJhZGl1czogNnB4O1xuXHRmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0bGluZS1oZWlnaHQ6IDE4cHg7XG5cdG1hcmdpbjogNXB4O1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cblx0YnV0dG9uIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Y29sb3I6ICM5QUNEMzI7XG5cdFx0bGVmdDogNzJweDtcblx0XHR0b3A6IDYxcHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogMjBweDtcblx0XHRtaW4taGVpZ2h0OiAyMHB4O1xuXHRcdGJhY2tncm91bmQ6ICNmZmZmZmY7XG5cdFx0Ly8gcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG5cdFx0Ym9yZGVyLXJhZGl1czogNnB4O1xuXHRcdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdGZvbnQtc2l6ZTogOHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAxMnB4O1xuXHRcdG91dGxpbmU6IG5vbmU7XG5cblx0XHQmOmZvY3VzIHtcblx0XHRcdG91dGxpbmU6IDAgIWltcG9ydGFudDtcblx0XHR9XG5cdH1cbn1cblxuLy8gLnNsaW0tdGFicyB7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuLy8gICBib3JkZXItcmFkaXVzOiA3cHg7XG4vLyAgIGJvcmRlcjogc29saWQgMXB4ICM5QUNEMzI7XG4vLyAgIG1hcmdpbjogMjBweDtcblxuLy8gICBzcGFuIHtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBwYWRkaW5nOiA1cHggMjBweDtcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggIzlBQ0QzMjtcbi8vICAgICAmOm50aC1jaGlsZCgzbikge1xuLy8gICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuLy8gICAgIH1cbi8vICAgfVxuXG4vLyB9XG5cbmlvbi1zZWdtZW50IHtcblx0LS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuXHRib3JkZXI6IHNvbGlkIDFweCAjOUFDRDMyO1xuXHRoZWlnaHQ6IDI0cHg7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0bWFyZ2luOiAyMHB4IDBweCAwcHggMHB4O1xufVxuLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuXHRiYWNrZ3JvdW5kOiAjOUFDRDMyO1xuXG5cdGlvbi1sYWJlbCB7XG5cdFx0Y29sb3I6ICNmZmZmZmY7XG5cdH1cbn1cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG5cdC0taW5kaWNhdG9yLWJveC1zaGFkb3c6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cdC0tY29sb3ItY2hlY2tlZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xuXHQtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblx0bWFyZ2luOiAwICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6IDBweDtcblx0bWluLWhlaWdodDogMjRweCAhaW1wb3J0YW50O1xuXHRwYWRkaW5nOiAwO1xuXHRmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdGZvbnQtc2l6ZTogMTBweDtcblx0bGluZS1oZWlnaHQ6IDE2cHg7XG5cdGNvbG9yOiAjOUFDRDMyO1xuXG5cdCY6Zmlyc3QtY2hpbGQge1xuXHRcdCY6OmJlZm9yZSB7XG5cdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdH1cblx0fVxuXG5cdCY6OmJlZm9yZSB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzlBQ0QzMiAhaW1wb3J0YW50O1xuXHRcdG1hcmdpbjogMCAhaW1wb3J0YW50O1xuXHR9XG5cblx0aW9uLWxhYmVsIHtcblx0XHRmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuXHRcdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdGZvbnQtc2l6ZTogMTBweDtcblx0XHRsaW5lLWhlaWdodDogMTZweDtcblx0XHRjb2xvcjogIzlBQ0QzMjtcblx0fVxufVxuXG4ucmFkaXVzLWxlZnQge1xuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XG59XG4uZGV0YWlscyB7XG5cdHBhZGRpbmc6IDBweCAyMHB4O1xuXHRtYXJnaW4tdG9wOiAyMHB4O1xuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDkyLCAwLjAyKTtcblxuXHRpb24tcm93IHtcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg0MiwgNDMsIDQyLCAwLjEpO1xuXHRcdHBhZGRpbmc6IDE4cHggMzBweCAxOHB4IDBweCAhaW1wb3J0YW50O1xuXHRcdGNvbG9yOiAjOUFDRDMyO1xuXG5cdFx0LmxhYmVsIHtcblx0XHRcdGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG5cdFx0XHRmb250LXN0eWxlOiBub3JtYWw7XG5cdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0Zm9udC1zaXplOiAxMHB4O1xuXHRcdFx0bGluZS1oZWlnaHQ6IDEycHg7XG5cdFx0fVxuXG5cdFx0LnRleHQtcmlnaHQge1xuXHRcdFx0Ly93aWR0aDogMTExcHg7XG5cdFx0XHRoZWlnaHQ6IDEycHg7XG5cdFx0XHRmb250LWZhbWlseTogJ1BvcHBpbnMnICFpbXBvcnRhbnQ7XG5cdFx0XHRmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRmb250LXNpemU6IDEwcHg7XG5cdFx0XHRsaW5lLWhlaWdodDogMTJweDtcblx0XHRcdGNvbG9yOiByZ2JhKDAsIDU0LCAxMjEsIDAuNik7XG5cdFx0fVxuXHR9XG59XG5cbi5kLWZsZXgge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi50ZXh0LXJpZ2h0IHtcblx0dGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5zaWdudXAtdXBwZXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHRvcDogNDAlO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXHR6LWluZGV4OiA5OTtcblxuXHRmb3JtIHtcblx0XHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcblx0XHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0cGFkZGluZzogNTBweCAyMHB4O1xuXG5cdFx0aW5wdXQge1xuXHRcdFx0cGFkZGluZzogMTBweDtcblx0XHRcdG1hcmdpbjogNXB4IDA7XG5cdFx0XHR3aWR0aDogOTAlO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogN3B4O1xuXHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2U0ZTdlOTtcblxuXHRcdFx0Jjo6cGxhY2Vob2xkZXIge1xuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG5cdFx0XHRcdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0Zm9udC1zaXplOiAxMHB4O1xuXHRcdFx0XHRsaW5lLWhlaWdodDogMThweDtcblx0XHRcdFx0Y29sb3I6ICM4MDgwODA7XG5cdFx0XHR9XG5cblx0XHRcdCY6Zm9jdXMge1xuXHRcdFx0XHQvLyBvdXRsaW5lOiBzb2xpZCAjMzg1NjlBIDFweDtcblx0XHRcdFx0b3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA3cHggIWltcG9ydGFudDtcblx0XHRcdFx0Ym9yZGVyOiBzb2xpZCAxcHggIzlBQ0QzMjtcblx0XHRcdH1cblx0XHR9XG5cdFx0c2VsZWN0IHtcblx0XHRcdHdpZHRoOiA5MCU7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA3cHg7XG5cdFx0XHRtYXJnaW46IDVweCAwO1xuXHRcdFx0cGFkZGluZzogMTBweDtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNlNGU3ZTk7XG5cdFx0XHRib3JkZXI6IG5vbmU7XG5cblx0XHRcdCY6OnBsYWNlaG9sZGVyIHtcblx0XHRcdFx0Y29sb3I6ICM4MDgwODA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0YnV0dG9uIHtcblx0XHRcdG1hcmdpbi10b3A6IDIwcHg7XG5cdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdH1cblx0fVxufVxuaW9uLWl0ZW0sXG5pb24tcm93IHtcblx0LS1vcGFjaXR5OiAwLjkgIWltcG9ydGFudDtcbn1cbi53cmFwcGVyIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDE4NXB4O1xuXHRsZWZ0OiAwO1xuXHRib3JkZXItcmFkaXVzOiA0MHB4IDQwcHggMHB4IDBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblx0ei1pbmRleDogOTk5O1xuXHR3aWR0aDogMTAwJTtcblx0Ym94LXNoYWRvdzogNHB4IC0xMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcblx0LmlubmVyIHtcblx0XHRwYWRkaW5nOiA0MHB4IDQwcHg7XG5cdH1cblxuXHRoNCB7XG5cdFx0dGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuXHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdFx0Y29sb3I6IzFlMWYxZDtcblx0XHRmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuXHRcdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0XHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRsaW5lLWhlaWdodDogMTZweDtcblx0fVxufVxuXG5pb24taGVhZGVyIHtcblx0Ly8gcGFkZGluZzogMjBweCAwcHggIWltcG9ydGFudDtcblx0Ym94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubWlkLWZvcm0ge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHRvcDogNjMlO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXHR6LWluZGV4OiA5OTtcbn1cblxuLnRpdGxlIHtcblx0cGFkZGluZzogMjBweDtcblx0Y29sb3I6ICMxZTFmMWQ7XG5cdDtcbn1cbi5kZWJpdC1jYXJkIHtcblx0d2lkdGg6IDMwM3B4O1xuXHRoZWlnaHQ6IDEyMHB4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHBhZGRpbmc6IDAgIWltcG9ydGFudDtcblxuXHQuY2FwdGlvbiB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGJvdHRvbTogLTVweDtcblx0XHRwYWRkaW5nLWxlZnQ6IDA7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblxuXHRcdC5ib3R0b20ge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0fVxuXHR9XG59XG5cbi5jaXJjbGUtc20ge1xuXHRoZWlnaHQ6IDI1cHg7XG5cdHdpZHRoOiAyNXB4O1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdG1hcmdpbi1sZWZ0OiAtMTBweDtcbn1cbi5saWdodCB7XG5cdG9wYWNpdHk6IC43O1xufVxuXG5pb24tY2FyZCB7XG5cdGJveC1zaGFkb3c6IDBweCA0cHggMjBweCByZ2JhKDEzNywgMTM3LCAxMzcsIDAuMDgpO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHQvLyB3aWR0aDogMjk5cHg7XG5cdGhlaWdodDogMTIwcHg7XG5cdGNvbG9yOiAjZmZmZmZmO1xuXHRwYWRkaW5nOiAxMHB4O1xuXG5cdC5hbW91bnQge1xuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0Zm9udC1zaXplOiAyNHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAzMHB4O1xuXHRcdG1hcmdpbi10b3A6IDEwcHg7XG5cdH1cblxuXHQudGV4dCB7XG5cdFx0Zm9udC1zdHlsZTogbm9ybWFsO1xuXHRcdGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcblx0XHRmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcblx0XHRsaW5lLWhlaWdodDogMTRweCAhaW1wb3J0YW50O1xuXHRcdG9wYWNpdHk6IC43O1xuXHR9XG59XG4uY2lyY2xlLWxnIHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGJvcmRlcjogc29saWQgMnB4ICM5QUNEMzI7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0d2lkdGg6IDE1OXB4O1xuXHRoZWlnaHQ6IDE1OXB4O1xuXHRtYXJnaW46IDAgYXV0bztcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLy8gaW9uLXRpdGxlIHtcbi8vICAgZm9udC1zaXplOiAxNnB4O1xuLy8gICBjb2xvcjogIzlBQ0QzMjtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gfVxuXG5pb24tdG9vbGJhciB7XG5cdC0tcGFkZGluLWVuZDogMHB4O1xuXHQtLXBhZGRpbmctc3RhcnQ6IDBweDtcblx0aW9uLWljb24ge1xuXHRcdGNvbG9yOiAjNDI0MjQyO1xuXHR9XG59XG5pb24tdG9vbGJhciB7XG5cdGlvbi1idXR0b25zIHtcblx0XHRwYWRkaW5nLWxlZnQ6IDMwcHg7XG5cdFx0cGFkZGluZy1yaWdodDogMzBweDtcblx0XHR3aWR0aDogMjk5cHg7XG5cdH1cblx0aW9uLXRpdGxlIHtcblx0XHRmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuXHRcdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRsaW5lLWhlaWdodDogMzBweDtcblx0XHRjb2xvcjogIzFlMWYxZDtcblx0XHQ7XG5cdH1cbn1cblxuaW9uLWl0ZW0ge1xuXHRtYXJnaW46IDVweCAwcHg7XG5cdGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG59XG4udGV4dC1sZWZ0IHtcblx0dGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4uc3VjY2VzcyB7XG5cdGNvbG9yOiAjOUFDRDMyO1xufVxuLmRhbmdlciB7XG5cdGNvbG9yOiAjZWI1NzU3O1xufVxuLnRyYW5zYWN0aW9ucyB7XG5cdGJhY2tncm91bmQ6ICNmZmZmZmY7XG5cdG1hcmdpbi10b3A6IDE1cHg7XG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XG5cdGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG5cdGJveC1zaGFkb3c6IDJweCAycHggMTlweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuXHRkaXYge1xuXHRcdG1hcmdpbjogMCAyMHB4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0Y29sb3I6ICM5QUNEMzI7XG5cdFx0c3BhbiB7XG5cdFx0XHRmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuXHRcdFx0Zm9udC1zdHlsZTogbm9ybWFsO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG5cdFx0XHRoNiB7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG5cdFx0XHRcdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRsaW5lLWhlaWdodDogMjJweDtcblx0XHRcdH1cblxuXHRcdFx0c21hbGwge1xuXHRcdFx0XHRmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuXHRcdFx0XHRmb250LXN0eWxlOiBub3JtYWw7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTBweDtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDIwcHg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4ucGF5c3RhY2sge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRib3R0b206IDA7XG5cdGxlZnQ6IDA7XG5cdHdpZHRoOiAxMDAlO1xuXHRib3gtc2hhZG93OiAycHggMnB4IDE5cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcblx0cGFkZGluZzogMTBweCAwO1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uaGlkZGVuIHtcblx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuLnByaXZhY3ktcG9saWN5IHtcblx0bWFyZ2luOiAzMHB4IDIwcHg7XG5cblx0aDQge1xuXHRcdGZvbnQtc2l6ZTogMTZweDtcblx0fVxuXHRzbWFsbCB7XG5cdFx0Zm9udC1zaXplOiAxMHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAzMHB4O1xuXHRcdGNvbG9yOiAjZWI1NzU3O1xuXHRcdGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG5cdH1cblxuXHRwIHtcblx0XHRmb250LXNpemU6IG5vcm1hbDtcblx0XHRmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcblx0XHRsaW5lLWhlaWdodDogMzBweDtcblx0XHRmb250LXdlaWdodDogMTAwO1xuXHR9XG59XG5zZWxlY3Qge1xuXHR3aWR0aDogOTAlO1xuXHRib3JkZXItcmFkaXVzOiA3cHg7XG5cdG1hcmdpbjogNXB4IDA7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICNlNGU3ZTk7XG5cdGJvcmRlcjogbm9uZTtcblxuXHQmOjpwbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6ICM4MDgwODA7XG5cdH1cbn1cblxuLmhlYWRlci1iZyB7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsICM5QUNEMzIgMCUsICMwNTY2MDggMTU3LjIlKTtcbn1cblxuLm1haW4tbGF5b3V0IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0d2lkdGg6IDEwMCU7XG59XG5cbmlvbi1pbnB1dCxcbmlvbi1zZWxlY3Qge1xuXHQtLXBsYWNlaG9sZGVyLWNvbG9yOiAjODA4MDgwO1xuXHQtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IC44O1xuXHRmb250LXNpemU6MTJweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG5cdGJvcmRlci1yYWRpdXM6IDZweDtcblx0LS1jb2xvcjogIzlBQ0QzMiAhaW1wb3J0YW50O1xuXHRtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5pb24tYnV0dG9ucyB7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0cGFkZGluZzogMTVweCAwcHg7XG5cdGlvbi1idXR0b24ge1xuXHRcdHdpZHRoOiBhdXRvO1xuXHRcdG1hcmdpbjogMCAhaW1wb3J0YW50O1xuXHRcdC0tcGFkZGluZy1lbmQ6IDBweCAhaW1wb3J0YW50O1xuXHRcdC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XG5cdH1cbn1cblxuLmxvYWRpbmcge1xuXHQtLWJhY2tncm91bmQ6ICMyMjI7XG5cdC0tc3Bpbm5lci1jb2xvcjojOUFDRDMyO1xuICBcblx0Y29sb3I6ICNmZmY7XG4gIH1cbiAgaW9uLXJlZnJlc2hlciB7XG5cdG1hcmdpbi10b3A6MzAwcHg7XG4gIH1cbiAgLyouYmFjay1hcnJvdyB7XG4gIHBhZGRpbmctdG9wOjM1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgY29sb3I6ICM0MjQyNDI7XG59XG4qL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbn1cblxuLy8gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzlweCkge1xuXG4vLyAgIC5jaXJjbGUtc20ge1xuLy8gICAgIHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XG4vLyAgICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4vLyAgIH1cbi8vIH1cbiIsIi5iZy1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlBQ0QzMjtcbn1cblxuLmJnLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGFiMTQ7XG59XG5cbi5iZy1zZWNvbmRhcnktbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmM2Q5O1xufVxuXG4uYmctbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUFDRDMyO1xufVxuXG4uYmctcHVycGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdlMmU4NDtcbn1cblxuLmJnLXdoaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmJnLWRhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNTNkM2Q7XG59XG5cbmJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbiNwYWdlLWJnIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjOUFDRDMyIDAlLCAjRERBQjE0IDE1Ny4yJSkgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnB5LTQge1xuICBwYWRkaW5nOiAzMHB4IDBweDtcbn1cblxuLnNpZ251cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnNpZ251cCBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICMzYjNiM2I7XG59XG5cbmZvcm0ge1xuICB3aWR0aDogMTAwJTtcbn1cbmZvcm0gaW5wdXQge1xuICBwYWRkaW5nOiAxM3B4O1xuICBtYXJnaW46IDVweCAwIDIwcHggMDtcbiAgd2lkdGg6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU3ZTk7XG59XG5mb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5mb3JtIGlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogc29saWQgIzlBQ0QzMiAxcHg7XG59XG5cbi5idG4ge1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDJweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kOiAjZGRhYjE0O1xufVxuXG4uYnRuLWRhbmdlciB7XG4gIGJhY2tncm91bmQ6ICNlYjQ0NWE7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzlBQ0QzMiAwJSwgIzA1NjYwOCAxNTcuMiUpO1xufVxuXG4uYnRuLXRyYW5zcGFyZW50IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5idG4tb3V0bGluZSB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGJvcmRlcjogc29saWQgMXB4ICM5QUNEMzI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmRpdmlkZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLCA0MywgNDIsIDAuMSk7XG59XG5cbi5tdC0xIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm10LTIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ubWItMSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5tYi0yIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLm1yLTEge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5tci0yIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ubWwtMSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubWwtMiB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ucC0xIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnAtMiB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5wLTMge1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4udGV4dC1wcmltYXJ5IHtcbiAgY29sb3I6ICMzYzNkM2M7XG59XG5cbi50ZXh0LWxpbmsge1xuICBjb2xvcjogIzlBQ0QzMjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5zcGFuIC50ZXh0LWxpbmsge1xuICBjb2xvcjogIzlBQ0QzMjtcbn1cblxuLnRleHQtZGFuZ2VyIHtcbiAgY29sb3I6ICNlYjU3NTc7XG59XG5cbi50ZXh0LXdoaXRlIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJyYW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIjtcbn1cbi5icmFuZCBpbWcge1xuICB3aWR0aDogNTAlO1xufVxuXG4vKioqIERhc2hib2FyZCAqKiovXG4udG9vbC1iYXItY29sLTIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjOUFDRDMyICFpbXBvcnRhbnQ7XG59XG5cbi5hdmF0YXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYXZhdGFyIGltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmF2YXRhciBzcGFuIHtcbiAgbWFyZ2luOiAxNXB4O1xufVxuXG4uYXZhdGFyLW1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uYXZhdGFyLW1haW4gaW1nIHtcbiAgd2lkdGg6IDk4cHg7XG4gIGhlaWdodDogOThweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmF2YXRhci1tYWluIHNwYW4ge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5yaWdodC1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucmlnaHQtcGFuZWwgc3BhbiB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMCAzMHB4O1xufVxuLmNvbnRhaW5lciBoNiB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBjb2xvcjogIzFlMWYxZDtcbn1cblxuLmJveC1zbSB7XG4gIGhlaWdodDogNjRweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMTM3LCAxMzcsIDEzNywgMC4xNik7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmJveC1tZCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogMTM4cHg7XG4gIGhlaWdodDogODVweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ib3gtbWQgYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogIzlBQ0QzMjtcbiAgbGVmdDogNzJweDtcbiAgdG9wOiA2MXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtaW4taGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiA4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuLmJveC1tZCBidXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWdtZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IHNvbGlkIDFweCAjOUFDRDMyO1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAyMHB4IDBweCAwcHggMHB4O1xufVxuXG4uc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gIGJhY2tncm91bmQ6ICM5QUNEMzI7XG59XG4uc2VnbWVudC1idXR0b24tY2hlY2tlZCBpb24tbGFiZWwge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgLS1pbmRpY2F0b3ItYm94LXNoYWRvdzogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1jb2xvci1jaGVja2VkOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBtaW4taGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBjb2xvcjogIzlBQ0QzMjtcbn1cbmlvbi1zZWdtZW50LWJ1dHRvbjpmaXJzdC1jaGlsZDo6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmlvbi1zZWdtZW50LWJ1dHRvbjo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlBQ0QzMiAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cbmlvbi1zZWdtZW50LWJ1dHRvbiBpb24tbGFiZWwge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgY29sb3I6ICM5QUNEMzI7XG59XG5cbi5yYWRpdXMtbGVmdCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcbn1cblxuLmRldGFpbHMge1xuICBwYWRkaW5nOiAwcHggMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCA5MiwgMC4wMik7XG59XG4uZGV0YWlscyBpb24tcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNDIsIDQzLCA0MiwgMC4xKTtcbiAgcGFkZGluZzogMThweCAzMHB4IDE4cHggMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjOUFDRDMyO1xufVxuLmRldGFpbHMgaW9uLXJvdyAubGFiZWwge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbn1cbi5kZXRhaWxzIGlvbi1yb3cgLnRleHQtcmlnaHQge1xuICBoZWlnaHQ6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbiAgY29sb3I6IHJnYmEoMCwgNTQsIDEyMSwgMC42KTtcbn1cblxuLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnNpZ251cC11cHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiA0MCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHotaW5kZXg6IDk5O1xufVxuLnNpZ251cC11cHBlciBmb3JtIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1MHB4IDIwcHg7XG59XG4uc2lnbnVwLXVwcGVyIGZvcm0gaW5wdXQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDVweCAwO1xuICB3aWR0aDogOTAlO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTdlOTtcbn1cbi5zaWdudXAtdXBwZXIgZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBjb2xvcjogIzgwODA4MDtcbn1cbi5zaWdudXAtdXBwZXIgZm9ybSBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogN3B4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogc29saWQgMXB4ICM5QUNEMzI7XG59XG4uc2lnbnVwLXVwcGVyIGZvcm0gc2VsZWN0IHtcbiAgd2lkdGg6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBtYXJnaW46IDVweCAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlN2U5O1xuICBib3JkZXI6IG5vbmU7XG59XG4uc2lnbnVwLXVwcGVyIGZvcm0gc2VsZWN0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjODA4MDgwO1xufVxuLnNpZ251cC11cHBlciBmb3JtIGJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbmlvbi1pdGVtLFxuaW9uLXJvdyB7XG4gIC0tb3BhY2l0eTogMC45ICFpbXBvcnRhbnQ7XG59XG5cbi53cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE4NXB4O1xuICBsZWZ0OiAwO1xuICBib3JkZXItcmFkaXVzOiA0MHB4IDQwcHggMHB4IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgei1pbmRleDogOTk5O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogNHB4IC0xMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn1cbi53cmFwcGVyIC5pbm5lciB7XG4gIHBhZGRpbmc6IDQwcHggNDBweDtcbn1cbi53cmFwcGVyIGg0IHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBjb2xvcjogIzFlMWYxZDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbmlvbi1oZWFkZXIge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5taWQtZm9ybSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiA2MyU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHotaW5kZXg6IDk5O1xufVxuXG4udGl0bGUge1xuICBwYWRkaW5nOiAyMHB4O1xuICBjb2xvcjogIzFlMWYxZDtcbn1cblxuLmRlYml0LWNhcmQge1xuICB3aWR0aDogMzAzcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuLmRlYml0LWNhcmQgLmNhcHRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTVweDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5kZWJpdC1jYXJkIC5jYXB0aW9uIC5ib3R0b20ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2lyY2xlLXNtIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG5cbi5saWdodCB7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuaW9uLWNhcmQge1xuICBib3gtc2hhZG93OiAwcHggNHB4IDIwcHggcmdiYSgxMzcsIDEzNywgMTM3LCAwLjA4KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5pb24tY2FyZCAuYW1vdW50IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbmlvbi1jYXJkIC50ZXh0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTRweCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5jaXJjbGUtbGcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiBzb2xpZCAycHggIzlBQ0QzMjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTU5cHg7XG4gIGhlaWdodDogMTU5cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tcGFkZGluLWVuZDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cbmlvbi10b29sYmFyIGlvbi1pY29uIHtcbiAgY29sb3I6ICM0MjQyNDI7XG59XG5cbmlvbi10b29sYmFyIGlvbi1idXR0b25zIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICB3aWR0aDogMjk5cHg7XG59XG5pb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICMxZTFmMWQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgbWFyZ2luOiA1cHggMHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG59XG5cbi50ZXh0LWxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi5zdWNjZXNzIHtcbiAgY29sb3I6ICM5QUNEMzI7XG59XG5cbi5kYW5nZXIge1xuICBjb2xvcjogI2ViNTc1Nztcbn1cblxuLnRyYW5zYWN0aW9ucyB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxOXB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG59XG4udHJhbnNhY3Rpb25zIGRpdiB7XG4gIG1hcmdpbjogMCAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzlBQ0QzMjtcbn1cbi50cmFuc2FjdGlvbnMgZGl2IHNwYW4ge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cbi50cmFuc2FjdGlvbnMgZGl2IHNwYW4gaDYge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cbi50cmFuc2FjdGlvbnMgZGl2IHNwYW4gc21hbGwge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLnBheXN0YWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxOXB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnByaXZhY3ktcG9saWN5IHtcbiAgbWFyZ2luOiAzMHB4IDIwcHg7XG59XG4ucHJpdmFjeS1wb2xpY3kgaDQge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ucHJpdmFjeS1wb2xpY3kgc21hbGwge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogI2ViNTc1NztcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xufVxuLnByaXZhY3ktcG9saWN5IHAge1xuICBmb250LXNpemU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG5zZWxlY3Qge1xuICB3aWR0aDogOTAlO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIG1hcmdpbjogNXB4IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU3ZTk7XG4gIGJvcmRlcjogbm9uZTtcbn1cbnNlbGVjdDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzgwODA4MDtcbn1cblxuLmhlYWRlci1iZyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsICM5QUNEMzIgMCUsICMwNTY2MDggMTU3LjIlKTtcbn1cblxuLm1haW4tbGF5b3V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1pbnB1dCxcbmlvbi1zZWxlY3Qge1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjODA4MDgwO1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IC44O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmlvbi1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIC0tY29sb3I6ICM5QUNEMzIgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuaW9uLWJ1dHRvbnMge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDE1cHggMHB4O1xufVxuaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sb2FkaW5nIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMjIyO1xuICAtLXNwaW5uZXItY29sb3I6IzlBQ0QzMjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbmlvbi1yZWZyZXNoZXIge1xuICBtYXJnaW4tdG9wOiAzMDBweDtcbn1cblxuLyouYmFjay1hcnJvdyB7XG4gIHBhZGRpbmctdG9wOjM1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgY29sb3I6ICM0MjQyNDI7XG59XG4qLyJdfQ== */";
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Lenovo\documents\vsc_local_dev\native-mobile-app\zappy\frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map