const Review = require('../models/Review')
const Book = require('../models/book')

Book.hasMany(Review)
Review.belongsTo(Book)

module.exports = { Review, Book}

