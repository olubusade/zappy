(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cable-tv-cable-tv-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cable-tv/cable-tv/cable-tv.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cable-tv/cable-tv/cable-tv.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"header-bg\">\n  <ion-toolbar mode=\"ios\" color=\"none\" class=\"text-white\">\n    <ion-buttons mode=\"ios\">\n      <ion-button (click)=\"goBack()\" slot=\"start\">\n        <ion-icon ios=\"arrow-back-outline\" md=\"arrow-back\"></ion-icon>\n      </ion-button>\n      <ion-button slot=\"end\">\n        <ion-icon name=\"alert-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title >Cable TV</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <div class=\"brand\">\n      <img src=\"../../assets/imgs/logo.png\" alt=\"adikpopay-logo\" />\n    </div>\n    <div>\n      <ion-item lines=\"none\">\n        <ion-label>Select Category</ion-label>\n        <ion-select okText=\"Okay\" cancelText=\"Dismiss\" required>\n          <ion-select-option value=\"dstv\">Dstv</ion-select-option>\n          <ion-select-option value=\"gotv\">Gotv</ion-select-option>\n          <ion-select-option value=\"start times\">Start Times</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-input placeholder=\"Product\" type=\"text\" required></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-label>Select Bouquet</ion-label>\n        <ion-select okText=\"Okay\" cancelText=\"Dismiss\" required>\n          <ion-select-option value=\"dstv\">Dstv</ion-select-option>\n          <ion-select-option value=\"gotv\">Gotv</ion-select-option>\n          <ion-select-option value=\"start times\">Start Times</ion-select-option>\n        </ion-select>\n      </ion-item>\n      \n      <ion-item lines=\"none\">\n        <ion-input placeholder=\"Amount\" type=\"text\" required></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-input placeholder=\"Smart Card number\" size=\"number\" type=\"text\" required></ion-input>\n      </ion-item> \n    </div>\n    <div class=\"ion-text-center\">\n      <ion-button color=\"primary\" (click)=\"subscribeToService()\" mode=\"ios\">\n        Continue\n      </ion-button>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/cable-tv/cable-tv-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/cable-tv/cable-tv-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CableTvPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CableTvPageRoutingModule", function() { return CableTvPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cable_tv_cable_tv_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cable-tv/cable-tv.page */ "./src/app/cable-tv/cable-tv/cable-tv.page.ts");




const routes = [
    {
        path: '',
        component: _cable_tv_cable_tv_page__WEBPACK_IMPORTED_MODULE_3__["CableTvPage"]
    }
];
let CableTvPageRoutingModule = class CableTvPageRoutingModule {
};
CableTvPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CableTvPageRoutingModule);



/***/ }),

/***/ "./src/app/cable-tv/cable-tv.module.ts":
/*!*********************************************!*\
  !*** ./src/app/cable-tv/cable-tv.module.ts ***!
  \*********************************************/
/*! exports provided: CableTvPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CableTvPageModule", function() { return CableTvPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cable_tv_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cable-tv-routing.module */ "./src/app/cable-tv/cable-tv-routing.module.ts");
/* harmony import */ var _cable_tv_cable_tv_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cable-tv/cable-tv.page */ "./src/app/cable-tv/cable-tv/cable-tv.page.ts");







let CableTvPageModule = class CableTvPageModule {
};
CableTvPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cable_tv_routing_module__WEBPACK_IMPORTED_MODULE_5__["CableTvPageRoutingModule"]
        ],
        declarations: [_cable_tv_cable_tv_page__WEBPACK_IMPORTED_MODULE_6__["CableTvPage"]]
    })
], CableTvPageModule);



/***/ }),

