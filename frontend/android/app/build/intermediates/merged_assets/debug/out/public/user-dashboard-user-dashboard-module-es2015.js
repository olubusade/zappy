(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-dashboard-user-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-dashboard/user-dashboard/user-dashboard.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-dashboard/user-dashboard/user-dashboard.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-content>\r\n    <ion-tabs>\r\n        <ion-tab-bar slot=\"bottom\">\r\n          <ion-tab-button tab=\"home\">\r\n            <ion-icon size = \"small\" name=\"home\"></ion-icon>\r\n            <ion-label>Home</ion-label>\r\n          </ion-tab-button>\r\n      \r\n          <ion-tab-button tab=\"wallet\">\r\n            <ion-icon size = \"small\" name=\"wallet\"></ion-icon> \r\n            <ion-label>Wallet</ion-label>\r\n          </ion-tab-button>\r\n      \r\n          <ion-tab-button tab=\"transactions\">\r\n            <ion-icon size = \"small\" name=\"sync\"></ion-icon>\r\n            <!-- <img src=\"../../assets/icon/transaction_icon.svg\" alt=\"\"> -->\r\n            <ion-label>Transactions</ion-label>\r\n          </ion-tab-button>\r\n      \r\n          <ion-tab-button tab=\"profile\">\r\n            <ion-icon name=\"person\"></ion-icon>\r\n            <!-- <img src=\"../../assets/icon/profile_icon.svg\" alt=\"\"> -->\r\n            <ion-label>Profile</ion-label>\r\n          </ion-tab-button>\r\n          <ion-tab-button  (click)=\"openMoreMenu()\">\r\n            <ion-icon size = \"small\" name=\"ellipsis-horizontal-circle-outline\"></ion-icon>\r\n            <ion-label>More</ion-label>\r\n          </ion-tab-button>\r\n        </ion-tab-bar>\r\n    </ion-tabs>\r\n</ion-content>\r\n  ");

/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: UserDashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardPageRoutingModule", function() { return UserDashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_dashboard_user_dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.page */ "./src/app/user-dashboard/user-dashboard/user-dashboard.page.ts");




