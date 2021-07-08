(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fund-transfer-fund-transfer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fund-transfer/fund-transfer.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fund-transfer/fund-transfer.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"header-bg\">\n  <ion-toolbar mode=\"ios\" color=\"none\" class=\"text-white\">\n    <ion-buttons mode=\"ios\">\n      <ion-button (click)=\"goBack()\" slot=\"start\">\n        <ion-icon ios=\"arrow-back-outline\" md=\"arrow-back\"></ion-icon>\n      </ion-button>\n      <ion-button slot=\"end\">\n      </ion-button>\n    </ion-buttons>\n    <ion-title >Fund Transfer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <ion-buttons class=\"ion-align-items-center\" mode=\"ios\">\n      <ion-button slot=\"start\" class=\"tool-text\" fill=\"clear\" (click)=\"goToService('fund-transfer')\">          \n        Make transfer here\n      </ion-button>\n      <ion-button slot=\"end\" class=\"tool-text\" fill=\"clear\" (click)=\"goToService('add-money')\">          \n        Add money\n        <img src=\"../../assets/icon/add_money_icon.svg\" alt=\"add-money\" class=\"ml-1\">\n      </ion-button>\n    </ion-buttons>\n   \n    <ion-card color=\"primary\" mode=\"ios\">  \n      <ion-card-content >\n        <p class=\"text\">Available Balance</p>\n        <div class=\"amount\">N 0.00</div>\n      </ion-card-content>\n    </ion-card>\n      <div class=\"most-recent\">        \n        <h4>\n          <img src=\"../../assets/icon/most_recent_icon.svg\" alt=\"most recent\">\n          Most recent\n        </h4>\n        <div class=\"slides\" id=\"slides\">\n          <ion-slides pager=\"false\" [options]=\"slideOpts\" mode=\"ios\">\n            <ion-slide>\n              <div class=\"m-recent\">        \n                <span class=\"circle-sm\">\n                  GE\n                </span>\n                <p>          \n                  Grace Emmanuel\n                </p>\n              </div>\n            </ion-slide>\n            <ion-slide>\n              <div class=\"m-recent\">        \n                <span class=\"circle-sm\">\n                  GE\n                </span>\n                <p>          \n                  Grace Emmanuel\n                </p>\n              </div>\n            </ion-slide>\n            <ion-slide>\n              <div class=\"m-recent\">        \n                <span class=\"circle-sm\">\n                  GE\n                </span>\n                <p>          \n                  Grace Emmanuel\n                </p>\n              </div>\n            </ion-slide>\n            <ion-slide>\n              <div class=\"m-recent\">        \n                <span class=\"circle-sm\">\n                  GE\n                </span>\n                <p>          \n                  Grace Emmanuel\n                </p>\n              </div>\n            </ion-slide>\n            <ion-slide>\n              <div class=\"m-recent\">        \n                <span class=\"circle-sm\">\n                  GE\n                </span>\n                <p>          \n                  Grace Emmanuel\n                </p>\n              </div>\n            </ion-slide>\n          </ion-slides>\n        </div>\n      </div>\n      <ion-item lines=\"none\">\n        <ion-input placeholder=\"Amount\" type=\"text\" required></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label mode=\"ios\">Select Bank</ion-label>\n        <ion-select okText=\"Okay\" cancelText=\"Dismiss\" required>\n          <ion-select-option value=\"gtb\">GTBank</ion-select-option>\n          <ion-select-option value=\"first bank\">First Bank Nigeria</ion-select-option>\n          <ion-select-option value=\"uba\">UBA</ion-select-option>\n          <ion-select-option value=\"zenith\">Zenith</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-input placeholder=\"Account number\" size=\"number\" type=\"text\" required></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-input placeholder=\"Add a note (optional)\"></ion-input>\n      </ion-item> \n      <div class=\"ion-text-center\">\n        <ion-button color=\"primary\" (click)=\"goToService('transfer2')\" mode=\"ios\">\n          Continue\n        </ion-button>\n      </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/fund-transfer/fund-transfer-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/fund-transfer/fund-transfer-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: FundTransferPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundTransferPageRoutingModule", function() { return FundTransferPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fund_transfer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fund-transfer.page */ "./src/app/fund-transfer/fund-transfer.page.ts");




const routes = [
    {
        path: '',
        component: _fund_transfer_page__WEBPACK_IMPORTED_MODULE_3__["FundTransferPage"]
    },
    {
        path: 'transfer2',
        loadChildren: () => __webpack_require__.e(/*! import() | transfer2-transfer2-module */ "common").then(__webpack_require__.bind(null, /*! ./transfer2/transfer2.module */ "./src/app/fund-transfer/transfer2/transfer2.module.ts")).then(m => m.Transfer2PageModule)
    }
];
let FundTransferPageRoutingModule = class FundTransferPageRoutingModule {
};
FundTransferPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FundTransferPageRoutingModule);



/***/ }),

/***/ "./src/app/fund-transfer/fund-transfer.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/fund-transfer/fund-transfer.module.ts ***!
  \*******************************************************/
/*! exports provided: FundTransferPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundTransferPageModule", function() { return FundTransferPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _fund_transfer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fund-transfer-routing.module */ "./src/app/fund-transfer/fund-transfer-routing.module.ts");
/* harmony import */ var _fund_transfer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fund-transfer.page */ "./src/app/fund-transfer/fund-transfer.page.ts");







let FundTransferPageModule = class FundTransferPageModule {
};
FundTransferPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _fund_transfer_routing_module__WEBPACK_IMPORTED_MODULE_5__["FundTransferPageRoutingModule"]
        ],
        declarations: [_fund_transfer_page__WEBPACK_IMPORTED_MODULE_6__["FundTransferPage"]]
    })
], FundTransferPageModule);



/***/ }),

/***/ "./src/app/fund-transfer/fund-transfer.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/fund-transfer/fund-transfer.page.ts ***!
  \*****************************************************/
/*! exports provided: FundTransferPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundTransferPage", function() { return FundTransferPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/navigation-service.service */ "./src/app/services/navigation-service.service.ts");




let FundTransferPage = class FundTransferPage {
    constructor(router, navService) {
        this.router = router;
        this.navService = navService;
        this.slideOpts = {
            slidesPerView: 4,
        };
    }
    goBack() {
        this.navService.navigateToPreviousPage();
    }
    ngOnInit() {
    }
    goToService(data) {
        if (data === 'transfer2') {
            this.router.navigate(['/user-dashboard/dashboard2/' + data]);
        }
        else {
            this.router.navigate(['/user-dashboard/wallet/' + data]);
        }
    }
};
FundTransferPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_3__["NavigationServiceService"] }
];
FundTransferPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fund-transfer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./fund-transfer.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fund-transfer/fund-transfer.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./fund-transfer.page.scss */ "./src/app/fund-transfer/fund-transfer.page.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../assets/css/main.scss */ "./src/assets/css/main.scss")).default]
    })
], FundTransferPage);



/***/ })

}]);
//# sourceMappingURL=fund-transfer-fund-transfer-module-es2015.js.map