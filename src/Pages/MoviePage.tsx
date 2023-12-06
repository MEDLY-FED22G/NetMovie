import { Container } from '@mantine/core';
import React from 'react';

import BackButton from '../components/BackButton';
import MovieDetailsLayout from '../components/MovieDetailsLayout';
import { Movie } from '../components/MovieContext';

const MoviePage: React.FC = () => {
  const movieData: Movie = {
    title: 'The Godfather: Part II',
    year: 1974,
    rating: 'R',
    actors: ['Al Pacino', 'Robert De Niro', 'Robert Duvall'],
    genre: 'Crime, Drama',
    synopsis:
      'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR7,0,380,562_.jpg',
    isTrending: true,
  };
  return (
    <Container pt={{ base: 10, xs: 50, md: 70 }}>
      <BackButton />
      <MovieDetailsLayout movie={movieData} />
    </Container>
  );
}

export default MoviePage;