/***/ "./src/app/cable-tv/cable-tv/cable-tv.page.scss":
/*!******************************************************!*\
  !*** ./src/app/cable-tv/cable-tv/cable-tv.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import 'https://fonts.google.com/specimen/Nunito?query=nuni';\nion-header {\n  color: #ffffff;\n  font-weight: 400;\n}\n.signup {\n  height: 50vh;\n  margin: 10px 30px;\n}\n.brand img {\n  width: 100% !important;\n  padding: 30px;\n}\nion-title {\n  color: #ffffff !important;\n}\nion-toolbar ion-icon {\n  color: #ffffff !important;\n}\nion-button {\n  width: 100%;\n}\nion-item {\n  color: #003679;\n  --background: rgba(0, 54, 121, 0.1) !important;\n  border-radius: 6px;\n  --min-height: 40px;\n  margin: 10px !important;\n}\nion-input, ion-select {\n  --placeholder-opacity: .9 !important;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 18px;\n  --placeholder-color: rgba(0, 54, 121, 0.6) !important;\n}\nion-button {\n  width: 241px;\n  min-height: 40px;\n  --border-radius: 6px !important;\n  margin-top: 10px !important;\n}\nion-toolbar ion-buttons {\n  width: 100% !important;\n}\nion-toolbar ion-title {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500 !important;\n  font-size: 16px !important;\n  line-height: 24px !important;\n  letter-spacing: 0.05em !important;\n}\n.bg-white {\n  background: #ffffff !important;\n}\nion-label {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px !important;\n  line-height: 18px;\n  color: rgba(0, 54, 121, 0.6) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FibGUtdHYvY2FibGUtdHYvQzpcXFVzZXJzXFxMZW5vdm9cXGRvY3VtZW50c1xcdnNjX2xvY2FsX2RldlxcbmF0aXZlLW1vYmlsZS1hcHBcXHphcHB5XFxmcm9udGVuZC9zcmNcXGFwcFxcY2FibGUtdHZcXGNhYmxlLXR2XFxjYWJsZS10di5wYWdlLnNjc3MiLCJzcmMvYXBwL2NhYmxlLXR2L2NhYmxlLXR2L2NhYmxlLXR2LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw2REFBQTtBQUVSO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDQUY7QURJQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ0RGO0FEbURFO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0FDaERKO0FEb0RBO0VBQ0UseUJBQUE7QUNqREY7QURxREU7RUFDRSx5QkFBQTtBQ2xESjtBRHNEQTtFQUNFLFdBQUE7QUNuREY7QURzREE7RUFDRSxjQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNuREY7QURxREE7RUFDRSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxREFBQTtBQ2xERjtBRHFEQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsMkJBQUE7QUNsREY7QURxREU7RUFDRSxzQkFBQTtBQ2xESjtBRG9ERTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQ0FBQTtBQ2xESjtBRHNEQTtFQUNFLDhCQUFBO0FDbkRGO0FEcURBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO0FDbERGIiwiZmlsZSI6InNyYy9hcHAvY2FibGUtdHYvY2FibGUtdHYvY2FibGUtdHYucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnaHR0cHM6Ly9mb250cy5nb29nbGUuY29tL3NwZWNpbWVuL051bml0bz9xdWVyeT1udW5pJztcblxuaW9uLWhlYWRlciAge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuXG4uc2lnbnVwIHtcbiAgaGVpZ2h0OiA1MHZoO1xuICBtYXJnaW46IDEwcHggMzBweDtcblxuXG4gIFxuICAvLyBmb3JtIHtcbiAgLy8gICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcbiAgLy8gICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xuICAvLyAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIC8vICAgd2lkdGg6IDEwMCU7XG4gIC8vICAgcGFkZGluZzogNTBweCAyMHB4O1xuXG4gIC8vICAgaW5wdXQge1xuICAvLyAgICAgcGFkZGluZzogMTBweDtcbiAgLy8gICAgIG1hcmdpbjogNXB4IDA7XG4gIC8vICAgICB3aWR0aDogOTAlO1xuICAvLyAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAvLyAgICAgYm9yZGVyOiBub25lO1xuICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTdlOTtcblxuICAvLyAgICAgJjo6cGxhY2Vob2xkZXIge1xuICAvLyAgICAgICBjb2xvcjogIzM4NTY5QTtcbiAgLy8gICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAvLyAgICAgfVxuXG4gIC8vICAgICAmOmZvY3VzIHtcbiAgLy8gICAgICAgb3V0bGluZTogc29saWQgIzM4NTY5QSAxcHg7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyAgIHNlbGVjdCB7XG4gIC8vICAgICB3aWR0aDogOTAlO1xuICAvLyAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAvLyAgICAgbWFyZ2luOiA1cHggMDtcbiAgLy8gICAgIHBhZGRpbmc6IDEwcHg7XG4gIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlN2U5O1xuICAvLyAgICAgYm9yZGVyOiBub25lO1xuXG4gIC8vICAgICAmOjpwbGFjZWhvbGRlciB7XG4gIC8vICAgICAgIGNvbG9yOiAjMzg1NjlBO1xuICAvLyAgICAgfVxuICAvLyAgIH1cblxuICAvLyAgIGJ1dHRvbiB7XG4gIC8vICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAvLyAgIH1cbiAgLy8gfVxufVxuXG4uYnJhbmQge1xuICAvLyBtYXJnaW4tdG9wOiA0MHB4O1xuICAvLyBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMzBweDtcbiAgfVxufSBcblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgLy90ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tdG9vbGJhciB7XG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICB9XG59XG5cbmlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWl0ZW0ge1xuICBjb2xvcjogIzAwMzY3OTtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDU0LCAxMjEsIDAuMSkgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMTBweCAhaW1wb3J0YW50O1xufVxuaW9uLWlucHV0LCBpb24tc2VsZWN0IHtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAuOSAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYmEoMCwgNTQsIDEyMSwgMC42KSAhaW1wb3J0YW50O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgd2lkdGg6IDI0MXB4O1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5pb24tdG9vbGJhciB7XG4gIGlvbi1idXR0b25zIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG4gIGlvbi10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbSAhaW1wb3J0YW50O1xuXG4gIH1cbn1cbi5iZy13aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cbmlvbi1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBjb2xvcjogcmdiYSgwLCA1NCwgMTIxLCAwLjYpICFpbXBvcnRhbnQ7XG59IiwiQGltcG9ydCAnaHR0cHM6Ly9mb250cy5nb29nbGUuY29tL3NwZWNpbWVuL051bml0bz9xdWVyeT1udW5pJztcbmlvbi1oZWFkZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnNpZ251cCB7XG4gIGhlaWdodDogNTB2aDtcbiAgbWFyZ2luOiAxMHB4IDMwcHg7XG59XG5cbi5icmFuZCBpbWcge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9vbGJhciBpb24taWNvbiB7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWl0ZW0ge1xuICBjb2xvcjogIzAwMzY3OTtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDU0LCAxMjEsIDAuMSkgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMTBweCAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQsIGlvbi1zZWxlY3Qge1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IC45ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2JhKDAsIDU0LCAxMjEsIDAuNikgIWltcG9ydGFudDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAyNDFweDtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9vbGJhciBpb24tYnV0dG9ucyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5pb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbSAhaW1wb3J0YW50O1xufVxuXG4uYmctd2hpdGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiByZ2JhKDAsIDU0LCAxMjEsIDAuNikgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/cable-tv/cable-tv/cable-tv.page.ts":
/*!****************************************************!*\
  !*** ./src/app/cable-tv/cable-tv/cable-tv.page.ts ***!
  \****************************************************/
/*! exports provided: CableTvPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CableTvPage", function() { return CableTvPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/navigation-service.service */ "./src/app/services/navigation-service.service.ts");




let CableTvPage = class CableTvPage {
    constructor(router, navService) {
        this.router = router;
        this.navService = navService;
    }
    ngOnInit() {
    }
    subscribeToService() {
        this.router.navigate(['/user-dashboard/wallet/confirm-payment/']);
    }
    goBack() {
        this.navService.navigateToPreviousPage();
    }
};
CableTvPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_3__["NavigationServiceService"] }
];
CableTvPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cable-tv',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cable-tv.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cable-tv/cable-tv/cable-tv.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cable-tv.page.scss */ "./src/app/cable-tv/cable-tv/cable-tv.page.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../assets/css/main.scss */ "./src/assets/css/main.scss")).default]
    })
], CableTvPage);



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
//# sourceMappingURL=cable-tv-cable-tv-module-es2015.js.map