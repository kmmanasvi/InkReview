// frontend/src/pages/BookDetail.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBook, fetchReviews } from '../api';
import ReviewForm from '../components/ReviewForm';
import './BookDetail.css';

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchBook(id).then(setBook);
    fetchReviews(id).then(setReviews);
  }, [id]);

  const handleReviewAdd = (newReview) => {
    setReviews((prevReviews) => [newReview, ...prevReviews]);
  };

  if (!book) return <div className="loader">Loading...</div>;

  const filteredReviews = reviews.filter((rev) =>
    rev.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="book-detail-container">
      <div className="book-card">
        <h1 className="book-title">📘 {book.title}</h1>
        <p className="book-description">{book.description}</p>
      </div>

      <div className="review-section">
        <h2 className="review-heading">Reader Reviews</h2>
        <input
          type="text"
          className="search-bar"
          placeholder="Search reviews..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="reviews">
          {filteredReviews.length > 0 ? (
            filteredReviews.map((rev) => (
              <div className="review-card" key={rev._id}>
                <p>{rev.content}</p>
                <span className="rating">⭐ {rev.rating}</span>
              </div>
            ))
          ) : (
            <p className="no-results">No matching reviews found.</p>
          )}
        </div>
      </div>

      <div className="form-section">
        <ReviewForm bookId={id} onReviewAdd={handleReviewAdd} />
      </div>
    </div>
  );
}
