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
    await queryInterface.createTable("Courses" , {
         
        courseId: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.STRING
        },
        title: {
          type: Sequelize.STRING,
          allowNull : false,
        },
        duration: {
          type: Sequelize.STRING,
          allowNull : false,
        } ,
        discountedPrice: {
          type: Sequelize.STRING,
          allowNull : false,
        },
        regularPrice: {
          type: Sequelize.STRING,
          allowNull : false,
        },
        content: {
          type: Sequelize.TEXT
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
    })

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
