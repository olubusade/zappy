(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup/signup.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup/signup.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"brand\">\n    <img src=\"assets/imgs/white-logo.png\" alt=\"white-logo\">\n  </div>\n  <div class=\"signup\">\n    <h4>Register</h4>\n    <form [formGroup]=\"signUpForm\" (ngSubmit)=\"signUp()\" novalidate>\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">First Name<span class=\"required\"><sup>*</sup></span></ion-label>\n        <ion-input formControlName=\"first_name\" type=\"text\"></ion-input>\n      </ion-item>\n      <span class=\"error ion-padding\" *ngIf=\"submitted && signUpFormCtrl.first_name.errors?.required\">\n        First Name is required.\n      </span>\n      <span class=\"error ion-padding\" *ngIf=\"submitted && signUpFormCtrl.first_name.errors?.minlength\">\n        Min 3 chars long.\n      </span>\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Last Name<span class=\"required\"><sup>*</sup></span></ion-label>\n        <ion-input formControlName=\"last_name\" type=\"text\"></ion-input>\n      </ion-item>\n      <span class=\"error ion-padding\" *ngIf=\"submitted && signUpFormCtrl.last_name.errors?.required\">\n        Last Name is required.\n      </span>\n      <span class=\"error ion-padding\" *ngIf=\"submitted && signUpFormCtrl.last_name.errors?.minlength\">\n        Min 3 chars long.\n      </span>\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Email</ion-label>\n        <ion-input formControlName=\"email\" type=\"email\" Placeholder=\"(Optional)\"></ion-input>\n      </ion-item>\n      <span class=\"error ion-padding\" *ngIf=\"submitted && signUpFormCtrl.email.errors?.pattern\">\n        Enter valid email.\n      </span>\n    <!--\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Mobile</ion-label>\n        <ion-input maxlength=\"13\" formControlName=\"mobile\" type=\"text\" required></ion-input>\n      </ion-item>\n      <span class=\"error ion-padding\" *ngIf=\"submitted && signUpFormCtrl.mobile.errors?.required\">\n        Mobile number is required.\n      </span>\n      <span class=\"error ion-padding\" *ngIf=\"submitted && signUpFormCtrl.mobile.errors?.pattern\">\n        Number values allowed.\n      </span>\n    -->\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Password<span class=\"required\"><sup>*</sup></span></ion-label>\n        <ion-input formControlName=\"password\" type=\"password\"></ion-input>\n      </ion-item>\n      <span class=\"error ion-padding\" *ngIf=\"submitted && signUpFormCtrl.password.errors?.required\">\n        Password is required.\n      </span>\n      <span class=\"error ion-padding\" *ngIf=\"submitted && signUpFormCtrl.password.errors?.minlength\">\n        Min 6 chars long.\n      </span>\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Confirm Password<span class=\"required\"><sup>*</sup></span></ion-label>\n        <ion-input formControlName=\"confirmpassword\" type=\"password\"></ion-input>\n      </ion-item>\n      <span class=\"error ion-padding\" *ngIf=\"submitted && signUpFormCtrl.confirmpassword.errors?.required\">\n        Confirm Password is required.\n      </span>\n      <span class=\"error ion-padding\" *ngIf=\"submitted && signUpFormCtrl.confirmpassword.errors?.minlength\">\n        Min 6 chars long.\n      </span>\n      <span class=\"error ion-padding\" *ngIf=\"submitted && signUpFormCtrl.confirmpassword.errors?.passwordMismatch\">\n        Password Mismatch\n      </span>\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Transaction Pin<span class=\"required\"><sup>*</sup></span></ion-label>\n        <ion-input ion-input \n                 inputmode=\"numeric\"\n                 formControlName=\"transaction_pin\"\n                 pattern= \"{{pinPattern}\"\n                 onKeyPress=\"if(this.value.length == 4) return false;\"\n                 type=\"number\" \n                 \n                 placeholder=\"Transaction Pin\"\n                 maxlength=\"4\">\n      </ion-input>\n      </ion-item>\n      <span class=\"error ion-padding\" *ngIf=\"submitted && signUpFormCtrl.transaction_pin.errors?.required\">\n        Transaction pin is required.\n      </span>\n      <br>\n      <button class=\"btn btn-primary text-white\" ion-button mode=\"ios\">\n        Register to continue\n      </button>\n    </form>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/core/utils/password.validator.ts":
/*!**************************************************!*\
  !*** ./src/app/core/utils/password.validator.ts ***!
  \**************************************************/
/*! exports provided: PasswordMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordMatch", function() { return PasswordMatch; });
function PasswordMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ passwordMismatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/signup/signup-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _signup_signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.page */ "./src/app/signup/signup/signup.page.ts");




