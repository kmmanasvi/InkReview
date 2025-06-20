// frontend/src/components/BookCard.jsx
import { Link } from 'react-router-dom';

export default function BookCard({ book }) {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <Link to={`/books/${book._id}`}>View Details</Link>
    </div>
  );
}