// backend/controllers/reviewController.js
const Review = require('../models/Review');
exports.getReviews = async (req, res) => {
  const reviews = await Review.find({ bookId: req.query.bookId });
  res.json(reviews);
};
exports.addReview = async (req, res) => {
  const review = new Review(req.body);
  await review.save();
  res.status(201).json(review);
};
