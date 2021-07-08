function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logout-logout-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/logout/logout.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/logout/logout.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLogoutLogoutPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./src/app/login/logout/logout-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/login/logout/logout-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: LogoutPageRoutingModule */

  /***/
  function srcAppLoginLogoutLogoutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutPageRoutingModule", function () {
      return LogoutPageRoutingModule;
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


    var _logout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./logout.page */
    "./src/app/login/logout/logout.page.ts");

    var routes = [{
      path: '',
      component: _logout_page__WEBPACK_IMPORTED_MODULE_3__["LogoutPage"]
    }];

    var LogoutPageRoutingModule = function LogoutPageRoutingModule() {
      _classCallCheck(this, LogoutPageRoutingModule);
    };

    LogoutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LogoutPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/logout/logout.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/logout/logout.module.ts ***!
    \***********************************************/

  /*! exports provided: LogoutPageModule */

  /***/
  function srcAppLoginLogoutLogoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutPageModule", function () {
      return LogoutPageModule;
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


    var _logout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./logout-routing.module */
    "./src/app/login/logout/logout-routing.module.ts");
    /* harmony import */


    var _logout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./logout.page */
    "./src/app/login/logout/logout.page.ts");

    var LogoutPageModule = function LogoutPageModule() {
      _classCallCheck(this, LogoutPageModule);
    };

    LogoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _logout_routing_module__WEBPACK_IMPORTED_MODULE_5__["LogoutPageRoutingModule"]],
      declarations: [_logout_page__WEBPACK_IMPORTED_MODULE_6__["LogoutPage"]]
    })], LogoutPageModule);
    /***/
  },

  /***/
  "./src/app/login/logout/logout.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/login/logout/logout.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLogoutLogoutPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ291dC9sb2dvdXQucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/login/logout/logout.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/login/logout/logout.page.ts ***!
    \*********************************************/

  /*! exports provided: LogoutPage */

  /***/
  function srcAppLoginLogoutLogoutPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutPage", function () {
      return LogoutPage;
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

    var LogoutPage = /*#__PURE__*/function () {
      function LogoutPage(router, loadingCtrl) {
        _classCallCheck(this, LogoutPage);

        this.router = router;
        this.loadingCtrl = loadingCtrl;
        localStorage.clear();
        this.router.navigate(['/login']);
      }

      _createClass(LogoutPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingCtrl.create({
                      cssClass: 'loading',
                      message: '',
                      duration: 100,
                      animated: true,
                      spinner: 'bubbles'
                    });

                  case 2:
                    loading = _context.sent;
                    _context.next = 5;
                    return loading.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return LogoutPage;
    }();

    LogoutPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }];
    };

    LogoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-logout',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./logout.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/logout/logout.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./logout.page.scss */
      "./src/app/login/logout/logout.page.scss"))["default"]]
    })], LogoutPage);
    /***/
  }
}]);
//# sourceMappingURL=logout-logout-module-es5.js.map