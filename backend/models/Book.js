// backend/models/Book.js
const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  description: String,
  rating: Number,
  image: String,
});
module.exports = mongoose.model('Book', bookSchema);