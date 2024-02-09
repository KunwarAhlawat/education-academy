const { DataTypes } = require('sequelize');
const sequelize = require('../db/dbConnect'); // replace with your actual DataTypes instance

const courseModel = sequelize.define('Course', {
    courseId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    duration: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    discountedPrice: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    regularPrice: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT
    },
    lecturesCount: {
        type: DataTypes.INTEGER
    },
    studyMode: {
        type: DataTypes.STRING
    },
    imgSrc: {
        type: DataTypes.STRING
    }
} 
 );

 

module.exports = courseModel;
