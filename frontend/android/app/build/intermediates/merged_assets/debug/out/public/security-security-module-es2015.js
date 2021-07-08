(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["security-security-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/security/security/security.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/security/security/security.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- security html-->\n<ion-toolbar mode=\"ios\">\n    <ion-buttons mode=\"ios\"  slot=\"start\">\n      <ion-icon class=\"icon back-arrow\"[routerLink]=\"['/walk-through']\" name=\"arrow-back-sharp\"></ion-icon>\n    </ion-buttons>\n    <ion-title>Profile</ion-title>\n</ion-toolbar>\n<ion-content>\n  <div class=\"container\">\n    <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"security\" mode=\"ios\">\n      <ion-segment-button value=\"personal\">\n        <ion-label>Personal</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"security\">\n        <ion-label>Security</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"features\">\n        <ion-label>Features</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div class=\"avatar-main text-center\">\n    <img src=\"../../assets//imgs/passport2.png\" alt=\"\">\n    <div class=\"text-primary caption\" (click)=\"navigatePage('change-photo')\">\n      <label>\n        Tap to change picture\n        <input type=\"file\" name=\"photo\" hidden>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"details\">\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"label\">Email</ion-col>\n        <ion-col class=\"text-right\">\n          peter@sample.com\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"label\">Phone number</ion-col>\n        <ion-col class=\"text-right\">\n          +2348012345678\n        </ion-col>\n      </ion-row>\n      <ion-row >\n        <ion-col>          \n          <h2>PASSWORD & PIN</h2>\n        </ion-col>\n      </ion-row>\n      <ion-row (click)=\"navigatePage('change-password')\">\n        <ion-col class=\"label\">Change Password</ion-col>\n        <ion-col class=\"text-right\" >\n          <img src=\"../../assets/icon/right_arrow_icon.svg\" alt=\"\">\n        </ion-col>\n      </ion-row>\n      <ion-row (click)=\"navigatePage('bvn')\">\n        <ion-col class=\"label\">Verify BVN</ion-col>\n        <ion-col class=\"text-right\" >\n          <img src=\"../../assets/icon/right_arrow_icon.svg\" alt=\"\">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/security/security-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/security/security-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SecurityPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityPageRoutingModule", function() { return SecurityPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _security_security_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./security/security.page */ "./src/app/security/security/security.page.ts");




const routes = [
    {
        path: '',
        component: _security_security_page__WEBPACK_IMPORTED_MODULE_3__["SecurityPage"]
    },
    {
        path: 'change-password',
        loadChildren: () => __webpack_require__.e(/*! import() | change-password-change-password-module */ "change-password-change-password-module").then(__webpack_require__.bind(null, /*! ./change-password/change-password.module */ "./src/app/security/change-password/change-password.module.ts")).then(m => m.ChangePasswordPageModule)
    }
];
let SecurityPageRoutingModule = class SecurityPageRoutingModule {
};
SecurityPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SecurityPageRoutingModule);



/***/ }),

/***/ "./src/app/security/security.module.ts":
/*!*********************************************!*\
  !*** ./src/app/security/security.module.ts ***!
  \*********************************************/
/*! exports provided: SecurityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityPageModule", function() { return SecurityPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _security_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./security-routing.module */ "./src/app/security/security-routing.module.ts");
/* harmony import */ var _security_security_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./security/security.page */ "./src/app/security/security/security.page.ts");







let SecurityPageModule = class SecurityPageModule {
};
SecurityPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _security_routing_module__WEBPACK_IMPORTED_MODULE_5__["SecurityPageRoutingModule"]
        ],
        declarations: [_security_security_page__WEBPACK_IMPORTED_MODULE_6__["SecurityPage"]]
    })
], SecurityPageModule);



/***/ }),

/***/ "./src/app/security/security/security.page.scss":
/*!******************************************************!*\
  !*** ./src/app/security/security/security.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*Security css*/\n.details {\n  height: 60vh;\n  padding-right: 0 !important;\n}\n.details h2 {\n  height: 12px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 12px;\n  color: rgba(42, 43, 42, 0.6);\n  padding: 0 !important;\n  margin: 0 !important;\n}\n.first_name {\n  text-transform: uppercase;\n}\n.avatar-main .caption {\n  height: 12px;\n  font-weight: normal;\n  font-size: 8px;\n  line-height: 12px;\n  color: rgba(0, 54, 121, 0.6);\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdXJpdHkvc2VjdXJpdHkvQzpcXFVzZXJzXFxMZW5vdm9cXGRvY3VtZW50c1xcdnNjX2xvY2FsX2RldlxcbmF0aXZlLW1vYmlsZS1hcHBcXHphcHB5XFxmcm9udGVuZC9zcmNcXGFwcFxcc2VjdXJpdHlcXHNlY3VyaXR5XFxzZWN1cml0eS5wYWdlLnNjc3MiLCJzcmMvYXBwL3NlY3VyaXR5L3NlY3VyaXR5L3NlY3VyaXR5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFBO0FBR0E7RUFDRSxZQUFBO0VBQ0EsMkJBQUE7QUNERjtBREdFO0VBRUUsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQ0ZKO0FES0E7RUFDRSx5QkFBQTtBQ0ZGO0FETUE7RUFFRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9zZWN1cml0eS9zZWN1cml0eS9zZWN1cml0eS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlNlY3VyaXR5IGNzcyovXG5cblxuLmRldGFpbHMge1xuICBoZWlnaHQ6IDYwdmg7XG4gIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcblxuICBoMiB7XG4gICAvLyB3aWR0aDogMTE4cHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICBjb2xvcjogcmdiYSg0MiwgNDMsIDQyLCAwLjYpO1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgfVxufVxuLmZpcnN0X25hbWUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5cbi5hdmF0YXItbWFpbiAuY2FwdGlvbiB7XG4gIC8vIHdpZHRoOiA4OXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiA4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICBjb2xvcjogcmdiYSgwLCA1NCwgMTIxLCAwLjYpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59IiwiLypTZWN1cml0eSBjc3MqL1xuLmRldGFpbHMge1xuICBoZWlnaHQ6IDYwdmg7XG4gIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cbi5kZXRhaWxzIGgyIHtcbiAgaGVpZ2h0OiAxMnB4O1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICBjb2xvcjogcmdiYSg0MiwgNDMsIDQyLCAwLjYpO1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4uZmlyc3RfbmFtZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5hdmF0YXItbWFpbiAuY2FwdGlvbiB7XG4gIGhlaWdodDogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiA4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICBjb2xvcjogcmdiYSgwLCA1NCwgMTIxLCAwLjYpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/security/security/security.page.ts":
/*!****************************************************!*\
  !*** ./src/app/security/security/security.page.ts ***!
  \****************************************************/
/*! exports provided: SecurityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityPage", function() { return SecurityPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let SecurityPage = class SecurityPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    segmentChanged(ev) {
        const page = ev.detail.value;
        if (page === 'personal') {
            this.router.navigate(['/user-dashboard/profile']);
        }
        else {
            this.router.navigate(['/user-dashboard/profile/' + page]);
        }
    }
    navigatePage(data) {
        this.router.navigate(['/user-dashboard/profile/security/' + data]);
    }
};
SecurityPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SecurityPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-security',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./security.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/security/security/security.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./security.page.scss */ "./src/app/security/security/security.page.scss")).default]
    })
], SecurityPage);



/***/ })

}]);
//# sourceMappingURL=security-security-module-es2015.js.map