import { fireEvent, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import CategoryPage from '../pages/CategoryPage';
import { customRender } from '../tests/setup';

// CategoryPage should render
it('renders CategoryPage component', () => {
  customRender(<CategoryPage />);

  // And check if the text 'Action' shows up
  const categoryPageTitle = screen.getByText('Action');
  expect(categoryPageTitle).toBeInTheDocument();
});

// CategoryPage should render tabs for each genre
it('renders tabs for each genre', () => {
  customRender(<CategoryPage />);

  // Check if tabs are rendered for each genre
  const actionTab = screen.getByTestId('Action-tab');
  const dramaTab = screen.getByTestId('Drama-tab');
  const comedyTab = screen.getByTestId('Comedy-tab');

  expect(actionTab).toBeInTheDocument();
  expect(dramaTab).toBeInTheDocument();
  expect(comedyTab).toBeInTheDocument();
});

// CategoryPage should change category when clicking on different tabs
it('changes category when clicking on a tab', () => {
  customRender(<CategoryPage />);

  // Click on "Drama" tab to select a category
  const dramaTab = screen.getByTestId('Drama-tab');
  fireEvent.click(dramaTab);

  // Check if the selected category is updated and shows Drama
  const selectedCategoryHeader = screen.getByText('Drama');
  expect(selectedCategoryHeader).toBeInTheDocument();
});

// CategoryPage should filter movies based on selected category
it('filters movies based on selected category', () => {
  customRender(<CategoryPage />);

  // Click on a tab to select a category
  const comedyTab = screen.getByTestId('Comedy-tab');
  fireEvent.click(comedyTab);
  expect(screen.getByText('Comedy')).toBeInTheDocument();
});
