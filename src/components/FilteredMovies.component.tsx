import React from 'react';
import { Container, Group, Text } from '@mantine/core';
import { useMovieContext } from './MovieContext'; // Update the import path as necessary
import MovieCard from './MovieCard'; // Update the import path as necessary

const MoviesGrid: React.FC = () => {
    const { filteredMovies } = useMovieContext();
  
    if (filteredMovies.length === 0) {
      return (
            <Text>No movies matched your search.</Text>);
    }
  
    return (
        <Container size={'xl'} py={30} mih={'calc(100vh - 129px)'}>
            <Group gap={'lg'}>
            {filteredMovies.map((movie, index) => (
                <div key={index} style={{margin: '10px' }}>
                <MovieCard {...movie} />
                </div>
            ))}
            </Group>
        </Container>
      );
    };
    
    export default MoviesGrid;
