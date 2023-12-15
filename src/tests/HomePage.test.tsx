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
    await user.keyboard('the silence of the lambs');

    const movieGrid = screen.getByTestId('movie-group');
    const { getByRole, getAllByRole } = within(movieGrid);
    const allMovies = getAllByRole('link', {
      name: /Poster/i,
    });
    const searchResult = getByRole('link', {
      name: /The Silence of the Lambs/i,
    });

    expect(searchResult).toBeVisible;
    expect(allMovies).toHaveLength(1);
  });

  test('renders the correct amount of movies in the trending carousel', async () => {
    customRender(<HomePage />);

    const trendingCarousel = screen.getByTestId('Trending-carousel');
    const { getAllByRole } = within(trendingCarousel);

    const trendingMovies = getAllByRole('link', {
      name: /Poster/i,
    });
    expect(trendingMovies).toHaveLength(9);
  });

  test('renders the correct amount of movies in the recommended carousel', async () => {
    customRender(<HomePage />);

    const trendingCarousel = screen.getByTestId('Recommended for you-carousel');
    const { getAllByRole } = within(trendingCarousel);

    const trendingMovies = getAllByRole('link', {
      name: /Poster/i,
    });
    expect(trendingMovies).toHaveLength(7);
  });
});
