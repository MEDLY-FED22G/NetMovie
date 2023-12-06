import { Container } from '@mantine/core';
import React from 'react';
import MovieSearchBar from '../Components/MovieSearchBar.component';

const Home: React.FC = () => {
  return <Container>
    <MovieSearchBar></MovieSearchBar>
  </Container>;
};

export default Home;
