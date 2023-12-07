import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App.tsx';
import BookmarkPage from './pages/BookmarkPage.tsx';
import CategoryPage from './pages/CategoryPage.tsx';
import HomePage from './pages/HomePage.tsx';
import MoviePage from './pages/MoviePage.tsx';
import './index.css';
import { MovieProvider } from './components/MovieContext.tsx';

const theme = createTheme({
  fontFamily: 'SharpSansNo1-Medium',
  primaryColor: 'blue',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <MovieProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="category" element={<CategoryPage />} />
            <Route path="bookmark" element={<BookmarkPage />} />
            <Route path="movie-page" element={<MoviePage />} />
          </Route>
        </Routes>
      </Router>
      </MovieProvider>
    </MantineProvider>
  </React.StrictMode>,
);
