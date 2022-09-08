'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Users extends Model { }
    Users.init({

        user: { type: DataTypes.STRING },
        pass: { type: DataTypes.STRING },
        name: { type: DataTypes.STRING },
        profile_id: { type: DataTypes.INTEGER }

    }, {
        sequelize,
        modelName: 'Users',
        underscored: true

    })
    return Users
}