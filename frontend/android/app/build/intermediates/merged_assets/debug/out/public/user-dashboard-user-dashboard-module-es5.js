function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-dashboard-user-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-dashboard/user-dashboard/user-dashboard.page.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-dashboard/user-dashboard/user-dashboard.page.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserDashboardUserDashboardUserDashboardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<ion-content>\r\n    <ion-tabs>\r\n        <ion-tab-bar slot=\"bottom\">\r\n          <ion-tab-button tab=\"home\">\r\n            <ion-icon size = \"small\" name=\"home\"></ion-icon>\r\n            <ion-label>Home</ion-label>\r\n          </ion-tab-button>\r\n      \r\n          <ion-tab-button tab=\"wallet\">\r\n            <ion-icon size = \"small\" name=\"wallet\"></ion-icon> \r\n            <ion-label>Wallet</ion-label>\r\n          </ion-tab-button>\r\n      \r\n          <ion-tab-button tab=\"transactions\">\r\n            <ion-icon size = \"small\" name=\"sync\"></ion-icon>\r\n            <!-- <img src=\"../../assets/icon/transaction_icon.svg\" alt=\"\"> -->\r\n            <ion-label>Transactions</ion-label>\r\n          </ion-tab-button>\r\n      \r\n          <ion-tab-button tab=\"profile\">\r\n            <ion-icon name=\"person\"></ion-icon>\r\n            <!-- <img src=\"../../assets/icon/profile_icon.svg\" alt=\"\"> -->\r\n            <ion-label>Profile</ion-label>\r\n          </ion-tab-button>\r\n          <ion-tab-button  (click)=\"openMoreMenu()\">\r\n            <ion-icon size = \"small\" name=\"ellipsis-horizontal-circle-outline\"></ion-icon>\r\n            <ion-label>More</ion-label>\r\n          </ion-tab-button>\r\n        </ion-tab-bar>\r\n    </ion-tabs>\r\n</ion-content>\r\n  ";
    /***/
  },

  /***/
  "./src/app/user-dashboard/user-dashboard-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/user-dashboard/user-dashboard-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: UserDashboardPageRoutingModule */

  /***/
  function srcAppUserDashboardUserDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDashboardPageRoutingModule", function () {
      return UserDashboardPageRoutingModule;
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


    var _user_dashboard_user_dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user-dashboard/user-dashboard.page */
    "./src/app/user-dashboard/user-dashboard/user-dashboard.page.ts");

    var routes = [{
      path: '',
      component: _user_dashboard_user_dashboard_page__WEBPACK_IMPORTED_MODULE_3__["UserDashboardPage"],
      children: [{
        path: 'home',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | dashboard-dashboard-module */
            "dashboard-dashboard-module").then(__webpack_require__.bind(null,
            /*! ../dashboard/dashboard.module */
            "./src/app/dashboard/dashboard.module.ts")).then(function (m) {
              return m.DashboardPageModule;
            });
          }
        }]
      }, {
        path: 'home/mobile-airtime',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | mobile-airtime-mobile-airtime-module */
          "mobile-airtime-mobile-airtime-module").then(__webpack_require__.bind(null,
          /*! ../mobile-airtime/mobile-airtime.module */
          "./src/app/mobile-airtime/mobile-airtime.module.ts")).then(function (m) {
            return m.MobileAirtimePageModule;
          });
        }
      }, {
        path: 'home/cable-tv',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | cable-tv-cable-tv-module */
          "cable-tv-cable-tv-module").then(__webpack_require__.bind(null,
          /*! ../cable-tv/cable-tv.module */
          "./src/app/cable-tv/cable-tv.module.ts")).then(function (m) {
            return m.CableTvPageModule;
          });
        }
      }, {
        path: 'home/data-bundle',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | data-bundle-data-bundle-module */
          "data-bundle-data-bundle-module").then(__webpack_require__.bind(null,
          /*! ../data-bundle/data-bundle.module */
          "./src/app/data-bundle/data-bundle.module.ts")).then(function (m) {
            return m.DataBundlePageModule;
          });
        }
      }, {
        path: 'home/fund-transfer',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | fund-transfer-fund-transfer-module */
          [__webpack_require__.e("default~fund-transfer-fund-transfer-module~fund-transfer-transfer2-transfer2-module"), __webpack_require__.e("fund-transfer-fund-transfer-module")]).then(__webpack_require__.bind(null,
          /*! ../fund-transfer/fund-transfer.module */
          "./src/app/fund-transfer/fund-transfer.module.ts")).then(function (m) {
            return m.FundTransferPageModule;
          });
        }
      }, {
        path: 'home/transfer2',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | fund-transfer-transfer2-transfer2-module */
          [__webpack_require__.e("default~fund-transfer-fund-transfer-module~fund-transfer-transfer2-transfer2-module"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null,
          /*! ../fund-transfer/transfer2/transfer2.module */
          "./src/app/fund-transfer/transfer2/transfer2.module.ts")).then(function (m) {
            return m.Transfer2PageModule;
          });
        }
      }, {
        path: 'home/electricity',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | electricity-electricity-module */
          "electricity-electricity-module").then(__webpack_require__.bind(null,
          /*! ../electricity/electricity.module */
          "./src/app/electricity/electricity.module.ts")).then(function (m) {
            return m.ElectricityPageModule;
          });
        }
      }, {
        path: 'home/add-money',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | add-money-add-money-module */
          [__webpack_require__.e("default~add-money-add-money-module~login-login-module~profile-profile-module~signup-signup-module"), __webpack_require__.e("add-money-add-money-module")]).then(__webpack_require__.bind(null,
          /*! ../add-money/add-money.module */
          "./src/app/add-money/add-money.module.ts")).then(function (m) {
            return m.AddMoneyPageModule;
          });
        }
      }, {
        path: 'home/coming-soon',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | coming-soon-coming-soon-module */
          "coming-soon-coming-soon-module").then(__webpack_require__.bind(null,
          /*! ../coming-soon/coming-soon.module */
          "./src/app/coming-soon/coming-soon.module.ts")).then(function (m) {
            return m.ComingSoonPageModule;
          });
        }
      }, {
        path: 'wallet',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | wallet-wallet-module */
            "wallet-wallet-module").then(__webpack_require__.bind(null,
            /*! ../wallet/wallet.module */
            "./src/app/wallet/wallet.module.ts")).then(function (m) {
              return m.WalletPageModule;
            });
          }
        }]
      }, {
        path: 'wallet/cards',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | my-cards-my-cards-module */
          "my-cards-my-cards-module").then(__webpack_require__.bind(null,
          /*! ../my-cards/my-cards.module */
          "./src/app/my-cards/my-cards.module.ts")).then(function (m) {
            return m.MyCardsPageModule;
          });
        }
      }, {
        path: 'wallet/card-blank',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | my-cards-blank-my-cards-blank-module */
          "my-cards-blank-my-cards-blank-module").then(__webpack_require__.bind(null,
          /*! ../my-cards-blank/my-cards-blank.module */
          "./src/app/my-cards-blank/my-cards-blank.module.ts")).then(function (m) {
            return m.MyCardsBlankPageModule;
          });
        }
      }, {
        path: 'wallet/add-money',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | add-money-add-money-module */
          [__webpack_require__.e("default~add-money-add-money-module~login-login-module~profile-profile-module~signup-signup-module"), __webpack_require__.e("add-money-add-money-module")]).then(__webpack_require__.bind(null,
          /*! ../add-money/add-money.module */
          "./src/app/add-money/add-money.module.ts")).then(function (m) {
            return m.AddMoneyPageModule;
          });
        }
      }, {
        path: 'wallet/add-card',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | add-card-add-card-module */
          "add-card-add-card-module").then(__webpack_require__.bind(null,
          /*! ../add-card/add-card.module */
          "./src/app/add-card/add-card.module.ts")).then(function (m) {
            return m.AddCardPageModule;
          });
        }
      }, {
        path: 'wallet/delete-card',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | delete-card-delete-card-module */
          "delete-card-delete-card-module").then(__webpack_require__.bind(null,
          /*! ../delete-card/delete-card.module */
          "./src/app/delete-card/delete-card.module.ts")).then(function (m) {
            return m.DeleteCardPageModule;
          });
        }
      }, {
        path: 'wallet/success',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | success-success-module */
          "success-success-module").then(__webpack_require__.bind(null,
          /*! ../success/success.module */
          "./src/app/success/success.module.ts")).then(function (m) {
            return m.SuccessPageModule;
          });
        }
      }, {
        path: 'wallet/empty',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | wallet-blank-wallet-blank-module */
          "wallet-blank-wallet-blank-module").then(__webpack_require__.bind(null,
          /*! ../wallet-blank/wallet-blank.module */
          "./src/app/wallet-blank/wallet-blank.module.ts")).then(function (m) {
            return m.WalletBlankPageModule;
          });
        }
      }, {
        path: 'wallet/fund-transfer',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | fund-transfer-fund-transfer-module */
          [__webpack_require__.e("default~fund-transfer-fund-transfer-module~fund-transfer-transfer2-transfer2-module"), __webpack_require__.e("fund-transfer-fund-transfer-module")]).then(__webpack_require__.bind(null,
          /*! ../fund-transfer/fund-transfer.module */
          "./src/app/fund-transfer/fund-transfer.module.ts")).then(function (m) {
            return m.FundTransferPageModule;
          });
        }
      }, {
        path: 'wallet/transfer-instruction',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | transfer-instruction1-transfer-instruction1-module */
          "transfer-instruction1-transfer-instruction1-module").then(__webpack_require__.bind(null,
          /*! ../transfer-instruction1/transfer-instruction1.module */
          "./src/app/transfer-instruction1/transfer-instruction1.module.ts")).then(function (m) {
            return m.TransferInstruction1PageModule;
          });
        }
      }, {
        path: 'wallet/confirm-payment',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | confirm-payment-confirm-payment-module */
          "confirm-payment-confirm-payment-module").then(__webpack_require__.bind(null,
          /*! ../confirm-payment/confirm-payment.module */
          "./src/app/confirm-payment/confirm-payment.module.ts")).then(function (m) {
            return m.ConfirmPaymentPageModule;
          });
        }
      }, {
        path: 'wallet/otp',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | otp-otp-module */
          [__webpack_require__.e("common"), __webpack_require__.e("otp-otp-module")]).then(__webpack_require__.bind(null,
          /*! ../otp/otp.module */
          "./src/app/otp/otp.module.ts")).then(function (m) {
            return m.OtpPageModule;
          });
        }
      }, {
        path: 'wallet/paywith-card',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | paywith-card-paywith-card-module */
          "paywith-card-paywith-card-module").then(__webpack_require__.bind(null,
          /*! ../paywith-card/paywith-card.module */
          "./src/app/paywith-card/paywith-card.module.ts")).then(function (m) {
            return m.PaywithCardPageModule;
          });
        }
      }, {
        path: 'transactions',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | transactions-transactions-module */
            "transactions-transactions-module").then(__webpack_require__.bind(null,
            /*! ../transactions/transactions.module */
            "./src/app/transactions/transactions.module.ts")).then(function (m) {
              return m.TransactionsPageModule;
            });
          }
        }]
      }, // {path: 'transactions/all',    loadChildren: () => import('../transactions/transactions.module').then(m => m.TransactionsPageModule)},
      {
        path: 'transactions/credit',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | credit-transaction-credit-transaction-module */
          "credit-transaction-credit-transaction-module").then(__webpack_require__.bind(null,
          /*! ../credit-transaction/credit-transaction.module */
          "./src/app/credit-transaction/credit-transaction.module.ts")).then(function (m) {
            return m.CreditTransactionPageModule;
          });
        }
      }, {
        path: 'transactions/debit',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | debit-transaction-debit-transaction-module */
          "debit-transaction-debit-transaction-module").then(__webpack_require__.bind(null,
          /*! ../debit-transaction/debit-transaction.module */
          "./src/app/debit-transaction/debit-transaction.module.ts")).then(function (m) {
            return m.DebitTransactionPageModule;
          });
        }
      }, {
        path: 'transactions/success',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | transfer-success-transfer-success-module */
          "transfer-success-transfer-success-module").then(__webpack_require__.bind(null,
          /*! ../transfer-success/transfer-success.module */
          "./src/app/transfer-success/transfer-success.module.ts")).then(function (m) {
            return m.TransferSuccessPageModule;
          });
        }
      }, {
        path: 'transactions/empty',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | empty-transaction-empty-transaction-module */
          "empty-transaction-empty-transaction-module").then(__webpack_require__.bind(null,
          /*! ../empty-transaction/empty-transaction.module */
          "./src/app/empty-transaction/empty-transaction.module.ts")).then(function (m) {
            return m.EmptyTransactionPageModule;
          });
        }
      }, {
        path: 'profile',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | profile-profile-module */
            [__webpack_require__.e("default~add-money-add-money-module~login-login-module~profile-profile-module~signup-signup-module"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null,
            /*! ../profile/profile.module */
            "./src/app/profile/profile.module.ts")).then(function (m) {
              return m.ProfilePageModule;
            });
          }
        }]
      }, {
        path: 'profile/security',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | security-security-module */
          "security-security-module").then(__webpack_require__.bind(null,
          /*! ../security/security.module */
          "./src/app/security/security.module.ts")).then(function (m) {
            return m.SecurityPageModule;
          });
        }
      }, {
        path: 'profile/features',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | feature-feature-module */
          "feature-feature-module").then(__webpack_require__.bind(null,
          /*! ../feature/feature.module */
          "./src/app/feature/feature.module.ts")).then(function (m) {
            return m.FeaturePageModule;
          });
        }
      }, {
        path: 'profile/security/bvn',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | bvn-bvn-module */
          "bvn-bvn-module").then(__webpack_require__.bind(null,
          /*! ../bvn/bvn.module */
          "./src/app/bvn/bvn.module.ts")).then(function (m) {
            return m.BvnPageModule;
          });
        }
      }, {
        path: 'profile/no-account',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | no-account-no-account-module */
          "no-account-no-account-module").then(__webpack_require__.bind(null,
          /*! ../no-account/no-account.module */
          "./src/app/no-account/no-account.module.ts")).then(function (m) {
            return m.NoAccountPageModule;
          });
        }
      }, {
        path: 'profile/features/download',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | feature-feature-module */
          "feature-feature-module").then(__webpack_require__.bind(null,
          /*! ../feature/feature.module */
          "./src/app/feature/feature.module.ts")).then(function (m) {
            return m.FeaturePageModule;
          });
        }
      }, {
        path: 'profile/features/support',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | feature-feature-module */
          "feature-feature-module").then(__webpack_require__.bind(null,
          /*! ../feature/feature.module */
          "./src/app/feature/feature.module.ts")).then(function (m) {
            return m.FeaturePageModule;
          });
        }
      }, {
        path: 'profile/features/payment-methods',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | payment-methods-payment-methods-module */
          "payment-methods-payment-methods-module").then(__webpack_require__.bind(null,
          /*! ../payment-methods/payment-methods.module */
          "./src/app/payment-methods/payment-methods.module.ts")).then(function (m) {
            return m.PaymentMethodsPageModule;
          });
        }
      }, {
        path: 'profile/features/terms',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | feature-feature-module */
          "feature-feature-module").then(__webpack_require__.bind(null,
          /*! ../feature/feature.module */
          "./src/app/feature/feature.module.ts")).then(function (m) {
            return m.FeaturePageModule;
          });
        }
      }, {
        path: 'profile/features/privacy-policy',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | privacy-policy-privacy-policy-module */
          "privacy-policy-privacy-policy-module").then(__webpack_require__.bind(null,
          /*! ../privacy-policy/privacy-policy.module */
          "./src/app/privacy-policy/privacy-policy.module.ts")).then(function (m) {
            return m.PrivacyPolicyPageModule;
          });
        }
      }, {
        path: 'profile/security/change-password',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | confirm-payment-confirm-payment-module */
          "confirm-payment-confirm-payment-module").then(__webpack_require__.bind(null,
          /*! ../confirm-payment/confirm-payment.module */
          "./src/app/confirm-payment/confirm-payment.module.ts")).then(function (m) {
            return m.ConfirmPaymentPageModule;
          });
        }
      }, {
        path: 'profile/next-of-kin',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | next-of-kin-next-of-kin-module */
          "next-of-kin-next-of-kin-module").then(__webpack_require__.bind(null,
          /*! ../next-of-kin/next-of-kin.module */
          "./src/app/next-of-kin/next-of-kin.module.ts")).then(function (m) {
            return m.NextOfKinPageModule;
          });
        }
      }, {
        path: 'menu',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | menu-menu-module */
            "menu-menu-module").then(__webpack_require__.bind(null,
            /*! ../menu/menu.module */
            "./src/app/menu/menu.module.ts")).then(function (m) {
              return m.MenuPageModule;
            });
          }
        }]
      }, {
        path: 'menu/referral',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | referral-referral-module */
          "referral-referral-module").then(__webpack_require__.bind(null,
          /*! ../referral/referral.module */
          "./src/app/referral/referral.module.ts")).then(function (m) {
            return m.ReferralPageModule;
          });
        }
      }, {
        path: 'menu/contact',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | profile-profile-module */
          [__webpack_require__.e("default~add-money-add-money-module~login-login-module~profile-profile-module~signup-signup-module"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null,
          /*! ../profile/profile.module */
          "./src/app/profile/profile.module.ts")).then(function (m) {
            return m.ProfilePageModule;
          });
        }
      }, {
        path: 'menu/about',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | profile-profile-module */
          [__webpack_require__.e("default~add-money-add-money-module~login-login-module~profile-profile-module~signup-signup-module"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null,
          /*! ../profile/profile.module */
          "./src/app/profile/profile.module.ts")).then(function (m) {
            return m.ProfilePageModule;
          });
        }
      }, {
        path: '',
        redirectTo: '/user-dashboard/home',
        pathMatch: 'full'
      }]
    }, {
      path: '',
      redirectTo: '/user-dashboard/home',
      pathMatch: 'full'
    }];

    var UserDashboardPageRoutingModule = function UserDashboardPageRoutingModule() {
      _classCallCheck(this, UserDashboardPageRoutingModule);
    };

    UserDashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserDashboardPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/user-dashboard/user-dashboard.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/user-dashboard/user-dashboard.module.ts ***!
    \*********************************************************/

  /*! exports provided: UserDashboardPageModule */

  /***/
  function srcAppUserDashboardUserDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDashboardPageModule", function () {
      return UserDashboardPageModule;
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


    var _user_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-dashboard-routing.module */
    "./src/app/user-dashboard/user-dashboard-routing.module.ts");
    /* harmony import */


    var _user_dashboard_user_dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-dashboard/user-dashboard.page */
    "./src/app/user-dashboard/user-dashboard/user-dashboard.page.ts");

    var UserDashboardPageModule = function UserDashboardPageModule() {
      _classCallCheck(this, UserDashboardPageModule);
    };

    UserDashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserDashboardPageRoutingModule"]],
      declarations: [_user_dashboard_user_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["UserDashboardPage"]]
    })], UserDashboardPageModule);
    /***/
  },

  /***/
  "./src/app/user-dashboard/user-dashboard/user-dashboard.page.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/user-dashboard/user-dashboard/user-dashboard.page.ts ***!
    \**********************************************************************/

  /*! exports provided: UserDashboardPage */

  /***/
  function srcAppUserDashboardUserDashboardUserDashboardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDashboardPage", function () {
      return UserDashboardPage;
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
    /* harmony import */


    var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage-angular */
    "./node_modules/@ionic/storage-angular/__ivy_ngcc__/fesm2015/ionic-storage-angular.js");

    var UserDashboardPage = /*#__PURE__*/function () {
      function UserDashboardPage(router, route, menu, storage, actionSheetCtrl) {
        _classCallCheck(this, UserDashboardPage);

        this.router = router;
        this.route = route;
        this.menu = menu;
        this.storage = storage;
        this.actionSheetCtrl = actionSheetCtrl;
        this.userData = {
          user_id: '',
          first_name: '',
          last_name: '',
          mobile_no: '',
          role_id: '',
          access_token: '',
          expiresIn: ''
        };
      }

      _createClass(UserDashboardPage, [{
        key: "openMoreMenu",
        value: function openMoreMenu() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.actionSheetCtrl.create({
                      header: 'More menu',
                      buttons: [{
                        text: 'Referral',
                        icon: 'share-social-outline',
                        handler: function handler() {
                          _this.router.navigate(['/menu/referral']);
                        }
                      }, {
                        text: 'Logout',
                        icon: 'log-out',
                        handler: function handler() {}
                      }, {
                        icon: 'close',
                        role: 'cancel',
                        handler: function handler() {}
                      }]
                    });

                  case 2:
                    actionSheet = _context.sent;
                    _context.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.route.params.subscribe(function (params) {
            _this2.userData.user_id = params['a'];
            _this2.userData.mobile_no = params['b'];
            _this2.userData.first_name = params['c'];
            _this2.userData.last_name = params['d'];
            var first_name = localStorage.getItem("setting:first_name");
            var last_name = localStorage.getItem("setting:last_name");
            console.log('LOCAL:' + first_name + ' ' + last_name);
          });
        }
      }]);

      return UserDashboardPage;
    }();

    UserDashboardPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
      }];
    };

    UserDashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-dashboard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./user-dashboard.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-dashboard/user-dashboard/user-dashboard.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ../../../assets/css/main.scss */
      "./src/assets/css/main.scss"))["default"]]
    })], UserDashboardPage);
    /***/
  }
}]);
//# sourceMappingURL=user-dashboard-user-dashboard-module-es5.js.map