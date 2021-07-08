function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard/dashboard.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard/dashboard.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardDashboardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"container\">\n    <div class=\"container-fixed\">      \n      <ion-buttons class=\"ion-align-items-center\" mode='ios'>\n        <ion-button slot=\"start\" class=\"tool-text\" fill=\"clear\" (click)=\"gotoService('fund-transfer')\">          \n          <div class=\"avatar\">\n            <img src=\"../../assets/imgs/passport2.png\" alt=\"avatar\">\n            <span>Hi, {{userData.first_name}}</span>\n          </div>\n        </ion-button>\n        <ion-button slot=\"end\" class=\"tool-text\" fill=\"clear\" (click)=\"gotoService('add-money')\">          \n          Fund\n          <img src=\"../../assets/icon/add_money_icon.svg\" alt=\"add-money\" class=\"ml-1\">\n        </ion-button>\n      </ion-buttons>\n      <ion-row>\n        <ion-card color=\"primary\" mode=\"ios\">  \n          <ion-card-content >\n            <p class=\"text\">Available Balance</p> \n            <div class=\"amount\"> &#x20A6; {{userData.wallet_amount}}</div>\n            <ion-fab vertical=\"edge\" horizontal=\"start\" edge slot=\"fixed\">\n              <ion-fab-button class=\"ion-fab-button\">\n                <ion-icon name=\"wallet\" class=\"wallet\"></ion-icon>\n              </ion-fab-button>\n              <ion-fab-list class=\"list\" side=\"end\">\n                <ion-fab-button><ion-icon name=\"logo-vimeo\"></ion-icon><ion-label>&#x20A6; {{userData.points}}</ion-label></ion-fab-button>\n                 <ion-fab-button><ion-icon name=\"logo-vimeo\"></ion-icon><ion-label>&#x20A6; {{userData.points}}</ion-label></ion-fab-button>\n              </ion-fab-list>\n            </ion-fab>\n          </ion-card-content>\n        </ion-card>\n        <!--\n        <ion-card color=\"primary\" mode=\"ios\">  \n          <ion-card-content >\n            <p class=\"text\">Available Points</p> \n            <div class=\"amount\">{{userData.points}}</div>\n          </ion-card-content>\n        </ion-card>\n      -->\n      </ion-row>\n      <ion-refresher (ionRefresh)=\"doRefresh($event)\" slot=\"fixed\" pullFactor=\"1\" pullMin=\"50\" pullMax=\"200\">\n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n    </div>\n  </div>\n  <div class=\"container container-bg\">\n    <ion-buttons class=\"ion-align-items-center \" mode=\"ios\">\n      <ion-button slot=\"start\" class=\"tool-text\" fill=\"clear\" (click)=\"gotoService('fund-transfer')\">          \n        <h6 slot=\"center\">Services</h6>\n      </ion-button>\n      <ion-button slot=\"end\">          \n      </ion-button>\n    </ion-buttons>\n\n    <ion-grid>\n      <ion-row class=\"chip\" style=\"padding-right:-60px;\">\n        <ion-col>\n          <div>\n          <ion-chip (click)=\"gotoService('mobile-airtime')\" color=\"secondary\">\n              <ion-icon name=\"archive\" color=\"primary\"></ion-icon>\n          </ion-chip><br>\n          <ion-label color=\"dark\" style=\"padding-left:10px;\">Airtime</ion-label>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div>\n          <ion-chip color=\"secondary\" (click)=\"gotoService('data-bundle')\">\n              <ion-icon name=\"wallet\" color=\"primary\"></ion-icon>\n          </ion-chip><br>\n          <ion-label color=\"dark\" style=\"padding-left:0px;\">Data Bundle</ion-label>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div>\n            <ion-chip color=\"secondary\" (click)=\"gotoService('data-bundle')\">\n              <ion-icon name=\"archive\" color=\"primary\"></ion-icon>\n          </ion-chip><br>\n          <ion-label color=\"dark\" style=\"padding-left:0px;\">Share Data</ion-label>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"chip\">\n        <ion-col>\n          <div>\n          <ion-chip (click)=\"gotoService('electricity')\" color=\"secondary\">\n              <ion-icon name=\"archive\" color=\"primary\"></ion-icon>\n          </ion-chip><br>\n          <ion-label color=\"dark\" style=\"padding-left:0px;\">Electricity</ion-label>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div>\n          <ion-chip color=\"secondary\" (click)=\"gotoService('cable-tv')\">\n              <ion-icon name=\"wallet\" color=\"primary\"></ion-icon>\n          </ion-chip><br>\n          <ion-label color=\"dark\" style=\"padding-left:12px;\">Cable TV</ion-label>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div>\n            <ion-chip color=\"secondary\" (click)=\"gotoService('data-bundle')\">\n              <ion-icon name=\"archive\" color=\"primary\"></ion-icon>\n          </ion-chip><br>\n          <ion-label color=\"dark\" style=\"padding-left:0px;\">Load Voucher</ion-label>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"chip\">\n        <ion-col>\n          <div>\n          <ion-chip (click)=\"gotoService('mobile-airtime')\" color=\"secondary\">\n              <ion-icon name=\"archive\" color=\"primary\"></ion-icon>\n          </ion-chip><br>\n          <ion-label color=\"dark\" style=\"padding-left:0px;\">Bulk SMS</ion-label>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div>\n          <ion-chip color=\"secondary\" (click)=\"gotoService('data-bundle')\">\n              <ion-icon name=\"wallet\" color=\"primary\"></ion-icon>\n          </ion-chip><br>\n          <ion-label color=\"dark\" style=\"margin-left:-10px;\">Bulk Voice SMS</ion-label>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div>\n            <ion-chip color=\"secondary\" (click)=\"gotoService('data-bundle')\">\n              <ion-icon name=\"archive\" color=\"primary\"></ion-icon>\n          </ion-chip><br>\n          <ion-label color=\"dark\" style=\"margin-left:-1px;\">SIM Hosting</ion-label>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    \n    <ion-grid>\n      <ion-row>\n        <div class=\"box-md bg-primary\">\n          <span>MTN 1GB <br>\n          for 30days <br>\n          N475</span> <br>\n          <button ion-button (click)=\"gotoService('data-bundle')\">Top up</button>\n        </div>\n        <div class=\"box-md bg-purple\">\n          <span>MTN 2GB <br>\n            for 30days <br>\n            N950</span> <br>\n            <button ion-button (click)=\"gotoService('data-bundle')\">Top up</button>\n        </div>\n      </ion-row>\n      <ion-row>\n        <div class=\"box-md bg-secondary\">\n          <span>MTN 5GB <br>\n          for 30days \n          N2375</span> <br>\n          <button ion-button (click)=\"gotoService('data-bundle')\">Top up</button>\n        </div>\n        <div class=\"box-md bg-light\">\n         <span>Up to 5% off <br>\n          on mobile \n          recharge</span> <br>\n          <button ion-button (click)=\"gotoService('mobile-airtime')\">Recharge</button>\n        </div>\n      </ion-row>\n    </ion-grid>\n    <div class=\"slides\" id=\"slides\">\n      <ion-slides pager=\"false\" [options]=\"slideOpts\">\n        <ion-slide>\n         <img src=\"../../assets/imgs/Banner1.jpg\" alt=\"banner1\">\n        </ion-slide>\n        <ion-slide>\n          <img src=\"../../assets/imgs/Banner2.jpg\" alt=\"banner2\">\n        </ion-slide>\n        <ion-slide>\n          <img src=\"../../assets/imgs/Banner3.jpg\" alt=\"banner3\">\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: DashboardPageRoutingModule */

  /***/
  function srcAppDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function () {
      return DashboardPageRoutingModule;
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


    var _dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard/dashboard.page */
    "./src/app/dashboard/dashboard/dashboard.page.ts");

    var routes = [{
      path: '',
      component: _dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }];

    var DashboardPageRoutingModule = function DashboardPageRoutingModule() {
      _classCallCheck(this, DashboardPageRoutingModule);
    };

    DashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashboardPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/dashboard/dashboard.module.ts ***!
    \***********************************************/

  /*! exports provided: DashboardPageModule */

  /***/
  function srcAppDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function () {
      return DashboardPageModule;
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


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard/dashboard.page */
    "./src/app/dashboard/dashboard/dashboard.page.ts");

    var DashboardPageModule = function DashboardPageModule() {
      _classCallCheck(this, DashboardPageModule);
    };

    DashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"]],
      declarations: [_dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
    })], DashboardPageModule);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard/dashboard.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/dashboard/dashboard/dashboard.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardDashboardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  text-align: center;\n  margin: 10px auto auto 0px !important;\n  width: 299px !important;\n}\n\nh6 {\n  width: 72px !important;\n}\n\nion-buttons {\n  padding: 10px 20px !important;\n  /*\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-bottom: 5px;\n  padding-top: 40px;\n  */\n  justify-content: center;\n  margin-top: 20px;\n}\n\nion-buttons ion-button {\n  margin: 0 !important;\n  min-height: 40px;\n  --padding-end: 0px !important;\n  --padding-start: 0px !important;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 18px;\n}\n\n.box-md {\n  margin: 10px !important;\n}\n\n.container {\n  padding: 20px 30px 0px 30px !important;\n  margin: 0 auto;\n  position: relative;\n}\n\n.container-bg {\n  margin-top: 155px;\n  z-index: 1;\n  background: #f9fbff;\n}\n\n.container-bg ion-buttons {\n  padding-top: 5px !important;\n  padding-bottom: 5px !important;\n}\n\nion-grid {\n  margin: 0px !important;\n  padding: 0px !important;\n}\n\n.title {\n  padding: 0px !important;\n}\n\n@media screen and (min-width: 320px) and (max-width: 414px) {\n  .container {\n    padding: 20px 0px 0px 0px !important;\n  }\n  .container .box-sm, .container .box-md {\n    padding-right: 10px;\n  }\n}\n\nion-row {\n  color: #9ACD32 !important;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.box-sm {\n  width: 50% !important;\n}\n\n.products {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 10px;\n  line-height: 16px;\n}\n\n.slides {\n  margin: 20px 0px !important;\n}\n\n.container-fixed {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: #ffffff;\n  z-index: 99;\n  width: 100%;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.chip {\n  margin-left: -9px;\n  width: 120%;\n}\n\nion-chip {\n  height: 50px;\n  width: 50px;\n  border-radius: 10px;\n}\n\nion-label {\n  font-size: 9px;\n  font-weight: 800;\n  justify-content: center;\n  width: 200%;\n}\n\nion-icon {\n  padding-right: 8px;\n}\n\n.ion-fab-button {\n  height: 35px;\n  width: 35px;\n  margin-top: -80px;\n  margin-left: -10px;\n}\n\n.wallet {\n  justify: center;\n}\n\n.list {\n  margin-top: -14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC9DOlxcVXNlcnNcXExlbm92b1xcZG9jdW1lbnRzXFx2c2NfbG9jYWxfZGV2XFxuYXRpdmUtbW9iaWxlLWFwcFxcemFwcHlcXGZyb250ZW5kL3NyY1xcYXBwXFxkYXNoYm9hcmRcXGRhc2hib2FyZFxcZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FEQ0E7RUFDRyxzQkFBQTtBQ0VIOztBREFBO0VBQ0UsNkJBQUE7RUFDQTs7Ozs7R0FBQTtFQU1BLHVCQUFBO0VBR0MsZ0JBQUE7QUNDSDs7QURBRTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQ0E7RUFDRSx1QkFBQTtBQ0VGOztBRENBO0VBQ0Usc0NBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURDQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDRUY7O0FEREk7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FDR0o7O0FERUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRyx1QkFBQTtBQ0NIOztBRENBO0VBRUU7SUFDRSxvQ0FBQTtFQ0NGO0VEQ0U7SUFFQSxtQkFBQTtFQ0FGO0FBQ0Y7O0FES0E7RUFDRSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDSEY7O0FES0E7RUFDQyxxQkFBQTtBQ0ZEOztBRE1BO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDSEY7O0FETUE7RUFDRSwyQkFBQTtBQ0hGOztBRE1BO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNIRjs7QURNQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ0hGOztBRE1BO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0hGOztBRE1BO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBR0EsdUJBQUE7RUFDQSxXQUFBO0FDTEY7O0FEUUE7RUFFRSxrQkFBQTtBQ05GOztBRFVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDUEY7O0FEVUE7RUFDRSxlQUFBO0FDUEY7O0FEU0E7RUFDRSxpQkFBQTtBQ05GIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweCBhdXRvIGF1dG8gMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyOTlweCAhaW1wb3J0YW50O1xufVxuaDYge1xuICAgd2lkdGg6IDcycHggIWltcG9ydGFudDtcbn1cbmlvbi1idXR0b25zIHtcbiAgcGFkZGluZzogMTBweCAyMHB4ICFpbXBvcnRhbnQ7XG4gIC8qXG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICAqL1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLy9tYXJnaW46IDBweCBhdXRvIDBweCBhdXRvO1xuICAvL3dpZHRoOiAyOTlweDtcbiAgIG1hcmdpbi10b3A6MjBweDtcbiAgaW9uLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogNDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHggIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICB9XG59XG4uYm94LW1kIHtcbiAgbWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXJ7XG4gIHBhZGRpbmc6IDIwcHggMzBweCAwcHggMzBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG59XG4uY29udGFpbmVyLWJnIHtcbiAgbWFyZ2luLXRvcDogMTU1cHg7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJGNvbG9yOiAjMDAzNjc5LCAkYW1vdW50OiA3NSk7XG4gICAgaW9uLWJ1dHRvbnMge1xuICAgIHBhZGRpbmctdG9wOiA1cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuXG5pb24tZ3JpZCB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuXG59XG4udGl0bGUge1xuICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQxNHB4KSB7XG4gIFxuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAyMHB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgXG4gICAgLmJveC1zbSwgLmJveC1tZCB7XG4gICAgLy8gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICB9XG5cbiAgfVxufVxuXG5pb24tcm93IHtcbiAgY29sb3I6ICM5QUNEMzIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5ib3gtc20ge1xuIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAvLyBtYXJnaW46IDVweCAgIWltcG9ydGFudDtcbiAvL3BhZGRpbmctcmlnaHQ6MTBweDtcbn1cbi5wcm9kdWN0cyB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbn1cblxuLnNsaWRlcyB7XG4gIG1hcmdpbjogMjBweCAwcHggIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lci1maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB6LWluZGV4OiA5OTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDoxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OjEwcHg7XG59XG5cbi5jaGlwe1xuICBtYXJnaW4tbGVmdDotOXB4O1xuICB3aWR0aDoxMjAlO1xufVxuXG5pb24tY2hpcCB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6MTBweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOjlweDtcbiAgZm9udC13ZWlnaHQ6ODAwO1xuICAvL3RleHQtYWxpZ246Y2VudGVyO1xuIC8vZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAyMDAlO1xufVxuXG5pb24taWNvbiB7XG4gIC8vcGFkZGluZy1sZWZ0OjBweDtcbiAgcGFkZGluZy1yaWdodDo4cHg7XG4gIFxufVxuXG4uaW9uLWZhYi1idXR0b257XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6MzVweDtcbiAgbWFyZ2luLXRvcDotODBweDtcbiAgbWFyZ2luLWxlZnQ6LTEwcHg7XG59XG5cbi53YWxsZXQge1xuICBqdXN0aWZ5OmNlbnRlcjtcbn1cbi5saXN0e1xuICBtYXJnaW4tdG9wOi0xNHB4O1xufVxuIiwiaW9uLWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweCBhdXRvIGF1dG8gMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyOTlweCAhaW1wb3J0YW50O1xufVxuXG5oNiB7XG4gIHdpZHRoOiA3MnB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1idXR0b25zIHtcbiAgcGFkZGluZzogMTBweCAyMHB4ICFpbXBvcnRhbnQ7XG4gIC8qXG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICAqL1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbmlvbi1idXR0b25zIGlvbi1idXR0b24ge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4uYm94LW1kIHtcbiAgbWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAyMHB4IDMwcHggMHB4IDMwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbnRhaW5lci1iZyB7XG4gIG1hcmdpbi10b3A6IDE1NXB4O1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kOiAjZjlmYmZmO1xufVxuLmNvbnRhaW5lci1iZyBpb24tYnV0dG9ucyB7XG4gIHBhZGRpbmctdG9wOiA1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDVweCAhaW1wb3J0YW50O1xufVxuXG5pb24tZ3JpZCB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4udGl0bGUge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAyMHB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNvbnRhaW5lciAuYm94LXNtLCAuY29udGFpbmVyIC5ib3gtbWQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIH1cbn1cbmlvbi1yb3cge1xuICBjb2xvcjogIzlBQ0QzMiAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uYm94LXNtIHtcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xufVxuXG4ucHJvZHVjdHMge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbn1cblxuLnNsaWRlcyB7XG4gIG1hcmdpbjogMjBweCAwcHggIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lci1maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB6LWluZGV4OiA5OTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmNoaXAge1xuICBtYXJnaW4tbGVmdDogLTlweDtcbiAgd2lkdGg6IDEyMCU7XG59XG5cbmlvbi1jaGlwIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiA5cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMjAwJTtcbn1cblxuaW9uLWljb24ge1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG5cbi5pb24tZmFiLWJ1dHRvbiB7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDM1cHg7XG4gIG1hcmdpbi10b3A6IC04MHB4O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG5cbi53YWxsZXQge1xuICBqdXN0aWZ5OiBjZW50ZXI7XG59XG5cbi5saXN0IHtcbiAgbWFyZ2luLXRvcDogLTE0cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard/dashboard.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/dashboard/dashboard/dashboard.page.ts ***!
    \*******************************************************/

  /*! exports provided: DashboardPage */

  /***/
  function srcAppDashboardDashboardDashboardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPage", function () {
      return DashboardPage;
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

    var DashboardPage = /*#__PURE__*/function () {
      function DashboardPage(router) {
        _classCallCheck(this, DashboardPage);

        this.router = router;
        this.slideOpts = {
          slidesPerView: 1.2,
          spaceBetween: 16
        };
        this.userData = {
          first_name: '',
          last_name: '',
          wallet_amount: '',
          points: ''
        };
        console.log('Persistent A');
      }

      _createClass(DashboardPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('Persistent B');
          this.userData.first_name = localStorage.getItem("setting:first_name");
          this.userData.wallet_amount = localStorage.getItem("setting:wallet_amount");
          this.userData.points = localStorage.getItem("setting:points");

          if (!this.userData.first_name || !localStorage.getItem("setting:user_id")) {
            this.router.navigate(['/logout']);
          }

          console.log(this.userData.wallet_amount);
        }
      }, {
        key: "buyData",
        value: function buyData() {
          this.router.navigate(['/data-bundle']);
        }
      }, {
        key: "gotoService",
        value: function gotoService(data) {
          // console.log(data)
          this.router.navigate(['user-dashboard/home/' + data]);
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          this.userData.wallet_amount = localStorage.getItem("setting:wallet_amount");
          setTimeout(function () {
            event.target.complete();
          }, 2000);
        }
      }]);

      return DashboardPage;
    }();

    DashboardPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dashboard.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard/dashboard.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dashboard.page.scss */
      "./src/app/dashboard/dashboard/dashboard.page.scss"))["default"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ../../../assets/css/main.scss */
      "./src/assets/css/main.scss"))["default"]]
    })], DashboardPage);
    /***/
  }
}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map