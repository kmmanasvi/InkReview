// frontend/src/api.js
const API = 'http://localhost:5000';
export const fetchBooks = async () => (await fetch(`${API}/books`)).json();
export const fetchBook = async (id) => (await fetch(`${API}/books/${id}`)).json();
export const fetchReviews = async (bookId) => (await fetch(`${API}/reviews?bookId=${bookId}`)).json();
export const postReview = async (review) => {
  await fetch(`${API}/reviews`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(review),
  });
};

