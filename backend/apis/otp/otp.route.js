const OtpController = require('./otp.controller'); 
const Authenticate = require('../../libs/auth/jwt_auth'); 


exports.otpRoutes = function (app) {
    app.post('/otp_validate_mobile', OtpController.otpController.validateMobileNo);
    app.post('/otp_validate_email', OtpController.otpController.validateEmail);
    app.post('/verify_mobile_otp', OtpController.otpController.verifyMobileOtp);
    app.post('/verify_email_otp', OtpController.otpController.verifyEmailOtp);
    app.post('/send_password_reset_otp', OtpController.otpController.sendPasswordResetOtp);
    app.post('/verify_password_reset_otp', OtpController.otpController.verifyPasswordResetOtp);
};
