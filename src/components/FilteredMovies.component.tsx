import { Group, Text } from '@mantine/core';
import React from 'react';
import MovieCard from './MovieCard';
import { useMovieContext } from './MovieContext';

const MoviesGrid: React.FC = () => {
  const { filteredMovies } = useMovieContext();

  if (filteredMovies.length === 0) {
    return <Text>No movies matched your search.</Text>;
  }

  return (
    <Group gap={'lg'} data-testid="movie-group">
      {filteredMovies.map((movie, index) => (
        <div key={index} style={{ margin: '10px' }}>
          <MovieCard {...movie} />
        </div>
      ))}
    </Group>
  );
};

export default MoviesGrid;
