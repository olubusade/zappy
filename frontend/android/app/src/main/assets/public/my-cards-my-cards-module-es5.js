function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-cards-my-cards-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/my-cards/my-cards/my-cards.page.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-cards/my-cards/my-cards.page.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMyCardsMyCardsMyCardsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons mode=\"ios\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon ios=\"arrow-back-outline\" md=\"arrow-back\"></ion-icon>\n      </ion-button>\n      <ion-button></ion-button>\n    </ion-buttons>\n    <ion-title >My Cards</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"slides\" id=\"slides\">\n    <ion-slides pager=\"true\" [options]=\"slideOpts\" speed=\"2\" mode=\"ios\">\n      <ion-slide>\n        <ion-card mode=\"ios\" color=\"primary\">  \n          <ion-card-content class=\"debit-card\">\n            <div class=\"caption text-white\">\n              <h5>xxxx xxxx xxxx 6743</h5>\n              <div class=\"bottom\">\n                <h5>25/05/2020</h5>\n                <span class=\"d-flexs mr-2\">\n                  <img src=\"../../assets/icon/mastercard_circles_icon.svg\" alt=\"\">                  \n                </span>\n              </div>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-slide> \n\n      <ion-slide>\n        <ion-card mode=\"ios\" class=\"bg-secondary-light\">  \n          <ion-card-content class=\"debit-card\">\n            <div class=\"caption text-primary\">\n              <h5>xxxx xxxx xxxx 6743</h5>\n              <div class=\"bottom\">\n                <h5>25/05/2020</h5>\n                <span class=\"d-flexs mr-2\">\n                  <img src=\"../../assets/icon/mastercard_circles_icon.svg\" alt=\"\">                  \n                </span>\n              </div>\n            </div>\n          </ion-card-content>\n        </ion-card>       \n      </ion-slide>\n\n      <ion-slide>\n          <ion-card mode=\"ios\" class=\"bg-purple\">  \n            <ion-card-content class=\"debit-card\">\n              <div class=\"caption text-white\">\n                <h5>xxxx xxxx xxxx 6743</h5>\n                <div class=\"bottom\">\n                  <h5>25/05/2020</h5>\n                  <span class=\"d-flexs mr-2\">\n                    <img src=\"../../assets/icon/mastercard_circles_icon.svg\" alt=\"\">                  \n                  </span>\n                </div>\n              </div>\n            </ion-card-content>\n          </ion-card>\n      </ion-slide>\n\n    </ion-slides>\n\n    <div class=\"details\">\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"label\">Issuer Bank</ion-col>\n          <ion-col class=\"text-right\">\n            Guaranty Trust Bank\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"label\">Added on</ion-col>\n          <ion-col class=\"text-right\">\n            May 25, 2020\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"label\">Expiry Date</ion-col>\n          <ion-col class=\"text-right\">\n            25/05/2024\n          </ion-col>\n        </ion-row>\n      </ion-grid>  <br>\n      <div class=\"ion-text-center\">\n        <button class=\"btn btn-danger text-white\" mode=\"ios\" (click)=\"navigatePage('add-card')\">\n          Delete Card\n        </button>\n      </div>\n    </div>\n  </div>\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/my-cards/my-cards-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/my-cards/my-cards-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: MyCardsPageRoutingModule */

  /***/
  function srcAppMyCardsMyCardsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyCardsPageRoutingModule", function () {
      return MyCardsPageRoutingModule;
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


    var _my_cards_my_cards_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-cards/my-cards.page */
    "./src/app/my-cards/my-cards/my-cards.page.ts");

    var routes = [{
      path: '',
      component: _my_cards_my_cards_page__WEBPACK_IMPORTED_MODULE_3__["MyCardsPage"]
    }];

    var MyCardsPageRoutingModule = function MyCardsPageRoutingModule() {
      _classCallCheck(this, MyCardsPageRoutingModule);
    };

    MyCardsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyCardsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/my-cards/my-cards.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/my-cards/my-cards.module.ts ***!
    \*********************************************/

  /*! exports provided: MyCardsPageModule */

  /***/
  function srcAppMyCardsMyCardsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyCardsPageModule", function () {
      return MyCardsPageModule;
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


    var _my_cards_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./my-cards-routing.module */
    "./src/app/my-cards/my-cards-routing.module.ts");
    /* harmony import */


    var _my_cards_my_cards_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./my-cards/my-cards.page */
    "./src/app/my-cards/my-cards/my-cards.page.ts");

    var MyCardsPageModule = function MyCardsPageModule() {
      _classCallCheck(this, MyCardsPageModule);
    };

    MyCardsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _my_cards_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyCardsPageRoutingModule"]],
      declarations: [_my_cards_my_cards_page__WEBPACK_IMPORTED_MODULE_6__["MyCardsPage"]]
    })], MyCardsPageModule);
    /***/
  },

  /***/
  "./src/app/my-cards/my-cards/my-cards.page.scss":
  /*!******************************************************!*\
    !*** ./src/app/my-cards/my-cards/my-cards.page.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMyCardsMyCardsMyCardsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  text-align: center;\n  margin-top: 20px !important;\n  width: 299px !important;\n  height: 150px !important;\n}\nion-card .caption {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16px;\n  padding-left: 10px !important;\n}\nion-title {\n  text-align: center;\n}\nion-toolbar {\n  --paddin-end: 0px;\n  --padding-start: 0px;\n}\n.swiper-pagination {\n  position: absolute;\n  display: none !important;\n}\nion-slide {\n  --padding-start: 0px !important;\n  --padding-end: 0px !important;\n  --margin: 10px 0px 10px 0px !important;\n  width: 100% !important;\n}\nion-slide > :first-child {\n  width: 100%;\n  margin: 30px 30px 35px 30px !important;\n}\nion-slide > :first-child .slider .slider-pager {\n  color: red !important;\n}\n.text-right {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500 !important;\n  font-size: 12px !important;\n  line-height: 12px !important;\n  text-align: center;\n  color: rgba(0, 54, 121, 0.6) !important;\n}\n.details {\n  padding: 0px 10px !important;\n}\nion-button {\n  width: 241px;\n  --border-radius: 6px;\n  margin: 0 auto;\n  font-style: normal;\n  font-weight: 500 !important;\n  font-size: 14px !important;\n  line-height: 22px !important;\n}\nion-row {\n  padding: 18px 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktY2FyZHMvbXktY2FyZHMvQzpcXFVzZXJzXFxMZW5vdm9cXGRvY3VtZW50c1xcdnNjX2xvY2FsX2RldlxcbmF0aXZlLW1vYmlsZS1hcHBcXHphcHB5XFxmcm9udGVuZC9zcmNcXGFwcFxcbXktY2FyZHNcXG15LWNhcmRzXFxteS1jYXJkcy5wYWdlLnNjc3MiLCJzcmMvYXBwL215LWNhcmRzL215LWNhcmRzL215LWNhcmRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0FDQ0Y7QURFRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FDQUo7QURJQTtFQUNFLGtCQUFBO0FDREY7QURJQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUNERjtBRElBO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtBQ0RGO0FESUE7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQkFBQTtBQ0RGO0FER0E7RUFDRSxXQUFBO0VBQ0Esc0NBQUE7QUNBRjtBRENFO0VBQ0UscUJBQUE7QUNDSjtBREdBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7QUNBRjtBRElBO0VBQ0UsNEJBQUE7QUNERjtBRElBO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FDREY7QURLQTtFQUNFLDZCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9teS1jYXJkcy9teS1jYXJkcy9teS1jYXJkcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMjk5cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xuXG5cbiAgLmNhcHRpb24ge1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbmlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbi1lbmQ6IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5pb24tc2xpZGUge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctZW5kOiAwcHggIWltcG9ydGFudDtcbiAgLS1tYXJnaW46IDEwcHggMHB4IDEwcHggMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5pb24tc2xpZGUgPjpmaXJzdC1jaGlsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDMwcHggMzBweCAzNXB4IDMwcHggIWltcG9ydGFudDtcbiAgLnNsaWRlciAuc2xpZGVyLXBhZ2VyIHtcbiAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLnRleHQtcmlnaHQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJnYmEoMCwgNTQsIDEyMSwgMC42KSAhaW1wb3J0YW50O1xufVxuXG5cbi5kZXRhaWxzIHtcbiAgcGFkZGluZzogMHB4IDEwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAyNDFweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XG4gIFxufVxuXG5pb24tcm93IHtcbiAgcGFkZGluZzogMThweCAyMHB4ICFpbXBvcnRhbnQ7XG59XG4iLCJpb24tY2FyZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMjk5cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xufVxuaW9uLWNhcmQgLmNhcHRpb24ge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbi1lbmQ6IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5pb24tc2xpZGUge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctZW5kOiAwcHggIWltcG9ydGFudDtcbiAgLS1tYXJnaW46IDEwcHggMHB4IDEwcHggMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zbGlkZSA+IDpmaXJzdC1jaGlsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDMwcHggMzBweCAzNXB4IDMwcHggIWltcG9ydGFudDtcbn1cbmlvbi1zbGlkZSA+IDpmaXJzdC1jaGlsZCAuc2xpZGVyIC5zbGlkZXItcGFnZXIge1xuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXJpZ2h0IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJnYmEoMCwgNTQsIDEyMSwgMC42KSAhaW1wb3J0YW50O1xufVxuXG4uZGV0YWlscyB7XG4gIHBhZGRpbmc6IDBweCAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1idXR0b24ge1xuICB3aWR0aDogMjQxcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMjJweCAhaW1wb3J0YW50O1xufVxuXG5pb24tcm93IHtcbiAgcGFkZGluZzogMThweCAyMHB4ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/my-cards/my-cards/my-cards.page.ts":
  /*!****************************************************!*\
    !*** ./src/app/my-cards/my-cards/my-cards.page.ts ***!
    \****************************************************/

  /*! exports provided: MyCardsPage */

  /***/
  function srcAppMyCardsMyCardsMyCardsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyCardsPage", function () {
      return MyCardsPage;
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

    var MyCardsPage = /*#__PURE__*/function () {
      function MyCardsPage(router, navService) {
        _classCallCheck(this, MyCardsPage);

        this.router = router;
        this.navService = navService;
        this.slideOpts = {
          slidesPerView: 1,
          spaceBetween: -35
        };
      }

      _createClass(MyCardsPage, [{
        key: "goBack",
        value: function goBack() {
          this.navService.navigateToPreviousPage();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "segmentChanged",
        value: function segmentChanged(ev) {
          var page = ev.detail.value;

          if (page === 'wallet') {
            this.router.navigate(['/user-dashboard/wallet']);
          } else {
            this.router.navigate(['/user-dashboard/wallet/' + page]);
          }
        }
      }, {
        key: "navigatePage",
        value: function navigatePage(data) {
          console.log(data);
          this.router.navigate(['/user-dashboard/wallet/' + data]);
        }
      }]);

      return MyCardsPage;
    }();

    MyCardsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_3__["NavigationServiceService"]
      }];
    };

    MyCardsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-cards',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./my-cards.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/my-cards/my-cards/my-cards.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./my-cards.page.scss */
      "./src/app/my-cards/my-cards/my-cards.page.scss"))["default"]]
    })], MyCardsPage);
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
//# sourceMappingURL=my-cards-my-cards-module-es5.js.map