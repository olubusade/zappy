module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('users', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        first_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        last_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        mobile_no: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        gender:{
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        state: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
        role_id: {
            type: Sequelize.STRING,
            allowNull: false
        },
        wallet_amount: {
            type: Sequelize.STRING
        },
        points: {
            type: Sequelize.STRING
        },
        dummy: {
            type: Sequelize.STRING
        },
        is_deleted: {
            type: Sequelize.STRING
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt:{
           type:Sequelize.DATE
        },
        created:{
            type: Sequelize.DATE
        },
        transaction_pin:{
            type: Sequelize.STRING,
            allowNull: false
        },
        cashback:{
            type: Sequelize.STRING,
        },
        sms_unit:{
            type: Sequelize.STRING,
        },
        voice_sms_unit:{
            type: Sequelize.STRING,
        },
        referral_bonus:{
            type: Sequelize.STRING,
        }
    });
    return User;
};