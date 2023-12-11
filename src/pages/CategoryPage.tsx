import { Container, Group, Tabs } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import { useMovieContext } from '../components/MovieContext';

const CategoryPage: React.FC = () => {
  const { movies } = useMovieContext();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get all genres from movies in the data file
  const genres = Array.from(
    new Set(movies.flatMap((movie) => movie.genre.split(', '))),
  );

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
  };

  // If a category is selected, filter movies that belong to that category
  const filteredMovies = selectedCategory
    ? movies.filter((movie) => movie.genre.includes(selectedCategory))
    : movies;

  useEffect(() => {
    setSelectedCategory(null);
  }, []);

  return (
    <Container size="xl" py={30} mih="calc(100vh - 129px)">
      <Tabs onChange={handleCategoryChange}>
        <Tabs.List mb={30}>
          {genres.map((category) => (
            <Tabs.Tab
              key={category}
              value={category}
              data-testid={`${category}-tab`}
            >
              {category}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>

      {/* <h2>{selectedCategory}</h2> */}

      {/* When a category is chosen, show movies belonging to that category */}
      <Group>
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.title} {...movie} />
        ))}
      </Group>
    </Container>
  );
};

export default CategoryPage;
