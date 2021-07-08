(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newlogin-newlogin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/newlogin/newlogin/newlogin.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/newlogin/newlogin/newlogin.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <ion-content>\n    <div class=\"brand\">\n      <img src=\"../../assets/imgs/white-logo.png\" alt=\"zappy-logo\">\n    </div>\n    <div class=\"signup\">\n      <h6 style=\"color: #f5deb3;\">Enter OTP sent to 0834567890</h6>\n      <ion-item lines=\"none\">\n        <ion-input type=\"tel\" placeholder=\"OTP\"></ion-input>\n      </ion-item>\n      <button ion-button mode=\"ios\" (click)=\"login('login')\">\n        Continue\n      </button>\n      <p class=\"ion-text-white\" (click)=\"signup()\">\n        No, this is not my number\n      </p>\n    </div>\n  </ion-content>\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/newlogin/newlogin-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/newlogin/newlogin-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: NewloginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewloginPageRoutingModule", function() { return NewloginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _newlogin_newlogin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newlogin/newlogin.page */ "./src/app/newlogin/newlogin/newlogin.page.ts");




const routes = [
    {
        path: '',
        component: _newlogin_newlogin_page__WEBPACK_IMPORTED_MODULE_3__["NewloginPage"]
    }
];
let NewloginPageRoutingModule = class NewloginPageRoutingModule {
};
NewloginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewloginPageRoutingModule);



/***/ }),

/***/ "./src/app/newlogin/newlogin.module.ts":
/*!*********************************************!*\
  !*** ./src/app/newlogin/newlogin.module.ts ***!
  \*********************************************/
/*! exports provided: NewloginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewloginPageModule", function() { return NewloginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _newlogin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newlogin-routing.module */ "./src/app/newlogin/newlogin-routing.module.ts");
/* harmony import */ var _newlogin_newlogin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newlogin/newlogin.page */ "./src/app/newlogin/newlogin/newlogin.page.ts");







let NewloginPageModule = class NewloginPageModule {
};
NewloginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _newlogin_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewloginPageRoutingModule"]
        ],
        declarations: [_newlogin_newlogin_page__WEBPACK_IMPORTED_MODULE_6__["NewloginPage"]]
    })
], NewloginPageModule);



/***/ }),

