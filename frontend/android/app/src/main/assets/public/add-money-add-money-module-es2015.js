(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-money-add-money-module"],{

/***/ "./node_modules/angular4-paystack/__ivy_ngcc__/fesm2015/angular4-paystack.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/angular4-paystack/__ivy_ngcc__/fesm2015/angular4-paystack.js ***!
  \***********************************************************************************/
/*! exports provided: Angular4PaystackComponent, Angular4PaystackDirective, Angular4PaystackEmbedComponent, Angular4PaystackModule, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Angular4PaystackComponent", function() { return Angular4PaystackComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Angular4PaystackDirective", function() { return Angular4PaystackDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Angular4PaystackEmbedComponent", function() { return Angular4PaystackEmbedComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Angular4PaystackModule", function() { return Angular4PaystackModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Angular4PaystackService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return PUBLIC_KEY_TOKEN; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */



const _c0 = ["*"];
const PUBLIC_KEY_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('paystack.publickey');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MyWindow() { }
if (false) {}
class Angular4PaystackService {
    /**
     * @param {?} token
     */
    constructor(token) {
        this.token = token;
    }
    /**
     * @return {?}
     */
    loadScript() {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            if (window.PaystackPop && typeof window.PaystackPop.setup === 'function') {
                resolve();
                return;
            }
            /** @type {?} */
            const script = window.document.createElement('script');
            window.document.head.appendChild(script);
            /** @type {?} */
            const onLoadFunc = (/**
             * @return {?}
             */
            () => {
                script.removeEventListener('load', onLoadFunc);
                resolve();
            });
            script.addEventListener('load', onLoadFunc);
            script.setAttribute('src', 'https://js.paystack.co/v1/inline.js');
        }));
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    checkInput(obj) {
        if (!obj.key && !this.token) {
            return 'ANGULAR-PAYSTACK: Please insert a your public key';
        }
        if (!obj.email) {
            return 'ANGULAR-PAYSTACK: Paystack email cannot be empty';
        }
        if (!obj.amount) {
            return 'ANGULAR-PAYSTACK: Paystack amount cannot be empty';
        }
        if (!obj.ref) {
            return 'ANGULAR-PAYSTACK: Paystack ref cannot be empty';
        }
        return '';
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    getPaystackOptions(obj) {
        /** @type {?} */
        const paystackOptions = {
            key: obj.key || this.token,
            email: obj.email,
            amount: obj.amount,
            ref: obj.ref,
            metadata: obj.metadata || {},
            currency: obj.currency || 'NGN',
            plan: obj.plan || '',
            channels: obj.channels,
            quantity: obj.quantity || '',
            subaccount: obj.subaccount || '',
            transaction_charge: obj.transaction_charge || 0,
            // tslint:disable-line
            bearer: obj.bearer || '',
        };
        return paystackOptions;
    }
}
Angular4PaystackService.ɵfac = function Angular4PaystackService_Factory(t) { return new (t || Angular4PaystackService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](PUBLIC_KEY_TOKEN)); };
Angular4PaystackService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Angular4PaystackService, factory: Angular4PaystackService.ɵfac, providedIn: 'root' });
/** @nocollapse */
Angular4PaystackService.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [PUBLIC_KEY_TOKEN,] }] }
];
/** @nocollapse */ Angular4PaystackService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function Angular4PaystackService_Factory() { return new Angular4PaystackService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(PUBLIC_KEY_TOKEN)); }, token: Angular4PaystackService, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Angular4PaystackService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [PUBLIC_KEY_TOKEN]
            }] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MyWindow$1() { }
