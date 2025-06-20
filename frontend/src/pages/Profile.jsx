// frontend/src/pages/Profile.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const API = 'http://localhost:5000';
export default function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(`${API}/users/${id}`).then((res) => res.json()).then(setUser);
  }, [id]);
  if (!user) return <p>Loading...</p>;
  return (
    <div>
      <h1>{user.name}'s Profile</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}