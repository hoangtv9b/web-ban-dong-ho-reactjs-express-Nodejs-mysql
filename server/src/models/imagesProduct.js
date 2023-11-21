const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/database");

const imagesProduct = sequelize.define('imagesproduct', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idProduct: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    linkimages: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
})
module.exports = imagesProduct;