if (false) {}
class Angular4PaystackComponent {
    /**
     * @param {?} paystackService
     */
    constructor(paystackService) {
        this.paystackService = paystackService;
        this.paymentInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // tslint:disable-line
        // tslint:disable-line
        this.callback = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // tslint:disable-line
        this.isPaying = false;
    }
    /**
     * @return {?}
     */
    pay() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /** @type {?} */
            let errorText = '';
            if (this.paystackOptions && Object.keys(this.paystackOptions).length >= 2) {
                errorText = this.valdateInput(this.paystackOptions);
                this.generateOptions(this.paystackOptions);
            }
            else {
                errorText = this.valdateInput(this);
                this.generateOptions(this);
            }
            if (errorText) {
                console.error(errorText);
                return errorText;
            }
            yield this.paystackService.loadScript();
            if (this.isPaying) {
                return;
            }
            if (this.paymentInit.observers.length) {
                this.paymentInit.emit();
            }
            /** @type {?} */
            const payment = window.PaystackPop.setup(this._paystackOptions);
            payment.openIframe();
            this.isPaying = true;
        });
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    valdateInput(obj) {
        if (!this.callback.observers.length) {
            return 'ANGULAR-PAYSTACK: Insert a callback output like so (callback)=\'PaymentComplete($event)\' to check payment status';
        }
        return this.paystackService.checkInput(obj);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    generateOptions(obj) {
        this._paystackOptions = this.paystackService.getPaystackOptions(obj);
        this._paystackOptions.onClose = (/**
         * @return {?}
         */
        () => {
            if (this.onClose.observers.length) {
                this.onClose.emit();
            }
        });
        this._paystackOptions.callback = (/**
         * @param {...?} response
         * @return {?}
         */
        (...response) => {
            this.callback.emit(...response);
        });
    }
}
Angular4PaystackComponent.ɵfac = function Angular4PaystackComponent_Factory(t) { return new (t || Angular4PaystackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Angular4PaystackService)); };
Angular4PaystackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Angular4PaystackComponent, selectors: [["angular4-paystack"]], inputs: { key: "key", email: "email", amount: "amount", metadata: "metadata", ref: "ref", currency: "currency", plan: "plan", quantity: "quantity", channels: "channels", subaccount: "subaccount", transaction_charge: "transaction_charge", bearer: "bearer", class: "class", style: "style", paystackOptions: "paystackOptions" }, outputs: { paymentInit: "paymentInit", onClose: "onClose", callback: "callback" }, ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[3, "ngClass", "ngStyle", "click"]], template: function Angular4PaystackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Angular4PaystackComponent_Template_button_click_0_listener() { return ctx.pay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.class)("ngStyle", ctx.style);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], encapsulation: 2 });
/** @nocollapse */
Angular4PaystackComponent.ctorParameters = () => [
    { type: Angular4PaystackService }
];
Angular4PaystackComponent.propDecorators = {
    key: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    metadata: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    ref: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    currency: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    plan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    quantity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    channels: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    subaccount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    transaction_charge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    bearer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    style: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    paystackOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    paymentInit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    onClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    callback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Angular4PaystackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'angular4-paystack',
                template: `<button [ngClass]="class" [ngStyle]="style" (click)="pay()"><ng-content></ng-content></button>`
            }]
    }], function () { return [{ type: Angular4PaystackService }]; }, { paymentInit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], callback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], key: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], email: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], amount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], metadata: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], ref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], currency: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], plan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], quantity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], channels: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], subaccount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], transaction_charge: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], bearer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], class: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], style: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], paystackOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MyWindow$2() { }