const routes = [
    {
        path: '',
        component: _user_dashboard_user_dashboard_page__WEBPACK_IMPORTED_MODULE_3__["UserDashboardPage"],
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | dashboard-dashboard-module */ "dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ../dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts")).then(m => m.DashboardPageModule)
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
            { path: 'home/coming-soon', loadChildren: () => __webpack_require__.e(/*! import() | coming-soon-coming-soon-module */ "coming-soon-coming-soon-module").then(__webpack_require__.bind(null, /*! ../coming-soon/coming-soon.module */ "./src/app/coming-soon/coming-soon.module.ts")).then(m => m.ComingSoonPageModule) },
            {
                path: 'wallet',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | wallet-wallet-module */ "wallet-wallet-module").then(__webpack_require__.bind(null, /*! ../wallet/wallet.module */ "./src/app/wallet/wallet.module.ts")).then(m => m.WalletPageModule)
                    }
                ]
            },
            { path: 'wallet/cards', loadChildren: () => __webpack_require__.e(/*! import() | my-cards-my-cards-module */ "my-cards-my-cards-module").then(__webpack_require__.bind(null, /*! ../my-cards/my-cards.module */ "./src/app/my-cards/my-cards.module.ts")).then(m => m.MyCardsPageModule) },
            { path: 'wallet/card-blank', loadChildren: () => __webpack_require__.e(/*! import() | my-cards-blank-my-cards-blank-module */ "my-cards-blank-my-cards-blank-module").then(__webpack_require__.bind(null, /*! ../my-cards-blank/my-cards-blank.module */ "./src/app/my-cards-blank/my-cards-blank.module.ts")).then(m => m.MyCardsBlankPageModule) },
            { path: 'wallet/add-money', loadChildren: () => Promise.all(/*! import() | add-money-add-money-module */[__webpack_require__.e("default~add-money-add-money-module~login-login-module~profile-profile-module~signup-signup-module"), __webpack_require__.e("add-money-add-money-module")]).then(__webpack_require__.bind(null, /*! ../add-money/add-money.module */ "./src/app/add-money/add-money.module.ts")).then(m => m.AddMoneyPageModule) },
            { path: 'wallet/add-card', loadChildren: () => __webpack_require__.e(/*! import() | add-card-add-card-module */ "add-card-add-card-module").then(__webpack_require__.bind(null, /*! ../add-card/add-card.module */ "./src/app/add-card/add-card.module.ts")).then(m => m.AddCardPageModule) },
            { path: 'wallet/delete-card', loadChildren: () => __webpack_require__.e(/*! import() | delete-card-delete-card-module */ "delete-card-delete-card-module").then(__webpack_require__.bind(null, /*! ../delete-card/delete-card.module */ "./src/app/delete-card/delete-card.module.ts")).then(m => m.DeleteCardPageModule) },
            { path: 'wallet/success', loadChildren: () => __webpack_require__.e(/*! import() | success-success-module */ "success-success-module").then(__webpack_require__.bind(null, /*! ../success/success.module */ "./src/app/success/success.module.ts")).then(m => m.SuccessPageModule) },
            { path: 'wallet/empty', loadChildren: () => __webpack_require__.e(/*! import() | wallet-blank-wallet-blank-module */ "wallet-blank-wallet-blank-module").then(__webpack_require__.bind(null, /*! ../wallet-blank/wallet-blank.module */ "./src/app/wallet-blank/wallet-blank.module.ts")).then(m => m.WalletBlankPageModule) },
            { path: 'wallet/fund-transfer', loadChildren: () => Promise.all(/*! import() | fund-transfer-fund-transfer-module */[__webpack_require__.e("default~fund-transfer-fund-transfer-module~fund-transfer-transfer2-transfer2-module"), __webpack_require__.e("fund-transfer-fund-transfer-module")]).then(__webpack_require__.bind(null, /*! ../fund-transfer/fund-transfer.module */ "./src/app/fund-transfer/fund-transfer.module.ts")).then(m => m.FundTransferPageModule) },
            { path: 'wallet/transfer-instruction', loadChildren: () => __webpack_require__.e(/*! import() | transfer-instruction1-transfer-instruction1-module */ "transfer-instruction1-transfer-instruction1-module").then(__webpack_require__.bind(null, /*! ../transfer-instruction1/transfer-instruction1.module */ "./src/app/transfer-instruction1/transfer-instruction1.module.ts")).then(m => m.TransferInstruction1PageModule) },
            { path: 'wallet/confirm-payment', loadChildren: () => __webpack_require__.e(/*! import() | confirm-payment-confirm-payment-module */ "confirm-payment-confirm-payment-module").then(__webpack_require__.bind(null, /*! ../confirm-payment/confirm-payment.module */ "./src/app/confirm-payment/confirm-payment.module.ts")).then(m => m.ConfirmPaymentPageModule) },
            { path: 'wallet/otp', loadChildren: () => Promise.all(/*! import() | otp-otp-module */[__webpack_require__.e("common"), __webpack_require__.e("otp-otp-module")]).then(__webpack_require__.bind(null, /*! ../otp/otp.module */ "./src/app/otp/otp.module.ts")).then(m => m.OtpPageModule) },
            { path: 'wallet/paywith-card', loadChildren: () => __webpack_require__.e(/*! import() | paywith-card-paywith-card-module */ "paywith-card-paywith-card-module").then(__webpack_require__.bind(null, /*! ../paywith-card/paywith-card.module */ "./src/app/paywith-card/paywith-card.module.ts")).then(m => m.PaywithCardPageModule) },
            {
                path: 'transactions',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | transactions-transactions-module */ "transactions-transactions-module").then(__webpack_require__.bind(null, /*! ../transactions/transactions.module */ "./src/app/transactions/transactions.module.ts")).then(m => m.TransactionsPageModule),
                    }
                ]
            },
            // {path: 'transactions/all',    loadChildren: () => import('../transactions/transactions.module').then(m => m.TransactionsPageModule)},
            { path: 'transactions/credit', loadChildren: () => __webpack_require__.e(/*! import() | credit-transaction-credit-transaction-module */ "credit-transaction-credit-transaction-module").then(__webpack_require__.bind(null, /*! ../credit-transaction/credit-transaction.module */ "./src/app/credit-transaction/credit-transaction.module.ts")).then(m => m.CreditTransactionPageModule) },
            { path: 'transactions/debit', loadChildren: () => __webpack_require__.e(/*! import() | debit-transaction-debit-transaction-module */ "debit-transaction-debit-transaction-module").then(__webpack_require__.bind(null, /*! ../debit-transaction/debit-transaction.module */ "./src/app/debit-transaction/debit-transaction.module.ts")).then(m => m.DebitTransactionPageModule) },
            { path: 'transactions/success', loadChildren: () => __webpack_require__.e(/*! import() | transfer-success-transfer-success-module */ "transfer-success-transfer-success-module").then(__webpack_require__.bind(null, /*! ../transfer-success/transfer-success.module */ "./src/app/transfer-success/transfer-success.module.ts")).then(m => m.TransferSuccessPageModule) },
            { path: 'transactions/empty', loadChildren: () => __webpack_require__.e(/*! import() | empty-transaction-empty-transaction-module */ "empty-transaction-empty-transaction-module").then(__webpack_require__.bind(null, /*! ../empty-transaction/empty-transaction.module */ "./src/app/empty-transaction/empty-transaction.module.ts")).then(m => m.EmptyTransactionPageModule) },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | profile-profile-module */[__webpack_require__.e("default~add-money-add-money-module~login-login-module~profile-profile-module~signup-signup-module"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null, /*! ../profile/profile.module */ "./src/app/profile/profile.module.ts")).then(m => m.ProfilePageModule)
                    }
                ]
            },
            { path: 'profile/security', loadChildren: () => __webpack_require__.e(/*! import() | security-security-module */ "security-security-module").then(__webpack_require__.bind(null, /*! ../security/security.module */ "./src/app/security/security.module.ts")).then(m => m.SecurityPageModule) },
            { path: 'profile/features', loadChildren: () => __webpack_require__.e(/*! import() | feature-feature-module */ "feature-feature-module").then(__webpack_require__.bind(null, /*! ../feature/feature.module */ "./src/app/feature/feature.module.ts")).then(m => m.FeaturePageModule) },
            { path: 'profile/security/bvn', loadChildren: () => __webpack_require__.e(/*! import() | bvn-bvn-module */ "bvn-bvn-module").then(__webpack_require__.bind(null, /*! ../bvn/bvn.module */ "./src/app/bvn/bvn.module.ts")).then(m => m.BvnPageModule) },
            { path: 'profile/no-account', loadChildren: () => __webpack_require__.e(/*! import() | no-account-no-account-module */ "no-account-no-account-module").then(__webpack_require__.bind(null, /*! ../no-account/no-account.module */ "./src/app/no-account/no-account.module.ts")).then(m => m.NoAccountPageModule) },
            { path: 'profile/features/download', loadChildren: () => __webpack_require__.e(/*! import() | feature-feature-module */ "feature-feature-module").then(__webpack_require__.bind(null, /*! ../feature/feature.module */ "./src/app/feature/feature.module.ts")).then(m => m.FeaturePageModule) },
            { path: 'profile/features/support', loadChildren: () => __webpack_require__.e(/*! import() | feature-feature-module */ "feature-feature-module").then(__webpack_require__.bind(null, /*! ../feature/feature.module */ "./src/app/feature/feature.module.ts")).then(m => m.FeaturePageModule) },
            { path: 'profile/features/payment-methods', loadChildren: () => __webpack_require__.e(/*! import() | payment-methods-payment-methods-module */ "payment-methods-payment-methods-module").then(__webpack_require__.bind(null, /*! ../payment-methods/payment-methods.module */ "./src/app/payment-methods/payment-methods.module.ts")).then(m => m.PaymentMethodsPageModule) },
            { path: 'profile/features/terms', loadChildren: () => __webpack_require__.e(/*! import() | feature-feature-module */ "feature-feature-module").then(__webpack_require__.bind(null, /*! ../feature/feature.module */ "./src/app/feature/feature.module.ts")).then(m => m.FeaturePageModule) },
            { path: 'profile/features/privacy-policy', loadChildren: () => __webpack_require__.e(/*! import() | privacy-policy-privacy-policy-module */ "privacy-policy-privacy-policy-module").then(__webpack_require__.bind(null, /*! ../privacy-policy/privacy-policy.module */ "./src/app/privacy-policy/privacy-policy.module.ts")).then(m => m.PrivacyPolicyPageModule) },
            { path: 'profile/security/change-password', loadChildren: () => __webpack_require__.e(/*! import() | confirm-payment-confirm-payment-module */ "confirm-payment-confirm-payment-module").then(__webpack_require__.bind(null, /*! ../confirm-payment/confirm-payment.module */ "./src/app/confirm-payment/confirm-payment.module.ts")).then(m => m.ConfirmPaymentPageModule) },
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
                redirectTo: '/user-dashboard/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/user-dashboard/home',
        pathMatch: 'full'
    }
];
let UserDashboardPageRoutingModule = class UserDashboardPageRoutingModule {
};
UserDashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserDashboardPageRoutingModule);



