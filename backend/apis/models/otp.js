module.exports = (sequelize, Sequelize) => {
    const Otp = sequelize.define('otp', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        mobile_no: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        otp: {
            type: Sequelize.STRING,
            allowNull: false
        },
        created: {
            type: Sequelize.DATE
        },
        createdAt: {
            type: Sequelize.DATE,
        },
        updatedAt: Sequelize.DATE
    });
    return Otp;
};