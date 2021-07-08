(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coming-soon-coming-soon-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coming-soon/coming-soon/coming-soon.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coming-soon/coming-soon/coming-soon.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"none\" mode=\"ios\">\n    <ion-buttons  (click)=\"goBack()\">\n    <ion-button >\n      <ion-icon ios=\"arrow-back-outline\" md=\"arrow-back\"></ion-icon>\n    </ion-button>\n    </ion-buttons>\n    <ion-title color=\"primary\">Wallet</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"container\">\n  <h4 class=\"text-primary\">\n    Service will be available soon\n  </h4>\n</div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/coming-soon/coming-soon-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/coming-soon/coming-soon-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ComingSoonPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonPageRoutingModule", function() { return ComingSoonPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _coming_soon_coming_soon_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coming-soon/coming-soon.page */ "./src/app/coming-soon/coming-soon/coming-soon.page.ts");




const routes = [
    {
        path: '',
        component: _coming_soon_coming_soon_page__WEBPACK_IMPORTED_MODULE_3__["ComingSoonPage"]
    }
];
let ComingSoonPageRoutingModule = class ComingSoonPageRoutingModule {
};
ComingSoonPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComingSoonPageRoutingModule);



/***/ }),

/***/ "./src/app/coming-soon/coming-soon.module.ts":
/*!***************************************************!*\
  !*** ./src/app/coming-soon/coming-soon.module.ts ***!
  \***************************************************/
/*! exports provided: ComingSoonPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonPageModule", function() { return ComingSoonPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _coming_soon_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coming-soon-routing.module */ "./src/app/coming-soon/coming-soon-routing.module.ts");
/* harmony import */ var _coming_soon_coming_soon_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coming-soon/coming-soon.page */ "./src/app/coming-soon/coming-soon/coming-soon.page.ts");







let ComingSoonPageModule = class ComingSoonPageModule {
};
ComingSoonPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _coming_soon_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComingSoonPageRoutingModule"]
        ],
        declarations: [_coming_soon_coming_soon_page__WEBPACK_IMPORTED_MODULE_6__["ComingSoonPage"]]
    })
], ComingSoonPageModule);



/***/ }),

/***/ "./src/app/coming-soon/coming-soon/coming-soon.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/coming-soon/coming-soon/coming-soon.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  align-items: center;\n  justify-content: center;\n  height: 70vh;\n}\n.container button {\n  padding: 0px !important;\n  background: transparent;\n  opacity: 0.9;\n  font-weight: 600;\n}\nh4 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 22px;\n  text-align: center;\n  color: rgba(0, 54, 121, 0.6) !important;\n}\nbutton {\n  color: #003679;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29taW5nLXNvb24vY29taW5nLXNvb24vQzpcXFVzZXJzXFxMZW5vdm9cXGRvY3VtZW50c1xcdnNjX2xvY2FsX2RldlxcbmF0aXZlLW1vYmlsZS1hcHBcXHphcHB5XFxmcm9udGVuZC9zcmNcXGFwcFxcY29taW5nLXNvb25cXGNvbWluZy1zb29uXFxjb21pbmctc29vbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbWluZy1zb29uL2NvbWluZy1zb29uL2NvbWluZy1zb29uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDQUY7QURFRTtFQUNFLHVCQUFBO0VBQ0EsdUJBQUE7RUFFQSxZQUFBO0VBQ0EsZ0JBQUE7QUNESjtBREtBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtBQ0ZGO0FES0E7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9jb21pbmctc29vbi9jb21pbmctc29vbi9jb21pbmctc29vbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb250YWluZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiA3MHZoO1xuXG4gIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLy9jb2xvcjogIzAwMzY3OSAhaW1wb3J0YW50O1xuICAgIG9wYWNpdHk6IC45O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbn1cblxuaDQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7ICBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmdiYSgwLCA1NCwgMTIxLCAwLjYpICFpbXBvcnRhbnQ7XG59XG5cbmJ1dHRvbiB7XG4gIGNvbG9yOiAjMDAzNjc5O1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7IFxufVxuIiwiLmNvbnRhaW5lciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDcwdmg7XG59XG4uY29udGFpbmVyIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgb3BhY2l0eTogMC45O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5oNCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2JhKDAsIDU0LCAxMjEsIDAuNikgIWltcG9ydGFudDtcbn1cblxuYnV0dG9uIHtcbiAgY29sb3I6ICMwMDM2Nzk7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/coming-soon/coming-soon/coming-soon.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/coming-soon/coming-soon/coming-soon.page.ts ***!
  \*************************************************************/
/*! exports provided: ComingSoonPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonPage", function() { return ComingSoonPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_services_navigation_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app/services/navigation-service.service */ "./src/app/services/navigation-service.service.ts");




let ComingSoonPage = class ComingSoonPage {
    constructor(router, navService) {
        this.router = router;
        this.navService = navService;
    }
    goBack() {
        this.navService.navigateToPreviousPage();
    }
    ngOnInit() {
    }
};
ComingSoonPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _app_services_navigation_service_service__WEBPACK_IMPORTED_MODULE_3__["NavigationServiceService"] }
];
ComingSoonPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coming-soon',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./coming-soon.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coming-soon/coming-soon/coming-soon.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./coming-soon.page.scss */ "./src/app/coming-soon/coming-soon/coming-soon.page.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../assets/css/main.scss */ "./src/assets/css/main.scss")).default]
    })
], ComingSoonPage);



/***/ }),

/***/ "./src/app/services/navigation-service.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/navigation-service.service.ts ***!
  \********************************************************/
/*! exports provided: NavigationServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationServiceService", function() { return NavigationServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let NavigationServiceService = class NavigationServiceService {
    constructor(router, navController) {
        this.router = router;
        this.navController = navController;
    }
    navigateToPreviousPage() {
        const url = this.router.url;
        if (url.match("(^\/[a-zA-Z0-9\-\.]*)$")) {
            navigator['app'].exitApp();
        }
        else {
            this.navController.navigateBack(url.replace(new RegExp("(\/([a-zA-Z0-9\-\.])*)$"), ""));
        }
    }
};
NavigationServiceService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
NavigationServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NavigationServiceService);



/***/ })

}]);
//# sourceMappingURL=coming-soon-coming-soon-module-es2015.js.map