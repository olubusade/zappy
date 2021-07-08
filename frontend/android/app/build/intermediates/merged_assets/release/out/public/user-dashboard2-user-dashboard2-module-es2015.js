(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-dashboard2-user-dashboard2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-dashboard2/user-dashboard2.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-dashboard2/user-dashboard2.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n  <ion-tabs>\n      <ion-tab-bar slot=\"bottom\">\n        <ion-tab-button tab=\"home\">\n          <ion-icon name=\"home-outline\"></ion-icon>\n          <!-- <ion-icon>\n            <img src=\"../../assets/icon/home_icon.svg\" alt=\"\">\n          </ion-icon> -->\n          <ion-label>Home</ion-label>\n        </ion-tab-button>\n    \n        <ion-tab-button tab=\"wallet\">\n          <ion-icon name=\"wallet-outline\"></ion-icon> \n          <!-- <img src=\"../../assets/icon/wallet_icon.svg\" alt=\"\"> -->\n          <ion-label>Wallet</ion-label>\n        </ion-tab-button>\n    \n        <ion-tab-button tab=\"transactions\">\n          <ion-icon name=\"sync-outline\"></ion-icon>\n          <!-- <img src=\"../../assets/icon/transaction_icon.svg\" alt=\"\"> -->\n          <ion-label>Transactions</ion-label>\n        </ion-tab-button>\n    \n        <ion-tab-button tab=\"profile\">\n          <ion-icon name=\"person-outline\"></ion-icon>\n          <!-- <img src=\"../../assets/icon/profile_icon.svg\" alt=\"\"> -->\n          <ion-label>Profile</ion-label>\n        </ion-tab-button>\n    \n        <ion-tab-button  (click)=\"openMenu()\">\n          <ion-icon name=\"grid-outline\"></ion-icon>\n          <!-- <img src=\"../../assets/icon/more_icon.svg\" alt=\"\"> -->\n          <ion-label>More</ion-label>\n        </ion-tab-button>\n      </ion-tab-bar>\n  </ion-tabs>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/user-dashboard2/user-dashboard2-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user-dashboard2/user-dashboard2-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: UserDashboard2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboard2PageRoutingModule", function() { return UserDashboard2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_dashboard2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-dashboard2.page */ "./src/app/user-dashboard2/user-dashboard2.page.ts");




const routes = [
    {
        path: '',
        component: _user_dashboard2_page__WEBPACK_IMPORTED_MODULE_3__["UserDashboard2Page"],
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | dashboard2-dashboard2-module */ "dashboard2-dashboard2-module").then(__webpack_require__.bind(null, /*! ../dashboard2/dashboard2.module */ "./src/app/dashboard2/dashboard2.module.ts")).then(m => m.Dashboard2PageModule)
                    }
                ]
            },
            { path: 'home/mobile-airtime', loadChildren: () => __webpack_require__.e(/*! import() | mobile-airtime-mobile-airtime-module */ "mobile-airtime-mobile-airtime-module").then(__webpack_require__.bind(null, /*! ../mobile-airtime/mobile-airtime.module */ "./src/app/mobile-airtime/mobile-airtime.module.ts")).then(m => m.MobileAirtimePageModule) },
            { path: 'home/cable-tv', loadChildren: () => __webpack_require__.e(/*! import() | cable-tv-cable-tv-module */ "cable-tv-cable-tv-module").then(__webpack_require__.bind(null, /*! ../cable-tv/cable-tv.module */ "./src/app/cable-tv/cable-tv.module.ts")).then(m => m.CableTvPageModule) },
            { path: 'home/data-bundle', loadChildren: () => __webpack_require__.e(/*! import() | data-bundle-data-bundle-module */ "data-bundle-data-bundle-module").then(__webpack_require__.bind(null, /*! ../data-bundle/data-bundle.module */ "./src/app/data-bundle/data-bundle.module.ts")).then(m => m.DataBundlePageModule) },
            { path: 'home/fund-transfer', loadChildren: () => Promise.all(/*! import() | fund-transfer-fund-transfer-module */[__webpack_require__.e("default~fund-transfer-fund-transfer-module~fund-transfer-transfer2-transfer2-module"), __webpack_require__.e("fund-transfer-fund-transfer-module")]).then(__webpack_require__.bind(null, /*! ../fund-transfer/fund-transfer.module */ "./src/app/fund-transfer/fund-transfer.module.ts")).then(m => m.FundTransferPageModule) },
            { path: 'home/transfer2', loadChildren: () => Promise.all(/*! import() | fund-transfer-transfer2-transfer2-module */[__webpack_require__.e("default~fund-transfer-fund-transfer-module~fund-transfer-transfer2-transfer2-module"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null, /*! ../fund-transfer/transfer2/transfer2.module */ "./src/app/fund-transfer/transfer2/transfer2.module.ts")).then(m => m.Transfer2PageModule) },
            { path: 'home/electricity', loadChildren: () => __webpack_require__.e(/*! import() | electricity-electricity-module */ "electricity-electricity-module").then(__webpack_require__.bind(null, /*! ../electricity/electricity.module */ "./src/app/electricity/electricity.module.ts")).then(m => m.ElectricityPageModule) },
            { path: 'home/add-money', loadChildren: () => Promise.all(/*! import() | add-money-add-money-module */[__webpack_require__.e("default~add-money-add-money-module~login-login-module~profile-profile-module~signup-signup-module"), __webpack_require__.e("add-money-add-money-module")]).then(__webpack_require__.bind(null, /*! ../add-money/add-money.module */ "./src/app/add-money/add-money.module.ts")).then(m => m.AddMoneyPageModule) },
            {
                path: 'wallet',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | no-account-no-account-module */ "no-account-no-account-module").then(__webpack_require__.bind(null, /*! ../no-account/no-account.module */ "./src/app/no-account/no-account.module.ts")).then(m => m.NoAccountPageModule),
                    }
                ]
            },
            { path: 'wallet/cards', loadChildren: () => __webpack_require__.e(/*! import() | no-account-no-account-module */ "no-account-no-account-module").then(__webpack_require__.bind(null, /*! ../no-account/no-account.module */ "./src/app/no-account/no-account.module.ts")).then(m => m.NoAccountPageModule) },
            { path: 'wallet/card-blank', loadChildren: () => __webpack_require__.e(/*! import() | my-cards-blank-my-cards-blank-module */ "my-cards-blank-my-cards-blank-module").then(__webpack_require__.bind(null, /*! ../my-cards-blank/my-cards-blank.module */ "./src/app/my-cards-blank/my-cards-blank.module.ts")).then(m => m.MyCardsBlankPageModule) },
            { path: 'wallet/add-money', loadChildren: () => Promise.all(/*! import() | add-money-add-money-module */[__webpack_require__.e("default~add-money-add-money-module~login-login-module~profile-profile-module~signup-signup-module"), __webpack_require__.e("add-money-add-money-module")]).then(__webpack_require__.bind(null, /*! ../add-money/add-money.module */ "./src/app/add-money/add-money.module.ts")).then(m => m.AddMoneyPageModule) },
            { path: 'wallet/add-card', loadChildren: () => __webpack_require__.e(/*! import() | no-account-no-account-module */ "no-account-no-account-module").then(__webpack_require__.bind(null, /*! ../no-account/no-account.module */ "./src/app/no-account/no-account.module.ts")).then(m => m.NoAccountPageModule) },
            { path: 'wallet/delete-card', loadChildren: () => __webpack_require__.e(/*! import() | delete-card-delete-card-module */ "delete-card-delete-card-module").then(__webpack_require__.bind(null, /*! ../delete-card/delete-card.module */ "./src/app/delete-card/delete-card.module.ts")).then(m => m.DeleteCardPageModule) },
            { path: 'wallet/success', loadChildren: () => __webpack_require__.e(/*! import() | success-success-module */ "success-success-module").then(__webpack_require__.bind(null, /*! ../success/success.module */ "./src/app/success/success.module.ts")).then(m => m.SuccessPageModule) },
            { path: 'wallet/empty', loadChildren: () => __webpack_require__.e(/*! import() | wallet-blank-wallet-blank-module */ "wallet-blank-wallet-blank-module").then(__webpack_require__.bind(null, /*! ../wallet-blank/wallet-blank.module */ "./src/app/wallet-blank/wallet-blank.module.ts")).then(m => m.WalletBlankPageModule) },
            {
                path: 'transactions',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | empty-transaction-empty-transaction-module */ "empty-transaction-empty-transaction-module").then(__webpack_require__.bind(null, /*! ../empty-transaction/empty-transaction.module */ "./src/app/empty-transaction/empty-transaction.module.ts")).then(m => m.EmptyTransactionPageModule)
                    }
                ]
            },
            { path: 'transactions/all', loadChildren: () => __webpack_require__.e(/*! import() | transactions-transactions-module */ "transactions-transactions-module").then(__webpack_require__.bind(null, /*! ../transactions/transactions.module */ "./src/app/transactions/transactions.module.ts")).then(m => m.TransactionsPageModule) },
            { path: 'transactions/credit', loadChildren: () => __webpack_require__.e(/*! import() | empty-transaction-empty-transaction-module */ "empty-transaction-empty-transaction-module").then(__webpack_require__.bind(null, /*! ../empty-transaction/empty-transaction.module */ "./src/app/empty-transaction/empty-transaction.module.ts")).then(m => m.EmptyTransactionPageModule) },
            { path: 'transactions/debit', loadChildren: () => __webpack_require__.e(/*! import() | empty-transaction-empty-transaction-module */ "empty-transaction-empty-transaction-module").then(__webpack_require__.bind(null, /*! ../empty-transaction/empty-transaction.module */ "./src/app/empty-transaction/empty-transaction.module.ts")).then(m => m.EmptyTransactionPageModule) },
            { path: 'transactions/success', loadChildren: () => __webpack_require__.e(/*! import() | transfer-success-transfer-success-module */ "transfer-success-transfer-success-module").then(__webpack_require__.bind(null, /*! ../transfer-success/transfer-success.module */ "./src/app/transfer-success/transfer-success.module.ts")).then(m => m.TransferSuccessPageModule) },
            { path: 'transactions/empty', loadChildren: () => __webpack_require__.e(/*! import() | empty-transaction-empty-transaction-module */ "empty-transaction-empty-transaction-module").then(__webpack_require__.bind(null, /*! ../empty-transaction/empty-transaction.module */ "./src/app/empty-transaction/empty-transaction.module.ts")).then(m => m.EmptyTransactionPageModule) },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | no-account-no-account-module */ "no-account-no-account-module").then(__webpack_require__.bind(null, /*! ../no-account/no-account.module */ "./src/app/no-account/no-account.module.ts")).then(m => m.NoAccountPageModule),
                    }
                ]
            },
            { path: 'profile/security', loadChildren: () => __webpack_require__.e(/*! import() | no-account-no-account-module */ "no-account-no-account-module").then(__webpack_require__.bind(null, /*! ../no-account/no-account.module */ "./src/app/no-account/no-account.module.ts")).then(m => m.NoAccountPageModule) },
            { path: 'profile/features', loadChildren: () => __webpack_require__.e(/*! import() | feature-feature-module */ "feature-feature-module").then(__webpack_require__.bind(null, /*! ../feature/feature.module */ "./src/app/feature/feature.module.ts")).then(m => m.FeaturePageModule) },
            { path: 'profile/no-account', loadChildren: () => __webpack_require__.e(/*! import() | no-account-no-account-module */ "no-account-no-account-module").then(__webpack_require__.bind(null, /*! ../no-account/no-account.module */ "./src/app/no-account/no-account.module.ts")).then(m => m.NoAccountPageModule) },
            { path: 'profile/features/download', loadChildren: () => __webpack_require__.e(/*! import() | feature-feature-module */ "feature-feature-module").then(__webpack_require__.bind(null, /*! ../feature/feature.module */ "./src/app/feature/feature.module.ts")).then(m => m.FeaturePageModule) },
            { path: 'profile/features/support', loadChildren: () => __webpack_require__.e(/*! import() | feature-feature-module */ "feature-feature-module").then(__webpack_require__.bind(null, /*! ../feature/feature.module */ "./src/app/feature/feature.module.ts")).then(m => m.FeaturePageModule) },
            { path: 'profile/features/payment-methods', loadChildren: () => __webpack_require__.e(/*! import() | payment-methods-payment-methods-module */ "payment-methods-payment-methods-module").then(__webpack_require__.bind(null, /*! ../payment-methods/payment-methods.module */ "./src/app/payment-methods/payment-methods.module.ts")).then(m => m.PaymentMethodsPageModule) },
            { path: 'profile/features/terms', loadChildren: () => __webpack_require__.e(/*! import() | feature-feature-module */ "feature-feature-module").then(__webpack_require__.bind(null, /*! ../feature/feature.module */ "./src/app/feature/feature.module.ts")).then(m => m.FeaturePageModule) },
            { path: 'profile/features/privacy-policy', loadChildren: () => __webpack_require__.e(/*! import() | privacy-policy-privacy-policy-module */ "privacy-policy-privacy-policy-module").then(__webpack_require__.bind(null, /*! ../privacy-policy/privacy-policy.module */ "./src/app/privacy-policy/privacy-policy.module.ts")).then(m => m.PrivacyPolicyPageModule) },
            { path: 'profile/security/change-password', loadChildren: () => __webpack_require__.e(/*! import() | confirm-payment-confirm-payment-module */ "confirm-payment-confirm-payment-module").then(__webpack_require__.bind(null, /*! ../confirm-payment/confirm-payment.module */ "./src/app/confirm-payment/confirm-payment.module.ts")).then(m => m.ConfirmPaymentPageModule) },
            { path: 'profile/change-photo', loadChildren: () => __webpack_require__.e(/*! import() | confirm-payment-confirm-payment-module */ "confirm-payment-confirm-payment-module").then(__webpack_require__.bind(null, /*! ../confirm-payment/confirm-payment.module */ "./src/app/confirm-payment/confirm-payment.module.ts")).then(m => m.ConfirmPaymentPageModule) },
            { path: 'profile/next-of-kin', loadChildren: () => __webpack_require__.e(/*! import() | next-of-kin-next-of-kin-module */ "next-of-kin-next-of-kin-module").then(__webpack_require__.bind(null, /*! ../next-of-kin/next-of-kin.module */ "./src/app/next-of-kin/next-of-kin.module.ts")).then(m => m.NextOfKinPageModule) },
            {
                path: 'menu',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | menu-menu-module */ "menu-menu-module").then(__webpack_require__.bind(null, /*! ../menu/menu.module */ "./src/app/menu/menu.module.ts")).then(m => m.MenuPageModule)
                    }
                ]
            },
            {
                path: 'menu/referral',
                loadChildren: () => __webpack_require__.e(/*! import() | referral-referral-module */ "referral-referral-module").then(__webpack_require__.bind(null, /*! ../referral/referral.module */ "./src/app/referral/referral.module.ts")).then(m => m.ReferralPageModule)
            },
            {
                path: 'menu/contact',
                loadChildren: () => Promise.all(/*! import() | profile-profile-module */[__webpack_require__.e("default~add-money-add-money-module~login-login-module~profile-profile-module~signup-signup-module"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null, /*! ../profile/profile.module */ "./src/app/profile/profile.module.ts")).then(m => m.ProfilePageModule)
            },
            {
                path: 'menu/about',
                loadChildren: () => Promise.all(/*! import() | profile-profile-module */[__webpack_require__.e("default~add-money-add-money-module~login-login-module~profile-profile-module~signup-signup-module"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null, /*! ../profile/profile.module */ "./src/app/profile/profile.module.ts")).then(m => m.ProfilePageModule)
            },
            {
                path: '',
                redirectTo: '/user-dashboard2/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/user-dashboard2/home',
        pathMatch: 'full'
    }
];
let UserDashboard2PageRoutingModule = class UserDashboard2PageRoutingModule {
};
UserDashboard2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserDashboard2PageRoutingModule);



