import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App.tsx';
import Navbar from './Components/Navbar.tsx';
import Bookmark from './Pages/Bookmark.tsx';
import Cards from './Pages/Cards.tsx';
import Categori from './Pages/Categori.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
    <CssBaseline />
    <Navbar />
      <Routes>
      <Route path="/" element={<App />} />
        <Route path="/categori" element={<Categori />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
