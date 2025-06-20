// frontend/src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">📚 InkReview</Link>
        </div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/books">Books</Link>
        </div>
      </div>
    </nav>
  );
}



