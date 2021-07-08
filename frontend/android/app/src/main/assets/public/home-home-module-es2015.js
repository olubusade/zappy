(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home/home.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home/home.page.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons mode=\"ios\"  slot=\"start\">\n      <ion-icon class=\"icon back-arrow\"[routerLink]=\"['/walk-through']\" name=\"arrow-back-sharp\"></ion-icon>\n    </ion-buttons>\n    <ion-title></ion-title>\n  </ion-toolbar>\n\n<ion-content [fullscreen]=\"true\" id=\"page-bg\">\n  <div class=\"brand\">\n    <img src=\"../../assets/imgs/logo.png\" alt=\"Zappy Logo\">\n  </div>\n  <div id=\"container\" class=\"signup\">\n    <button mode = \"ios\" id = \"signupbtn\" class=\"btn btn-secondary text-primary\" (click)=\"showSignup()\">I am new to Zappy<i class=\"zmdi zmdi-tap-and-play\"></i></button>\n    <button mode = \"ios\" id = \"loginbtn\" class=\"btn btn-transparent text-color\" (click)=\"showLogin()\">Login</button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.page */ "./src/app/home/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.page */ "./src/app/home/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home/home.page.scss":
/*!******************************************!*\
  !*** ./src/app/home/home/home.page.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import 'https://fonts.google.com/specimen/Nunito?query=nuni';\n#page-bg {\n  background: linear-gradient(90deg, #f2fae2 0%, #ffff 157.2%) !important;\n  padding: 20px;\n}\nion-content {\n  --ion-background-color: linear-gradient(90deg, #ffff 0%, #ffff 157.2%) !important;\n  /*\n    --background: url('/assets/imgs/backgrounds/background3_zappy.png') no-repeat 100% 100%;\n  */\n}\n.signup {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 40px;\n  top: 70%;\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n}\n.btn {\n  padding: 15px;\n  margin: 4px;\n  border-radius: 20px;\n  height: 40px;\n  width: 240px;\n  font-size: 16px;\n  font-weight: 400;\n  text-align: center;\n}\n.btn-secondary {\n  background: linear-gradient(120deg, #9ACD32 0%, #056608 157.2%);\n}\n/*\n.btn-primary {\n  background: linear-gradient(90deg, #9ACD32 0%, #056608 157.2%);\n}\n*/\n/*\n#signupbtn {\n   border-radius: 20px;\n   border-color: #9ACD32;\n   color: #9ACD32;\n   background-color: transparent;\n}\n*/\n.btn-transparent {\n  border: 1px solid #056608;\n  border-radius: 20px;\n  background-color: white;\n  color: #056608;\n  padding: 14px 28px;\n  font-size: 16px;\n  cursor: pointer;\n  background: transparent;\n}\n.text-primary {\n  color: #ffffff;\n}\n.text-white {\n  color: #ffffff;\n}\n.text-color {\n  color: #056608;\n}\n.text-center {\n  text-align: center;\n}\n.brand {\n  position: absolute;\n  top: 10%;\n  left: 0;\n  right: 0;\n  transform: translateY(-10%);\n  text-align: center;\n  color: #ffffff;\n  font-size: 40px;\n  line-height: 48px;\n  font-family: \"Nunito\";\n}\n.brand img {\n  width: 50%;\n}\n.form {\n  background: #ffffff;\n  padding: 20px;\n}\n.signup-form {\n  border-top-right-radius: 20px;\n  border-top-left-radius: 20px;\n}\n/*\n.icon {\n  margin-left:18px;\n  margin-top:30px;\n  font-size:20px;\n  color:#9ACD32;\n}\n*/\n.back-arrow {\n  padding-top: 35px;\n  text-align: left !important;\n  margin-left: 10px !important;\n  color: #424242;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lL0M6XFxVc2Vyc1xcTGVub3ZvXFxkb2N1bWVudHNcXHZzY19sb2NhbF9kZXZcXG5hdGl2ZS1tb2JpbGUtYXBwXFx6YXBweVxcZnJvbnRlbmQvc3JjXFxhcHBcXGhvbWVcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsNkRBQUE7QUFFUjtFQUNFLHVFQUFBO0VBQ0EsYUFBQTtBQ0FGO0FER0E7RUFDRSxpRkFBQTtFQUNEOztHQUFBO0FDRUQ7QURJQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FDREY7QURJQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDREY7QURJQTtFQUNFLCtEQUFBO0FDREY7QURJQTs7OztDQUFBO0FBS0E7Ozs7Ozs7Q0FBQTtBQVFBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ0RGO0FESUE7RUFDRSxjQUFBO0FDREY7QURJQTtFQUNFLGNBQUE7QUNERjtBREdBO0VBQ0UsY0FBQTtBQ0FGO0FERUE7RUFDRSxrQkFBQTtBQ0NGO0FERUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNDRjtBRENFO0VBQ0UsVUFBQTtBQ0NKO0FEWUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7QUNURjtBRFlBO0VBQ0UsNkJBQUE7RUFDQSw0QkFBQTtBQ1RGO0FEV0E7Ozs7Ozs7Q0FBQTtBQVFBO0VBQ0UsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBQ1JGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnaHR0cHM6Ly9mb250cy5nb29nbGUuY29tL3NwZWNpbWVuL051bml0bz9xdWVyeT1udW5pJztcblxuI3BhZ2UtYmcge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmMmZhZTIgIDAlLCAjZmZmZiAgMTU3LjIlKSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZmZmYgIDAlLCAjZmZmZiAgMTU3LjIlKSAhaW1wb3J0YW50OyBcbiAvKlxuICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWdzL2JhY2tncm91bmRzL2JhY2tncm91bmQzX3phcHB5LnBuZycpIG5vLXJlcGVhdCAxMDAlIDEwMCU7XG4qL1xufVxuXG5cbi5zaWdudXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIHRvcDogNzAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4uYnRuIHtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDI0MHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjOUFDRDMyIDAlLCAjMDU2NjA4IDE1Ny4yJSk7XG4gIFxufVxuLypcbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzlBQ0QzMiAwJSwgIzA1NjYwOCAxNTcuMiUpO1xufVxuKi9cbi8qXG4jc2lnbnVwYnRuIHtcbiAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICBib3JkZXItY29sb3I6ICM5QUNEMzI7XG4gICBjb2xvcjogIzlBQ0QzMjtcbiAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuKi9cbi5idG4tdHJhbnNwYXJlbnQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDU2NjA4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICMwNTY2MDggO1xuICBwYWRkaW5nOiAxNHB4IDI4cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLnRleHQtcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4udGV4dC13aGl0ZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLnRleHQtY29sb3Ige1xuICBjb2xvcjogIzA1NjYwODtcbn1cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJyYW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nO1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxufVxuLy8gLmJyYW5kIC5jYXB0aW9uIHtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICBsZWZ0OiA0NS4xMyU7XG4vLyAgIHJpZ2h0OiAzMi41MyU7XG4vLyAgIGJvdHRvbTogLTM1JTtcbi8vICAgZm9udC1zdHlsZTogaXRhbGljO1xuLy8gICBmb250LXNpemU6IDEwcHg7XG4vLyAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuLy8gfVxuXG4uZm9ybSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5zaWdudXAtZm9ybSB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xufVxuLypcbi5pY29uIHtcbiAgbWFyZ2luLWxlZnQ6MThweDtcbiAgbWFyZ2luLXRvcDozMHB4O1xuICBmb250LXNpemU6MjBweDtcbiAgY29sb3I6IzlBQ0QzMjtcbn1cbiovXG4uYmFjay1hcnJvdyB7XG4gIHBhZGRpbmctdG9wOjM1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgY29sb3I6ICM0MjQyNDI7XG59IiwiQGltcG9ydCAnaHR0cHM6Ly9mb250cy5nb29nbGUuY29tL3NwZWNpbWVuL051bml0bz9xdWVyeT1udW5pJztcbiNwYWdlLWJnIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZjJmYWUyIDAlLCAjZmZmZiAxNTcuMiUpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmZmZiAwJSwgI2ZmZmYgMTU3LjIlKSAhaW1wb3J0YW50O1xuICAvKlxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZ3MvYmFja2dyb3VuZHMvYmFja2dyb3VuZDNfemFwcHkucG5nJykgbm8tcmVwZWF0IDEwMCUgMTAwJTtcbiAgKi9cbn1cblxuLnNpZ251cCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNDBweDtcbiAgdG9wOiA3MCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5idG4ge1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDRweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMjQwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsICM5QUNEMzIgMCUsICMwNTY2MDggMTU3LjIlKTtcbn1cblxuLypcbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzlBQ0QzMiAwJSwgIzA1NjYwOCAxNTcuMiUpO1xufVxuKi9cbi8qXG4jc2lnbnVwYnRuIHtcbiAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICBib3JkZXItY29sb3I6ICM5QUNEMzI7XG4gICBjb2xvcjogIzlBQ0QzMjtcbiAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuKi9cbi5idG4tdHJhbnNwYXJlbnQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDU2NjA4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICMwNTY2MDg7XG4gIHBhZGRpbmc6IDE0cHggMjhweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4udGV4dC1wcmltYXJ5IHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi50ZXh0LXdoaXRlIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi50ZXh0LWNvbG9yIHtcbiAgY29sb3I6ICMwNTY2MDg7XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJyYW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCI7XG59XG4uYnJhbmQgaW1nIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmZvcm0ge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uc2lnbnVwLWZvcm0ge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbn1cblxuLypcbi5pY29uIHtcbiAgbWFyZ2luLWxlZnQ6MThweDtcbiAgbWFyZ2luLXRvcDozMHB4O1xuICBmb250LXNpemU6MjBweDtcbiAgY29sb3I6IzlBQ0QzMjtcbn1cbiovXG4uYmFjay1hcnJvdyB7XG4gIHBhZGRpbmctdG9wOiAzNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNDI0MjQyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home/home.page.ts":
/*!****************************************!*\
  !*** ./src/app/home/home/home.page.ts ***!
  \****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let HomePage = class HomePage {
    constructor(router) {
        this.router = router;
    }
    showLogin() {
        this.router.navigate(['/login']);
    }
    showSignup() {
        this.router.navigate(['/register']);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map