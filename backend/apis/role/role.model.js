const Sequelize = require('sequelize');

const sequelize = require('../../configs/connection');

    Role.sync();


    const roleModel = {};

    roleModel.Sequelize = Sequelize;
    roleModel.sequelize = sequelize;
    
    roleModel.user = require("../apis/models/user.js")(sequelize, Sequelize);
    roleModel.role = require("../apis/models/role.js")(sequelize, Sequelize);  

    roleModel.role.belongsToMany(roleModel.user, {
      through: "user_roles",
      foreignKey: "roleId",
      otherKey: "userId"
    });
    roleModel.user.belongsToMany(roleModel.role, {
      through: "user_roles",
      foreignKey: "userId",
      otherKey: "roleId"
    });
    
    roleModel.ROLES = [
                config.roles.super_admin, 
                config.roles.casual_user,
                config.roles.paypoint_agent, 
                config.roles.custom_reseller,
                config.roles.api_consumer
    ];
    
    module.exports = roleModel;
