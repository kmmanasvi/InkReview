// frontend/src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookList from './pages/BookList';
import BookDetail from './pages/BookDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import { AppProvider } from './context/AppContext';
export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<BookList />} />
          <Route path='/books/:id' element={<BookDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppProvider>
  );
}
