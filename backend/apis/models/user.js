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
            type: Sequelize.DOUBLE,
            DEFAULT:0
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
        dob:{
            type: Sequelize.STRING
        },
        cashback:{
            type: Sequelize.DOUBLE,
            DEFAULT:0
        },
        security_question:{
            type: Sequelize.STRING,
        },
        security_answer:{
            type: Sequelize.STRING,
        },
        nickname:{
            type: Sequelize.STRING
        },
        referral_code:{
            type: Sequelize.STRING,
            allowNull: false
        },
        referrer_code:{
            type: Sequelize.STRING
        },
        referred_by:{
            type: Sequelize.STRING
        },
        password_reset_otp:{
            type: Sequelize.INTEGER
        },
        notification_alert:{
            type: Sequelize.STRING
        },
        alert_preference:{
            type: Sequelize.STRING
        },
        low_wallet_trigger_amount:{
            type: Sequelize.DOUBLE
        },
        automated_report:{
            type: Sequelize.STRING
        },
        commission_regime:{
            type: Sequelize.STRING
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