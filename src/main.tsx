import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App.tsx';
import Bookmark from './Pages/Bookmark.tsx';
import MoviePage from './Pages/MoviePage.tsx';
import Category from './Pages/Category.tsx';
import Home from './Pages/Home.tsx';
import './index.css';

const theme = createTheme({
  //fontFamily: 'Open Sans, sans-serif',  ANGE FONT HÄR
  primaryColor: 'blue', // ANGE PRIMARY COLOR HÄR
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="category" element={<Category />} />
            <Route path="bookmark" element={<Bookmark />} />
            <Route path="cards" element={<MoviePage />} />
          </Route>
        </Routes>
      </Router>
    </MantineProvider>
  </React.StrictMode>,
);
