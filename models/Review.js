const { DataTypes } = require('sequelize');
const dbConnection = require('../db');

const Review = dbConnection.define('review', {
    reviewer: { type: DataTypes.STRING, allowNull: false },
    rating: { type: DataTypes.INTEGER, allowNull: false },
    comment: { type: DataTypes.TEXT }
})

// Explain: you didn't add bookId to the field list above. 
// Where will that column come from, and when will it actually appear in the database?
//- The database automatically creates the field for you. It will be an integer and it will be increase as you add more.

module.exports = Review