import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-section">
          <h2 className="footer-logo">InkReview</h2>
          <p className="footer-description">
            Discover books, share your thoughts, and connect with fellow readers.
          </p>
        </div>

        {/* Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/books">Books</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Connect</h3>
          <ul>
            <li>Email: <a href="mailto:inkreview@contact.com">inkreview@contact.com</a></li>
            <li>GitHub: <a href="https://github.com" target="_blank" rel="noopener noreferrer">/inkreview</a></li>
            <li>Instagram: <a href="#">@inkreview</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} InkReview. All rights reserved.
      </div>
    </footer>
  );
}
