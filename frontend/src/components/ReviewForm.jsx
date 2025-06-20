
// frontend/src/components/ReviewForm.jsx
import { useState } from 'react';
import './ReviewForm.css';

export default function ReviewForm({ bookId }) {
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(1);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5000/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ bookId, content, rating }),
    });
    setContent('');
    setRating(1);
    setSuccess(true);

    setTimeout(() => setSuccess(false), 3000); // Hide after 3 seconds
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
