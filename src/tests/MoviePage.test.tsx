import { screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import MoviePage from '../pages/MoviePage';
import { customRender } from './setup';

test.only('MoviePage loads with the correct title and displays movie details', () => {
  customRender(<MoviePage />);

  // Use a regular expression to allow for flexible matching
  const titleText = screen.getByText('Harry Potter and the Chamber of Secrets', {exact : false}) ;
  expect(titleText).toBeInTheDocument();

  // Continue with the rest of your tests
  const yearText = screen.getByText('2002');
  expect(yearText).toBeInTheDocument();

  const ratingText = screen.getByText('Rating: PG');
  expect(ratingText).toBeInTheDocument();
});
