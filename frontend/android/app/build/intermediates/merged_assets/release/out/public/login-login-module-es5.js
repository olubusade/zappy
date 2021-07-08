function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login/login.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login/login.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-toolbar mode=\"ios\">\n  <ion-buttons mode=\"ios\"  slot=\"start\">\n    <ion-icon class=\"icon back-arrow\"[routerLink]=\"['/home']\" name=\"arrow-back-sharp\"></ion-icon>\n  </ion-buttons>\n  <ion-title></ion-title>\n</ion-toolbar>\n<ion-content>\n  <div class=\"brand\">\n    <img src=\"../../assets/imgs/logo.png\" alt=\"zappy-logo\">\n  </div>\n  <div id=\"container\" class=\"container\">\n    <div *ngIf = \"showName\" class=\"page-title\">\n      <small>Welcome Back!</small>\n      <h2>{{user_fullname}}</h2>\n    </div>\n    <ion-item *ngIf = \"!showName\">\n      <ion-icon name=\"call-outline\"></ion-icon>&nbsp;&nbsp;\n      <ion-input ion-input \n                 inputmode=\"numeric\"\n                 pattern= \"{{mobile_pattern}}\"\n                 onKeyPress=\"if(this.value.length == 13) return false;\"\n                 type=\"number\" \n                 [(ngModel)] = \"loginData.mobile_no\"  \n                 placeholder=\"Mobile No.\"\n                 maxlength=\"13\">\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"lock-closed-outline\"></ion-icon>&nbsp;&nbsp;\n      <ion-input ion-input type=\"password\" [(ngModel)]=\"loginData.password\"  name=\"password\" placeholder=\"Password\"></ion-input>\n    </ion-item>\n      <button class=\"btn btn-primary\" (click)=\"login()\">\n        Login\n      </button>\n      <span class=\"text-primary\" (click)=\"register()\"> No, I am not {{user_first_name}}!</span>\n      <label class=\"text-link\" (click)=\"forgotPassword()\">\n        Forgot password\n      </label>\n      <span>\n        <img src=\"../../assets/icon/thumbprint_icon.svg\" alt=\"\" (click)=\"login()\">\n      </span>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/login/login-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.page */
    "./src/app/login/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }, {
      path: 'logout',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | logout-logout-module */
        "logout-logout-module").then(__webpack_require__.bind(null,
        /*! ./logout/logout.module */
        "./src/app/login/logout/logout.module.ts")).then(function (m) {
          return m.LogoutPageModule;
        });
      }
    }, {
      path: 'forgotpassword',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | forgotpassword-forgotpassword-module */
        "forgotpassword-forgotpassword-module").then(__webpack_require__.bind(null,
        /*! ./forgotpassword/forgotpassword.module */
        "./src/app/login/forgotpassword/forgotpassword.module.ts")).then(function (m) {
          return m.ForgotpasswordPageModule;
        });
      }
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/login/login-routing.module.ts");
    /* harmony import */


    var _login_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.page */
    "./src/app/login/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/login/login/login.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/login/login/login.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#page-bg {\n  background: linear-gradient(90deg, #ffff 0%, #ffff 157.2%) !important;\n  padding: 20px;\n}\n\nion-content {\n  --ion-background-color: linear-gradient(90deg, #fff 0%, #fff 157.2%) !important;\n}\n\nion-item {\n  color: #808080;\n  border-radius: 6px;\n  --min-height: 40px;\n  margin: 10px !important;\n  --background: #ffffff;\n  width: 281px;\n}\n\n.signup {\n  height: 70vh;\n}\n\nspan {\n  color: #3b3b3b !important;\n  font-size: 12px !important;\n  margin: 10px;\n}\n\nh2 {\n  color: #1e1f1d;\n  font-weight: 500;\n}\n\n.page-title {\n  text-align: left !important;\n  margin-left: -65px !important;\n  padding-bottom: 70px !important;\n}\n\n.page-title small, .page-title h2 {\n  display: block;\n  text-align: left !important;\n  color: #1e1f1d;\n}\n\nbutton {\n  width: 240px !important;\n  border-radius: 20px !important;\n  min-height: 40px !important;\n  margin-top: 20px !important;\n}\n\n.brand {\n  margin-top: 5px;\n  padding-bottom: 30px;\n}\n\n.container {\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  height: 70vh;\n  width: auto;\n}\n\n.btn {\n  color: white;\n}\n\n.back-arrow {\n  padding-top: 20px;\n  text-align: left !important;\n  margin-left: -15px !important;\n}\n\nion-label {\n  font-size: 8px;\n}\n\nion-icon {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4vQzpcXFVzZXJzXFxMZW5vdm9cXGRvY3VtZW50c1xcdnNjX2xvY2FsX2RldlxcbmF0aXZlLW1vYmlsZS1hcHBcXHphcHB5XFxmcm9udGVuZC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFFQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsK0VBQUE7QUNDRjs7QURHQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNBRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURHQTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0FDQUY7O0FERUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQVVFLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtBQ1BGOztBRERFO0VBQ0UsY0FBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQ0dKOztBREtBO0VBQ0UsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7QUNGRjs7QURLQTtFQUVHLGVBQUE7RUFDQSxvQkFBQTtBQ0hIOztBRE1BO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUVBLFdBQUE7QUNKRjs7QURTQTtFQUNFLFlBQUE7QUNORjs7QURRQTtFQUNFLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtBQ0xGOztBRFFBO0VBQ0UsY0FBQTtBQ0xGOztBRFFBO0VBQ0UsZUFBQTtBQ0xGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BhZ2UtYmcge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZmZmIDAlLCAjZmZmZiAxNTcuMiUpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmZmIDAlLCAjZmZmIDE1Ny4yJSkgIWltcG9ydGFudDsgXG4gIFxufVxuXG5pb24taXRlbSB7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIC0tbWluLWhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgd2lkdGg6IDI4MXB4O1xufVxuLnNpZ251cCB7XG4gIGhlaWdodDogNzB2aDtcbn1cblxuXG5zcGFuIHtcbiAgY29sb3I6ICMzYjNiM2IgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTBweDtcbn1cbmgyIHtcbiAgY29sb3I6ICMxZTFmMWQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ucGFnZS10aXRsZSB7XG4gIC8vd2lkdGg6IDM3NXB4O1xuIC8vIHdpZHRoOiBhdXRvO1xuIC8vIG1hcmdpbjogMCBhdXRvO1xuICBzbWFsbCwgaDIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzFlMWYxZDtcbiAgfVxuXG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IC02NXB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA3MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiAyNDBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4uYnJhbmQge1xuICAvL3BhZGRpbmctdG9wOiAxMHB4O1xuICAgbWFyZ2luLXRvcDo1cHg7XG4gICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogNzB2aDtcbiAgLy93aWR0aDogMzc1cHg7XG4gIHdpZHRoOiBhdXRvO1xuICAvL21hcmdpbi10b3A6IDMwdmg7XG4gLy8gbWFyZ2luLXJpZ2h0OjE1MHB4O1xuICAvL21hcmdpbjogMCBhdXRvO1xufVxuLmJ0biB7XG4gIGNvbG9yOndoaXRlO1xufVxuLmJhY2stYXJyb3cge1xuICBwYWRkaW5nLXRvcDoyMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweCAhaW1wb3J0YW50O1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LXNpemU6OHB4O1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuIiwiI3BhZ2UtYmcge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZmZmIDAlLCAjZmZmZiAxNTcuMiUpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmZmIDAlLCAjZmZmIDE1Ny4yJSkgIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0ge1xuICBjb2xvcjogIzgwODA4MDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMTBweCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHdpZHRoOiAyODFweDtcbn1cblxuLnNpZ251cCB7XG4gIGhlaWdodDogNzB2aDtcbn1cblxuc3BhbiB7XG4gIGNvbG9yOiAjM2IzYjNiICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDEwcHg7XG59XG5cbmgyIHtcbiAgY29sb3I6ICMxZTFmMWQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5wYWdlLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogLTY1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDcwcHggIWltcG9ydGFudDtcbn1cbi5wYWdlLXRpdGxlIHNtYWxsLCAucGFnZS10aXRsZSBoMiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMWUxZjFkO1xufVxuXG5idXR0b24ge1xuICB3aWR0aDogMjQwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLmJyYW5kIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogNzB2aDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5idG4ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iYWNrLWFycm93IHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogOHB4O1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/login/login/login.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/login/login/login.page.ts ***!
    \*******************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppLoginLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_core_config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/config/config */
    "./src/app/core/config/config.ts");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(router, alertCtrl, loadingCtrl, userService) {
        _classCallCheck(this, LoginPage);

        this.router = router;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.user_first_name = '';
        this.user_last_name = '';
        this.user_fullname = '';
        this.loginData = {
          user_id: '',
          mobile_no: '',
          password: ''
        };
        this.mobile_pattern = src_app_core_config_config__WEBPACK_IMPORTED_MODULE_5__["appConfig"].pattern.PHONE_NO;
        this.showName = true;
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginData.user_id = localStorage.getItem("setting:user_id");
          this.user_mobile_no = localStorage.getItem("setting:mobile_no");
          this.user_first_name = localStorage.getItem("setting:first_name");
          this.user_last_name = localStorage.getItem("setting:last_name");
          this.user_fullname = this.user_first_name + ' ' + this.user_last_name;
          console.log('Mobile:', this.loginData.mobile_no);

          if (!this.user_mobile_no || this.user_mobile_no == '' || this.user_mobile_no == null) {
            // if (!this.user_first_name || this.user_first_name == '' || this.user_first_name == null) {
            this.showName = false;
          }
        }
      }, {
        key: "login",
        value: function login() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var converted_mobile, alert, _alert, _alert2;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    converted_mobile = this.user_mobile_no ? this.user_mobile_no : this.loginData.mobile_no.toString();

                    if (!(this.loginData.password == '' || this.loginData.password == null)) {
                      _context2.next = 9;
                      break;
                    }

                    _context2.next = 4;
                    return this.alertCtrl.create({
                      cssClass: 'my-alert',
                      header: 'Zappy',
                      subHeader: '',
                      mode: 'ios',
                      message: 'Password field is required!',
                      buttons: ['OK']
                    });

                  case 4:
                    alert = _context2.sent;
                    _context2.next = 7;
                    return alert.present();

                  case 7:
                    _context2.next = 28;
                    break;

                  case 9:
                    if (!(!this.showName && this.loginData.mobile_no == '')) {
                      _context2.next = 17;
                      break;
                    }

                    _context2.next = 12;
                    return this.alertCtrl.create({
                      cssClass: 'my-alert',
                      header: 'Zappy',
                      subHeader: '',
                      mode: 'ios',
                      message: 'Mobile No. field is required!',
                      buttons: ['OK']
                    });

                  case 12:
                    _alert = _context2.sent;
                    _context2.next = 15;
                    return _alert.present();

                  case 15:
                    _context2.next = 28;
                    break;

                  case 17:
                    if (!(converted_mobile.length < 13)) {
                      _context2.next = 25;
                      break;
                    }

                    _context2.next = 20;
                    return this.alertCtrl.create({
                      cssClass: 'my-alert',
                      header: "Zappy",
                      subHeader: '',
                      mode: 'ios',
                      message: "<p>Invalid Mobile No.</p><p>Valid Format: 234XXXXXXXXXX</p>",
                      buttons: ['OK']
                    });

                  case 20:
                    _alert2 = _context2.sent;
                    _context2.next = 23;
                    return _alert2.present();

                  case 23:
                    _context2.next = 28;
                    break;

                  case 25:
                    this.loginData.mobile_no = this.showName ? this.user_mobile_no : this.loginData.mobile_no.toString();
                    console.log(this.loginData);
                    this.userService.loginUser(this.loginData).subscribe(function (resp) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var loading, _alert3, _alert4;

                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return this.loadingCtrl.create({
                                  cssClass: 'loading',
                                  message: '',
                                  duration: 300,
                                  animated: true,
                                  spinner: 'bubbles'
                                });

                              case 2:
                                loading = _context.sent;
                                _context.next = 5;
                                return loading.present();

                              case 5:
                                if (resp) {
                                  _context.next = 13;
                                  break;
                                }

                                _context.next = 8;
                                return this.alertCtrl.create({
                                  cssClass: 'my-alert',
                                  header: 'Zappy',
                                  subHeader: '',
                                  mode: 'ios',
                                  message: 'Oops! Something is wrong',
                                  buttons: ['OK']
                                });

                              case 8:
                                _alert3 = _context.sent;
                                _context.next = 11;
                                return _alert3.present();

                              case 11:
                                _context.next = 40;
                                break;

                              case 13:
                                if (!(resp.status == src_app_core_config_config__WEBPACK_IMPORTED_MODULE_5__["appConfig"].statusCode.found)) {
                                  _context.next = 35;
                                  break;
                                }

                                console.log(resp);
                                localStorage.setItem("setting:user_id", resp.data.id);
                                localStorage.setItem("setting:role_id", resp.data.role_id);
                                localStorage.setItem("setting:first_name", resp.data.first_name);
                                localStorage.setItem("setting:last_name", resp.data.last_name);
                                localStorage.setItem("setting:email", resp.data.email);
                                localStorage.setItem("setting:mobile_no", resp.data.mobile_no);
                                localStorage.setItem("setting:email", resp.data.email);
                                localStorage.setItem("setting:wallet_amount", resp.data.wallet_amount);
                                localStorage.setItem("setting:points", resp.data.points);
                                localStorage.setItem("setting:access_token", resp.data.access_token);
                                localStorage.setItem("setting:expiresIn", resp.data.expiresIn);
                                localStorage.setItem("setting:dob", resp.data.dob);
                                localStorage.setItem("setting:security_question", resp.data.security_question);
                                localStorage.setItem("setting:sq_answer", resp.data.security_answer);
                                localStorage.setItem("setting:nickname", resp.data.nickname);
                                localStorage.setItem("setting:gender", resp.data.gender);
                                localStorage.setItem("setting:address", resp.data.address);
                                this.router.navigate(['/user-dashboard']); //  await loading.onDidDismiss();
                                //  console.log('Loading dismissed!');
                                //  await loading.onDidDismiss();
                                //  console.log('Loading dismissed with role:');

                                _context.next = 40;
                                break;

                              case 35:
                                _context.next = 37;
                                return this.alertCtrl.create({
                                  cssClass: 'my-alert',
                                  header: 'Zappy',
                                  subHeader: '',
                                  mode: 'ios',
                                  message: resp.message,
                                  buttons: ['OK']
                                });

                              case 37:
                                _alert4 = _context.sent;
                                _context.next = 40;
                                return _alert4.present();

                              case 40:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    });

                  case 28:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "forgotPassword",
        value: function forgotPassword() {
          this.router.navigate(['/forgotpassword']);
        }
      }, {
        key: "register",
        value: function register() {
          this.router.navigate(['/newlogin']);
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/login/login/login.page.scss"))["default"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ../../../assets/css/main.scss */
      "./src/assets/css/main.scss"))["default"]]
    })], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map