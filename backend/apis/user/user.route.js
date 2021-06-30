const UserController = require('./user.controller'); 
//const PatientModel = require('./patient.model');
const auth = require('../../libs/auth/jwt_auth'); 
var middlewares = [auth.tokenAuthorized];

exports.userRoutes = function (app) {
    app.post('/register_new_user', UserController.userController.registerNewUser);
    app.post('/login', [UserController.userController.login]);
    //app.post('/user_password_reset_email',[UserController.userController.passwordResetEmail]);
    app.post('/update_user_profile', [UserController.userController.updateUserProfile]);
    app.post('/reset_user_password',[UserController.userController.resetUserPassword]);
    app.post('/get_users', [UserController.userController.getUsers]);
    app.post('/finish_wallet_payment', [UserController.userController.finishWalletPayment]);
};