if (false) {}
class Angular4PaystackDirective {
    /**
     * @param {?} paystackService
     */
    constructor(paystackService) {
        this.paystackService = paystackService;
        this.paymentInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // tslint:disable-line
        // tslint:disable-line
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // tslint:disable-line
        // tslint:disable-line
        this.callback = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // tslint:disable-line
        this.isPaying = false;
    }
    /**
     * @return {?}
     */
    pay() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /** @type {?} */
            let errorText = '';
            if (this.paystackOptions && Object.keys(this.paystackOptions).length >= 2) {
                errorText = this.valdateInput(this.paystackOptions);
                this.generateOptions(this.paystackOptions);
            }
            else {
                errorText = this.valdateInput(this);
                this.generateOptions(this);
            }
            if (errorText) {
                console.error(errorText);
                return errorText;
            }
            yield this.paystackService.loadScript();
            if (this.isPaying) {
                return;
            }
            if (this.paymentInit.observers.length) {
                this.paymentInit.emit();
            }
            /** @type {?} */
            const payment = window.PaystackPop.setup(this._paystackOptions);
            payment.openIframe();
            this.isPaying = true;
        });
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    valdateInput(obj) {
        if (!this.callback.observers.length) {
            return 'ANGULAR-PAYSTACK: Insert a callback output like so (callback)=\'PaymentComplete($event)\' to check payment status';
        }
        return this.paystackService.checkInput(obj);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    generateOptions(obj) {
        this._paystackOptions = this.paystackService.getPaystackOptions(obj);
        this._paystackOptions.onClose = (/**
         * @return {?}
         */
        () => {
            if (this.onClose.observers.length) {
                this.onClose.emit();
            }
        });
        this._paystackOptions.callback = (/**
         * @param {...?} response
         * @return {?}
         */
        (...response) => {
            this.callback.emit(...response);
        });
    }
    /**
     * @return {?}
     */
    buttonClick() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.pay();
        });
    }
}
Angular4PaystackDirective.ɵfac = function Angular4PaystackDirective_Factory(t) { return new (t || Angular4PaystackDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Angular4PaystackService)); };
Angular4PaystackDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: Angular4PaystackDirective, selectors: [["", "angular4-paystack", ""]], hostBindings: function Angular4PaystackDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Angular4PaystackDirective_click_HostBindingHandler() { return ctx.buttonClick(); });
    } }, inputs: { key: "key", email: "email", amount: "amount", metadata: "metadata", ref: "ref", currency: "currency", plan: "plan", quantity: "quantity", subaccount: "subaccount", channels: "channels", transaction_charge: "transaction_charge", bearer: "bearer", class: "class", style: "style", paystackOptions: "paystackOptions" }, outputs: { paymentInit: "paymentInit", onClose: "onClose", callback: "callback" } });
/** @nocollapse */
Angular4PaystackDirective.ctorParameters = () => [
    { type: Angular4PaystackService }
];
Angular4PaystackDirective.propDecorators = {
    key: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    metadata: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    ref: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    currency: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    plan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    quantity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    subaccount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    channels: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    transaction_charge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    bearer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    style: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    paystackOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    paymentInit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    onClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    callback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    buttonClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['click',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Angular4PaystackDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[angular4-paystack]'
            }]
    }], function () { return [{ type: Angular4PaystackService }]; }, { paymentInit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], callback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], buttonClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['click']
        }], key: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], email: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], amount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], metadata: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], ref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], currency: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], plan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], quantity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], subaccount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], channels: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], transaction_charge: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], bearer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], class: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], style: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], paystackOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MyWindow$3() { }
