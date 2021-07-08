(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["referral-referral-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/referral/referral.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/referral/referral.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar mode=\"ios\">\r\n  <ion-buttons mode=\"ios\"  slot=\"start\">\r\n    <ion-icon class=\"icon back-arrow\"[routerLink]=\"['/user-dashboard']\" name=\"arrow-back-sharp\"></ion-icon>\r\n  </ion-buttons>\r\n  <ion-title>Referral</ion-title>\r\n</ion-toolbar>\r\n\r\n\r\n<ion-content>\r\n  \r\n    <ion-card>  \r\n      <ion-card-content>\r\n        <p class=\"text-center text-white\">\r\n          Get up to N50 on your next transaction by inviting your friends to use Zappy using your referral link below.\r\n        </p>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <div class=\"referral\">\r\n      <ion-item detail>\r\n        <ion-icon size=\"medium\" name=\"share-social\"></ion-icon>\r\n        <ion-label class=\"ion-label\">\r\n         Share Invitation Link\r\n        </ion-label>\r\n      </ion-item>  \r\n      <ion-item detail>\r\n        <ion-icon size=\"medium\" name=\"phone-portrait-outline\"></ion-icon>\r\n        <ion-label class=\"ion-label\">\r\n          Send to mobile number\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item detail (click)=\"copyReferralLink()\">\r\n        <ion-icon size=\"medium\" name=\"copy-outline\"></ion-icon>\r\n        <ion-label class=\"ion-label\">\r\n          Copy Invitation Link\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item detail href=\"https://www.ionicframework.com\">\r\n        <ion-icon size=\"medium\" name=\"people\"></ion-icon>\r\n        <ion-label class=\"ion-label\">\r\n          Send to phone contact\r\n        </ion-label>\r\n      </ion-item>\r\n      <!--\r\n      <div class=\"d-flex ref-link\">\r\n        <span class=\"text-primary\">https://adikpopay.com.ng/?ref=2394JE</span>\r\n        <span class=\"text-primary\">\r\n          <img src=\"../../assets/icon/copy_icon.svg\" alt=\"\">\r\n        </span>\r\n      </div>\r\n      <button class=\"btn btn-primary text-white\">\r\n        Share\r\n      </button>\r\n    -->\r\n    </div>\r\n  \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/referral/referral-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/referral/referral-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ReferralPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferralPageRoutingModule", function() { return ReferralPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _referral_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./referral.page */ "./src/app/referral/referral.page.ts");




const routes = [
    {
        path: '',
        component: _referral_page__WEBPACK_IMPORTED_MODULE_3__["ReferralPage"]
    }
];
let ReferralPageRoutingModule = class ReferralPageRoutingModule {
};
ReferralPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReferralPageRoutingModule);



/***/ }),

/***/ "./src/app/referral/referral.module.ts":
/*!*********************************************!*\
  !*** ./src/app/referral/referral.module.ts ***!
  \*********************************************/
/*! exports provided: ReferralPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferralPageModule", function() { return ReferralPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _referral_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./referral-routing.module */ "./src/app/referral/referral-routing.module.ts");
/* harmony import */ var _referral_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./referral.page */ "./src/app/referral/referral.page.ts");







let ReferralPageModule = class ReferralPageModule {
};
ReferralPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _referral_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReferralPageRoutingModule"]
        ],
        declarations: [_referral_page__WEBPACK_IMPORTED_MODULE_6__["ReferralPage"]]
    })
], ReferralPageModule);



/***/ }),

