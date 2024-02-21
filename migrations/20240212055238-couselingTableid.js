'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn('counsellingforms', 'id', {
      type: Sequelize.STRING, // Change the data type to STRING
      allowNull: false, // Adjust other options as needed
      primaryKey: true,
  });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.changeColumn('counsellingforms', 'id', {
      type: Sequelize.INTEGER, // Change back to INTEGER for rollback
      allowNull: false,
      primaryKey: true,
  });
  }
};
