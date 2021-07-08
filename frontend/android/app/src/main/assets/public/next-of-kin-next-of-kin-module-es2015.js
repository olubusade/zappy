(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["next-of-kin-next-of-kin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/next-of-kin/next-of-kin.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/next-of-kin/next-of-kin.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons mode=\"ios\">\n      <ion-button>\n      </ion-button>\n      <ion-button></ion-button>\n    </ion-buttons>\n    <ion-title >Next of Kin</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"signup-upper\">\n    <form action=\"#\">\n      <input type=\"text\" name=\"name\" id=\"name\" placeholder=\"Name of next of kin\" /> <br>\n      <input type=\"text\" name=\"relationship\" id=\"relationship\" placeholder=\"Relationship\" /> <br>\n      <input type=\"email\" name=\"email\" id=\"email\" placeholder=\"Email Address\" /> <br>\n      <input type=\"text\" name=\"phone_number\" id=\"phone_number\" placeholder=\"Phone number\" /> <br>\n      <input type=\"password\" name=\"password\" id=\"password\" placeholder=\"Enter your password\" /> <br>\n      <button class=\"btn btn-primary text-white\">\n        Update\n      </button>\n    </form>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/next-of-kin/next-of-kin-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/next-of-kin/next-of-kin-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: NextOfKinPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextOfKinPageRoutingModule", function() { return NextOfKinPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _next_of_kin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./next-of-kin.page */ "./src/app/next-of-kin/next-of-kin.page.ts");




const routes = [
    {
        path: '',
        component: _next_of_kin_page__WEBPACK_IMPORTED_MODULE_3__["NextOfKinPage"]
    }
];
let NextOfKinPageRoutingModule = class NextOfKinPageRoutingModule {
};
NextOfKinPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NextOfKinPageRoutingModule);



/***/ }),

/***/ "./src/app/next-of-kin/next-of-kin.module.ts":
/*!***************************************************!*\
  !*** ./src/app/next-of-kin/next-of-kin.module.ts ***!
  \***************************************************/
/*! exports provided: NextOfKinPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextOfKinPageModule", function() { return NextOfKinPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _next_of_kin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./next-of-kin-routing.module */ "./src/app/next-of-kin/next-of-kin-routing.module.ts");
/* harmony import */ var _next_of_kin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./next-of-kin.page */ "./src/app/next-of-kin/next-of-kin.page.ts");







let NextOfKinPageModule = class NextOfKinPageModule {
};
NextOfKinPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _next_of_kin_routing_module__WEBPACK_IMPORTED_MODULE_5__["NextOfKinPageRoutingModule"]
        ],
        declarations: [_next_of_kin_page__WEBPACK_IMPORTED_MODULE_6__["NextOfKinPage"]]
    })
], NextOfKinPageModule);



/***/ }),

/***/ "./src/app/next-of-kin/next-of-kin.page.scss":
/*!***************************************************!*\
  !*** ./src/app/next-of-kin/next-of-kin.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".signup-upper {\n  margin-top: 30px;\n}\n\ninput:focus {\n  outline: none !important;\n  border: solid 1px #003679;\n  background: #ffffff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV4dC1vZi1raW4vQzpcXFVzZXJzXFxMZW5vdm9cXGRvY3VtZW50c1xcdnNjX2xvY2FsX2RldlxcbmF0aXZlLW1vYmlsZS1hcHBcXHphcHB5XFxmcm9udGVuZC9zcmNcXGFwcFxcbmV4dC1vZi1raW5cXG5leHQtb2Yta2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbmV4dC1vZi1raW4vbmV4dC1vZi1raW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRjs7QURHRTtFQUNFLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvbmV4dC1vZi1raW4vbmV4dC1vZi1raW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ251cC11cHBlciB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbmlucHV0IHtcbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICMwMDM2Nzk7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICB9XG59IiwiLnNpZ251cC11cHBlciB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IHNvbGlkIDFweCAjMDAzNjc5O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/next-of-kin/next-of-kin.page.ts":
/*!*************************************************!*\
  !*** ./src/app/next-of-kin/next-of-kin.page.ts ***!
  \*************************************************/
/*! exports provided: NextOfKinPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextOfKinPage", function() { return NextOfKinPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/navigation-service.service */ "./src/app/services/navigation-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let NextOfKinPage = class NextOfKinPage {
    constructor(router, navService) {
        this.router = router;
        this.navService = navService;
    }
    ngOnInit() {
    }
    goBack() {
        this.navService.navigateToPreviousPage();
    }
};
NextOfKinPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_2__["NavigationServiceService"] }
];
NextOfKinPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-next-of-kin',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./next-of-kin.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/next-of-kin/next-of-kin.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./next-of-kin.page.scss */ "./src/app/next-of-kin/next-of-kin.page.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../assets/css/main.scss */ "./src/assets/css/main.scss")).default]
    })
], NextOfKinPage);



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
//# sourceMappingURL=next-of-kin-next-of-kin-module-es2015.js.map