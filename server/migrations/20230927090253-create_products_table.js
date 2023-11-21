'products';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nameProduct: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      priceProduct: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      codeProduct: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      quantityProduct: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      prmProduct: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      detailProduct: {
        allowNull: false,
        type: Sequelize.STRING
      },
      tradeMark: {
        allowNull: false,
        type: Sequelize.STRING
      },
      statusProduct: {
        allowNull: false,
        type: Sequelize.STRING
      },
      categoryProduct: {
        allowNull: false,
        type: Sequelize.STRING
      },
      imgProduct: {
        allowNull: false,
        type: Sequelize.STRING
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};
