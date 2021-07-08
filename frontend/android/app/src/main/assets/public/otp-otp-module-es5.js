function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["otp-otp-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/otp/otp/otp.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/otp/otp/otp.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOtpOtpOtpPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons mode=\"ios\"  slot=\"start\">\n      <ion-icon class=\"icon\" [routerLink]=\"['/register']\" name=\"arrow-back-sharp\"></ion-icon>\n    </ion-buttons>\n    <ion-title >OTP</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <div class=\"text-center\">   \n    <p style=\"font-size:14px; margin-top:30px\">We have sent an OTP to <strong>{{stored_mobile_no}}</strong></p>\n  </div>\n\n  <h4 class=\"title text-center\">Enter your OTP here</h4>\n  <div class=\"otp\">\n    <form action=\"#\">\n      <div class=\"otp-input\">\n        <input ion-input inputmode=\"numeric\" onKeyPress=\"if(this.value.length == 1) return false;\" [(ngModel)] = \"otpForm.digit1\" type=\"number\" pattern=\"\\d*\" name=\"otp1\" id=\"otp1\" maxlength=\"1\"/>\n        <input ion-input inputmode=\"numeric\" onKeyPress=\"if(this.value.length == 1) return false;\" [(ngModel)] = \"otpForm.digit2\" type=\"text\" pattern=\"\\d*\"  name=\"otp2\" id=\"otp2\" maxlength=\"1\"/>\n        <input ion-input inputmode=\"numeric\" onKeyPress=\"if(this.value.length == 1) return false;\" [(ngModel)] = \"otpForm.digit3\" type=\"text\" pattern=\"\\d*\" name=\"otp3\" id=\"otp3\" maxlength=\"1\"/>\n        <input ion-input inputmode=\"numeric\" onKeyPress=\"if(this.value.length == 1) return false;\" [(ngModel)] = \"otpForm.digit4\" type=\"text\" pattern=\"\\d*\" name=\"otp4\" id=\"otp4\" maxlength=\"1\"/>\n      </div>\n      <h6 class=\"text-center text-primary py-4\">\n        Automatically send OTP\n      </h6>\n      <div class=\"text-center \">\n        <button mode = \"ios\" class=\"btn btn-primary text-white\" (click)=\"submitOTP()\">Submit</button>\n      </div>\n    </form>\n  </div>\n  <div class=\"divider mt-2\"></div>\n    <div class=\"d-flex mr-2 ml-2 p-2\">\n      <h6 class=\"text-center text-primary\" style=\"font-weight:600;\">Didn't get OTP?</h6>\n      <button class=\"btn-outline text-primary\" (click)=\"resendOTP()\">Resend</button>\n    </div>\n  <div class=\"divider\"></div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/core/config/config.ts":
  /*!***************************************!*\
    !*** ./src/app/core/config/config.ts ***!
    \***************************************/

  /*! exports provided: appConfig */

  /***/
  function srcAppCoreConfigConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appConfig", function () {
      return appConfig;
    });

    var baseApiUrl = 'http://localhost:3050';
    var appConfig = {
      mobile: '',
      apiURL: baseApiUrl,
      withoutLoginUrls: ['/'],
      baseApiUrl: baseApiUrl,
      perPageDefault: 12,
      perPageArray: [12, 24, 36, 48, 60],
      perPageTblArray: [10, 20, 30, 40, 50, 100],
      perPageTblDefault: 10,
      date_format: 'DD-MM-YYYY',
      google_doc_path: window.location.protocol + "//docs.google.com/viewer?url=",
      yearRange: 100,
      paystackPublicKey: 'pk_test_bda795695c65c62c6d922532a66d2c324ab16a3e',
      statusCode: {
        'ok': 200,
        'created': 201,
        'accepted': 202,
        'noContent': 204,
        'found': 302,
        'temporaryRedirect': 307,
        'badRequest': 400,
        'unauthorized': 401,
        'paymentRequired': 402,
        'forbidden': 403,
        'notFound': 404,
        'notAcceptable': 406,
        'conflict': 409,
        'preconditionFailed': 412,
        'payloadTooLarge': 413,
        'unsupportedMediaType': 415,
        'internalServerError': 500,
        'notImplemented': 501,
        'badGateway': 502,
        'serviceUnavailable': 503,
        'gatewayTimeout': 504,
        'httpVersionNotSupported': 505,
        'networkAuthenticationRequired': 511
      },
      pattern: {
        'USERNAME': /[a-zA-Z0-9_]{3,15}$/ig,
        'NAME': /^[a-zA-Z . \-\']*$/,
        "CITY": /^[a-zA-Z . \-\']*$/,
        "EMAIL": /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "POSTAL_CODE": /(^\d{5}(-\d{4})?$)|(^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$)/,
        "SUB_DOMAIN": /^[/a-z/A-Z][a-zA-Z0-9-]*[^/-/./0-9]$/,
        "PHONE_NO": /\(?\d{3}\)?-? *\d{3}-? *-?\d{4}/,
        "TASK_CODE": /^[0-9999]{1,4}$/,
        "SSN": /^((\d{3}-?\d{2}-?\d{4})|(X{3}-?X{2}-?X{4}))$/,
        "TRANSACTION_PIN": /d{4}$/
      },
      email: {
        abuse_email: "no-reply@zappy.com",
        copyright: new Date().getFullYear() + " Copyright Zappy",
        logo_url: "/public/images/logo.png"
      },
      roles: {
        "casual_user": 1,
        "paypoint_agent": 2,
        "custom_reseller": 3,
        "api_consumer": 4,
        "super_admin": 5 //Super Administrator

      },
      role_type: {
        "casual_user": {
          id: '1',
          meta: "casual_user",
          name: "Casual User"
        },
        "paypoint_agent": {
          id: '2',
          meta: "paypoint_agent",
          name: "Paypoint Agent"
        },
        "custom_reseller": {
          id: '3',
          meta: "custom_reseller",
          name: "Custom Seller"
        },
        "api_consumer": {
          id: '4',
          meta: "api_consumer",
          name: "API Consumer"
        },
        "super_admin": {
          id: '5',
          meta: "super_admin",
          name: "Super Admin"
        }
      },
      upload_dir: {
        "USER_PROFILE_PIC": '/public/uploads/',
        "BLOG_PIC": '/public/uploads/blogs/',
        "BLOG_CATEGORY_PIC": '/public/uploads/blogs/category/',
        "DEFAULT_MALE_PIC": '/public/images/male_avatar.png',
        "DEFAULT_FEMALE_PIC": '/public/images/female_avatar.png',
        "DEFAULT_MALE_WHITE_PIC": '/public/images/male_avatar_white.png',
        "DEFAULT_FEMALE_WHITE_PIC": '/public/images/female_avatar_white.png',
        "COMPANY_LOGO_DIR": '/public/uploads/logos/',
        "DEFAULT_COMPANY_LOGO": '/public/images/default_logo.png',
        "DOCUMENTS_DIR": '/uploads/'
      },
      files: {
        MAX_IMG_SIZE: 20 * 2000 * 2000
      }
    };
    /***/
  },

  /***/
  "./src/app/otp/otp-routing.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/otp/otp-routing.module.ts ***!
    \*******************************************/

  /*! exports provided: OtpPageRoutingModule */

  /***/
  function srcAppOtpOtpRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtpPageRoutingModule", function () {
      return OtpPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _otp_otp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./otp/otp.page */
    "./src/app/otp/otp/otp.page.ts");

    var routes = [{
      path: '',
      component: _otp_otp_page__WEBPACK_IMPORTED_MODULE_3__["OtpPage"]
    }];

    var OtpPageRoutingModule = function OtpPageRoutingModule() {
      _classCallCheck(this, OtpPageRoutingModule);
    };

    OtpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OtpPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/otp/otp.module.ts":
  /*!***********************************!*\
    !*** ./src/app/otp/otp.module.ts ***!
    \***********************************/

  /*! exports provided: OtpPageModule */

  /***/
  function srcAppOtpOtpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtpPageModule", function () {
      return OtpPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _otp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./otp-routing.module */
    "./src/app/otp/otp-routing.module.ts");
    /* harmony import */


    var _otp_otp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./otp/otp.page */
    "./src/app/otp/otp/otp.page.ts");

    var OtpPageModule = function OtpPageModule() {
      _classCallCheck(this, OtpPageModule);
    };

    OtpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _otp_routing_module__WEBPACK_IMPORTED_MODULE_5__["OtpPageRoutingModule"]],
      declarations: [_otp_otp_page__WEBPACK_IMPORTED_MODULE_6__["OtpPage"]]
    })], OtpPageModule);
    /***/
  },

  /***/
  "./src/app/otp/otp/otp.page.scss":
  /*!***************************************!*\
    !*** ./src/app/otp/otp/otp.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppOtpOtpOtpPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".otp {\n  margin: 0px 20px;\n}\n.otp input {\n  width: 50px !important;\n  margin: 0 !important;\n  background: #ffffff !important;\n  border-radius: 4px !important;\n  box-sizing: border-box !important;\n  border: solid 1px #9ACD32 !important;\n  text-align: center !important;\n}\n.otp input:focus {\n  outline: none !important;\n  border-radius: 4px !important;\n}\n.otp button {\n  width: 271px !important;\n  height: 40px !important;\n  border-radius: 20px !important;\n  margin: 0 !important;\n  padding: 0px !important;\n  font-size: 16px;\n  line-height: 22px;\n}\n.otp-input {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n  margin: 0 auto;\n  width: 301px;\n}\n.btn-outline {\n  width: 93px;\n  height: 36px;\n}\nion-col {\n  text-align: center !important;\n  margin: -20px !important;\n}\n.d-flex {\n  align-items: center !important;\n}\ntitle {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  color: #0d0e0b;\n}\nh6 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  color: #1e1f1d;\n  padding-top: 10px !important;\n  padding-bottom: 10px !important;\n}\n.icon {\n  margin-left: 18px;\n  font-size: 25px;\n  color: #9ACD32;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3RwL290cC9DOlxcVXNlcnNcXExlbm92b1xcZG9jdW1lbnRzXFx2c2NfbG9jYWxfZGV2XFxuYXRpdmUtbW9iaWxlLWFwcFxcemFwcHlcXGZyb250ZW5kL3NyY1xcYXBwXFxvdHBcXG90cFxcb3RwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvb3RwL290cC9vdHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRjtBREFFO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7QUNFSjtBREFJO0VBQ0Usd0JBQUE7RUFDQSw2QkFBQTtBQ0VOO0FERUU7RUFDRSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQUo7QURJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0RGO0FESUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0RGO0FESUE7RUFDRSw2QkFBQTtFQUNBLHdCQUFBO0FDREY7QURJQTtFQUNFLDhCQUFBO0FDREY7QURJQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNERjtBRElBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUVBLDRCQUFBO0VBQ0EsK0JBQUE7QUNGRjtBREtBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvb3RwL290cC9vdHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm90cCB7XG4gIG1hcmdpbjogMHB4IDIwcHg7XG4gIGlucHV0IHtcbiAgICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzlBQ0QzMiAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICBcbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogMjcxcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMHB4ICAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgfVxufVxuXG4ub3RwLWlucHV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMzAxcHg7XG59XG5cbi5idG4tb3V0bGluZSB7XG4gIHdpZHRoOiA5M3B4O1xuICBoZWlnaHQ6IDM2cHg7XG59XG5cbmlvbi1jb2wge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAtMjBweCAhaW1wb3J0YW50O1xufVxuXG4uZC1mbGV4IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6ICMwZDBlMGI7XG59XG5cbmg2IHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBjb2xvcjogIzFlMWYxZDs7XG5cbiAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmljb24ge1xuICBtYXJnaW4tbGVmdDoxOHB4O1xuICBmb250LXNpemU6MjVweDtcbiAgY29sb3I6IzlBQ0QzMjtcbn0iLCIub3RwIHtcbiAgbWFyZ2luOiAwcHggMjBweDtcbn1cbi5vdHAgaW5wdXQge1xuICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50O1xuICBib3JkZXI6IHNvbGlkIDFweCAjOUFDRDMyICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuLm90cCBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG59XG4ub3RwIGJ1dHRvbiB7XG4gIHdpZHRoOiAyNzFweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbi5vdHAtaW5wdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAzMDFweDtcbn1cblxuLmJ0bi1vdXRsaW5lIHtcbiAgd2lkdGg6IDkzcHg7XG4gIGhlaWdodDogMzZweDtcbn1cblxuaW9uLWNvbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBtYXJnaW46IC0yMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kLWZsZXgge1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjMGQwZTBiO1xufVxuXG5oNiB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBjb2xvcjogIzFlMWYxZDtcbiAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmljb24ge1xuICBtYXJnaW4tbGVmdDogMThweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogIzlBQ0QzMjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/otp/otp/otp.page.ts":
  /*!*************************************!*\
    !*** ./src/app/otp/otp/otp.page.ts ***!
    \*************************************/

  /*! exports provided: OtpPage */

  /***/
  function srcAppOtpOtpOtpPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtpPage", function () {
      return OtpPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_otp_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/otp-service */
    "./src/app/services/otp-service.ts");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/storage-service */
    "./src/app/services/storage-service.ts");
    /* harmony import */


    var _core_config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../core/config/config */
    "./src/app/core/config/config.ts");

    var OtpPage = /*#__PURE__*/function () {
      function OtpPage(router, otpservice, alertCtrl, storageservice, route) {
        _classCallCheck(this, OtpPage);

        this.router = router;
        this.otpservice = otpservice;
        this.alertCtrl = alertCtrl;
        this.storageservice = storageservice;
        this.route = route;
        this.otpForm = {
          digit1: '',
          digit2: '',
          digit3: '',
          digit4: ''
        };
        /* this.stored_mobile_no = this.storageservice.passMobileNo();
        */

        /* this.phone_no = this.storageservice.passMobileNo();
        */
      }

      _createClass(OtpPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          //console.log('GLOBAL: ', this.storageservice.getMobileNo());

          /*
           console.log('MY MOBILE NUMBER: ', this.stored_mobile_no);
           
           */
          this.route.params.subscribe(function (params) {
            _this.stored_mobile_no = params['m'];
          });
          console.log('MY MOBILE NUMBER: ', this.stored_mobile_no);
        }
      }, {
        key: "submitOTP",
        value: function submitOTP() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var alert, joined_otp, otp_value;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(this.otpForm.digit1 == '' || this.otpForm.digit2 == '' || this.otpForm.digit3 == '' || this.otpForm.digit4 == '')) {
                      _context2.next = 8;
                      break;
                    }

                    _context2.next = 3;
                    return this.alertCtrl.create({
                      cssClass: 'my-alert',
                      header: 'Zappy',
                      mode: 'ios',
                      message: 'All fields are required!',
                      buttons: ['OK']
                    });

                  case 3:
                    alert = _context2.sent;
                    _context2.next = 6;
                    return alert.present();

                  case 6:
                    _context2.next = 11;
                    break;

                  case 8:
                    //Concatenate all the otp digits into an array
                    joined_otp = Object.values(this.otpForm).reduce(function (r, c) {
                      return r.concat(c);
                    }, []); //Convert the array to string and remove the comma 

                    otp_value = joined_otp.toString().replace(/,/g, '');
                    this.otpservice.verifyOtp(this.stored_mobile_no, otp_value).subscribe(function (resp) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var _alert, m, _alert2;

                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                if (!(resp.status == _core_config_config__WEBPACK_IMPORTED_MODULE_6__["appConfig"].statusCode.accepted)) {
                                  _context.next = 11;
                                  break;
                                }

                                console.log(resp);
                                _context.next = 4;
                                return this.alertCtrl.create({
                                  cssClass: 'my-alert',
                                  mode: 'ios',
                                  header: 'Zappy',
                                  message: resp.message,
                                  buttons: ['OK']
                                });

                              case 4:
                                _alert = _context.sent;
                                _context.next = 7;
                                return _alert.present();

                              case 7:
                                m = this.stored_mobile_no;
                                this.router.navigate(['/signup', m]);
                                _context.next = 17;
                                break;

                              case 11:
                                console.log(resp);
                                _context.next = 14;
                                return this.alertCtrl.create({
                                  cssClass: 'my-alert',
                                  mode: 'ios',
                                  header: 'Zappy',
                                  message: resp.message,
                                  buttons: ['OK']
                                });

                              case 14:
                                _alert2 = _context.sent;
                                _context.next = 17;
                                return _alert2.present();

                              case 17:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    });

                  case 11:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "resendOTP",
        value: function resendOTP() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this3 = this;

            var otp;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    otp = Math.floor(1000 + Math.random() * 9000);
                    this.otpservice.otpVerifyMobileNo(this.stored_mobile_no, otp).subscribe(function (resp) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                        var alert, _alert3;

                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                console.log(resp);

                                if (!(resp.status == _core_config_config__WEBPACK_IMPORTED_MODULE_6__["appConfig"].statusCode.created)) {
                                  _context3.next = 11;
                                  break;
                                }

                                //save the mobile number and it's token in the local storage
                                this.storageservice.set('user_mobile_no', resp.user_mobile_no);
                                this.storageservice.set('access_token', resp.access_token);
                                _context3.next = 6;
                                return this.alertCtrl.create({
                                  cssClass: 'my-alert',
                                  header: 'Zappy',
                                  subHeader: '',
                                  mode: 'ios',
                                  message: "OTP resent successfully",
                                  buttons: ['OK']
                                });

                              case 6:
                                alert = _context3.sent;
                                _context3.next = 9;
                                return alert.present();

                              case 9:
                                _context3.next = 16;
                                break;

                              case 11:
                                _context3.next = 13;
                                return this.alertCtrl.create({
                                  cssClass: 'my-alert',
                                  header: 'Zappy',
                                  subHeader: '',
                                  mode: 'ios',
                                  message: resp.message,
                                  buttons: ['OK']
                                });

                              case 13:
                                _alert3 = _context3.sent;
                                _context3.next = 16;
                                return _alert3.present();

                              case 16:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    });

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return OtpPage;
    }();

    OtpPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_otp_service__WEBPACK_IMPORTED_MODULE_4__["OtpService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    OtpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-otp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./otp.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/otp/otp/otp.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./otp.page.scss */
      "./src/app/otp/otp/otp.page.scss"))["default"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ../../../assets/css/main.scss */
      "./src/assets/css/main.scss"))["default"]]
    })], OtpPage);
    /***/
  }
}]);
//# sourceMappingURL=otp-otp-module-es5.js.map