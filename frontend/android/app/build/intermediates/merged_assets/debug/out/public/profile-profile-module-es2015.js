(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile/profile.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile/profile.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons mode=\"ios\"  slot=\"start\">\r\n      <ion-icon class=\"icon back-arrow\"[routerLink]=\"['/walk-through']\" name=\"arrow-back-sharp\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>Profile</ion-title>\r\n  </ion-toolbar>\r\n\r\n<ion-content>\r\n  <div class=\"container\">\r\n    <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"personal\" mode=\"ios\" value=\"personal\">\r\n      <ion-segment-button value=\"personal\">\r\n        <ion-label>Personal</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"security\">\r\n        <ion-label>Security</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"features\">\r\n        <ion-label>Features</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </div>\r\n\r\n  <div class=\"avatar-main text-center\">\r\n    <div class=\"text-primary caption\" style=\"padding-bottom:25px;\">\r\n      <label>\r\n      <ion-icon class= \"avatar\" size = \"\" name=\"person-circle\"></ion-icon>\r\n        <input type=\"file\" name=\"photo\" hidden>\r\n      </label>\r\n    </div>\r\n  </div>\r\n<div class=\"details\">\r\n  <!-- List of Text Items -->\r\n  <ion-list>\r\n    <ion-item>\r\n        <ion-label class=\"title\">Nickname</ion-label>\r\n        <ion-note>{{userData.nickname}}</ion-note>\r\n        <ion-icon slot=\"end\" (click)=\"updateUserData('nickname')\" name=\"create-outline\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item>\r\n        <ion-label class=\"title\">First name</ion-label>\r\n        <ion-note>{{userData.first_name}}</ion-note>\r\n        <!--\r\n        <ion-icon slot=\"end\" (click)=\"updateUserData('first_name')\" name=\"create-outline\"></ion-icon>\r\n        -->\r\n    </ion-item>\r\n    <ion-item>\r\n        <ion-label class=\"title\">Last name</ion-label>\r\n        <ion-note slot=\"end\">{{userData.last_name}}</ion-note>\r\n        <!--\r\n        <ion-icon slot=\"end\"  (click)=\"updateUserData('last_name')\" name=\"create-outline\"></ion-icon>\r\n        -->\r\n    </ion-item>\r\n    <ion-item>\r\n        <ion-label class=\"title\">Date of Birth</ion-label>\r\n        <!--<ion-note slot=\"end\">{{userData.dob}}</ion-note>-->\r\n        <ion-datetime value=\"{{userData.dob}}\" displayFormat=\"DD MMM, YYYY\" display-timezone=\"Africa/Lagos\"></ion-datetime>\r\n    </ion-item>\r\n    <ion-item>\r\n        <ion-label class=\"title\">Mobile</ion-label>\r\n        <ion-note slot=\"end\">{{userData.mobile_no}}</ion-note>\r\n        <!--\r\n            <ion-icon slot=\"end\" (click)=\"updateUserData('mobile_no')\" name=\"create-outline\"></ion-icon>\r\n        -->\r\n    </ion-item>\r\n    <ion-item>\r\n        <ion-label class=\"title\">Email Address</ion-label>\r\n        <ion-note slot=\"end\">{{userData.email}}</ion-note>\r\n<!--\r\n        <ion-icon slot=\"end\" (click)=\"updateUserData('email')\" name=\"create-outline\"></ion-icon>\r\n-->\r\n    </ion-item>\r\n    <ion-item>\r\n        <ion-label class=\"title\">Address</ion-label>\r\n        <ion-note slot=\"end\">{{userData.address}}</ion-note>\r\n        <ion-icon slot=\"end\" (click)=\"updateUserData('address')\" name=\"create-outline\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item>\r\n        <ion-label class=\"title\">Security Question (SQ)</ion-label>\r\n        <ion-note slot=\"end\">{{userData.security_question}}</ion-note>\r\n        <ion-icon slot=\"end\" (click)=\"updateUserData('security_question')\" name=\"create-outline\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item>\r\n        <ion-label class=\"title\">Answer to SQ</ion-label>\r\n        <ion-note slot=\"end\">{{userData.sq_answer}}</ion-note>\r\n        <ion-icon slot=\"end\" (click)=\"updateUserData('sq_answer')\" name=\"create-outline\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item>\r\n        <ion-label class=\"title\">Zappy Level</ion-label>\r\n        <ion-note [ngSwitch] = \"userData.role_id\" slot=\"end\">\r\n            <span *ngSwitchCase = \"1\">Casual User</span>\r\n            <span *ngSwitchCase = \"2\">Paypoint Agent</span>\r\n            <span *ngSwitchCase = \"3\">Custom Seller</span>\r\n            <span *ngSwitchCase = \"4\">API Seller</span>\r\n            <span *ngSwitchCase = \"5\">Super Admin</span>\r\n        </ion-note>\r\n        <ion-icon slot=\"end\" name=\"create-outline\"></ion-icon>\r\n    </ion-item>\r\n </ion-list>\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/profile/profile-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.page */ "./src/app/profile/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/profile/profile-routing.module.ts");
/* harmony import */ var _profile_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.page */ "./src/app/profile/profile/profile.page.ts");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/profile/profile/profile.page.scss":
/*!***************************************************!*\
  !*** ./src/app/profile/profile/profile.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".details {\n  padding-right: 0 !important;\n}\n.details h5 {\n  height: 12px;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 12px;\n  color: rgba(42, 43, 42, 0.6);\n  padding: 0px !important;\n  margin: 0px !important;\n}\n.first_name {\n  text-transform: uppercase;\n}\nion-input {\n  font-size: 10px;\n  line-height: 12px;\n  --placeholder-color: rgba(42, 43, 42, 0.6) !important;\n  --placeholder-font-size: 10px !important;\n  --placeholder-font-style: normal;\n  --placeholder-font-weight: 500;\n}\n.avatar-main .caption {\n  height: 12px;\n  font-weight: normal;\n  font-size: 8px;\n  line-height: 12px;\n  color: rgba(0, 54, 121, 0.6);\n  text-align: center;\n}\nbutton {\n  margin: 0 auto !important;\n}\n.back-arrow {\n  padding-top: 9px;\n  text-align: left !important;\n  margin-left: -5px !important;\n  color: #424242;\n}\n.title {\n  font-weight: 600;\n  font-size: 10px;\n}\nion-list {\n  margin-left: -50px;\n}\nion-item {\n  height: 7vh;\n}\nion-icon {\n  height: 2.5vh;\n  margin-right: -5px;\n  color: #9ACD32;\n}\nion-note {\n  font-size: 8px;\n  font-weight: 100;\n  margin-right: 0vh;\n}\nion-datetime {\n  font-size: 8px;\n  font-weight: 100;\n  margin-right: 0vh;\n}\n.avatar {\n  height: 10vh;\n  width: 10vh;\n}\nion-title {\n  font-size: 0.5vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlL0M6XFxVc2Vyc1xcTGVub3ZvXFxkb2N1bWVudHNcXHZzY19sb2NhbF9kZXZcXG5hdGl2ZS1tb2JpbGUtYXBwXFx6YXBweVxcZnJvbnRlbmQvc3JjXFxhcHBcXHByb2ZpbGVcXHByb2ZpbGVcXHByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSwyQkFBQTtBQ0FGO0FERUU7RUFFRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FDREo7QURJQTtFQUNFLHlCQUFBO0FDREY7QURJQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFEQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0FDREY7QURJQTtFQUVFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUNGRjtBREtBO0VBQ0UseUJBQUE7QUNGRjtBREtBO0VBQ0UsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBQ0ZGO0FES0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNGRjtBREtBO0VBQ0Usa0JBQUE7QUNGRjtBRE1BO0VBQ0UsV0FBQTtBQ0hGO0FETUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDSEY7QURNQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDSEY7QURLQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDRkY7QURLQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDRkY7QURJQTtFQUNFLGdCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlscyB7XG4gXG4gIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcblxuICBoNSB7XG4gICAgLy93aWR0aDogMTE4cHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICAgIGNvbG9yOiByZ2JhKDQyLCA0MywgNDIsIDAuNik7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgfVxufVxuLmZpcnN0X25hbWUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5pb24taW5wdXQge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2JhKDQyLCA0MywgNDIsIDAuNikgIWltcG9ydGFudDtcbiAgLS1wbGFjZWhvbGRlci1mb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgLS1wbGFjZWhvbGRlci1mb250LXN0eWxlOiBub3JtYWw7XG4gIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmF2YXRhci1tYWluIC5jYXB0aW9uIHtcbiAgLy8gd2lkdGg6IDg5cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDhweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIGNvbG9yOiByZ2JhKDAsIDU0LCAxMjEsIDAuNik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbn1cblxuLmJhY2stYXJyb3cge1xuICBwYWRkaW5nLXRvcDo5cHg7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IC01cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICM0MjQyNDI7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZToxMHB4O1xufVxuXG5pb24tbGlzdCB7XG4gIG1hcmdpbi1sZWZ0Oi01MHB4O1xuICAvL2hlaWdodDogMXB4O1xuICBcbn1cbmlvbi1pdGVtIHtcbiAgaGVpZ2h0OiA3dmg7XG59XG5cbmlvbi1pY29uIHtcbiAgaGVpZ2h0OiAyLjV2aDtcbiAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xuICBjb2xvcjojOUFDRDMyO1xufVxuXG5pb24tbm90ZSB7XG4gIGZvbnQtc2l6ZTo4cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIG1hcmdpbi1yaWdodDogMHZoO1xufVxuaW9uLWRhdGV0aW1le1xuICBmb250LXNpemU6OHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBtYXJnaW4tcmlnaHQ6IDB2aDtcbn1cblxuLmF2YXRhciB7XG4gIGhlaWdodDoxMHZoO1xuICB3aWR0aDoxMHZoO1xufVxuaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOjAuNXZoO1xufVxuIiwiLmRldGFpbHMge1xuICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG4uZGV0YWlscyBoNSB7XG4gIGhlaWdodDogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIGNvbG9yOiByZ2JhKDQyLCA0MywgNDIsIDAuNik7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZmlyc3RfbmFtZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYmEoNDIsIDQzLCA0MiwgMC42KSAhaW1wb3J0YW50O1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNTAwO1xufVxuXG4uYXZhdGFyLW1haW4gLmNhcHRpb24ge1xuICBoZWlnaHQ6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbiAgY29sb3I6IHJnYmEoMCwgNTQsIDEyMSwgMC42KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xufVxuXG4uYmFjay1hcnJvdyB7XG4gIHBhZGRpbmctdG9wOiA5cHg7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IC01cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICM0MjQyNDI7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuaW9uLWxpc3Qge1xuICBtYXJnaW4tbGVmdDogLTUwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgaGVpZ2h0OiA3dmg7XG59XG5cbmlvbi1pY29uIHtcbiAgaGVpZ2h0OiAyLjV2aDtcbiAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xuICBjb2xvcjogIzlBQ0QzMjtcbn1cblxuaW9uLW5vdGUge1xuICBmb250LXNpemU6IDhweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbWFyZ2luLXJpZ2h0OiAwdmg7XG59XG5cbmlvbi1kYXRldGltZSB7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBtYXJnaW4tcmlnaHQ6IDB2aDtcbn1cblxuLmF2YXRhciB7XG4gIGhlaWdodDogMTB2aDtcbiAgd2lkdGg6IDEwdmg7XG59XG5cbmlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC41dmg7XG59Il19 */");