/***/ "./src/app/newlogin/newlogin/newlogin.page.scss":
/*!******************************************************!*\
  !*** ./src/app/newlogin/newlogin/newlogin.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: linear-gradient(90deg, #9ACD32 0%, #056608 157.2%) !important;\n}\n\n.signup {\n  display: flex;\n  flex-direction: column;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 50vh;\n  margin-top: 150px;\n}\n\nion-item {\n  color: #9ACD32;\n  border-radius: 6px;\n  --background: #ffffff;\n  width: 311px;\n  --min-height: 40px;\n  --padding-left: 0;\n  --padding-right: 0;\n}\n\nion-input {\n  color: #9ACD32;\n  width: 311px !important;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n  --placeholder-color: rgba(0, 54, 121, 0.6);\n}\n\nbutton {\n  width: 240px;\n  border-radius: 6px;\n  color: #9ACD32 !important;\n  min-height: 40px;\n  font-family: \"Poppins\";\n  font-style: normal !important;\n  font-weight: 500 !important;\n  font-size: 14px !important;\n  line-height: 18px;\n  background: #DDAB14;\n  margin: 20px 0px;\n}\n\nbutton ::-moz-placeholder {\n  color: rgba(0, 54, 121, 0.6);\n}\n\nbutton ::-ms-input-placeholder {\n  color: rgba(0, 54, 121, 0.6);\n}\n\nbutton ::placeholder {\n  color: rgba(0, 54, 121, 0.6);\n}\n\n.brand {\n  text-align: center;\n  padding-top: 40px;\n}\n\n.brand img {\n  width: 40% !important;\n}\n\np {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 10px !important;\n  line-height: 14px;\n  color: #FFFFFF !important;\n  margin-top: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3bG9naW4vbmV3bG9naW4vQzpcXFVzZXJzXFxMZW5vdm9cXGRvY3VtZW50c1xcdnNjX2xvY2FsX2RldlxcbmF0aXZlLW1vYmlsZS1hcHBcXHphcHB5XFxmcm9udGVuZC9zcmNcXGFwcFxcbmV3bG9naW5cXG5ld2xvZ2luXFxuZXdsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL25ld2xvZ2luL25ld2xvZ2luL25ld2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFGQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNDLFlBQUE7RUFDRCxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDRTtFQUNFLDRCQUFBO0FDQ0o7O0FERkU7RUFDRSw0QkFBQTtBQ0NKOztBREZFO0VBQ0UsNEJBQUE7QUNDSjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURDRTtFQUNFLHFCQUFBO0FDQ0o7O0FER0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFFQSxpQkFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvbmV3bG9naW4vbmV3bG9naW4vbmV3bG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM5QUNEMzIgMCUsICMwNTY2MDggMTU3LjIlKSAhaW1wb3J0YW50OyBcbn1cblxuLnNpZ251cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1MHZoO1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICBjb2xvcjogIzlBQ0QzMjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICB3aWR0aDogMzExcHg7XG4gIC0tbWluLWhlaWdodDogNDBweDtcbiAgLS1wYWRkaW5nLWxlZnQ6IDA7XG4gIC0tcGFkZGluZy1yaWdodDogMDtcbn1cblxuaW9uLWlucHV0IHtcbiAgY29sb3I6ICM5QUNEMzI7XG4gIHdpZHRoOiAzMTFweCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYmEoMCwgNTQsIDEyMSwgMC42KTtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDI0MHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGNvbG9yOiAjOUFDRDMyICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgYmFja2dyb3VuZDogI0REQUIxNDtcbiAgbWFyZ2luOiAyMHB4IDBweDtcblxuICA6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogcmdiYSgwLCA1NCwgMTIxLCAwLjYpO1xuICB9XG59XG5cbi5icmFuZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIGltZyB7XG4gICAgd2lkdGg6IDQwJSAhaW1wb3J0YW50O1xuICB9XG59XG5cbnAge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTRweDsgIFxuICBjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xuXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufSIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjOUFDRDMyIDAlLCAjMDU2NjA4IDE1Ny4yJSkgIWltcG9ydGFudDtcbn1cblxuLnNpZ251cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1MHZoO1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICBjb2xvcjogIzlBQ0QzMjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHdpZHRoOiAzMTFweDtcbiAgLS1taW4taGVpZ2h0OiA0MHB4O1xuICAtLXBhZGRpbmctbGVmdDogMDtcbiAgLS1wYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG5pb24taW5wdXQge1xuICBjb2xvcjogIzlBQ0QzMjtcbiAgd2lkdGg6IDMxMXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2JhKDAsIDU0LCAxMjEsIDAuNik7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiAyNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjb2xvcjogIzlBQ0QzMiAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgYmFja2dyb3VuZDogI0REQUIxNDtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbn1cbmJ1dHRvbiA6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMCwgNTQsIDEyMSwgMC42KTtcbn1cblxuLmJyYW5kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cbi5icmFuZCBpbWcge1xuICB3aWR0aDogNDAlICFpbXBvcnRhbnQ7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/newlogin/newlogin/newlogin.page.ts":
/*!****************************************************!*\
  !*** ./src/app/newlogin/newlogin/newlogin.page.ts ***!
  \****************************************************/
/*! exports provided: NewloginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewloginPage", function() { return NewloginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let NewloginPage = class NewloginPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    login(data) {
        if (data === 'login') {
            this.router.navigate(['/user-dashboard2']);
        }
        else {
            this.router.navigate(['/register']);
        }
    }
    signup() {
        this.router.navigate(['/register']);
    }
};
NewloginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NewloginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-newlogin',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./newlogin.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/newlogin/newlogin/newlogin.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./newlogin.page.scss */ "./src/app/newlogin/newlogin/newlogin.page.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../assets/css/main.scss */ "./src/assets/css/main.scss")).default]
    })
], NewloginPage);



/***/ })

}]);
//# sourceMappingURL=newlogin-newlogin-module-es2015.js.map