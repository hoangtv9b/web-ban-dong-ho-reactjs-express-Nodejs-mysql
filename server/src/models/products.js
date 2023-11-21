const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/database");

const products = sequelize.define('products', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nameProduct: {
        type: DataTypes.STRING,
        allowNull: false
    },
    detailProduct: {
        type: DataTypes.STRING,
        allowNull: false
    },
    codeProduct: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    priceProduct: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    prmProduct: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantityProduct: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tradeMark: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false
    },
    statusProduct: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoryProduct: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imgProduct: {
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
module.exports = products;