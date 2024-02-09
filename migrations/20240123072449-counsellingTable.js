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
    await queryInterface.createTable("counsellingForms", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hostel: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mobileNo: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
      dateOfBirth: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      fatherName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      motherName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bloodGroup: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      permanentAddress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      parentNo: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
      guardian: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      guardianRelationship: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      guardianAddress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      guardianMobile: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
      programApplied: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      subjectApplied: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      reference: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      declaration: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      entranceApplied: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      declaration: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      submitDate: {
        allowNull: false,
        type: Sequelize.DATE,
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
