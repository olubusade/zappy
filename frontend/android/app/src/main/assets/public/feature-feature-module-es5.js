function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feature-feature-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/feature/feature.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/feature/feature.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeatureFeatureFeaturePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons mode=\"ios\">\n      <ion-button>\n      </ion-button>\n      <ion-button></ion-button>\n    </ion-buttons>\n    <ion-title >Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"container\">\n    <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"features\" mode=\"ios\">\n      <ion-segment-button value=\"personal\">\n        <ion-label>Personal</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"security\">\n        <ion-label>Security</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"features\">\n        <ion-label>Features</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div class=\"avatar-main text-center\">\n    <img src=\"../../assets//imgs/passport2.png\" alt=\"\">\n    <div class=\"text-primary caption\" (click)=\"navigatePage('change-photo')\">\n      <label>\n        Tap to change picture\n        <input type=\"file\" name=\"photo\" hidden>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"details\">\n    <ion-grid>\n      <ion-row (click)=\"navigatePage('payment-methods')\">\n        <ion-col >Cards & Payment Methods</ion-col>\n        <ion-col size=\"1\">\n          <img src=\"../../assets/icon/right_arrow_icon.svg\" alt=\"\">\n        </ion-col>\n      </ion-row>\n      <ion-row (click)=\"navigatePage('download')\">\n        <ion-col>Download Statement of Accounts</ion-col>\n        <ion-col size=\"1\">\n          <img src=\"../../assets/icon/right_arrow_icon.svg\" alt=\"\">\n        </ion-col>\n      </ion-row>\n      <ion-row (click)=\"navigatePage('support')\">\n        <ion-col>Support</ion-col>\n        <ion-col size=\"1\">\n          <img src=\"../../assets/icon/right_arrow_icon.svg\" alt=\"\">\n        </ion-col>\n      </ion-row>\n      <ion-row (click)=\"navigatePage('terms')\">\n        <ion-col>Terms & Conditions</ion-col>\n        <ion-col size=\"1\">\n          <img src=\"../../assets/icon/right_arrow_icon.svg\" alt=\"\">\n        </ion-col>\n      </ion-row>\n      <ion-row (click)=\"navigatePage('privacy-policy')\">\n        <ion-col>Privacy & Policy</ion-col>\n        <ion-col size=\"1\">\n          <img src=\"../../assets/icon/right_arrow_icon.svg\" alt=\"\">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/feature/feature-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/feature/feature-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: FeaturePageRoutingModule */

  /***/
  function srcAppFeatureFeatureRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeaturePageRoutingModule", function () {
      return FeaturePageRoutingModule;
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


    var _feature_feature_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./feature/feature.page */
    "./src/app/feature/feature/feature.page.ts");

    var routes = [{
      path: '',
      component: _feature_feature_page__WEBPACK_IMPORTED_MODULE_3__["FeaturePage"]
    }];

    var FeaturePageRoutingModule = function FeaturePageRoutingModule() {
      _classCallCheck(this, FeaturePageRoutingModule);
    };

    FeaturePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FeaturePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/feature/feature.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/feature/feature.module.ts ***!
    \*******************************************/

  /*! exports provided: FeaturePageModule */

  /***/
  function srcAppFeatureFeatureModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeaturePageModule", function () {
      return FeaturePageModule;
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


    var _feature_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./feature-routing.module */
    "./src/app/feature/feature-routing.module.ts");
    /* harmony import */


    var _feature_feature_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./feature/feature.page */
    "./src/app/feature/feature/feature.page.ts");

    var FeaturePageModule = function FeaturePageModule() {
      _classCallCheck(this, FeaturePageModule);
    };

    FeaturePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _feature_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeaturePageRoutingModule"]],
      declarations: [_feature_feature_page__WEBPACK_IMPORTED_MODULE_6__["FeaturePage"]]
    })], FeaturePageModule);
    /***/
  },

  /***/
  "./src/app/feature/feature/feature.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/feature/feature/feature.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeatureFeatureFeaturePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".details {\n  height: 60vh;\n  padding-right: 0 !important;\n}\n.details h2 {\n  width: 118px;\n  height: 12px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 12px;\n  color: rgba(42, 43, 42, 0.6);\n  padding: 0 !important;\n  margin: 0 !important;\n}\nion-row {\n  padding-right: 20px !important;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500 !important;\n  font-size: 14px !important;\n  line-height: 12px;\n  color: #003679;\n}\n.avatar-main .caption {\n  height: 12px;\n  font-weight: normal;\n  font-size: 8px;\n  line-height: 12px;\n  color: rgba(0, 54, 121, 0.6);\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9mZWF0dXJlL0M6XFxVc2Vyc1xcTGVub3ZvXFxkb2N1bWVudHNcXHZzY19sb2NhbF9kZXZcXG5hdGl2ZS1tb2JpbGUtYXBwXFx6YXBweVxcZnJvbnRlbmQvc3JjXFxhcHBcXGZlYXR1cmVcXGZlYXR1cmVcXGZlYXR1cmUucGFnZS5zY3NzIiwic3JjL2FwcC9mZWF0dXJlL2ZlYXR1cmUvZmVhdHVyZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsMkJBQUE7QUNDRjtBRENFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUNDSjtBREdBO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0FGO0FER0E7RUFFRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlL2ZlYXR1cmUvZmVhdHVyZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlscyB7XG4gIGhlaWdodDogNjB2aDtcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xuXG4gIGgyIHtcbiAgICB3aWR0aDogMTE4cHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICBjb2xvcjogcmdiYSg0MiwgNDMsIDQyLCAwLjYpO1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgfVxufVxuXG5pb24tcm93IHtcbiAgcGFkZGluZy1yaWdodDogMjBweCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICBjb2xvcjogIzAwMzY3OTtcbn1cblxuLmF2YXRhci1tYWluIC5jYXB0aW9uIHtcbiAgLy8gd2lkdGg6IDg5cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDhweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIGNvbG9yOiByZ2JhKDAsIDU0LCAxMjEsIDAuNik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCIuZGV0YWlscyB7XG4gIGhlaWdodDogNjB2aDtcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuLmRldGFpbHMgaDIge1xuICB3aWR0aDogMTE4cHg7XG4gIGhlaWdodDogMTJweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbiAgY29sb3I6IHJnYmEoNDIsIDQzLCA0MiwgMC42KTtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLXJvdyB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICBjb2xvcjogIzAwMzY3OTtcbn1cblxuLmF2YXRhci1tYWluIC5jYXB0aW9uIHtcbiAgaGVpZ2h0OiAxMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDhweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIGNvbG9yOiByZ2JhKDAsIDU0LCAxMjEsIDAuNik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/feature/feature/feature.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/feature/feature/feature.page.ts ***!
    \*************************************************/

  /*! exports provided: FeaturePage */

  /***/
  function srcAppFeatureFeatureFeaturePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeaturePage", function () {
      return FeaturePage;
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

    var FeaturePage = /*#__PURE__*/function () {
      function FeaturePage(router) {
        _classCallCheck(this, FeaturePage);

        this.router = router;
      }

      _createClass(FeaturePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "segmentChanged",
        value: function segmentChanged(ev) {
          var page = ev.detail.value;

          if (page === 'personal') {
            this.router.navigate(['/user-dashboard/profile']);
          } else {
            this.router.navigate(['/user-dashboard/profile/' + page]);
          }
        }
      }, {
        key: "navigatePage",
        value: function navigatePage(data) {
          if (data === 'change-photo') {
            this.router.navigate(['/user-dashboard/profile/' + data]);
          } else {
            this.router.navigate(['/user-dashboard/profile/features/' + data]);
          }
        }
      }]);

      return FeaturePage;
    }();

    FeaturePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    FeaturePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-feature',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./feature.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/feature/feature.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./feature.page.scss */
      "./src/app/feature/feature/feature.page.scss"))["default"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ../../../assets/css/main.scss */
      "./src/assets/css/main.scss"))["default"]]
    })], FeaturePage);
    /***/
  }
}]);
//# sourceMappingURL=feature-feature-module-es5.js.map