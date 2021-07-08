function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-bundle-data-bundle-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/data-bundle/data-bundle/data-bundle.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/data-bundle/data-bundle/data-bundle.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDataBundleDataBundleDataBundlePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"header-bg\">\n  <ion-toolbar mode=\"ios\" color=\"none\" class=\"text-white\">\n    <ion-buttons mode=\"ios\">\n      <ion-button (click)=\"goBack()\" slot=\"start\">\n        <ion-icon ios=\"arrow-back-outline\" md=\"arrow-back\"></ion-icon>\n      </ion-button>\n      <ion-button slot=\"end\">\n        <ion-icon name=\"alert-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title >Data Bundle</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <div class=\"brand\">\n      <img src=\"../../assets/imgs/logo.png\" alt=\"adikpopay-logo\" />\n    </div>\n    <div>\n      <ion-item lines=\"none\">\n        <ion-label>Select a Network</ion-label>\n        <ion-select okText=\"Okay\" cancelText=\"Dismiss\" required>\n          <ion-select-option value=\"GLO\">GLO</ion-select-option>\n          <ion-select-option value=\"MTN\">MTN</ion-select-option>\n          <ion-select-option value=\"9MOBILE\">9MOBILE</ion-select-option>\n          <ion-select-option value=\"AIRTEL\">AIRTEL</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-input placeholder=\"Bundle Type\" type=\"text\" required></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-input placeholder=\"Mobile Number\" type=\"tel\" required></ion-input>\n      </ion-item>\n\n    </div>\n    <div class=\"ion-text-center\">      \n      <ion-button color=\"primary\" (click)=\"subscribeToService()\" mode='ios'>\n        Continue\n      </ion-button>\n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/data-bundle/data-bundle-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/data-bundle/data-bundle-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: DataBundlePageRoutingModule */

  /***/
  function srcAppDataBundleDataBundleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataBundlePageRoutingModule", function () {
      return DataBundlePageRoutingModule;
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


    var _data_bundle_data_bundle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./data-bundle/data-bundle.page */
    "./src/app/data-bundle/data-bundle/data-bundle.page.ts");

    var routes = [{
      path: '',
      component: _data_bundle_data_bundle_page__WEBPACK_IMPORTED_MODULE_3__["DataBundlePage"]
    }];

    var DataBundlePageRoutingModule = function DataBundlePageRoutingModule() {
      _classCallCheck(this, DataBundlePageRoutingModule);
    };

    DataBundlePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DataBundlePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/data-bundle/data-bundle.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/data-bundle/data-bundle.module.ts ***!
    \***************************************************/

  /*! exports provided: DataBundlePageModule */

  /***/
  function srcAppDataBundleDataBundleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataBundlePageModule", function () {
      return DataBundlePageModule;
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


    var _data_bundle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./data-bundle-routing.module */
    "./src/app/data-bundle/data-bundle-routing.module.ts");
    /* harmony import */


    var _data_bundle_data_bundle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./data-bundle/data-bundle.page */
    "./src/app/data-bundle/data-bundle/data-bundle.page.ts");

    var DataBundlePageModule = function DataBundlePageModule() {
      _classCallCheck(this, DataBundlePageModule);
    };

    DataBundlePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _data_bundle_routing_module__WEBPACK_IMPORTED_MODULE_5__["DataBundlePageRoutingModule"]],
      declarations: [_data_bundle_data_bundle_page__WEBPACK_IMPORTED_MODULE_6__["DataBundlePage"]]
    })], DataBundlePageModule);
    /***/
  },

  /***/
  "./src/app/data-bundle/data-bundle/data-bundle.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/data-bundle/data-bundle/data-bundle.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDataBundleDataBundleDataBundlePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  color: #ffffff;\n  font-weight: 400;\n}\n\n.signup {\n  height: 50vh;\n  margin: 10px 30px;\n}\n\n.brand img {\n  width: 100% !important;\n  padding: 30px;\n}\n\nion-title {\n  color: #ffffff !important;\n}\n\nion-toolbar ion-icon {\n  color: #ffffff !important;\n}\n\nion-button {\n  width: 100%;\n}\n\nion-item {\n  color: #003679;\n  --background: rgba(0, 54, 121, 0.1) !important;\n  border-radius: 6px;\n  --min-height: 40px;\n  margin: 10px !important;\n}\n\nion-input, ion-select {\n  --placeholder-opacity: .9 !important;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 18px;\n  --placeholder-color: rgba(0, 54, 121, 0.6) !important;\n}\n\nion-button {\n  width: 241px;\n  min-height: 40px;\n  --border-radius: 6px !important;\n  margin-top: 10px !important;\n}\n\nion-toolbar ion-buttons {\n  width: 100% !important;\n}\n\nion-toolbar ion-title {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500 !important;\n  font-size: 16px !important;\n  line-height: 24px !important;\n  letter-spacing: 0.05em !important;\n}\n\n.bg-white {\n  background: #ffffff !important;\n}\n\nion-label {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px !important;\n  line-height: 18px;\n  color: rgba(0, 54, 121, 0.6) !important;\n  width: 299px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YS1idW5kbGUvZGF0YS1idW5kbGUvQzpcXFVzZXJzXFxMZW5vdm9cXGRvY3VtZW50c1xcdnNjX2xvY2FsX2RldlxcbmF0aXZlLW1vYmlsZS1hcHBcXHphcHB5XFxmcm9udGVuZC9zcmNcXGFwcFxcZGF0YS1idW5kbGVcXGRhdGEtYnVuZGxlXFxkYXRhLWJ1bmRsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2RhdGEtYnVuZGxlL2RhdGEtYnVuZGxlL2RhdGEtYnVuZGxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0FGOztBRElBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDREY7O0FES0U7RUFDRSxzQkFBQTtFQUNBLGFBQUE7QUNGSjs7QURNQTtFQUNFLHlCQUFBO0FDSEY7O0FET0U7RUFDRSx5QkFBQTtBQ0pKOztBRFFBO0VBQ0UsV0FBQTtBQ0xGOztBRFFBO0VBQ0UsY0FBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDTEY7O0FET0E7RUFDRSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxREFBQTtBQ0pGOztBRE9BO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSwyQkFBQTtBQ0pGOztBRFFFO0VBQ0Usc0JBQUE7QUNMSjs7QURPRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQ0FBQTtBQ0xKOztBRFVBO0VBQ0UsOEJBQUE7QUNQRjs7QURVQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFFQSx1Q0FBQTtFQUNBLHVCQUFBO0FDUkYiLCJmaWxlIjoic3JjL2FwcC9kYXRhLWJ1bmRsZS9kYXRhLWJ1bmRsZS9kYXRhLWJ1bmRsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1oZWFkZXIgIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cblxuLnNpZ251cCB7XG4gIGhlaWdodDogNTB2aDtcbiAgbWFyZ2luOiAxMHB4IDMwcHg7XG59XG5cbi5icmFuZCB7XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICB9XG59IFxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAvL3RleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi10b29sYmFyIHtcbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24taXRlbSB7XG4gIGNvbG9yOiAjMDAzNjc5O1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMCwgNTQsIDEyMSwgMC4xKSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIC0tbWluLWhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5pb24taW5wdXQsIGlvbi1zZWxlY3R7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogLjkgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2JhKDAsIDU0LCAxMjEsIDAuNikgIWltcG9ydGFudDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAyNDFweDtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIGlvbi1idXR0b25zIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG4gIGlvbi10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbSAhaW1wb3J0YW50O1xuXG4gIH1cbn1cblxuLmJnLXdoaXRlIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLy9jb2xvcjogIzAwMzY3OTtcbiAgY29sb3I6IHJnYmEoMCwgNTQsIDEyMSwgMC42KSAhaW1wb3J0YW50O1xuICB3aWR0aDogMjk5cHggIWltcG9ydGFudDtcbn0iLCJpb24taGVhZGVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5zaWdudXAge1xuICBoZWlnaHQ6IDUwdmg7XG4gIG1hcmdpbjogMTBweCAzMHB4O1xufVxuXG4uYnJhbmQgaW1nIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuaW9uLXRvb2xiYXIgaW9uLWljb24ge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1pdGVtIHtcbiAgY29sb3I6ICMwMDM2Nzk7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgwLCA1NCwgMTIxLCAwLjEpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgLS1taW4taGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IDEwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0LCBpb24tc2VsZWN0IHtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAuOSAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiYSgwLCA1NCwgMTIxLCAwLjYpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1idXR0b24ge1xuICB3aWR0aDogMjQxcHg7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW0gIWltcG9ydGFudDtcbn1cblxuLmJnLXdoaXRlIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBjb2xvcjogcmdiYSgwLCA1NCwgMTIxLCAwLjYpICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyOTlweCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/data-bundle/data-bundle/data-bundle.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/data-bundle/data-bundle/data-bundle.page.ts ***!
    \*************************************************************/

  /*! exports provided: DataBundlePage */

  /***/
  function srcAppDataBundleDataBundleDataBundlePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataBundlePage", function () {
      return DataBundlePage;
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


    var _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/navigation-service.service */
    "./src/app/services/navigation-service.service.ts");

    var DataBundlePage = /*#__PURE__*/function () {
      function DataBundlePage(router, navService) {
        _classCallCheck(this, DataBundlePage);

        this.router = router;
        this.navService = navService;
      }

      _createClass(DataBundlePage, [{
        key: "goBack",
        value: function goBack() {
          this.navService.navigateToPreviousPage();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "subscribeToService",
        value: function subscribeToService() {
          this.router.navigate(['/user-dashboard/wallet/confirm-payment/']);
        }
      }]);

      return DataBundlePage;
    }();

    DataBundlePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_3__["NavigationServiceService"]
      }];
    };

    DataBundlePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-data-bundle',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./data-bundle.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/data-bundle/data-bundle/data-bundle.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./data-bundle.page.scss */
      "./src/app/data-bundle/data-bundle/data-bundle.page.scss"))["default"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ../../../assets/css/main.scss */
      "./src/assets/css/main.scss"))["default"]]
    })], DataBundlePage);
    /***/
  },

  /***/
  "./src/app/services/navigation-service.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/services/navigation-service.service.ts ***!
    \********************************************************/

  /*! exports provided: NavigationServiceService */

  /***/
  function srcAppServicesNavigationServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationServiceService", function () {
      return NavigationServiceService;
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

    var NavigationServiceService = /*#__PURE__*/function () {
      function NavigationServiceService(router, navController) {
        _classCallCheck(this, NavigationServiceService);

        this.router = router;
        this.navController = navController;
      }

      _createClass(NavigationServiceService, [{
        key: "navigateToPreviousPage",
        value: function navigateToPreviousPage() {
          var url = this.router.url;

          if (url.match("(^\/[a-zA-Z0-9\-\.]*)$")) {
            navigator['app'].exitApp();
          } else {
            this.navController.navigateBack(url.replace(new RegExp("(\/([a-zA-Z0-9\-\.])*)$"), ""));
          }
        }
      }]);

      return NavigationServiceService;
    }();

    NavigationServiceService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }];
    };

    NavigationServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NavigationServiceService);
    /***/
  }
}]);
//# sourceMappingURL=data-bundle-data-bundle-module-es5.js.map