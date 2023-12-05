import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App.tsx';
import Bookmarks from './Pages/Bookmark.tsx';
import MoviePage from './Pages/MoviePage.tsx';
import Category from './Pages/Category.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/" element={<App />} />
        <Route path="/category"  element={<Category />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/movie/:movieId" element={<MoviePage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