if (false) {}
class Angular4PaystackEmbedComponent {
    // tslint:disable-line
    /**
     * @param {?} paystackService
     */
    constructor(paystackService) {
        this.paystackService = paystackService;
        this.paymentInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // tslint:disable-line
        // tslint:disable-line
        this.callback = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    pay() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /** @type {?} */
            let errorText = '';
            if (this.paystackOptions && Object.keys(this.paystackOptions).length >= 2) {
                errorText = this.valdateInput(this.paystackOptions);
                this.generateOptions(this.paystackOptions);
            }
            else {
                errorText = this.valdateInput(this);
                this.generateOptions(this);
            }
            if (errorText) {
                console.error(errorText);
                return errorText;
            }
            yield this.paystackService.loadScript();
            if (this.paymentInit.observers.length) {
                this.paymentInit.emit();
            }
            /** @type {?} */
            const payment = window.PaystackPop.setup(this._paystackOptions);
            payment.openIframe();
        });
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    valdateInput(obj) {
        if (!this.callback.observers.length) {
            return 'ANGULAR-PAYSTACK: Insert a callback output like so (callback)=\'PaymentComplete($event)\' to check payment status';
        }
        return this.paystackService.checkInput(obj);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    generateOptions(obj) {
        this._paystackOptions = this.paystackService.getPaystackOptions(obj);
        this._paystackOptions.onClose = (/**
         * @return {?}
         */
        () => {
            if (this.onClose.observers.length) {
                this.onClose.emit();
            }
        });
        this._paystackOptions.callback = (/**
         * @param {...?} response
         * @return {?}
         */
        (...response) => {
            this.callback.emit(...response);
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.error('ANGULAR-PAYSTACK: The paystack embed option is deprecated. Please use the paystack component or directive');
            this.pay();
        });
    }
}
Angular4PaystackEmbedComponent.ɵfac = function Angular4PaystackEmbedComponent_Factory(t) { return new (t || Angular4PaystackEmbedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Angular4PaystackService)); };
Angular4PaystackEmbedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Angular4PaystackEmbedComponent, selectors: [["angular4-paystack-embed"]], inputs: { key: "key", email: "email", amount: "amount", metadata: "metadata", channels: "channels", ref: "ref", currency: "currency", plan: "plan", quantity: "quantity", subaccount: "subaccount", transaction_charge: "transaction_charge", bearer: "bearer", paystackOptions: "paystackOptions" }, outputs: { paymentInit: "paymentInit", onClose: "onClose", callback: "callback" }, decls: 1, vars: 0, consts: [["id", "paystackEmbedContainer"]], template: function Angular4PaystackEmbedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
    } }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
