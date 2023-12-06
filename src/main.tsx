import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App.tsx';
import BookmarkPage from './Pages/BookmarkPage.tsx';
import CategoryPage from './Pages/CategoryPage.tsx';
import HomePage from './Pages/HomePage.tsx';
import MoviePage from './Pages/MoviePage.tsx';
import './index.css';
import { MovieProvider } from './Components/MovieContext.tsx';

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
