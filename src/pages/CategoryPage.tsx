import { Container, Tabs } from '@mantine/core';
import React, { useState } from 'react';
import MovieCard from '../components/MovieCard';
import { useMovieContext } from '../components/MovieContext';

const CategoryPage: React.FC = () => {
  const { movies } = useMovieContext();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    'All Movies',
    ...Array.from(new Set(movies.map((movie) => movie.genre))),
  ];

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
  };

  // If no category is selected (selectedCategory is null or 'All Movies') then show all movies
  // If ofc category is selected then show only movies that have that category
  const filteredMovies =
    selectedCategory && selectedCategory !== 'All Movies'
      ? movies.filter((movie) => movie.genre === selectedCategory)
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

      {/* For every category show this */}
      <h2>Selected Category: {selectedCategory || 'All Movies'}</h2>

      {/* When categorie is chosen it will show this */}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.title} {...movie} />
        ))}
      </div>
    </Container>
  );
};

export default CategoryPage;