Angular4PaystackEmbedComponent.ctorParameters = () => [
    { type: Angular4PaystackService }
];
Angular4PaystackEmbedComponent.propDecorators = {
    key: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    metadata: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    channels: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    ref: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    currency: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    plan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    quantity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    subaccount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    transaction_charge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    bearer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    paystackOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    paymentInit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    onClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    callback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Angular4PaystackEmbedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'angular4-paystack-embed',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                template: `<div id="paystackEmbedContainer"></div>`
            }]
    }], function () { return [{ type: Angular4PaystackService }]; }, { paymentInit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], callback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], key: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], email: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], amount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], metadata: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], channels: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], ref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], currency: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], plan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], quantity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], subaccount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], transaction_charge: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], bearer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], paystackOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Angular4PaystackModule {
    /**
     * @param {?} token
     * @return {?}
     */
    static forRoot(token) {
        return {
            ngModule: Angular4PaystackModule,
            providers: [
                Angular4PaystackService,
                { provide: PUBLIC_KEY_TOKEN, useValue: token }
            ]
        };
    }
}
Angular4PaystackModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: Angular4PaystackModule });
Angular4PaystackModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function Angular4PaystackModule_Factory(t) { return new (t || Angular4PaystackModule)(); }, providers: [], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Angular4PaystackModule, { declarations: function () { return [Angular4PaystackComponent,
        Angular4PaystackDirective,
        Angular4PaystackEmbedComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [Angular4PaystackComponent,
        Angular4PaystackDirective,
        Angular4PaystackEmbedComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Angular4PaystackModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                exports: [Angular4PaystackComponent, Angular4PaystackDirective, Angular4PaystackEmbedComponent],
                declarations: [Angular4PaystackComponent, Angular4PaystackDirective, Angular4PaystackEmbedComponent],
                providers: []
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=angular4-paystack.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-money/add-money/add-money.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-money/add-money/add-money.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"none\" class=\"text-white\" mode=\"ios\">\r\n    <ion-buttons  >\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon ios=\"arrow-back-outline\" md=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button></ion-button>\r\n    </ion-buttons>\r\n    <ion-title >Wallet</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container container-bg\">\r\n    <ion-segment (ionChange)=\"segmentChanged($event)\" mode=\"ios\" value=\"wallet\">\r\n      <ion-segment-button value=\"wallet\">\r\n        <ion-label>My balance</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"cards\">\r\n        <ion-label>My cards</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n\r\n    <ion-card color=\"primary\" mode=\"ios\">  \r\n      <ion-card-content >\r\n         <p class=\"text\">Available Balance</p>\r\n        <div class=\"amount\">&#x20A6; {{wallet_amount}}</div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n\r\n  <div class=\"wrapper\">\r\n    <div class=\"inner\">      \r\n      <h4>Add money</h4>\r\n      <ion-item lines=\"none\">\r\n        <ion-input placeholder=\"Amount\" type=\"text\" [(ngModel)] = \"fund_amount\" required></ion-input>\r\n      </ion-item>\r\n  \r\n      <ion-item lines=\"none\">\r\n        <ion-input placeholder=\"Password\" type=\"pasword\" required></ion-input>\r\n      </ion-item>  \r\n  \r\n      <div class=\"ion-text-center\">      \r\n        <!--ion-button color=\"primary\" (click)=\"addMoney()\" mode='ios'>\r\n          Fund my wallet\r\n        </ion-button-->\r\n        <!--angular4-paystack\r\n          [email]=\"'mailexample@mail.com'\"\r\n          [amount]=\"fund_amount\"\r\n          [ref]=\"reference\"\r\n          [channels]=\"['bank']\"\r\n          [class]=\"'btn btn-primary'\"\r\n          (close)=\"paymentCancel()\"\r\n          (callback)=\"paymentDone($event)\"\r\n        >\r\n          Fund my wallet\r\n        </angular4-paystack-->\r\n        <ion-button\r\n          angular4-paystack\r\n          [key]=\"pKey\"\r\n          [email]=\"'mailexample@mail.com'\"\r\n          [amount]=\"fund_amount * 100\"\r\n          [ref]=\"reference\"\r\n          [color]=\"'primary'\"\r\n          (paymentInit)=\"paymentInit()\"\r\n          (close)=\"paymentCancel()\"\r\n          (callback)=\"paymentDone($event)\"\r\n        >\r\n          Fund my wallet\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/add-money/add-money-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/add-money/add-money-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AddMoneyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMoneyPageRoutingModule", function() { return AddMoneyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_money_add_money_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-money/add-money.page */ "./src/app/add-money/add-money/add-money.page.ts");




const routes = [
    {
        path: '',
        component: _add_money_add_money_page__WEBPACK_IMPORTED_MODULE_3__["AddMoneyPage"]
    }
];
let AddMoneyPageRoutingModule = class AddMoneyPageRoutingModule {
};
AddMoneyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddMoneyPageRoutingModule);



/***/ }),

/***/ "./src/app/add-money/add-money.module.ts":
/*!***********************************************!*\
  !*** ./src/app/add-money/add-money.module.ts ***!
  \***********************************************/
/*! exports provided: AddMoneyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMoneyPageModule", function() { return AddMoneyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var angular4_paystack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular4-paystack */ "./node_modules/angular4-paystack/__ivy_ngcc__/fesm2015/angular4-paystack.js");
/* harmony import */ var _add_money_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-money-routing.module */ "./src/app/add-money/add-money-routing.module.ts");
/* harmony import */ var _add_money_add_money_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-money/add-money.page */ "./src/app/add-money/add-money/add-money.page.ts");








let AddMoneyPageModule = class AddMoneyPageModule {
};
AddMoneyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_money_routing_module__WEBPACK_IMPORTED_MODULE_6__["AddMoneyPageRoutingModule"],
            angular4_paystack__WEBPACK_IMPORTED_MODULE_5__["Angular4PaystackModule"].forRoot('pk_test_bda795695c65c62c6d922532a66d2c324ab16a3e')
        ],
        declarations: [_add_money_add_money_page__WEBPACK_IMPORTED_MODULE_7__["AddMoneyPage"]]
    })
], AddMoneyPageModule);



/***/ }),

