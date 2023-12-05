import React from 'react';
import { Container, Group } from '@mantine/core';
import MovieCard from '../components/MovieCard';
import movieData from '../data/movies.json'; // Replace with the correct path

const Home: React.FC = () => {
  return (
    <Container>
      <Group>
        {movieData.map((movie) => (
          <MovieCard key={movie.title} {...movie}></MovieCard>
        ))}
      </Group>
    </Container>
  );
};

export default Home;
