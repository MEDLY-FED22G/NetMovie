import { useEffect, useState } from 'react';
import moviesData from '../data/movies.json';
import { Movie } from '../types';
import { IconArrowBadgeLeft, IconArrowBadgeRight } from '@tabler/icons-react';

export function MoviesCarousel() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setMovies(moviesData.filter((movie) => movie.isTrending) as Movie[]);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
      <button onClick={handlePrev} style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}>
        <IconArrowBadgeLeft />
      </button>
      <div style={{ display: 'flex', transition: 'transform 0.5s ease-in-out', marginLeft: `-${currentIndex * (400 + 20)}px` }}>
        {movies.map((movie) => (
          <div
            key={movie.title}
            style={{
              flex: '0 0 400px',
              height: '400px',
              boxSizing: 'border-box',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundImage: `url(${movie.thumbnail})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              margin: '10px',
              position: 'relative', 
            }}
          >
            <div style={{ fontWeight: 700, textTransform: 'uppercase', opacity: 0.7, position: 'absolute', top: '10px', left: '10px' }}>
              {movie.genre}
            </div>
            <div style={{ fontWeight: 900, fontSize: '1.5rem', marginBottom: '8px', position: 'absolute', bottom: '10px', left: '10px' }}>
              {movie.title}
            </div>
            <div style={{ fontWeight: 700, opacity: 0.7, position: 'absolute', bottom: '10px', right: '10px' }}>{movie.year}</div>
          </div>
        ))}
      </div>
      <button onClick={handleNext} style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)' }}>
        <IconArrowBadgeRight />
      </button>
    </div>
  );
}
