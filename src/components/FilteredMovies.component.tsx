import React from 'react';
import { Grid, Text } from '@mantine/core';
import { useMovieContext } from './MovieContext'; // Update the import path as necessary
import MovieCard from './MovieCard'; // Update the import path as necessary

const MoviesGrid: React.FC = () => {
    const { filteredMovies } = useMovieContext();
  
    if (filteredMovies.length === 0) {
      return (
            <Text>No movies matched your search.</Text>);
    }
  
    return (
      <div style={{ marginTop: '20px' }}>
        <Grid>
          {filteredMovies.map((movie, index) => (
            <Grid.Col span={2} key={index}>
              <MovieCard {...movie} />
            </Grid.Col>
          ))}
        </Grid>
      </div>
    );
  };
  
  export default MoviesGrid;