/***/ "./src/app/referral/referral.page.scss":
/*!*********************************************!*\
  !*** ./src/app/referral/referral.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: rgba(0, 0, 92, 0.02);\n}\n\n.referral {\n  padding: 0px 5px;\n}\n\nion-card {\n  width: auto;\n  height: 95px;\n  padding: 0;\n  margin: 0 0;\n  background: #9ACD32;\n}\n\n.ref-link {\n  width: 264px;\n  height: 30px;\n  font-size: 12px;\n  background: #9ACD32;\n  padding: 10px 20px;\n  align-items: center;\n  border-radius: 4px;\n  opacity: 0.5;\n  font-weight: 900;\n}\n\nbutton {\n  width: 264px !important;\n  height: 40px;\n  margin-top: 30px !important;\n}\n\nion-title {\n  font-size: 0.5vh;\n}\n\nion-icon {\n  margin-right: 5px;\n  color: #9ACD32;\n}\n\n.back-arrow {\n  padding-top: 9px;\n  text-align: left !important;\n  margin-left: -5px !important;\n  color: #424242;\n}\n\n.ion-label {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVmZXJyYWwvQzpcXFVzZXJzXFxMZW5vdm9cXGRvY3VtZW50c1xcdnNjX2xvY2FsX2RldlxcbmF0aXZlLW1vYmlsZS1hcHBcXHphcHB5XFxmcm9udGVuZC9zcmNcXGFwcFxccmVmZXJyYWxcXHJlZmVycmFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVmZXJyYWwvcmVmZXJyYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQUE7QUNDRjs7QURFQTtFQVFFLGdCQUFBO0FDTkY7O0FEVUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBRUEsbUJBQUE7QUNSRjs7QURXQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDUkY7O0FEWUE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQ1RGOztBRFlBO0VBQ0UsZ0JBQUE7QUNURjs7QURXQTtFQUVFLGlCQUFBO0VBQ0EsY0FBQTtBQ1RGOztBRFdBO0VBQ0UsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBQ1JGOztBRFVBO0VBQ0UsZUFBQTtBQ1BGIiwiZmlsZSI6InNyYy9hcHAvcmVmZXJyYWwvcmVmZXJyYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogcmdiYSgwLCAwLCA5MiwgMC4wMik7XHJcbn1cclxuXHJcbi5yZWZlcnJhbCB7XHJcblxyXG4gIC8vIGg2LHN0cm9uZyB7ICBcclxuICAvLyAgIG1hcmdpbjogMjBweCAyMHB4O1xyXG4gIC8vICAgcGFkZGluZzogMHB4IDQwcHg7ICBcclxuICAvLyB9XHJcblxyXG4gLy8gbWFyZ2luOiAyMHB4IDIwcHg7XHJcbiAgcGFkZGluZzogMHB4IDVweDtcclxuXHJcbiBcclxufVxyXG5pb24tY2FyZCB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiA5NXB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwIDA7XHJcbiAvLyBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZDojOUFDRDMyO1xyXG5cclxufVxyXG4ucmVmLWxpbmsge1xyXG4gIHdpZHRoOiAyNjRweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6IzlBQ0QzMjtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgb3BhY2l0eTogLjU7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuXHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgd2lkdGg6IDI2NHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICBmb250LXNpemU6MC41dmg7XHJcbn1cclxuaW9uLWljb24ge1xyXG4vLyAgaGVpZ2h0OiAyLjV2aDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBjb2xvcjojOUFDRDMyO1xyXG59XHJcbi5iYWNrLWFycm93IHtcclxuICBwYWRkaW5nLXRvcDo5cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiAtNXB4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICM0MjQyNDI7XHJcbn1cclxuLmlvbi1sYWJlbCB7XHJcbiAgZm9udC1zaXplOjEycHg7XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgwLCAwLCA5MiwgMC4wMik7XG59XG5cbi5yZWZlcnJhbCB7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogOTVweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDA7XG4gIGJhY2tncm91bmQ6ICM5QUNEMzI7XG59XG5cbi5yZWYtbGluayB7XG4gIHdpZHRoOiAyNjRweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJhY2tncm91bmQ6ICM5QUNEMzI7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvcGFjaXR5OiAwLjU7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiAyNjRweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAwLjV2aDtcbn1cblxuaW9uLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgY29sb3I6ICM5QUNEMzI7XG59XG5cbi5iYWNrLWFycm93IHtcbiAgcGFkZGluZy10b3A6IDlweDtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogLTVweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzQyNDI0Mjtcbn1cblxuLmlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/referral/referral.page.ts":
/*!*******************************************!*\
  !*** ./src/app/referral/referral.page.ts ***!
  \*******************************************/
/*! exports provided: ReferralPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferralPage", function() { return ReferralPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/__ivy_ngcc__/ngx/index.js");



let ReferralPage = class ReferralPage {
    constructor(clipboard) {
        this.clipboard = clipboard;
    }
    ngOnInit() {
    }
    copyReferralLink() {
        this.clipboard.copy(`I use Zappy to save money on airtime and more. Kindly signup with my link to get up to N250 free. https://zappy.com/casual5050`);
        this.clipboard.paste().then((resolve) => {
            alert(resolve);
        }, (reject) => {
            alert('Error: ' + reject);
        });
        this.clipboard.clear();
    }
};
ReferralPage.ctorParameters = () => [
    { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_2__["Clipboard"] }
];
ReferralPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-referral',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./referral.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/referral/referral.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./referral.page.scss */ "./src/app/referral/referral.page.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../assets/css/main.scss */ "./src/assets/css/main.scss")).default]
    })
], ReferralPage);



/***/ })

}]);
//# sourceMappingURL=referral-referral-module-es2015.js.map