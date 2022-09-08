'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Records extends Model { }
    Records.init({

        table: { type: DataTypes.STRING },
        action: { type: DataTypes.STRING },
        description: { type: DataTypes.STRING },
        user_id: { type: DataTypes.INTEGER }

    }, {
        sequelize,
        modelName: 'Records',
        underscored: true

    })
    return Records
}