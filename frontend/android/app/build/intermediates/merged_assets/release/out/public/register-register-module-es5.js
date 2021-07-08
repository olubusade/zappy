function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register/register.page.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register/register.page.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons mode=\"ios\"  slot=\"start\">\n      <ion-icon class=\"icon\" [routerLink]=\"['/home']\" name=\"arrow-back-sharp\"></ion-icon>\n    </ion-buttons>\n    <ion-title></ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"brand\">\n    <img src=\"../../assets/imgs/logo.png\" alt=\"zappy-logo\">\n  </div>\n  <div id = \"welcome_note\" style = \"margin-left: 20px; font-size:14px;\">\n    <h2>Hi,</h2>\n    <p>Let's start with your mobile number.</p>\n    <p>We advise that you use an active mobile number</p>\n  </div>\n  <div class=\"signup\">\n    <ion-item>\n      <ion-icon style=\"margin-left:0px;\" name=\"call-outline\"></ion-icon>&nbsp;&nbsp;\n      <ion-input ion-input \n                 inputmode=\"numeric\"\n                 pattern= \"{{mobile_pattern}}\"\n                 onKeyPress=\"if(this.value.length == 13) return false;\"\n                 type=\"number\" \n                 [(ngModel)] = \"registerForm.mobile_no\"  \n                 placeholder=\"Mobile Number\"\n                 maxlength=\"13\">\n      </ion-input>\n    </ion-item>\n    <button ion-button mode=\"ios\" (click)=\"verifyMobileNo()\">\n      Validate My Mobile No.\n    </button>\n\n    \n   </div>\n   <div id = \"privacy_policy\" class=\"text-center\" style=\"margin-top:-10px\">\n    <span  style = \"color:grey; font-size:10px;\">By signing up, you are agreeing to our</span><br>\n    <a href=\"#\" style= \"text-decoration:none\"><span style = \"color:black; font-size:10px;\"><strong>Terms of Service & Privacy Policy</strong></span></a>\n  </div>\n</ion-content>\n";
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
  "./src/app/register/register-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/register/register-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: RegisterPageRoutingModule */

  /***/
  function srcAppRegisterRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
      return RegisterPageRoutingModule;
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


    var _register_register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register/register.page */
    "./src/app/register/register/register.page.ts");

    var routes = [{
      path: '',
      component: _register_register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }];

    var RegisterPageRoutingModule = function RegisterPageRoutingModule() {
      _classCallCheck(this, RegisterPageRoutingModule);
    };

    RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegisterPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/register/register.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/register/register.module.ts ***!
    \*********************************************/

  /*! exports provided: RegisterPageModule */

  /***/
  function srcAppRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
      return RegisterPageModule;
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


    var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register-routing.module */
    "./src/app/register/register-routing.module.ts");
    /* harmony import */


    var _register_register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register/register.page */
    "./src/app/register/register/register.page.ts");

    var RegisterPageModule = function RegisterPageModule() {
      _classCallCheck(this, RegisterPageModule);
    };

    RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]],
      declarations: [_register_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })], RegisterPageModule);
    /***/
  },

  /***/
  "./src/app/register/register/register.page.scss":
  /*!******************************************************!*\
    !*** ./src/app/register/register/register.page.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --ion-background-color: linear-gradient(90deg, #ffffff 0%, #ffffff 157.2%) !important;\n}\n\n.signup {\n  display: flex;\n  flex-direction: column;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 40vh;\n  margin-top: 150px;\n}\n\nion-item {\n  color: #9ACD32;\n  border-radius: 6px;\n  --background: #ffffff;\n  width: 311px;\n  --min-height: 40px;\n  --padding-left: 0;\n  --padding-right: 0;\n}\n\nion-input {\n  color: #808080;\n  width: 311px !important;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 18px;\n  --placeholder-color: #808080bd;\n}\n\nbutton {\n  width: 300px;\n  border-radius: 20px;\n  color: #ffffff !important;\n  min-height: 40px;\n  font-family: \"Poppins\";\n  font-style: normal !important;\n  font-weight: 500 !important;\n  font-size: 14px !important;\n  line-height: 20px;\n  background: #9ACD32;\n  margin: 10px 0px;\n  margin-top: 140px;\n}\n\nbutton ::-moz-placeholder {\n  color: #808080;\n  font-weight: 400 !important;\n  padding-left: 20px;\n}\n\nbutton ::-ms-input-placeholder {\n  color: #808080;\n  font-weight: 400 !important;\n  padding-left: 20px;\n}\n\nbutton ::placeholder {\n  color: #808080;\n  font-weight: 400 !important;\n  padding-left: 20px;\n}\n\n.brand {\n  text-align: center;\n  padding-top: 40px;\n}\n\n.brand img {\n  width: 40% !important;\n}\n\n.icon {\n  margin-left: 10px;\n  font-size: 20px;\n  color: #9ACD32;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIvQzpcXFVzZXJzXFxMZW5vdm9cXGRvY3VtZW50c1xcdnNjX2xvY2FsX2RldlxcbmF0aXZlLW1vYmlsZS1hcHBcXHphcHB5XFxmcm9udGVuZC9zcmNcXGFwcFxccmVnaXN0ZXJcXHJlZ2lzdGVyXFxyZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFGQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNDLFlBQUE7RUFDRCxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURHQTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREVFO0VBQ0UsY0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURIRTtFQUNFLGNBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FESEU7RUFDRSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQ0FKOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ0RGOztBREVFO0VBQ0UscUJBQUE7QUNBSjs7QURLQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmZmZmZmIDAlLCAjZmZmZmZmIDE1Ny4yJSkgIWltcG9ydGFudDsgXG59XG5cbi5zaWdudXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDB2aDtcbiAgbWFyZ2luLXRvcDogMTUwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgY29sb3I6ICM5QUNEMzI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgd2lkdGg6IDMxMXB4O1xuICAtLW1pbi1oZWlnaHQ6IDQwcHg7XG4gIC0tcGFkZGluZy1sZWZ0OiAwO1xuICAtLXBhZGRpbmctcmlnaHQ6IDA7XG59XG5cblxuaW9uLWlucHV0IHtcbiAgY29sb3I6ICM4MDgwODA7ICAvLzAwMzY3OVxuICB3aWR0aDogMzExcHggIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjODA4MDgwYmQ7IC8vcmdiYSgwLCA1NCwgMTIxLCAwLjYpXG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiAzMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDsgLy8jICAwMDM2NzlcbiAgbWluLWhlaWdodDogNDBweDtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjOUFDRDMyOyAgLy8gRERBQjE0XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIG1hcmdpbi10b3A6IDE0MHB4O1xuXG4gIDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIH1cbn1cblxuLmJyYW5kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgaW1nIHtcbiAgICB3aWR0aDogNDAlICFpbXBvcnRhbnQ7XG4gIH1cblxufVxuXG4uaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OjEwcHg7XG4gIGZvbnQtc2l6ZToyMHB4O1xuICBjb2xvcjojOUFDRDMyO1xufSIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmZmZmZmIDAlLCAjZmZmZmZmIDE1Ny4yJSkgIWltcG9ydGFudDtcbn1cblxuLnNpZ251cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0MHZoO1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICBjb2xvcjogIzlBQ0QzMjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHdpZHRoOiAzMTFweDtcbiAgLS1taW4taGVpZ2h0OiA0MHB4O1xuICAtLXBhZGRpbmctbGVmdDogMDtcbiAgLS1wYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG5pb24taW5wdXQge1xuICBjb2xvcjogIzgwODA4MDtcbiAgd2lkdGg6IDMxMXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjODA4MDgwYmQ7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiAzMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICM5QUNEMzI7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIG1hcmdpbi10b3A6IDE0MHB4O1xufVxuYnV0dG9uIDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzgwODA4MDtcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5icmFuZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG4uYnJhbmQgaW1nIHtcbiAgd2lkdGg6IDQwJSAhaW1wb3J0YW50O1xufVxuXG4uaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjOUFDRDMyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/register/register/register.page.ts":
  /*!****************************************************!*\
    !*** ./src/app/register/register/register.page.ts ***!
    \****************************************************/

  /*! exports provided: RegisterPage */

  /***/
  function srcAppRegisterRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
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
    /*! ../../core/config/config */
    "./src/app/core/config/config.ts");

    var RegisterPage = /*#__PURE__*/function () {
      function RegisterPage(router, otpservice, alertCtrl, storageservice, navCtrl) {
        _classCallCheck(this, RegisterPage);

        this.router = router;
        this.otpservice = otpservice;
        this.alertCtrl = alertCtrl;
        this.storageservice = storageservice;
        this.navCtrl = navCtrl;
        this.registerForm = {
          mobile_no: ''
        };
        this.mobile_pattern = _core_config_config__WEBPACK_IMPORTED_MODULE_6__["appConfig"].pattern.PHONE_NO;
        this.invalidMobileNo = false;
      }

      _createClass(RegisterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {//console.log(this.storageservice.get('name'));
        }
      }, {
        key: "verifyMobileNo",
        value: function verifyMobileNo() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var converted_mobile, alert, _alert, otp;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    converted_mobile = this.registerForm.mobile_no.toString();

                    if (!(this.registerForm.mobile_no == '')) {
                      _context2.next = 9;
                      break;
                    }

                    _context2.next = 4;
                    return this.alertCtrl.create({
                      cssClass: 'my-alert',
                      header: 'Zappy',
                      subHeader: '',
                      mode: 'ios',
                      message: 'Mobile No. field is required!',
                      buttons: ['OK']
                    });

                  case 4:
                    alert = _context2.sent;
                    _context2.next = 7;
                    return alert.present();

                  case 7:
                    _context2.next = 20;
                    break;

                  case 9:
                    if (!(converted_mobile.length < 13)) {
                      _context2.next = 17;
                      break;
                    }

                    _context2.next = 12;
                    return this.alertCtrl.create({
                      cssClass: 'my-alert',
                      header: "Zappy",
                      subHeader: '',
                      mode: 'ios',
                      message: "<p>Invalid Mobile No.</p><p>Valid Format: 234XXXXXXXXXX</p>",
                      buttons: ['OK']
                    });

                  case 12:
                    _alert = _context2.sent;
                    _context2.next = 15;
                    return _alert.present();

                  case 15:
                    _context2.next = 20;
                    break;

                  case 17:
                    console.log('Mobile No: ', this.registerForm.mobile_no);
                    otp = Math.floor(1000 + Math.random() * 9000);
                    this.otpservice.otpVerifyMobileNo(converted_mobile, otp).subscribe(function (resp) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var m, _alert2;

                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                console.log(resp);

                                if (!(resp.status == _core_config_config__WEBPACK_IMPORTED_MODULE_6__["appConfig"].statusCode.created)) {
                                  _context.next = 7;
                                  break;
                                }

                                localStorage.setItem("setting:mobile_no", resp.user_mobile_no); //console.log('PERSISTENT DATA', this.storageservice.get('user_mobile_no'));

                                m = this.registerForm.mobile_no;
                                this.router.navigate(['/otp', m]);
                                _context.next = 12;
                                break;

                              case 7:
                                _context.next = 9;
                                return this.alertCtrl.create({
                                  cssClass: 'my-alert',
                                  header: 'Zappy',
                                  subHeader: '',
                                  mode: 'ios',
                                  message: resp.message,
                                  buttons: ['OK']
                                });

                              case 9:
                                _alert2 = _context.sent;
                                _context.next = 12;
                                return _alert2.present();

                              case 12:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    });

                  case 20:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return RegisterPage;
    }();

    RegisterPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_otp_service__WEBPACK_IMPORTED_MODULE_4__["OtpService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }];
    };

    RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register/register.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ../../../assets/css/main.scss */
      "./src/assets/css/main.scss"))["default"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./register.page.scss */
      "./src/app/register/register/register.page.scss"))["default"]]
    })], RegisterPage);
    /***/
  }
}]);
//# sourceMappingURL=register-register-module-es5.js.map