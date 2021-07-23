module.exports = (sequelize, Sequelize) => {
    const TransactionHistory = sequelize.define('trans_hist', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false  
        },
        month: {
            type: Sequelize.STRING,
            allowNull: false
        },
        year: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        transactions: {
            type: Sequelize.ARRAY(Sequelize.STRING(5000)),
            allowNull: false
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt:{
           type:Sequelize.DATE
        }
    });
    return TransactionHistory;
};