/***/ }),

/***/ "./src/app/profile/profile/profile.page.ts":
/*!*************************************************!*\
  !*** ./src/app/profile/profile/profile.page.ts ***!
  \*************************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../core/config/config */ "./src/app/core/config/config.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");






let ProfilePage = class ProfilePage {
    constructor(router, alertCtrl, toastCtrl, actionSheetCtrl, userservice) {
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.userservice = userservice;
        this.userData = {
            user_id: '',
            role_id: '',
            first_name: '',
            last_name: '',
            mobile_no: '',
            email: '',
            wallet_amount: '',
            points: '',
            dob: '',
            security_question: '',
            sq_answer: '',
            nickname: '',
            gender: '',
            address: ''
        };
        this.userData.user_id = localStorage.getItem(`setting:user_id`);
        this.userData.role_id = localStorage.getItem(`setting:role_id`);
        this.userData.first_name = localStorage.getItem(`setting:first_name`);
        this.userData.last_name = localStorage.getItem(`setting:last_name`);
        this.userData.mobile_no = localStorage.getItem(`setting:mobile_no`);
        this.userData.email = localStorage.getItem(`setting:email`);
        this.userData.wallet_amount = localStorage.getItem(`setting:wallet_amount`);
        this.userData.points = localStorage.getItem(`setting:points`);
        this.userData.dob = localStorage.getItem(`setting:dob`);
        this.userData.security_question = localStorage.getItem(`setting:security_question`);
        this.userData.sq_answer = localStorage.getItem(`setting:sq_answer`);
        this.userData.nickname = localStorage.getItem(`setting:nickname`);
        this.userData.gender = localStorage.getItem(`setting:gender`);
        this.userData.address = localStorage.getItem(`setting:address`);
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
        this.router.navigate(['/user-dashboard/profile/' + data]);
    }
    updateUserData(label) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(label);
            let updateData = {
                user_id: '',
                nickname: '',
                address: '',
                security_question: '',
                sq_answer: ''
            };
            if (label == "nickname") {
                const alert = yield this.alertCtrl.create({
                    cssClass: 'alert-zappy',
                    mode: 'ios',
                    header: 'Zappy',
                    inputs: [
                        {
                            name: 'nickname',
                        }
                    ],
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: () => {
                            }
                        }, {
                            text: 'Update',
                            handler: (alertData) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                updateData.user_id = parseInt(this.userData.user_id);
                                updateData.nickname = alertData.nickname;
                                this.userservice.updateUserProfile(updateData).subscribe((resp) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    if (resp.status == _core_config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].statusCode.ok) {
                                        this.updateToast('Nickname');
                                        localStorage.setItem(`setting:${label}`, alertData.nickname);
                                        if (alertData.nickname) {
                                            this.userData.nickname = alertData.nickname;
                                        }
                                    }
                                }));
                            })
                        }
                    ]
                });
                yield alert.present();
            }
            if (label == "address") {
                const alert = yield this.alertCtrl.create({
                    cssClass: 'alert-zappy',
                    mode: 'ios',
                    header: 'Zappy',
                    inputs: [
                        {
                            name: 'address',
                        }
                    ],
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: () => { }
                        }, {
                            text: 'Update',
                            handler: (alertData) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                updateData.user_id = parseInt(this.userData.user_id);
                                updateData.address = alertData.address;
                                this.userservice.updateUserProfile(updateData).subscribe((resp) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    if (resp.status == _core_config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].statusCode.ok) {
                                        this.updateToast('Address');
                                        localStorage.setItem(`setting:${label}`, alertData.address);
                                        if (alertData.address) {
                                            this.userData.address = alertData.address;
                                        }
                                    }
                                }));
                            })
                        }
                    ]
                });
                yield alert.present();
            }
            if (label == 'security_question') {
                let sq_1 = "What was your first pet's name";
                let sq_2 = "What's the first name of your oldest cousin";
                let sq_3 = "What's the first name of your mother";
                const actionSheet = yield this.actionSheetCtrl.create({
                    header: 'Select a security question',
                    buttons: [
                        {
                            text: `What was your first pet's name?`,
                            handler: () => {
                                updateData.user_id = parseInt(this.userData.user_id);
                                updateData.security_question = sq_1;
                                this.userservice.updateUserProfile(updateData).subscribe((resp) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    if (resp.status == _core_config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].statusCode.ok) {
                                        this.updateToast('Security Question');
                                        localStorage.setItem(`setting:${label}`, sq_1);
                                        this.userData.security_question = sq_1;
                                    }
                                }));
                            }
                        },
                        {
                            text: `What's the first name of your oldest cousin?`,
                            handler: () => {
                                updateData.user_id = parseInt(this.userData.user_id);
                                updateData.security_question = sq_2;
                                this.userservice.updateUserProfile(updateData).subscribe((resp) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    if (resp.status == _core_config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].statusCode.ok) {
                                        this.updateToast('Security Question');
                                        localStorage.setItem(`setting:${label}`, sq_2);
                                        this.userData.security_question = sq_2;
                                    }
                                }));
                            }
                        },
                        {
                            text: `What's the first name of your mother?`,
                            handler: () => {
                                updateData.user_id = parseInt(this.userData.user_id);
                                updateData.security_question = sq_3;
                                this.userservice.updateUserProfile(updateData).subscribe((resp) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    if (resp.status == _core_config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].statusCode.ok) {
                                        this.updateToast('Security Question');
                                        localStorage.setItem(`setting:${label}`, sq_3);
                                        this.userData.security_question = sq_3;
                                    }
                                }));
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
                /*
                const alert = await this.alertCtrl.create({
                  cssClass: 'alert-zappy',
                  mode:'ios',
                  header: 'Zappy',
                  inputs: [
                    {
                      name: 'security_question',
                      mode:'ios',
                      type: 'select'
                    }
                  ],
                  buttons: [
                    {
                      text: 'Cancel',
                      role: 'cancel',
                      cssClass: 'secondary',
                      handler: () => {
                      
                      }
                    }, {
                      text: 'Update',
                      handler: async (alertData) => {
                        const toast = await this.toastCtrl.create({
                          message: `${label} updated successfully.`,
                          duration: 2000
                        });
                        await toast.present();
                        localStorage.setItem(`setting:${label}`,alertData.security_question);
                        if (alertData.security_question){
                            this.userData.security_question = alertData.security_question;
                        }
                      }
                    }
                  ]
                });
                await alert.present();
                */
            }
            if (label == 'sq_answer') {
                const alert = yield this.alertCtrl.create({
                    cssClass: 'alert-zappy',
                    mode: 'ios',
                    header: 'Zappy',
                    inputs: [
                        {
                            name: 'sq_answer',
                        }
                    ],
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: () => { }
                        },
                        {
                            text: 'Update',
                            handler: (alertData) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                updateData.user_id = parseInt(this.userData.user_id);
                                updateData.sq_answer = alertData.sq_answer;
                                this.userservice.updateUserProfile(updateData).subscribe((resp) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    if (resp.status == _core_config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].statusCode.ok) {
                                        this.updateToast('Security Answer');
                                        localStorage.setItem(`setting:${label}`, alertData.sq_answer);
                                        if (alertData.sq_answer) {
                                            this.userData.sq_answer = alertData.sq_answer;
                                        }
                                    }
                                }));
                            })
                        }
                    ]
                });
                yield alert.present();
            }
        });
    }
    updateToast(inputData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: `${inputData} updated successfully.`,
                duration: 2000
            });
            yield toast.present();
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile/profile.page.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../assets/css/main.scss */ "./src/assets/css/main.scss")).default]
    })
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map