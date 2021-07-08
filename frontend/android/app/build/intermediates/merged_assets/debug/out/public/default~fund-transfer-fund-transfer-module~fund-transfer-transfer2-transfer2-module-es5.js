function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~fund-transfer-fund-transfer-module~fund-transfer-transfer2-transfer2-module"], {
  /***/
  "./src/app/fund-transfer/fund-transfer.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/fund-transfer/fund-transfer.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFundTransferFundTransferPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  text-align: center;\n  padding: 20px;\n  margin: 0 20px;\n  color: #ffffff;\n}\nion-card strong {\n  margin-top: 20rem;\n  font-size: 26px;\n}\n.tool-text {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 18px;\n}\n.signup {\n  position: relative;\n  padding-top: 40px !important;\n}\n.signup h4 {\n  position: absolute;\n  top: -25px;\n  left: 10px;\n  text-align: left !important;\n  font-size: 16px;\n  padding: 20px 10px;\n  color: #003679;\n}\n.signup h4 img {\n  width: 20px;\n}\n.signup form {\n  background-color: #ffffff;\n  width: 100%;\n  padding: 10px 20px;\n}\n.m-recent {\n  margin: 1px !important;\n  font-size: 12px !important;\n  font-weight: 600 !important;\n  color: #003679 !important;\n}\n.m-recent p {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 8px;\n  line-height: 14px;\n}\n.most-recent {\n  padding: 10px 0px;\n}\n.most-recent h4 {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 8px;\n  line-height: 14px;\n  align-items: center;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-shrink: 2;\n  width: 70px;\n}\n.circle-sm {\n  width: 40px !important;\n  height: 40px !important;\n  background: rgba(0, 54, 121, 0.6);\n  margin: 0 auto !important;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 12px;\n}\nion-title {\n  color: #ffffff !important;\n  text-align: center;\n}\nion-toolbar {\n  --paddin-end: 0px;\n  --padding-start: 0px;\n}\nion-toolbar ion-icon {\n  color: #ffffff !important;\n}\nion-buttons {\n  justify-content: space-between;\n  padding: 15px 0px;\n}\nion-buttons ion-button {\n  width: auto;\n  margin: 0 !important;\n  --padding-end: 0px !important;\n  --padding-start: 0px !important;\n}\nion-button {\n  width: 241px;\n  --border-radius: 6px;\n  margin: 0 auto;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 12px;\n}\nion-item {\n  color: #003679;\n  border-radius: 6px;\n  --background: rgba(0, 54, 121, 0.1);\n  --min-height: 40px;\n  --background-hover: #ffffff;\n  margin: 0px;\n}\nion-label {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px !important;\n  line-height: 18px;\n  color: #003679;\n  width: 299px !important;\n}\nion-input, ion-select {\n  --placeholder-color: rgba(0, 54, 121, 0.6);\n  --placeholder-font-weight: 500;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVuZC10cmFuc2Zlci9DOlxcVXNlcnNcXExlbm92b1xcZG9jdW1lbnRzXFx2c2NfbG9jYWxfZGV2XFxuYXRpdmUtbW9iaWxlLWFwcFxcemFwcHlcXGZyb250ZW5kL3NyY1xcYXBwXFxmdW5kLXRyYW5zZmVyXFxmdW5kLXRyYW5zZmVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZnVuZC10cmFuc2Zlci9mdW5kLXRyYW5zZmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQ0Y7QURDRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ0NKO0FERUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0Y7QURDQTtFQUNFLGtCQUFBO0VBQ0EsNEJBQUE7QUNFRjtBRERFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUdBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NKO0FEQUk7RUFDRSxXQUFBO0FDRU47QURFRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQUo7QURLQTtFQUNFLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0FDRkY7QURJRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNGSjtBRE1BO0VBQ0UsaUJBQUE7QUNIRjtBRElFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0ZKO0FET0E7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNKRjtBRE9BO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQ0pGO0FETUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FDSEY7QURJRTtFQUNFLHlCQUFBO0FDRko7QURNQTtFQUNFLDhCQUFBO0VBQ0EsaUJBQUE7QUNIRjtBRElFO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtBQ0ZKO0FETUE7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0hGO0FETUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FDSEY7QURZQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBRUEsdUJBQUE7QUNWRjtBRGFBO0VBQ0UsMENBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNWSiIsImZpbGUiOiJzcmMvYXBwL2Z1bmQtdHJhbnNmZXIvZnVuZC10cmFuc2Zlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAwIDIwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuXG4gIHN0cm9uZyB7XG4gICAgbWFyZ2luLXRvcDogMjByZW07XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICB9XG59XG4udG9vbC10ZXh0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuLnNpZ251cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IDQwcHggIWltcG9ydGFudDtcbiAgaDQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0yNXB4O1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAvLyBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICBjb2xvcjogIzAwMzY3OTtcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgfVxuICB9XG4gIFxuICBmb3JtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgfVxufVxuXG5cbi5tLXJlY2VudCB7XG4gIG1hcmdpbjogMXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDAzNjc5ICFpbXBvcnRhbnQ7XG5cbiAgcCB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIH1cbn1cblxuLm1vc3QtcmVjZW50IHtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGg0IHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC1zaHJpbms6IDI7XG4gICAgd2lkdGg6IDcwcHg7XG4gIH1cblxufVxuXG4uY2lyY2xlLXNtIHtcbiAgd2lkdGg6IDQwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgNTQsIDEyMSwgMC42KTtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW4tZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICBpb24taWNvbiB7XG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgfVxufVxuXG5pb24tYnV0dG9ucyB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTVweCAwcHg7XG4gIGlvbi1idXR0b24ge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIC0tcGFkZGluZy1lbmQ6IDBweCAhaW1wb3J0YW50O1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAyNDFweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgY29sb3I6ICMwMDM2Nzk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDU0LCAxMjEsIDAuMSk7XG4gIC0tbWluLWhlaWdodDogNDBweDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmZmZmO1xuICBtYXJnaW46IDBweDtcblxuICAvLyBpb24tbGFiZWwge1xuICAvLyAgIC0tZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIC8vICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC8vICAgLS1mb250LXdlaWdodDogNTAwO1xuICAvLyAgIC0tY29sb3I6IHJnYmEoMCwgNTQsIDEyMSwgMC42KTtcbiAgLy8gfVxufVxuaW9uLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiAjMDAzNjc5O1xuICAvL2NvbG9yOiByZ2JhKDAsIDU0LCAxMjEsIDAuNikgIWltcG9ydGFudDtcbiAgd2lkdGg6IDI5OXB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dCwgaW9uLXNlbGVjdCB7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYmEoMCwgNTQsIDEyMSwgMC42KTtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNTAwO1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4iLCJpb24tY2FyZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAwIDIwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuaW9uLWNhcmQgc3Ryb25nIHtcbiAgbWFyZ2luLXRvcDogMjByZW07XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cblxuLnRvb2wtdGV4dCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLnNpZ251cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IDQwcHggIWltcG9ydGFudDtcbn1cbi5zaWdudXAgaDQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTI1cHg7XG4gIGxlZnQ6IDEwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIGNvbG9yOiAjMDAzNjc5O1xufVxuLnNpZ251cCBoNCBpbWcge1xuICB3aWR0aDogMjBweDtcbn1cbi5zaWdudXAgZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5cbi5tLXJlY2VudCB7XG4gIG1hcmdpbjogMXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDAzNjc5ICFpbXBvcnRhbnQ7XG59XG4ubS1yZWNlbnQgcCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiA4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4ubW9zdC1yZWNlbnQge1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbn1cbi5tb3N0LXJlY2VudCBoNCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiA4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtc2hyaW5rOiAyO1xuICB3aWR0aDogNzBweDtcbn1cblxuLmNpcmNsZS1zbSB7XG4gIHdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDU0LCAxMjEsIDAuNik7XG4gIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW4tZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xufVxuaW9uLXRvb2xiYXIgaW9uLWljb24ge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG5pb24tYnV0dG9ucyB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTVweCAwcHg7XG59XG5pb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctZW5kOiAwcHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAyNDFweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgY29sb3I6ICMwMDM2Nzk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDU0LCAxMjEsIDAuMSk7XG4gIC0tbWluLWhlaWdodDogNDBweDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmZmZmO1xuICBtYXJnaW46IDBweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgY29sb3I6ICMwMDM2Nzk7XG4gIHdpZHRoOiAyOTlweCAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQsIGlvbi1zZWxlY3Qge1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2JhKDAsIDU0LCAxMjEsIDAuNik7XG4gIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDUwMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59Il19 */";
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
//# sourceMappingURL=default~fund-transfer-fund-transfer-module~fund-transfer-transfer2-transfer2-module-es5.js.map