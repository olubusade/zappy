module.exports = (sequelize, Sequelize) => {
    const AuxData = sequelize.define('aux_data', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        aux_key: {
            type: Sequelize.STRING,
            allowNull: false
        },
        aux_value: {
            type: Sequelize.ARRAY(Sequelize.STRING),
            allowNull: false
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt:{
           type:Sequelize.DATE
        }
    });
    return AuxData;
};