/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard.module.ts ***!
  \*********************************************************/
/*! exports provided: UserDashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardPageModule", function() { return UserDashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _user_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-dashboard-routing.module */ "./src/app/user-dashboard/user-dashboard-routing.module.ts");
/* harmony import */ var _user_dashboard_user_dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.page */ "./src/app/user-dashboard/user-dashboard/user-dashboard.page.ts");







let UserDashboardPageModule = class UserDashboardPageModule {
};
UserDashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _user_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserDashboardPageRoutingModule"]
        ],
        declarations: [_user_dashboard_user_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["UserDashboardPage"]]
    })
], UserDashboardPageModule);



/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard/user-dashboard.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard/user-dashboard.page.ts ***!
  \**********************************************************************/
/*! exports provided: UserDashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardPage", function() { return UserDashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ "./node_modules/@ionic/storage-angular/__ivy_ngcc__/fesm2015/ionic-storage-angular.js");





let UserDashboardPage = class UserDashboardPage {
    constructor(router, route, menu, storage, actionSheetCtrl) {
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
    openMoreMenu() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /*
            console.log('enu')
            this.menu.enable(true, 'first');
            this.menu.open('first');
            */
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'More menu',
                buttons: [
                    {
                        text: 'Referral',
                        icon: 'share-social-outline',
                        handler: () => {
                            this.router.navigate(['/menu/referral']);
                        }
                    },
                    {
                        text: 'Logout',
                        icon: 'log-out',
                        handler: () => {
                        }
                    },
                    {
                        icon: 'close',
                        role: 'cancel',
                        handler: () => { }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.userData.user_id = params['a'];
            this.userData.mobile_no = params['b'];
            this.userData.first_name = params['c'];
            this.userData.last_name = params['d'];
            let first_name = localStorage.getItem(`setting:first_name`);
            let last_name = localStorage.getItem(`setting:last_name`);
            console.log('LOCAL:' + first_name + ' ' + last_name);
        });
    }
};
UserDashboardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] }
];
UserDashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-dashboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-dashboard/user-dashboard/user-dashboard.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../assets/css/main.scss */ "./src/assets/css/main.scss")).default]
    })
], UserDashboardPage);



/***/ })

}]);
//# sourceMappingURL=user-dashboard-user-dashboard-module-es2015.js.map