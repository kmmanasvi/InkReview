// backend/controllers/userController.js
const User = require('../models/User');
exports.getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};
exports.updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(user);
};