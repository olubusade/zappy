(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mobile-airtime-mobile-airtime-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile-airtime/mobile-airtime/mobile-airtime.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mobile-airtime/mobile-airtime/mobile-airtime.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n<ion-header class=\"header-bg\">\n  <ion-toolbar mode=\"ios\" color=\"none\" class=\"text-white\">\n    <ion-buttons mode=\"ios\">\n      <ion-button (click)=\"goBack()\" slot=\"start\">\n        <ion-icon ios=\"arrow-back-outline\" md=\"arrow-back\"></ion-icon>\n      </ion-button>\n      <ion-button slot=\"end\">\n        <ion-icon name=\"alert-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title >Mobile Airtime</ion-title>\n  </ion-toolbar>\n</ion-header>\n-->\n<ion-toolbar mode=\"ios\">\n    <ion-buttons mode=\"ios\"  slot=\"start\">\n      <ion-icon class=\"icon back-arrow\"[routerLink]=\"['/walk-through']\" name=\"arrow-back-sharp\"></ion-icon>\n    </ion-buttons>\n    <ion-title>Mobile Airtime</ion-title>\n  </ion-toolbar>\n\n<ion-content>\n  <div class=\"container\">\n    <div class=\"brand\">\n      <img src=\"../../assets/imgs/logo.png\" alt=\"adikpopay-logo\" />\n    </div>\n    <div>\n      <ion-item lines=\"none\">\n        <ion-label *ngIf=\"!isSelected\">Select a Network</ion-label>\n        <ion-select okText=\"Okay\" cancelText=\"Dismiss\" required (ionChange)=\"onChnage()\">\n          <ion-select-option value=\"GLO\">GLO</ion-select-option>\n          <ion-select-option value=\"MTN\">MTN</ion-select-option>\n          <ion-select-option value=\"9MOBILE\">9MOBILE</ion-select-option>\n          <ion-select-option value=\"AIRTEL\">AIRTEL</ion-select-option>\n        </ion-select>\n      </ion-item>\n      \n      <ion-item lines=\"none\">\n        <ion-input placeholder=\"Mobile Number\" type=\"tel\" required></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-input placeholder=\"Amount\" type=\"number\" required></ion-input>\n      </ion-item>\n\n    </div>\n    <div class=\"ion-text-center\">      \n      <ion-button color=\"primary\" (click)=\"subscribeToService()\" mode='ios'>\n        Continue\n      </ion-button>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/mobile-airtime/mobile-airtime-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/mobile-airtime/mobile-airtime-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: MobileAirtimePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileAirtimePageRoutingModule", function() { return MobileAirtimePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mobile_airtime_mobile_airtime_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile-airtime/mobile-airtime.page */ "./src/app/mobile-airtime/mobile-airtime/mobile-airtime.page.ts");




const routes = [
    {
        path: '',
        component: _mobile_airtime_mobile_airtime_page__WEBPACK_IMPORTED_MODULE_3__["MobileAirtimePage"]
    }
];
let MobileAirtimePageRoutingModule = class MobileAirtimePageRoutingModule {
};
MobileAirtimePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MobileAirtimePageRoutingModule);



/***/ }),

/***/ "./src/app/mobile-airtime/mobile-airtime.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/mobile-airtime/mobile-airtime.module.ts ***!
  \*********************************************************/
/*! exports provided: MobileAirtimePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileAirtimePageModule", function() { return MobileAirtimePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _mobile_airtime_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mobile-airtime-routing.module */ "./src/app/mobile-airtime/mobile-airtime-routing.module.ts");
/* harmony import */ var _mobile_airtime_mobile_airtime_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mobile-airtime/mobile-airtime.page */ "./src/app/mobile-airtime/mobile-airtime/mobile-airtime.page.ts");







let MobileAirtimePageModule = class MobileAirtimePageModule {
};
MobileAirtimePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mobile_airtime_routing_module__WEBPACK_IMPORTED_MODULE_5__["MobileAirtimePageRoutingModule"]
        ],
        declarations: [_mobile_airtime_mobile_airtime_page__WEBPACK_IMPORTED_MODULE_6__["MobileAirtimePage"]]
    })
], MobileAirtimePageModule);



/***/ }),

