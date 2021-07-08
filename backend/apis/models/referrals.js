module.exports = (sequelize, Sequelize) => {
    const Referrals = sequelize.define('referrals', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        referrer: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        referrer_code: {
            type: Sequelize.STRING,
            allowNull: false
        },
        referral_code: {
            type: Sequelize.STRING,
            allowNull: false
        },
        referral: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        referrer_amount: {
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        created: {
            type: Sequelize.DATE
        },
        createdAt: {
            type: Sequelize.DATE,
        }
        
    });
    return Referrals;
};