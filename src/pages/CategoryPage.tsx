import { Container, Tabs } from '@mantine/core';
import React, { useState } from 'react';
import MovieCard from '../components/MovieCard';
import { useMovieContext } from '../components/MovieContext';

const CategoryPage: React.FC = () => {
  const { movies } = useMovieContext();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ['Action', 'Drama', 'Thriller'];

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
  };

  // If a category is selected, filter movies that belong to that category
  const filteredMovies =
    selectedCategory && selectedCategory
      ? movies.filter((movie) => movie.genre.includes(selectedCategory))
      : movies;

  return (
    <Container size="xl" py={30} mih="calc(100vh - 129px)">
      <h2>Movie Categories</h2>

      <Tabs defaultValue={categories[0]} onChange={handleCategoryChange}>
        <Tabs.List>
          {categories.map((category) => (
            <Tabs.Tab key={category} value={category}>
              {category}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>

      {/* For every category, show this */}
      <h2>Selected Category: {selectedCategory || 'All Movies'}</h2>

      {/* When a category is chosen, show movies belonging to that category */}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.title} {...movie} />
        ))}
      </div>
    </Container>
  );
};

export default CategoryPage;
