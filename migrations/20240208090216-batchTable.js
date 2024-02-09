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

    await queryInterface.createTable('BatchDetails', {
      batchId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      courseId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Courses', // This is the name of the referenced table
          key: 'courseId' // This is the name of the referenced column in the Courses table
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      title: {
        type: Sequelize.STRING,
        allowNull : false
      },
      startTime : {
        type : Sequelize.TIME,
        allowNull : false
      },
      endTime : {
        type : Sequelize.TIME,
        allowNull : false
      },
      description: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
