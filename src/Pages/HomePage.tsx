import React from 'react';
import MovieSearchBar from '../components/MovieSearchBar.component';

import { MoviesCarousel } from '../components/MoviesCarousel';

export default function Home() {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    marginTop: '50px',
    padding: '20px'
  };

  return (
    <div style={containerStyle}>
      <MovieSearchBar />
      <MoviesCarousel />
    </div>
  );
}

