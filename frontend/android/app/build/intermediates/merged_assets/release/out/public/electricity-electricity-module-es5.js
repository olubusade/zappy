function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["electricity-electricity-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/electricity/electricity/electricity.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/electricity/electricity/electricity.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppElectricityElectricityElectricityPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"header-bg\">\n  <ion-toolbar mode=\"ios\" color=\"none\" class=\"text-white\">\n    <ion-buttons mode=\"ios\">\n      <ion-button (click)=\"goBack()\" slot=\"start\">\n        <ion-icon ios=\"arrow-back-outline\" md=\"arrow-back\"></ion-icon>\n      </ion-button>\n      <ion-button slot=\"end\">\n        <ion-icon name=\"alert-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title >Electricity Bills</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">    \n    <div class=\"brand\">\n      <img src=\"../../assets/imgs/logo.png\" alt=\"adikpopay-logo\" />\n    </div>\n    <div>\n      <ion-item lines=\"none\" >\n        <ion-label *ngIf=\"!isSelected\">Select meter location</ion-label>\n        <ion-select \n          okText=\"Okay\" \n          cancelText=\"Dismiss\" \n          required \n          (ionChange)=\"onChnage()\"\n          >\n          <ion-select-option *ngFor=\"let provider of powerproviders\" [value]=\"provider.value\">\n            {{provider.name}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n  \n      <ion-item lines=\"none\">\n        <ion-input placeholder=\"Meter number\" size=\"number\" type=\"text\" required></ion-input>\n      </ion-item>\n  \n      <ion-item lines=\"none\">\n        <ion-input placeholder=\"Amount\" type=\"number\" required></ion-input>\n      </ion-item>  \n    </div>\n    <div class=\"ion-text-center\">      \n      <ion-button color=\"primary\" (click)=\"subscribeToService()\" mode='ios'>\n        Continue\n      </ion-button>\n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/electricity/electricity-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/electricity/electricity-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ElectricityPageRoutingModule */

  /***/
  function srcAppElectricityElectricityRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ElectricityPageRoutingModule", function () {
      return ElectricityPageRoutingModule;
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


    var _electricity_electricity_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./electricity/electricity.page */
    "./src/app/electricity/electricity/electricity.page.ts");

    var routes = [{
      path: '',
      component: _electricity_electricity_page__WEBPACK_IMPORTED_MODULE_3__["ElectricityPage"]
    }];

    var ElectricityPageRoutingModule = function ElectricityPageRoutingModule() {
      _classCallCheck(this, ElectricityPageRoutingModule);
    };

    ElectricityPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ElectricityPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/electricity/electricity.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/electricity/electricity.module.ts ***!
    \***************************************************/

  /*! exports provided: ElectricityPageModule */

  /***/
  function srcAppElectricityElectricityModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ElectricityPageModule", function () {
      return ElectricityPageModule;
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


    var _electricity_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./electricity-routing.module */
    "./src/app/electricity/electricity-routing.module.ts");
    /* harmony import */


    var _electricity_electricity_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./electricity/electricity.page */
    "./src/app/electricity/electricity/electricity.page.ts");

    var ElectricityPageModule = function ElectricityPageModule() {
      _classCallCheck(this, ElectricityPageModule);
    };

    ElectricityPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _electricity_routing_module__WEBPACK_IMPORTED_MODULE_5__["ElectricityPageRoutingModule"]],
      declarations: [_electricity_electricity_page__WEBPACK_IMPORTED_MODULE_6__["ElectricityPage"]]
    })], ElectricityPageModule);
    /***/
  },

  /***/
  "./src/app/electricity/electricity/electricity.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/electricity/electricity/electricity.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppElectricityElectricityElectricityPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import 'https://fonts.google.com/specimen/Nunito?query=nuni';\nion-header {\n  color: #ffffff;\n  font-weight: 400;\n}\n.signup {\n  height: 50vh;\n  margin: 10px 30px;\n}\n.brand img {\n  width: 100% !important;\n  padding: 30px;\n}\nion-title {\n  color: #ffffff !important;\n}\nion-toolbar ion-icon {\n  color: #ffffff !important;\n}\nion-toolbar ion-buttons {\n  width: 100% !important;\n}\nion-toolbar ion-title {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500 !important;\n  font-size: 16px !important;\n  line-height: 24px !important;\n  letter-spacing: 0.05em !important;\n}\nion-button {\n  width: 100%;\n}\nion-item {\n  color: #003679;\n  --background: rgba(0, 54, 121, 0.1) !important;\n  border-radius: 6px;\n  --min-height: 40px;\n  margin: 10px !important;\n}\nion-input, ion-select {\n  --placeholder-opacity: .9 !important;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 18px;\n  --placeholder-color: rgba(0, 54, 121, 0.6) !important;\n}\nion-button {\n  width: 241px;\n  min-height: 40px;\n  --border-radius: 6px !important;\n  margin-top: 10px !important;\n}\n.bg-white {\n  background: #ffffff !important;\n}\nion-label {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px !important;\n  line-height: 18px;\n  color: rgba(0, 54, 121, 0.6) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWxlY3RyaWNpdHkvZWxlY3RyaWNpdHkvQzpcXFVzZXJzXFxMZW5vdm9cXGRvY3VtZW50c1xcdnNjX2xvY2FsX2RldlxcbmF0aXZlLW1vYmlsZS1hcHBcXHphcHB5XFxmcm9udGVuZC9zcmNcXGFwcFxcZWxlY3RyaWNpdHlcXGVsZWN0cmljaXR5XFxlbGVjdHJpY2l0eS5wYWdlLnNjc3MiLCJzcmMvYXBwL2VsZWN0cmljaXR5L2VsZWN0cmljaXR5L2VsZWN0cmljaXR5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw2REFBQTtBQUVSO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDQUY7QURJQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ0RGO0FEaURFO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0FDOUNKO0FEa0RBO0VBQ0UseUJBQUE7QUMvQ0Y7QURrREU7RUFDRSx5QkFBQTtBQy9DSjtBRGlERTtFQUNFLHNCQUFBO0FDL0NKO0FEaURFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLGlDQUFBO0FDL0NKO0FEbURBO0VBQ0UsV0FBQTtBQ2hERjtBRG1EQTtFQUNFLGNBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ2hERjtBRGtEQTtFQUNFLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFEQUFBO0FDL0NGO0FEa0RBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSwyQkFBQTtBQy9DRjtBRGtEQTtFQUNFLDhCQUFBO0FDL0NGO0FEa0RBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO0FDL0NGIiwiZmlsZSI6InNyYy9hcHAvZWxlY3RyaWNpdHkvZWxlY3RyaWNpdHkvZWxlY3RyaWNpdHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnaHR0cHM6Ly9mb250cy5nb29nbGUuY29tL3NwZWNpbWVuL051bml0bz9xdWVyeT1udW5pJztcblxuaW9uLWhlYWRlciAge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuXG4uc2lnbnVwIHtcbiAgaGVpZ2h0OiA1MHZoO1xuICBtYXJnaW46IDEwcHggMzBweDtcblxuXG4gIFxuICAvLyBmb3JtIHtcbiAgLy8gICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcbiAgLy8gICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xuICAvLyAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIC8vICAgd2lkdGg6IDEwMCU7XG4gIC8vICAgcGFkZGluZzogNTBweCAyMHB4O1xuXG4gIC8vICAgaW5wdXQge1xuICAvLyAgICAgcGFkZGluZzogMTBweDtcbiAgLy8gICAgIG1hcmdpbjogNXB4IDA7XG4gIC8vICAgICB3aWR0aDogOTAlO1xuICAvLyAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAvLyAgICAgYm9yZGVyOiBub25lO1xuICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTdlOTtcblxuICAvLyAgICAgJjo6cGxhY2Vob2xkZXIge1xuICAvLyAgICAgICBjb2xvcjogIzM4NTY5QTtcbiAgLy8gICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAvLyAgICAgfVxuXG4gIC8vICAgICAmOmZvY3VzIHtcbiAgLy8gICAgICAgb3V0bGluZTogc29saWQgIzM4NTY5QSAxcHg7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyAgIHNlbGVjdCB7XG4gIC8vICAgICB3aWR0aDogOTAlO1xuICAvLyAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAvLyAgICAgbWFyZ2luOiA1cHggMDtcbiAgLy8gICAgIHBhZGRpbmc6IDEwcHg7XG4gIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlN2U5O1xuICAvLyAgICAgYm9yZGVyOiBub25lO1xuXG4gIC8vICAgICAmOjpwbGFjZWhvbGRlciB7XG4gIC8vICAgICAgIGNvbG9yOiAjMzg1NjlBO1xuICAvLyAgICAgfVxuICAvLyAgIH1cblxuICAvLyAgIGJ1dHRvbiB7XG4gIC8vICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAvLyAgIH1cbiAgLy8gfVxufVxuXG4uYnJhbmQge1xuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMzBweDtcbiAgfVxufSBcblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cbmlvbi10b29sYmFyIHtcbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW9uLWJ1dHRvbnMge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW9uLXRpdGxlIHtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtICFpbXBvcnRhbnQ7XG5cbiAgfVxufVxuaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24taXRlbSB7XG4gIGNvbG9yOiAjMDAzNjc5O1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMCwgNTQsIDEyMSwgMC4xKSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIC0tbWluLWhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5pb24taW5wdXQsIGlvbi1zZWxlY3R7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogLjkgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2JhKDAsIDU0LCAxMjEsIDAuNikgIWltcG9ydGFudDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAyNDFweDtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uYmctd2hpdGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBjb2xvcjogcmdiYSgwLCA1NCwgMTIxLCAwLjYpICFpbXBvcnRhbnQ7XG59IiwiQGltcG9ydCAnaHR0cHM6Ly9mb250cy5nb29nbGUuY29tL3NwZWNpbWVuL051bml0bz9xdWVyeT1udW5pJztcbmlvbi1oZWFkZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnNpZ251cCB7XG4gIGhlaWdodDogNTB2aDtcbiAgbWFyZ2luOiAxMHB4IDMwcHg7XG59XG5cbi5icmFuZCBpbWcge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9vbGJhciBpb24taWNvbiB7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5pb24tdG9vbGJhciBpb24tYnV0dG9ucyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5pb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbSAhaW1wb3J0YW50O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1pdGVtIHtcbiAgY29sb3I6ICMwMDM2Nzk7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgwLCA1NCwgMTIxLCAwLjEpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgLS1taW4taGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IDEwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0LCBpb24tc2VsZWN0IHtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAuOSAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiYSgwLCA1NCwgMTIxLCAwLjYpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1idXR0b24ge1xuICB3aWR0aDogMjQxcHg7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmJnLXdoaXRlIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBjb2xvcjogcmdiYSgwLCA1NCwgMTIxLCAwLjYpICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/electricity/electricity/electricity.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/electricity/electricity/electricity.page.ts ***!
    \*************************************************************/

  /*! exports provided: ElectricityPage */

  /***/
  function srcAppElectricityElectricityElectricityPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ElectricityPage", function () {
      return ElectricityPage;
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

    var ElectricityPage = /*#__PURE__*/function () {
      function ElectricityPage(router, navService) {
        _classCallCheck(this, ElectricityPage);

        this.router = router;
        this.navService = navService;
        this.powerproviders = [{
          id: 1,
          name: 'EKDC',
          value: 'ekdc'
        }, {
          id: 2,
          name: 'IKDC',
          value: 'ikdc'
        }, {
          id: 3,
          name: 'IBDC',
          value: 'ibdc'
        }];
        this.isSelected = false;
      }

      _createClass(ElectricityPage, [{
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
      }, {
        key: "onChnage",
        value: function onChnage() {
          this.isSelected = true;
        }
      }, {
        key: "updateColor",
        value: function updateColor(color) {
          document.documentElement.style.setProperty("--ion-background-color", color);
        }
      }]);

      return ElectricityPage;
    }();

    ElectricityPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_3__["NavigationServiceService"]
      }];
    };

    ElectricityPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-electricity',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./electricity.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/electricity/electricity/electricity.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./electricity.page.scss */
      "./src/app/electricity/electricity/electricity.page.scss"))["default"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ../../../assets/css/main.scss */
      "./src/assets/css/main.scss"))["default"]]
    })], ElectricityPage);
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
//# sourceMappingURL=electricity-electricity-module-es5.js.map