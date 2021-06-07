const RoleController = require('./role.controller'); 
//const PatientModel = require('./patient.model');
const Authenticate = require('../../libs/auth/jwt_auth'); 


exports.roleRoutes = function (app) {
    app.post('/role', RoleController.roleModel);


};
