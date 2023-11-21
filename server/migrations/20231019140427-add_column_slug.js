'posts';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('posts', 'slug', {
      allowNull: false,
      type: Sequelize.STRING
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('posts', 'slug');
  }
};
