(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bvn-bvn-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bvn/bvn/bvn.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bvn/bvn/bvn.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons>\n      <ion-button (click)=\"goBack()\">\n        <ion-icon md=\"arrow-back\" ios=\"arrow-back-outline\" ></ion-icon>\n      </ion-button>\n      <ion-button></ion-button>\n    </ion-buttons>\n    <ion-title color=\"primary\">BVN</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <ion-item lines=\"none\">\n      <ion-input placeholder=\"BVN\" type=\"number\"></ion-input>\n    </ion-item>\n    <div class=\"ion-text-center\">\n      <ion-button mode=\"ios\">\n        Verify\n      </ion-button>      \n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/bvn/bvn-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/bvn/bvn-routing.module.ts ***!
  \*******************************************/
/*! exports provided: BvnPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BvnPageRoutingModule", function() { return BvnPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _bvn_bvn_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bvn/bvn.page */ "./src/app/bvn/bvn/bvn.page.ts");




const routes = [
    {
        path: '',
        component: _bvn_bvn_page__WEBPACK_IMPORTED_MODULE_3__["BvnPage"]
    }
];
let BvnPageRoutingModule = class BvnPageRoutingModule {
};
BvnPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BvnPageRoutingModule);



/***/ }),

/***/ "./src/app/bvn/bvn.module.ts":
/*!***********************************!*\
  !*** ./src/app/bvn/bvn.module.ts ***!
  \***********************************/
/*! exports provided: BvnPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BvnPageModule", function() { return BvnPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _bvn_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bvn-routing.module */ "./src/app/bvn/bvn-routing.module.ts");
/* harmony import */ var _bvn_bvn_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bvn/bvn.page */ "./src/app/bvn/bvn/bvn.page.ts");







let BvnPageModule = class BvnPageModule {
};
BvnPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bvn_routing_module__WEBPACK_IMPORTED_MODULE_5__["BvnPageRoutingModule"]
        ],
        declarations: [_bvn_bvn_page__WEBPACK_IMPORTED_MODULE_6__["BvnPage"]]
    })
], BvnPageModule);



/***/ }),

/***/ "./src/app/bvn/bvn/bvn.page.scss":
/*!***************************************!*\
  !*** ./src/app/bvn/bvn/bvn.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-input {\n  --placeholder-opacity: .9 !important;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 18px;\n  --placeholder-color: rgba(0, 54, 121, 0.6) !important;\n}\n\nion-item {\n  color: #003679;\n  border-radius: 6px;\n  --background: rgba(0, 54, 121, 0.1);\n  --min-height: 40px;\n  --background-hover: #ffffff;\n  margin: 10px 0px;\n}\n\nion-item ion-label {\n  --font-size: 12px !important;\n  line-height: 18px;\n  --font-weight: 500;\n  --color: rgba(0, 54, 121, 0.6);\n}\n\nion-button {\n  width: 241px;\n  min-height: 40px;\n  --border-radius: 6px !important;\n  margin-top: 20px !important;\n  color: #ffffff;\n}\n\n.container {\n  padding: 100px 35px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnZuL2J2bi9DOlxcVXNlcnNcXExlbm92b1xcZG9jdW1lbnRzXFx2c2NfbG9jYWxfZGV2XFxuYXRpdmUtbW9iaWxlLWFwcFxcemFwcHlcXGZyb250ZW5kL3NyY1xcYXBwXFxidm5cXGJ2blxcYnZuLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYnZuL2J2bi9idm4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usb0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscURBQUE7QUNBRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQ0NKOztBREVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURHQTtFQUNFLDhCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9idm4vYnZuL2J2bi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1pbnB1dCB7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogLjkgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2JhKDAsIDU0LCAxMjEsIDAuNikgIWltcG9ydGFudDtcbn1cbmlvbi1pdGVtIHtcbiAgY29sb3I6ICMwMDM2Nzk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDU0LCAxMjEsIDAuMSk7XG4gIC0tbWluLWhlaWdodDogNDBweDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmZmZmO1xuICBtYXJnaW46IDEwcHggMHB4O1xuXG4gIGlvbi1sYWJlbCB7XG4gICAgLS1mb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAtLWZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgLS1jb2xvcjogcmdiYSgwLCA1NCwgMTIxLCAwLjYpO1xuICB9XG59XG5pb24tYnV0dG9uIHtcbiAgd2lkdGg6IDI0MXB4O1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAxMDBweCAzNXB4IWltcG9ydGFudDtcbn1cblxuIiwiaW9uLWlucHV0IHtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAuOSAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiYSgwLCA1NCwgMTIxLCAwLjYpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgY29sb3I6ICMwMDM2Nzk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDU0LCAxMjEsIDAuMSk7XG4gIC0tbWluLWhlaWdodDogNDBweDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmZmZmO1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgLS1mb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tZm9udC13ZWlnaHQ6IDUwMDtcbiAgLS1jb2xvcjogcmdiYSgwLCA1NCwgMTIxLCAwLjYpO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgd2lkdGg6IDI0MXB4O1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTAwcHggMzVweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/bvn/bvn/bvn.page.ts":
/*!*************************************!*\
  !*** ./src/app/bvn/bvn/bvn.page.ts ***!
  \*************************************/
/*! exports provided: BvnPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BvnPage", function() { return BvnPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/navigation-service.service */ "./src/app/services/navigation-service.service.ts");




let BvnPage = class BvnPage {
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
BvnPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_3__["NavigationServiceService"] }
];
BvnPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bvn',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bvn.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bvn/bvn/bvn.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./bvn.page.scss */ "./src/app/bvn/bvn/bvn.page.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../assets/css/main.scss */ "./src/assets/css/main.scss")).default]
    })
], BvnPage);



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
//# sourceMappingURL=bvn-bvn-module-es2015.js.map