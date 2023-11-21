'products';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('products', 'createdAt', {
      allowNull: false,
      type: Sequelize.DATE
    })
    await queryInterface.addColumn('products', 'updatedAt', {
      allowNull: false,
      type: Sequelize.DATE
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('products', 'createdAt');
    await queryInterface.removeColumn('products', 'updatedAt');
  }
};
