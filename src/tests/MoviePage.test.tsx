import { fireEvent, screen } from '@testing-library/react';
import { expect, test, describe } from 'vitest';
import { customRender } from './setup';
import data from '../data/movies.json';
import MovieCard from '../components/MovieCard';
import MoviePage from '../pages/MoviePage';

describe('MoviePage', () => {
  test('renders a movie that the user Clicked on in the Homepage.', () => {
    const movie = data[0];
    customRender(<MovieCard {...movie} />);
    fireEvent.click(screen.getByRole('link'));
    customRender(<MoviePage />);
    const movieCards = screen.getAllByAltText('Harry Potter and the Chamber of Secrets Poster');
    expect(movieCards.length).toBeGreaterThan(1);
  });

});
