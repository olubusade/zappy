module.exports = (sequelize, Sequelize) => {
    const RecurrentTransMobile = sequelize.define('recurrent_trans_mobile', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false  
        },
        last_date: {
            type: Sequelize.STRING,
            allowNull: false
        },
        last_time: {
            type: Sequelize.STRING,
            allowNull: false
        },
        next_date: {
            type: Sequelize.STRING,
            allowNull: false
        },
        next_time: {
            type: Sequelize.STRING,
            allowNull: false
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false
        },
        mobile: {
            type: Sequelize.STRING,
            allowNull: false
        },
        amount: {
            type: Sequelize.STRING,
            allowNull: false
        },
        duration: {
            type: Sequelize.STRING,
            allowNull: false
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt:{
           type:Sequelize.DATE
        }
    });
    return RecurrentTransMobile;
};