/***/ }),

/***/ "./src/app/user-dashboard2/user-dashboard2.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/user-dashboard2/user-dashboard2.module.ts ***!
  \***********************************************************/
/*! exports provided: UserDashboard2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboard2PageModule", function() { return UserDashboard2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _user_dashboard2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-dashboard2-routing.module */ "./src/app/user-dashboard2/user-dashboard2-routing.module.ts");
/* harmony import */ var _user_dashboard2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-dashboard2.page */ "./src/app/user-dashboard2/user-dashboard2.page.ts");







let UserDashboard2PageModule = class UserDashboard2PageModule {
};
UserDashboard2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _user_dashboard2_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserDashboard2PageRoutingModule"]
        ],
        declarations: [_user_dashboard2_page__WEBPACK_IMPORTED_MODULE_6__["UserDashboard2Page"]]
    })
], UserDashboard2PageModule);



/***/ }),

/***/ "./src/app/user-dashboard2/user-dashboard2.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/user-dashboard2/user-dashboard2.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZGFzaGJvYXJkMi91c2VyLWRhc2hib2FyZDIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/user-dashboard2/user-dashboard2.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/user-dashboard2/user-dashboard2.page.ts ***!
  \*********************************************************/
/*! exports provided: UserDashboard2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboard2Page", function() { return UserDashboard2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let UserDashboard2Page = class UserDashboard2Page {
    constructor(router, menu) {
        this.router = router;
        this.menu = menu;
    }
    openMenu() {
        console.log('enu');
        this.menu.enable(true, 'second');
        this.menu.open('second');
    }
    ngOnInit() {
    }
};
UserDashboard2Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
];
UserDashboard2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-dashboard2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-dashboard2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-dashboard2/user-dashboard2.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-dashboard2.page.scss */ "./src/app/user-dashboard2/user-dashboard2.page.scss")).default]
    })
], UserDashboard2Page);



/***/ })

}]);
//# sourceMappingURL=user-dashboard2-user-dashboard2-module-es2015.js.map