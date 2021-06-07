const UserController = require('./user.controller'); 
//const PatientModel = require('./patient.model');
const auth = require('../../libs/auth/jwt_auth'); 
var middlewares = [auth.tokenAuthorized];

exports.userRoutes = function (app) {
    app.post('/register_new_user', UserController.userController.registerNewUser);
    app.post('/login', [UserController.userController.login]);
    app.post('/get_users', [UserController.userController.getUsers]);
};
