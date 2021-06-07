const UserController = require('./user.controller'); 
const jwtAuth = require('../../libs/auth/jwt_auth'); 


exports.userRoutes = function (app) {
    app.post('/user', UserController.userController.registerUser);
    app.get('/login', [UserController.userController.processLogin]);

    app.post('/otp_verify_mobile_no', UserController.userController.otpMobileNo);
};
