module.exports = (sequelize, Sequelize) => {
    const BeneficiaryGroup = sequelize.define('ben_group', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false  
        },
        group_name: {
            type: Sequelize.STRING,
            allowNull: false  
        },
        group: {
            type: Sequelize.ARRAY(Sequelize.STRING(5000)),
            allowNull: true
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt:{
           type:Sequelize.DATE
        }
    });
    return BeneficiaryGroup;
};