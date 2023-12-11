import { screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import MovieCard from '../components/MovieCard';
import data from '../data/movies.json';
import { customRender } from './setup';

test('renders year and rating props', () => {
  const movie = data[0];
  customRender(<MovieCard {...movie} />);

  const yearText = screen.getByText('2002');
  const ratingText = screen.getByText('Rating: PG');

  expect(yearText).toBeInTheDocument();
  expect(ratingText).toBeInTheDocument();
});
