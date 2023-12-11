import { fireEvent, screen } from '@testing-library/react';
import { expect, test, describe } from 'vitest';
import BookmarkPage from '../pages/BookmarkPage'; // Update the path accordingly
import { customRender } from './setup';
import data from '../data/movies.json';
import MovieCard from '../components/MovieCard';

describe('BookmarkPage', () => {
  test('renders bookmarked movies on the BookmarkPage after adding a movie to bookmarks', () => {
    const movie = data[0];

    customRender(<MovieCard {...movie} />);

    // Click on the "Add to Bookmarks" button using data-testid
    fireEvent.click(screen.getByRole('button'));

    customRender(<BookmarkPage />);

    // Get all elements with the specified alt text
    const movieCards = screen.getAllByAltText('Harry Potter and the Chamber of Secrets Poster');

    // Check if at least one element with the specified alt text is present
    expect(movieCards.length).toBeGreaterThan(0);
  });

  test('keeps bookmarked movies on the BookmarkPage after a page reload', () => {
    // Mocking bookmarked movies for testing
    const movie = data[0];

    // Render the MovieCard component with the MovieDetailsBookmarkButton
    customRender(<MovieCard {...movie} />);

    // Click on the "Add to Bookmarks" button using data-testid
    fireEvent.click(screen.getByRole('button'));

    customRender(<BookmarkPage />);
    window.location.reload();

    const movieCards = screen.getAllByAltText('Harry Potter and the Chamber of Secrets Poster');
    expect(movieCards.length).toBeGreaterThan(0);
  });

});