const routes = [
    {
        path: '',
        component: _signup_signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    },
    {
        path: 'transaction-pin',
        loadChildren: () => __webpack_require__.e(/*! import() | transaction-pin-transaction-pin-module */ "transaction-pin-transaction-pin-module").then(__webpack_require__.bind(null, /*! ./transaction-pin/transaction-pin.module */ "./src/app/signup/transaction-pin/transaction-pin.module.ts")).then(m => m.TransactionPinPageModule)
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/signup/signup-routing.module.ts");
/* harmony import */ var _signup_signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.page */ "./src/app/signup/signup/signup.page.ts");







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]
        ],
        declarations: [_signup_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "./src/app/signup/signup/signup.page.scss":
/*!************************************************!*\
  !*** ./src/app/signup/signup/signup.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import 'https://fonts.google.com/specimen/Nunito?query=nuni';\nion-content {\n  --ion-background-color: linear-gradient(90deg, #9ACD32 0%, #056608 157.2%) !important;\n}\nion-item {\n  color: #9ACD32;\n  border-radius: 6px;\n  --background: #ffffff;\n  width: 311px;\n  --min-height: 40px;\n  --padding-left: 0;\n  --padding-right: 0;\n}\nion-input {\n  color: #808080;\n  width: 311px !important;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 18px;\n  --placeholder-color: #808080bd;\n}\nbutton {\n  width: 300px;\n  border-radius: 20px;\n  color: #ffffff !important;\n  min-height: 40px;\n  font-family: \"Poppins\";\n  font-style: normal !important;\n  font-weight: 500 !important;\n  font-size: 14px !important;\n  line-height: 20px;\n  background: #9ACD32;\n  margin: 10px 0px;\n  margin-top: 150px;\n}\nbutton ::-moz-placeholder {\n  color: #808080;\n  font-weight: 400 !important;\n  padding-left: 20px;\n}\nbutton ::-ms-input-placeholder {\n  color: #808080;\n  font-weight: 400 !important;\n  padding-left: 20px;\n}\nbutton ::placeholder {\n  color: #808080;\n  font-weight: 400 !important;\n  padding-left: 20px;\n}\n.signup {\n  border-radius: 20px;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.signup h4 {\n  text-transform: uppercase;\n  color: #ffffff;\n  letter-spacing: 4px;\n  font-weight: 600;\n  padding: 20px;\n  margin-top: 100px;\n}\n.signup form {\n  border-top-right-radius: 30px;\n  border-top-left-radius: 30px;\n  background-color: #ffffff;\n  width: 100%;\n  padding: 50px 20px;\n}\n.signup form input {\n  padding: 13px;\n  margin: 5px 0;\n  width: 299px;\n  border-radius: 6px;\n  border: none;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 18px;\n}\n.signup form input::-moz-placeholder {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400 !important;\n  padding-left: 20px;\n  font-size: 12px;\n  line-height: 18px;\n  color: #808080;\n}\n.signup form input::-ms-input-placeholder {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400 !important;\n  padding-left: 20px;\n  font-size: 12px;\n  line-height: 18px;\n  color: #808080;\n}\n.signup form input::placeholder {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400 !important;\n  padding-left: 20px;\n  font-size: 12px;\n  line-height: 18px;\n  color: #808080;\n}\n.signup form input:focus {\n  outline: solid #9ACD32 1px;\n  border-radius: 6px !important;\n  background: #ffffff;\n  outline: 0 !important;\n  border: solid 1px #9ACD32;\n}\n.btn {\n  margin: 2px;\n  border-radius: 20px;\n  min-height: 40px;\n  width: 241px;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 22px;\n}\n.btn-secondary {\n  background: #DDAB14;\n  border-radius: 20px;\n}\n.btn-primary {\n  background: linear-gradient(90deg, #9ACD32 0%, #056608 157.2%);\n  border-radius: 20px;\n}\n.btn-transparent {\n  background: transparent;\n}\n.text-primary {\n  color: #003679;\n}\n.text-white {\n  color: #ffffff;\n}\n.text-center {\n  text-align: center;\n}\n.brand {\n  position: absolute;\n  top: 10%;\n  left: 0;\n  right: 0;\n  transform: translateY(-10%);\n  text-align: center;\n  color: #ffffff;\n  font-size: 40px;\n  line-height: 48px;\n  font-family: \"Nunito\";\n}\n.brand img {\n  width: 50%;\n}\n.form {\n  background: #ffffff;\n  padding: 20px;\n}\n.error {\n  color: red;\n  font-size: 10px;\n}\nion-label {\n  font-size: 8px;\n}\n.required {\n  color: red;\n  font-size: 18px;\n}\n.my-alert {\n  background: 9ACD32;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC9DOlxcVXNlcnNcXExlbm92b1xcZG9jdW1lbnRzXFx2c2NfbG9jYWxfZGV2XFxuYXRpdmUtbW9iaWxlLWFwcFxcemFwcHlcXGZyb250ZW5kL3NyY1xcYXBwXFxzaWdudXBcXHNpZ251cFxcc2lnbnVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2lnbnVwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDZEQUFBO0FBRVI7RUFDRSxxRkFBQTtBQ0FGO0FER0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNDLFlBQUE7RUFDRCxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBRjtBREVBO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUNDRjtBRENBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNFRjtBREFFO0VBQ0UsY0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNFSjtBRExFO0VBQ0UsY0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNFSjtBRExFO0VBQ0UsY0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNFSjtBREVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUdBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQ0RGO0FESUU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDRko7QURNRTtFQUNFLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0pKO0FETUk7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFHQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNOTjtBRFFNO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDTlI7QURETTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ05SO0FERE07RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNOUjtBRFNNO0VBQ0UsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ1BSO0FEYUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFFQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNYRjtBRGNBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtBQ1hGO0FEY0E7RUFDRSw4REFBQTtFQUNBLG1CQUFBO0FDWEY7QURjQTtFQUNFLHVCQUFBO0FDWEY7QURjQTtFQUNFLGNBQUE7QUNYRjtBRGNBO0VBQ0UsY0FBQTtBQ1hGO0FEY0E7RUFDRSxrQkFBQTtBQ1hGO0FEY0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNYRjtBRGFFO0VBQ0UsVUFBQTtBQ1hKO0FEZUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7QUNaRjtBRGNBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUNYRjtBRGFBO0VBQ0UsY0FBQTtBQ1ZGO0FEWUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQ1RGO0FEV0E7RUFDRSxrQkFBQTtBQ1JGIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnaHR0cHM6Ly9mb250cy5nb29nbGUuY29tL3NwZWNpbWVuL051bml0bz9xdWVyeT1udW5pJztcblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM5QUNEMzIgMCUsICMwNTY2MDggMTU3LjIlKSAhaW1wb3J0YW50OyBcbn1cblxuaW9uLWl0ZW0ge1xuICBjb2xvcjogIzlBQ0QzMjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICB3aWR0aDogMzExcHg7XG4gIC0tbWluLWhlaWdodDogNDBweDtcbiAgLS1wYWRkaW5nLWxlZnQ6IDA7XG4gIC0tcGFkZGluZy1yaWdodDogMDtcbn1cbmlvbi1pbnB1dCB7XG4gIGNvbG9yOiAjODA4MDgwOyAgLy8wMDM2NzlcbiAgd2lkdGg6IDMxMXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzgwODA4MGJkOyAvL3JnYmEoMCwgNTQsIDEyMSwgMC42KVxufVxuYnV0dG9uIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50OyAvLyMgIDAwMzY3OVxuICBtaW4taGVpZ2h0OiA0MHB4O1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICM5QUNEMzI7ICAvLyBEREFCMTRcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgbWFyZ2luLXRvcDogMTUwcHg7XG5cbiAgOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM4MDgwODA7XG4gICAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgfVxufVxuXG4uc2lnbnVwIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvLyBwYWRkaW5nOiA0MHB4O1xuICAvLyB0b3A6IDUwJTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXG4gIGg0IHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6MTAwcHg7XG4gIH1cblxuICBcbiAgZm9ybSB7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDUwcHggMjBweDtcblxuICAgIGlucHV0IHtcbiAgICAgIHBhZGRpbmc6IDEzcHg7XG4gICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgd2lkdGg6IDI5OXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgLy9iYWNrZ3JvdW5kOiAjOUFDRDMyOy8vcmdiYSgwLCA1NCwgMTIxLCAwLjEpO1xuXG4gICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4OyAgICAgIFxuXG4gICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIGNvbG9yOiAjODA4MDgwOyAvL3JnYmEoMCwgNTQsIDEyMSwgMC42KTtcbiAgICAgIH1cblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IHNvbGlkICM5QUNEMzIgMXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjOUFDRDMyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uYnRuIHtcbiAgbWFyZ2luOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAyNDFweDtcblxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbi5idG4tc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZDogI0REQUIxNDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjOUFDRDMyIDAlLCAjMDU2NjA4IDE1Ny4yJSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5idG4tdHJhbnNwYXJlbnQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLnRleHQtcHJpbWFyeSB7XG4gIGNvbG9yOiAjMDAzNjc5O1xufVxuXG4udGV4dC13aGl0ZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5icmFuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvJztcblxuICBpbWcge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cblxuLmZvcm0ge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOjEwcHg7XG59XG5pb24tbGFiZWwge1xuICBmb250LXNpemU6OHB4O1xufVxuLnJlcXVpcmVkIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOjE4cHg7XG59XG4ubXktYWxlcnQge1xuICBiYWNrZ3JvdW5kOjlBQ0QzMjtcbn0iLCJAaW1wb3J0ICdodHRwczovL2ZvbnRzLmdvb2dsZS5jb20vc3BlY2ltZW4vTnVuaXRvP3F1ZXJ5PW51bmknO1xuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM5QUNEMzIgMCUsICMwNTY2MDggMTU3LjIlKSAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSB7XG4gIGNvbG9yOiAjOUFDRDMyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgd2lkdGg6IDMxMXB4O1xuICAtLW1pbi1oZWlnaHQ6IDQwcHg7XG4gIC0tcGFkZGluZy1sZWZ0OiAwO1xuICAtLXBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGNvbG9yOiAjODA4MDgwO1xuICB3aWR0aDogMzExcHggIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICM4MDgwODBiZDtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogIzlBQ0QzMjtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgbWFyZ2luLXRvcDogMTUwcHg7XG59XG5idXR0b24gOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLnNpZ251cCB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi5zaWdudXAgaDQge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG4uc2lnbnVwIGZvcm0ge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDUwcHggMjBweDtcbn1cbi5zaWdudXAgZm9ybSBpbnB1dCB7XG4gIHBhZGRpbmc6IDEzcHg7XG4gIG1hcmdpbjogNXB4IDA7XG4gIHdpZHRoOiAyOTlweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuLnNpZ251cCBmb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgY29sb3I6ICM4MDgwODA7XG59XG4uc2lnbnVwIGZvcm0gaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBzb2xpZCAjOUFDRDMyIDFweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIG91dGxpbmU6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzlBQ0QzMjtcbn1cblxuLmJ0biB7XG4gIG1hcmdpbjogMnB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMjQxcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG4uYnRuLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQ6ICNEREFCMTQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzlBQ0QzMiAwJSwgIzA1NjYwOCAxNTcuMiUpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uYnRuLXRyYW5zcGFyZW50IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi50ZXh0LXByaW1hcnkge1xuICBjb2xvcjogIzAwMzY3OTtcbn1cblxuLnRleHQtd2hpdGUge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnJhbmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIjtcbn1cbi5icmFuZCBpbWcge1xuICB3aWR0aDogNTAlO1xufVxuXG4uZm9ybSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiA4cHg7XG59XG5cbi5yZXF1aXJlZCB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLm15LWFsZXJ0IHtcbiAgYmFja2dyb3VuZDogOUFDRDMyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/signup/signup/signup.page.ts":
/*!**********************************************!*\
  !*** ./src/app/signup/signup/signup.page.ts ***!
  \**********************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/storage-service */ "./src/app/services/storage-service.ts");