/***/ "./src/app/add-money/add-money/add-money.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/add-money/add-money/add-money.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  text-align: center;\n  color: #ffffff;\n  width: 100%;\n  margin: 24px 0px;\n  height: 150px !important;\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\n\nion-input {\n  --placeholder-opacity: .9 !important;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 18px;\n  --placeholder-color: rgba(0, 54, 121, 0.6) !important;\n}\n\nion-item {\n  color: #003679;\n  border-radius: 6px;\n  --background: rgba(0, 54, 121, 0.1);\n  --min-height: 40px;\n  --background-hover: #ffffff;\n  margin: 10px 0px;\n}\n\nion-item ion-label {\n  --font-size: 12px !important;\n  line-height: 18px;\n  --font-weight: 500;\n  --color: rgba(0, 54, 121, 0.6);\n}\n\nion-button {\n  width: 241px;\n  min-height: 40px;\n  --border-radius: 6px !important;\n  margin-top: 20px !important;\n}\n\n.container-bg {\n  background: #f4f4f4;\n}\n\n.container {\n  padding: 0px 30px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLW1vbmV5L2FkZC1tb25leS9DOlxcVXNlcnNcXExlbm92b1xcZG9jdW1lbnRzXFx2c2NfbG9jYWxfZGV2XFxuYXRpdmUtbW9iaWxlLWFwcFxcemFwcHlcXGZyb250ZW5kL3NyY1xcYXBwXFxhZGQtbW9uZXlcXGFkZC1tb25leVxcYWRkLW1vbmV5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWRkLW1vbmV5L2FkZC1tb25leS9hZGQtbW9uZXkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxREFBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURBRTtFQUNFLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FDRUo7O0FEQ0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLDJCQUFBO0FDRUY7O0FEQ0E7RUFDRyxtQkFBQTtBQ0VIOztBREFBO0VBQ0UsNEJBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2FkZC1tb25leS9hZGQtbW9uZXkvYWRkLW1vbmV5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMjRweCAwcHg7XG4gIGhlaWdodDogMTUwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG5pb24taW5wdXQge1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IC45ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiYSgwLCA1NCwgMTIxLCAwLjYpICFpbXBvcnRhbnQ7XG59XG5pb24taXRlbSB7XG4gIGNvbG9yOiAjMDAzNjc5O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgwLCA1NCwgMTIxLCAwLjEpO1xuICAtLW1pbi1oZWlnaHQ6IDQwcHg7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2ZmZmZmZjtcbiAgbWFyZ2luOiAxMHB4IDBweDtcblxuICBpb24tbGFiZWwge1xuICAgIC0tZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgLS1mb250LXdlaWdodDogNTAwO1xuICAgIC0tY29sb3I6IHJnYmEoMCwgNTQsIDEyMSwgMC42KTtcbiAgfVxufVxuaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAyNDFweDtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyLWJnIHtcbiAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJGNvbG9yOiAjRTVFNUU1LCAkYW1vdW50OiA2KTtcbn1cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAwcHggMzBweCAhaW1wb3J0YW50O1xufVxuLy8gaW9uLWhlYWRlciB7XG4vLyAgIHBhZGRpbmc6IDIwcHggMHB4ICFpbXBvcnRhbnQ7XG4vLyAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbi8vIH0iLCJpb24tY2FyZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDI0cHggMHB4O1xuICBoZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAuOSAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiYSgwLCA1NCwgMTIxLCAwLjYpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgY29sb3I6ICMwMDM2Nzk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDU0LCAxMjEsIDAuMSk7XG4gIC0tbWluLWhlaWdodDogNDBweDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmZmZmO1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgLS1mb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC0tZm9udC13ZWlnaHQ6IDUwMDtcbiAgLS1jb2xvcjogcmdiYSgwLCA1NCwgMTIxLCAwLjYpO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgd2lkdGg6IDI0MXB4O1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXItYmcge1xuICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMHB4IDMwcHggIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/add-money/add-money/add-money.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/add-money/add-money/add-money.page.ts ***!
  \*******************************************************/
