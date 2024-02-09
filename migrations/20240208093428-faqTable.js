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
    await queryInterface.createTable('FAQs', {
      faqId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      courseId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Courses', // The name of the referenced table
          key: 'courseId', // The name of the referenced column in the Courses table
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      title: {
        type: Sequelize.STRING, // Adjust the data type based on your requirements
      },
      question: {
        type: Sequelize.STRING, // Adjust the data type based on your requirements
        allowNull: false,
      },
      answer: {
        type: Sequelize.STRING, // Adjust the data type based on your requirements
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
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
