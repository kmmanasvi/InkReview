// frontend/src/pages/BookList.jsx
import { useEffect, useState } from 'react';
import { fetchBooks } from '../api';
import BookCard from '../components/BookCard';
import './BookList.css';

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchBooks().then(setBooks);
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="booklist-container">
      <h1 className="booklist-title">📚 All Books</h1>
      <input
        type="text"
        placeholder="Search books..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="booklist-grid">
        {filteredBooks.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
}
