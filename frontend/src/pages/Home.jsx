// frontend/src/pages/Home.jsx
import { useEffect, useState } from 'react';
import { fetchBooks } from '../api';
import BookCard from '../components/BookCard';
import './Home.css'; // Import the CSS here

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks().then(setBooks);
  }, []);

  return (
    <div className="home-container">
      <div className="overlay">
        <h1 className="home-title">Featured Books</h1>
        <div className="book-grid">
          {books.slice(0, 3).map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}
