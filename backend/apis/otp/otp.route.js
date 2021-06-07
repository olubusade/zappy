const OtpController = require('./otp.controller'); 
const Authenticate = require('../../libs/auth/jwt_auth'); 


exports.otpRoutes = function (app) {
    app.post('/otp_verify_mobile_no', OtpController.otpController.validateMobileNo);
    app.post('/verify_otp', OtpController.otpController.verifyOtp);
};
