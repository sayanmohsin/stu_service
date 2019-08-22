'use strict';
module.exports = (sequelize, DataTypes) => {
    const Students = sequelize.define('students', {
        studentsid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.STRING
        },
        class: {
            type: DataTypes.STRING
        },
        school: {
            type: DataTypes.STRING
        },
        location: {
            type: DataTypes.STRING
        },
        country: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.ENUM('0', '1', '2', '3')
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });

    return Students;
};