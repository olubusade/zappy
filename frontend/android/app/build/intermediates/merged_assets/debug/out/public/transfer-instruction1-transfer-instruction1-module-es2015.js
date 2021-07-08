(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transfer-instruction1-transfer-instruction1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/transfer-instruction1/transfer-instruction1.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/transfer-instruction1/transfer-instruction1.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons mode=\"ios\">\n      <ion-button  (click)=\"goBack()\">\n        <ion-icon name=\"arrow-back\" ></ion-icon>\n      </ion-button>\n      <ion-button></ion-button>\n    </ion-buttons>\n    <ion-title >Payment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"brand\">\n    <img src=\"../../assets/imgs/logo.png\" alt=\"logo\">\n  </div>\n  <div class=\"layout-center\">\n    <ion-card color=\"white\">\n      <ion-card-content>\n        <h6 class=\"text-primary text-center\">Transfer Instructions</h6>\n        <div class=\"\">\n          <p>By selecting the Bank Transfer option, you agree to\n            make an Internet Transfer as payment for your \n            transaction.\n          </p>\n            <ion-row class=\"ion-justify-content-between ion-align-items-center\">\n              Click to accept Bank Transfer terms\n              <input type=\"checkbox\" name=\"accept\" id=\"accept\" (click)=\"acceptTransfer()\">\n            </ion-row>\n        </div>\n        <div id=\"details\" class=\"hidden\">\n          <div class=\"divider\"></div>\n          <ion-row>   \n            Bank: First Bank Nigeria        \n          </ion-row>\n          <ion-row>   \n            Name: AdikpoPay        \n          </ion-row>\n          <ion-row>   \n            Account no: 0032156789        \n          </ion-row>\n          <ion-row>   \n            Amount: NGN5,000.00        \n          </ion-row>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  \n  <div class=\"paystack\">\n    <img src=\"../../assets//icon/paystack_icon.svg\" alt=\"paystack\">\n    <h6 class=\"text-primary ml-1\">\n      Secured by Paystack\n    </h6>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/services/navigation-service.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/navigation-service.service.ts ***!
  \********************************************************/
/*! exports provided: NavigationServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationServiceService", function() { return NavigationServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let NavigationServiceService = class NavigationServiceService {
    constructor(router, navController) {
        this.router = router;
        this.navController = navController;
    }
    navigateToPreviousPage() {
        const url = this.router.url;
        if (url.match("(^\/[a-zA-Z0-9\-\.]*)$")) {
            navigator['app'].exitApp();
        }
        else {
            this.navController.navigateBack(url.replace(new RegExp("(\/([a-zA-Z0-9\-\.])*)$"), ""));
        }
    }
};
NavigationServiceService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
NavigationServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NavigationServiceService);



/***/ }),

/***/ "./src/app/transfer-instruction1/transfer-instruction1-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/transfer-instruction1/transfer-instruction1-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: TransferInstruction1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferInstruction1PageRoutingModule", function() { return TransferInstruction1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _transfer_instruction1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transfer-instruction1.page */ "./src/app/transfer-instruction1/transfer-instruction1.page.ts");




const routes = [
    {
        path: '',
        component: _transfer_instruction1_page__WEBPACK_IMPORTED_MODULE_3__["TransferInstruction1Page"]
    }
];
let TransferInstruction1PageRoutingModule = class TransferInstruction1PageRoutingModule {
};
TransferInstruction1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TransferInstruction1PageRoutingModule);



/***/ }),

/***/ "./src/app/transfer-instruction1/transfer-instruction1.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/transfer-instruction1/transfer-instruction1.module.ts ***!
  \***********************************************************************/
/*! exports provided: TransferInstruction1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferInstruction1PageModule", function() { return TransferInstruction1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _transfer_instruction1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transfer-instruction1-routing.module */ "./src/app/transfer-instruction1/transfer-instruction1-routing.module.ts");
/* harmony import */ var _transfer_instruction1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transfer-instruction1.page */ "./src/app/transfer-instruction1/transfer-instruction1.page.ts");







let TransferInstruction1PageModule = class TransferInstruction1PageModule {
};
TransferInstruction1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _transfer_instruction1_routing_module__WEBPACK_IMPORTED_MODULE_5__["TransferInstruction1PageRoutingModule"]
        ],
        declarations: [_transfer_instruction1_page__WEBPACK_IMPORTED_MODULE_6__["TransferInstruction1Page"]]
    })
], TransferInstruction1PageModule);



/***/ }),

