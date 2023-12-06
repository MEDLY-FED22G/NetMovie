import { Container } from '@mantine/core';
import React from 'react';
import MovieCard from '../components/MovieCard';
import movieData from '../data/movies.json'

const movies = movieData

const Home: React.FC = () => {
  return (
    <Container>
      {movies.map((movie, index) => (
        <MovieCard key={index} {...movie} />
      ))}
    </Container>
  );
};

export default Home;
