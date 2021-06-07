const RoleModel = require('./role.model');
const { result } = require('lodash');
const jwt = require('jsonwebtoken');
const Sequelize = require('sequelize');
const multer = require('multer'); 

const sequelize = require('../../configs/connection');

const roleModel = {};

roleModel.Sequelize = Sequelize;
roleModel.sequelize = sequelize;

roleModel.user = require("../apis/models/user.js")(sequelize, Sequelize);
roleModel.role = require("../apis/models/role.js")(sequelize, Sequelize);

//module.exports = {
    roleModel.sequelize.sync({force: true}).then(() => {
        console.log('Drop and Resync Db');
        initial();
    })

    function initial() {
    Role.create({
        id: 1,
        name: "user"
    })

    Role.create({
        id: 2,
        name: config.roles.super_admin,
    });
    
    Role.create({
        id: 3,
        name: config.roles.casual_user,
    });
    Role.create({
        id: 4,
        name: config.roles.paypoint_agent,
    });
    Role.create({
        id: 5,
        name: config.roles.custom_reseller,
    });
    Role.create({
        id: 6,
        name: config.roles.api_consumer,
    });
    }
//}