/*! exports provided: AddMoneyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMoneyPage", function() { return AddMoneyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/config/config */ "./src/app/core/config/config.ts");
/* harmony import */ var _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/navigation-service.service */ "./src/app/services/navigation-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");







let AddMoneyPage = class AddMoneyPage {
    constructor(router, navService, alertCtrl, loadingCtrl, userService) {
        this.router = router;
        this.navService = navService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.userData = {
            first_name: '',
            last_name: '',
            points: '',
            id: ''
        };
        this.wallet_amount = 0;
        this.fund_amount = 0;
        this.reference = '';
        this.title = '';
        this.pKey = src_app_core_config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].paystackPublicKey;
    }
    goBack() {
        this.navService.navigateToPreviousPage();
    }
    ngOnInit() {
        this.userData.first_name = localStorage.getItem(`setting:first_name`);
        this.wallet_amount = +localStorage.getItem(`setting:wallet_amount`);
        this.userData.points = localStorage.getItem(`setting:points`);
        this.userData.id = localStorage.getItem(`setting:user_id`);
        if (!this.userData.first_name || !localStorage.getItem(`setting:user_id`)) {
            this.router.navigate(['/logout']);
        }
        this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
        console.log('Wallet amount here ' + this.wallet_amount);
    }
    paymentInit() {
        console.log('Payment initialized');
        // const loading = await this.loadingCtrl.create({
        //   cssClass: 'loading',
        //   message: '',
        //   duration: 300,
        //   animated: true,
        //   spinner: 'bubbles'
        // });
        // await loading.present();
    }
    paymentDone(ref) {
        //this.title = 'Payment successfull';
        //console.log(this.title, ref);
        const newWalletAmount = +this.wallet_amount + +this.fund_amount;
        console.log(newWalletAmount);
        this.storeReferenceAndWalletAmount(newWalletAmount, ref);
    }
    storeReferenceAndWalletAmount(wallet_amount, paymentRef) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //loader
            const loading = yield this.loadingCtrl.create({
                cssClass: 'Finishing up',
                message: '',
                duration: 300,
                animated: true,
                spinner: 'bubbles'
            });
            yield loading.present();
            this.userService.storePaymentDetails({ paymentRef: paymentRef.reference, walletAmount: wallet_amount, userId: this.userData.id, paymentAmount: this.fund_amount }).subscribe((resp) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!resp) {
                    const alert = yield this.alertCtrl.create({
                        cssClass: 'my-alert',
                        header: 'Zappy',
                        subHeader: '',
                        mode: 'ios',
                        message: 'Oops! Something is wrong',
                        buttons: ['OK']
                    });
                    yield alert.present();
                }
                else if (resp.status == src_app_core_config_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].statusCode.created) {
                    console.log(resp);
                    localStorage.setItem(`setting:wallet_amount`, wallet_amount.toString());
                    this.wallet_amount = wallet_amount;
                }
                else {
                    const alert = yield this.alertCtrl.create({
                        cssClass: 'my-alert',
                        header: 'Zappy',
                        subHeader: '',
                        mode: 'ios',
                        message: resp.message,
                        buttons: ['OK']
                    });
                    yield alert.present();
                }
            }));
        });
    }
    paymentCancel() {
        console.log('payment failed');
    }
    segmentChanged(ev) {
        const page = ev.detail.value;
        if (page === 'wallet') {
            this.router.navigate(['/user-dashboard/wallet']);
        }
        else {
            this.router.navigate(['/user-dashboard/wallet/' + page]);
        }
    }
    addMoney() {
        alert(this.fund_amount);
        //this.router.navigate(['/user-dashboard/wallet/success'])
    }
};
AddMoneyPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_4__["NavigationServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
];
AddMoneyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-money',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-money.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-money/add-money/add-money.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-money.page.scss */ "./src/app/add-money/add-money/add-money.page.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../assets/css/main.scss */ "./src/assets/css/main.scss")).default]
    })
], AddMoneyPage);



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



/***/ })

}]);
//# sourceMappingURL=add-money-add-money-module-es2015.js.map