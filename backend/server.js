// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();
const PORT = process.env.PORT || 5000;
connectDB();
app.use(express.json());
app.use(cors());
app.use('/books', require('./routes/bookRoutes'));
app.use('/reviews', require('./routes/reviewRoutes'));
app.use('/users', require('./routes/userRoutes'));
app.use(require('./middleware/errorHandler'));
app.post('/reviews', async (req, res) => {
  try {
    const newReview = await Review.create(req.body);
    res.json(newReview);
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit review' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));