/* harmony import */ var _core_config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../core/config/config */ "./src/app/core/config/config.ts");
/* harmony import */ var _core_utils_password_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../core/utils/password.validator */ "./src/app/core/utils/password.validator.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");









//import { RegisterServiceService } from '../../services/register-service.service'
let SignupPage = class SignupPage {
    constructor(userService, alertCtrl, storageservice, fb, route, router) {
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.storageservice = storageservice;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.pinPattern = _core_config_config__WEBPACK_IMPORTED_MODULE_6__["appConfig"].pattern.TRANSACTION_PIN;
        this.submitted = false;
        this.userRespData = {
            user_id: '',
            first_name: '',
            last_name: '',
            mobile_no: '',
            role_id: '',
            access_token: '',
            expiresIn: '',
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
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.mobile_no = params['m'];
        });
        this.signUpForm = this.fb.group({
            first_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            last_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            //  mobile: [this.mobile_no, [Validators.required, Validators.pattern('^[0-9]+$')]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')],
            confirmpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            transaction_pin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]]
        }, {
            validator: Object(_core_utils_password_validator__WEBPACK_IMPORTED_MODULE_7__["PasswordMatch"])('password', 'confirmpassword')
        });
    }
    signUp() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.submitted = true;
            if (this.signUpForm.invalid) {
                const alert = yield this.alertCtrl.create({
                    cssClass: 'my-alert',
                    header: 'Zappy',
                    message: `All fields are required`,
                    buttons: [
                        {
                            text: 'Okay',
                            role: 'yes',
                            cssClass: 'secondary',
                            handler: () => { }
                        }
                    ]
                });
                yield alert.present();
            }
            else if ((_a = this.signUpFormCtrl.confirmpassword.errors) === null || _a === void 0 ? void 0 : _a.passwordMismatch) {
                return;
            }
            else {
                this.registerUserData = this.signUpForm.value;
                this.registerUserData.transaction_pin = this.signUpForm.value['transaction_pin'].toString();
                // this.registerUserData.mobile_no = parseInt(this.mobile_no);
                this.registerUserData.mobile_no = this.mobile_no;
                this.registerUserData.role_id = _core_config_config__WEBPACK_IMPORTED_MODULE_6__["appConfig"].role_type.casual_user.id;
                console.log(this.registerUserData);
                //Are you sure you want to save this record?
                const alert = yield this.alertCtrl.create({
                    cssClass: 'my-alert',
                    header: 'Zappy',
                    message: 'Are you sure you want to save this record?',
                    buttons: [
                        {
                            text: 'Yes',
                            handler: () => {
                                //send data to backend
                                let data = this.mobile_no;
                                this.userService.registerNewUser(this.registerUserData).subscribe((resp) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    console.log(resp);
                                    if (resp.status == _core_config_config__WEBPACK_IMPORTED_MODULE_6__["appConfig"].statusCode.created) {
                                        const alert = yield this.alertCtrl.create({
                                            cssClass: 'my-alert',
                                            header: 'Zappy',
                                            message: resp.message,
                                            buttons: [
                                                {
                                                    text: 'Proceed to Dashboard',
                                                    role: 'yes',
                                                    cssClass: 'primary',
                                                    handler: () => {
                                                        //set the ffg into local storage user_id, mobile_no, first_name, last_name, access_token, role_id
                                                        this.userRespData.user_id = resp.data.id;
                                                        this.userRespData.mobile_no = resp.data.mobile_no;
                                                        this.userRespData.first_name = resp.data.first_name;
                                                        this.userRespData.last_name = resp.data.last_name;
                                                        this.userRespData.role_id = resp.data.role_id;
                                                        this.userRespData.access_token = resp.data.access_token;
                                                        localStorage.setItem(`setting:user_id`, this.userRespData.user_id);
                                                        localStorage.setItem(`setting:first_name`, this.userRespData.first_name);
                                                        localStorage.setItem(`setting:last_name`, this.userRespData.last_name);
                                                        localStorage.setItem(`setting:mobile_no`, this.userRespData.mobile_no);
                                                        localStorage.setItem(`setting:email`, this.userRespData.email);
                                                        localStorage.setItem('setting:role_id', this.userRespData.role_id);
                                                        localStorage.setItem('setting:access_token', this.userRespData.access_token);
                                                        localStorage.setItem('setting:wallet_amount', this.userRespData.wallet_amount);
                                                        localStorage.setItem('setting:points', this.userRespData.points);
                                                        localStorage.setItem(`setting:dob`, resp.data.dob);
                                                        localStorage.setItem(`setting:security_question`, resp.data.security_question);
                                                        localStorage.setItem(`setting:sq_answer`, resp.data.security_answer);
                                                        localStorage.setItem(`setting:nickname`, resp.data.nickname);
                                                        localStorage.setItem(`setting:gender`, resp.data.gender);
                                                        localStorage.setItem(`setting:address`, resp.data.address);
                                                        //route to user-dashboard
                                                        this.router.navigate(['/user-dashboard']);
                                                    }
                                                }
                                            ]
                                        });
                                        yield alert.present();
                                    }
                                    if (resp.status == _core_config_config__WEBPACK_IMPORTED_MODULE_6__["appConfig"].statusCode.conflict) {
                                        const alert = yield this.alertCtrl.create({
                                            cssClass: 'my-alert',
                                            header: 'Zappy',
                                            message: resp.message,
                                            buttons: [
                                                {
                                                    text: 'Login',
                                                    role: 'yes',
                                                    cssClass: 'secondary',
                                                    handler: () => {
                                                        this.router.navigate(['/login']);
                                                    }
                                                }, {
                                                    text: 'Cancel',
                                                    handler: () => { }
                                                }
                                            ]
                                        });
                                        yield alert.present();
                                    }
                                }));
                            }
                        },
                        {
                            text: 'Dismiss',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: () => { }
                        }
                    ]
                });
                yield alert.present();
            }
        });
    }
    get signUpFormCtrl() {
        return this.signUpForm.controls;
    }
};
SignupPage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup/signup.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup/signup.page.scss")).default]
    })
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=signup-signup-module-es2015.js.map