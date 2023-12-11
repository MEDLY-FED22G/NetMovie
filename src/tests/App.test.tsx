import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';
import App from '../App';
import movies from '../data/movies.json';
import { customRender } from './setup';

describe('Entire application', () => {
  const user = userEvent.setup();

  test('navigates to and renders categories page', async () => {
    customRender(<App />);
    // Initial check to verify that the category page is not active
    expect(screen.queryByText('Action')).not.toBeInTheDocument();

    const headerNavBar = screen.getByTestId('nav-bar');
    const { getByText } = within(headerNavBar);

    const categoriesLink = getByText('Categories');
    await user.click(categoriesLink);

    // Verifies that category page is active after click
    const categoryPageTitle = screen.getByText('Action');
    expect(categoryPageTitle).toBeInTheDocument();

    const allMoviesOnCategoryPage = screen.getAllByRole('link', {
      name: /Poster/i,
    });
    expect(allMoviesOnCategoryPage).toHaveLength(movies.length);
  });

  test('navigates to and renders bookmarks page', async () => {
    customRender(<App />);
    // Initial check to verify that the bookmarks page is not active
    expect(screen.queryByText('My Bookmarks')).not.toBeInTheDocument();

    const headerNavBar = screen.getByTestId('nav-bar');
    const { getByText } = within(headerNavBar);

    const bookmarksLink = getByText('Bookmarks');
    await user.click(bookmarksLink);

    const bookmarksPageTitle = screen.getByText('My Bookmarks');
    expect(bookmarksPageTitle).toBeInTheDocument();
  });

  test.only('navigates to and renders selected movie page', async () => {
    customRender(<App />);
    // Initial check to verify that the selected movie page is not active
    expect(screen.queryByText('Add to Bookmarks')).not.toBeInTheDocument();
    const movieGrid = screen.getByTestId('movie-group');
    const { getByRole } = within(movieGrid);

    const selectedMovie = getByRole('link', {
      name: /The Little Mermaid/i,
    });
    await user.click(selectedMovie);

    // Verifies that all selected movie data is present
    const movieTitle = screen.getByText('The Little Mermaid');
    const year = screen.getByText('1989');
    const categories = screen.getByText('Animation, Family, Fantasy');
    const rating = screen.getByText('Rating: G');
    const description = screen.getByText(
      "A mermaid princess makes a Faustian bargain in an attempt to become human and win a prince's love.",
    );
    const image = screen.getByRole('img');
    const bookmarkSelectedMovieBtn = screen.getByText('Add to Bookmarks');

    expect(movieTitle).toBeInTheDocument();
    expect(year).toBeInTheDocument();
    expect(categories).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(bookmarkSelectedMovieBtn).toBeInTheDocument();
  });
});
