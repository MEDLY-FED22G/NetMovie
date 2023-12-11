import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';
import movies from '../data/movies.json';
import HomePage from '../pages/HomePage';
import { customRender } from './setup';

describe('Home page component', () => {
  const user = userEvent.setup();

  test('renders a message when search is invalid', async () => {
    customRender(<HomePage />);
    const searchInput = screen.getByPlaceholderText(/Search for a movie.../i);
    await user.click(searchInput);
    await user.keyboard('blabla');
    const noMatchMessage = screen.getByText('No movies matched your search.');
    expect(noMatchMessage).toBeVisible;
  });

  test('renders all movies when no searchTerm has been added', () => {
    customRender(<HomePage />);
    const movieGrid = screen.getByTestId('movie-group');
    const { getAllByRole } = within(movieGrid);

    const movieLinks = getAllByRole('link', {
      name: /Poster/i,
    });
    expect(movieLinks).toHaveLength(movies.length);
  });

  test('renders the appropriate movie that gets searched for', async () => {
    customRender(<HomePage />);
    const searchInput = screen.getByPlaceholderText(/Search for a movie.../i);
    await user.click(searchInput);
    await user.keyboard('silence');

    const movieGrid = screen.getByTestId('movie-group');
    const { getByRole } = within(movieGrid);

    const searchResult = getByRole('link', {
      name: /The Silence of the Lambs/i,
    });
    expect(searchResult).toBeVisible;
  });
});
