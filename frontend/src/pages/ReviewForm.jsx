// frontend/src/components/ReviewForm.jsx
import { useState } from 'react';
import './ReviewForm.css';

export default function ReviewForm({ bookId, onReviewAdd }) {
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(1);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:5000/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ bookId, content, rating }),
    });

    const newReview = await response.json(); // assuming backend returns saved review

    setContent('');
    setRating(1);
    setSuccess(true);
    onReviewAdd(newReview); // dynamically add review to UI

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div>
      <form className="review-form" onSubmit={handleSubmit}>
        <h3>✍️ Leave a Review</h3>
        <textarea
          placeholder="Write your review..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />
        <button type="submit">Submit Review</button>
      </form>
      {success && <div className="popup">✅ Review submitted successfully!</div>}
    </div>
  );
}
