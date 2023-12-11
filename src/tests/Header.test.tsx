import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test } from 'vitest';
import Header from '../components/Header';
import { customRender } from './setup';

test('Check that header renders links with correct href links', async () => {
  const headerLinks = [
    { text: 'NetMOVIE', href: '/' },
    { text: 'Home', href: '/' },
    { text: 'Categories', href: '/categories' },
    { text: 'Bookmarks', href: '/bookmarks' },
  ];

  customRender(<Header />);
  const header = screen.getByRole('banner');
  await waitFor(() => {
    expect(header).toBeInTheDocument();
  });

  // Check header links and their href attributes
  headerLinks.forEach(async ({ text, href }) => {
    const link = screen.getByRole('link', { name: text });
    expect(link).toBeInTheDocument();
    // Check if the href attribute is present and has the correct value
    expect(link).toHaveAttribute('href', href);
    // Use userEvent to click on the link
    await userEvent.click(link);
    // Check if the location has changed to the href
    await waitFor(() => {
      expect(window.location.pathname).toEqual(href);
    });
  });
});
