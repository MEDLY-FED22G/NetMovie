import { Container } from '@mantine/core';
import React from 'react';
import MovieSearchBar from '../components/MovieSearchBar.component';

const HomePage: React.FC = () => {
  return <Container>
    <MovieSearchBar></MovieSearchBar>
  </Container>;
};

export default HomePage;