/***/ "./src/app/transfer-instruction1/transfer-instruction1.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/transfer-instruction1/transfer-instruction1.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: rgba(0, 0, 92, 0.02);\n}\n\nion-card {\n  background: #ffffff;\n  border-radius: 4px;\n  margin: 0px 17px;\n  height: auto !important;\n  padding: 0px !important;\n}\n\nion-card-content {\n  color: #003679;\n  padding: 0 !important;\n}\n\nion-card-content span {\n  align-items: center;\n  margin: 10px 0;\n  font-size: 12px;\n  font-weight: 550;\n}\n\nion-card-content h6 {\n  font-weight: 600;\n  margin: 20px 0px 20px 0 !important;\n}\n\nion-card-content p {\n  font-size: 13px !important;\n  text-align: left;\n  margin: 0px;\n  padding: 0px 20px 20px 20px;\n}\n\n.brand {\n  margin: 20px 101px;\n}\n\n.brand img {\n  width: 100% !important;\n}\n\nion-row {\n  padding: 20px;\n}\n\n#details {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 18px;\n}\n\n#details ion-row {\n  padding: 15px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbnNmZXItaW5zdHJ1Y3Rpb24xL0M6XFxVc2Vyc1xcTGVub3ZvXFxkb2N1bWVudHNcXHZzY19sb2NhbF9kZXZcXG5hdGl2ZS1tb2JpbGUtYXBwXFx6YXBweVxcZnJvbnRlbmQvc3JjXFxhcHBcXHRyYW5zZmVyLWluc3RydWN0aW9uMVxcdHJhbnNmZXItaW5zdHJ1Y3Rpb24xLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdHJhbnNmZXItaW5zdHJ1Y3Rpb24xL3RyYW5zZmVyLWluc3RydWN0aW9uMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBQTtBQ0NGOztBRENBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQ0VGOztBREFBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDR0Y7O0FERkU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNJSjs7QURGRTtFQUNFLGdCQUFBO0VBQ0Esa0NBQUE7QUNJSjs7QURGRTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUNJSjs7QURBQTtFQUNFLGtCQUFBO0FDR0Y7O0FEREU7RUFDRSxzQkFBQTtBQ0dKOztBRENBO0VBQ0UsYUFBQTtBQ0VGOztBRENBO0VBSUUsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDREY7O0FETkU7RUFDRSxrQkFBQTtBQ1FKIiwiZmlsZSI6InNyYy9hcHAvdHJhbnNmZXItaW5zdHJ1Y3Rpb24xL3RyYW5zZmVyLWluc3RydWN0aW9uMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgwLCAwLCA5MiwgMC4wMik7XG59XG5pb24tY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOiAwcHggMTdweDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuaW9uLWNhcmQtY29udGVudCB7XG4gIGNvbG9yOiAjMDAzNjc5O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIHNwYW4ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1NTA7XG4gIH1cbiAgaDYge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luOiAyMHB4IDBweCAyMHB4IDAgIWltcG9ydGFudDtcbiAgfVxuICBwIHtcbiAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweCAyMHB4IDIwcHggMjBweDtcbiAgfVxufVxuXG4uYnJhbmQge1xuICBtYXJnaW46IDIwcHggMTAxcHg7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59XG5cbmlvbi1yb3cge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4jZGV0YWlscyB7XG4gIGlvbi1yb3cge1xuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgfVxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgOTIsIDAuMDIpO1xufVxuXG5pb24tY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOiAwcHggMTdweDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgY29sb3I6ICMwMDM2Nzk7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cbmlvbi1jYXJkLWNvbnRlbnQgc3BhbiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweCAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1NTA7XG59XG5pb24tY2FyZC1jb250ZW50IGg2IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAyMHB4IDBweCAyMHB4IDAgIWltcG9ydGFudDtcbn1cbmlvbi1jYXJkLWNvbnRlbnQgcCB7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4IDIwcHggMjBweCAyMHB4O1xufVxuXG4uYnJhbmQge1xuICBtYXJnaW46IDIwcHggMTAxcHg7XG59XG4uYnJhbmQgaW1nIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuaW9uLXJvdyB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbiNkZXRhaWxzIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG4jZGV0YWlscyBpb24tcm93IHtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/transfer-instruction1/transfer-instruction1.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/transfer-instruction1/transfer-instruction1.page.ts ***!
  \*********************************************************************/
/*! exports provided: TransferInstruction1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferInstruction1Page", function() { return TransferInstruction1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/navigation-service.service */ "./src/app/services/navigation-service.service.ts");




let TransferInstruction1Page = class TransferInstruction1Page {
    constructor(router, navService) {
        this.router = router;
        this.navService = navService;
    }
    ngOnInit() {
    }
    acceptTransfer() {
        const elem = document.getElementById('details');
        elem.classList.toggle('hidden');
    }
    goBack() {
        this.navService.navigateToPreviousPage();
    }
};
TransferInstruction1Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_3__["NavigationServiceService"] }
];
TransferInstruction1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transfer-instruction1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./transfer-instruction1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/transfer-instruction1/transfer-instruction1.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./transfer-instruction1.page.scss */ "./src/app/transfer-instruction1/transfer-instruction1.page.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../assets/css/main.scss */ "./src/assets/css/main.scss")).default]
    })
], TransferInstruction1Page);



/***/ })

}]);
//# sourceMappingURL=transfer-instruction1-transfer-instruction1-module-es2015.js.map