/***/ "./src/app/mobile-airtime/mobile-airtime/mobile-airtime.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/mobile-airtime/mobile-airtime/mobile-airtime.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".signup {\n  height: 50vh;\n  margin: 10px 30px;\n}\n\n.brand img {\n  width: 100% !important;\n  padding: 30px;\n}\n\nion-title {\n  color: #ffffff !important;\n}\n\nion-toolbar ion-icon {\n  color: #ffffff !important;\n}\n\nion-button {\n  width: 100%;\n}\n\nion-item {\n  color: #003679;\n  --background: rgba(0, 54, 121, 0.1) !important;\n  border-radius: 6px;\n  --min-height: 40px;\n  margin: 10px !important;\n}\n\nion-input, ion-select {\n  --placeholder-opacity: .9 !important;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 18px;\n  --placeholder-color: rgba(0, 54, 121, 0.6) !important;\n  --select-icon: 100px !important;\n}\n\nion-button {\n  width: 241px;\n  min-height: 40px;\n  --border-radius: 6px !important;\n  margin-top: 10px !important;\n}\n\n.bg-white {\n  background: #ffffff !important;\n}\n\nion-toolbar ion-buttons {\n  width: 100% !important;\n}\n\nion-toolbar ion-title {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500 !important;\n  font-size: 16px !important;\n  line-height: 24px !important;\n  letter-spacing: 0.05em !important;\n}\n\nion-label {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px !important;\n  line-height: 18px;\n  color: rgba(0, 54, 121, 0.6) !important;\n  width: 299px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9iaWxlLWFpcnRpbWUvbW9iaWxlLWFpcnRpbWUvQzpcXFVzZXJzXFxMZW5vdm9cXGRvY3VtZW50c1xcdnNjX2xvY2FsX2RldlxcbmF0aXZlLW1vYmlsZS1hcHBcXHphcHB5XFxmcm9udGVuZC9zcmNcXGFwcFxcbW9iaWxlLWFpcnRpbWVcXG1vYmlsZS1haXJ0aW1lXFxtb2JpbGUtYWlydGltZS5wYWdlLnNjc3MiLCJzcmMvYXBwL21vYmlsZS1haXJ0aW1lL21vYmlsZS1haXJ0aW1lL21vYmlsZS1haXJ0aW1lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ05GOztBRFVFO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0FDUEo7O0FEV0E7RUFDRSx5QkFBQTtBQ1JGOztBRFlFO0VBQ0UseUJBQUE7QUNUSjs7QURhQTtFQUNFLFdBQUE7QUNWRjs7QURhQTtFQUNFLGNBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ1ZGOztBRFlBO0VBQ0Usb0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscURBQUE7RUFDQSwrQkFBQTtBQ1RGOztBRFlBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSwyQkFBQTtBQ1RGOztBRFlBO0VBQ0UsOEJBQUE7QUNURjs7QURhRTtFQUNFLHNCQUFBO0FDVko7O0FEWUU7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUNBQUE7QUNWSjs7QURjQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1Q0FBQTtFQUNBLHVCQUFBO0FDWEYiLCJmaWxlIjoic3JjL2FwcC9tb2JpbGUtYWlydGltZS9tb2JpbGUtYWlydGltZS9tb2JpbGUtYWlydGltZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGlvbi1oZWFkZXIgIHtcbi8vICAgY29sb3I6ICNmZmZmZmY7XG4vLyAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4vLyB9XG5cblxuLnNpZ251cCB7XG4gIGhlaWdodDogNTB2aDtcbiAgbWFyZ2luOiAxMHB4IDMwcHg7XG59XG5cbi5icmFuZCB7XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICB9XG59IFxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAvL3RleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi10b29sYmFyIHtcbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24taXRlbSB7XG4gIGNvbG9yOiAjMDAzNjc5OyBcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDU0LCAxMjEsIDAuMSkgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMTBweCAhaW1wb3J0YW50O1xufVxuaW9uLWlucHV0LCBpb24tc2VsZWN0e1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IC45ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiYSgwLCA1NCwgMTIxLCAwLjYpICFpbXBvcnRhbnQ7XG4gIC0tc2VsZWN0LWljb246IDEwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1idXR0b24ge1xuICB3aWR0aDogMjQxcHg7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmJnLXdoaXRlIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIGlvbi1idXR0b25zIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG4gIGlvbi10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbSAhaW1wb3J0YW50O1xuXG4gIH1cbn1cbmlvbi1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBjb2xvcjogcmdiYSgwLCA1NCwgMTIxLCAwLjYpICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyOTlweCAhaW1wb3J0YW50O1xufVxuIiwiLnNpZ251cCB7XG4gIGhlaWdodDogNTB2aDtcbiAgbWFyZ2luOiAxMHB4IDMwcHg7XG59XG5cbi5icmFuZCBpbWcge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9vbGJhciBpb24taWNvbiB7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWl0ZW0ge1xuICBjb2xvcjogIzAwMzY3OTtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDU0LCAxMjEsIDAuMSkgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMTBweCAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQsIGlvbi1zZWxlY3Qge1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IC45ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2JhKDAsIDU0LCAxMjEsIDAuNikgIWltcG9ydGFudDtcbiAgLS1zZWxlY3QtaWNvbjogMTAwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAyNDFweDtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uYmctd2hpdGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b29sYmFyIGlvbi1idXR0b25zIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbmlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMjRweCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiByZ2JhKDAsIDU0LCAxMjEsIDAuNikgIWltcG9ydGFudDtcbiAgd2lkdGg6IDI5OXB4ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/mobile-airtime/mobile-airtime/mobile-airtime.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/mobile-airtime/mobile-airtime/mobile-airtime.page.ts ***!
  \**********************************************************************/
/*! exports provided: MobileAirtimePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileAirtimePage", function() { return MobileAirtimePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/navigation-service.service */ "./src/app/services/navigation-service.service.ts");




let MobileAirtimePage = class MobileAirtimePage {
    constructor(router, navService) {
        this.router = router;
        this.navService = navService;
        this.isSelected = false;
    }
    goBack() {
        this.navService.navigateToPreviousPage();
    }
    ngOnInit() {
    }
    subscribeToService() {
        this.router.navigate(['/user-dashboard/wallet/confirm-payment/']);
    }
    onChnage() {
        this.isSelected = true;
    }
};
MobileAirtimePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_3__["NavigationServiceService"] }
];
MobileAirtimePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mobile-airtime',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mobile-airtime.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile-airtime/mobile-airtime/mobile-airtime.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mobile-airtime.page.scss */ "./src/app/mobile-airtime/mobile-airtime/mobile-airtime.page.scss")).default]
    })
], MobileAirtimePage);



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
//# sourceMappingURL=mobile-airtime-mobile-airtime-module-es2015.js.map