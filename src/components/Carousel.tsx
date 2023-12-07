import React from 'react';
import { Carousel } from '@mantine/carousel';
import { Stack, Title } from '@mantine/core';
import MovieCard from './MovieCard';
import { Movie } from './MovieContext'; // Make sure to import the Movie type

interface MyCarouselProps {
  movies: Movie[];
  title: string;
}

const MyCarousel: React.FC<MyCarouselProps> = ({ movies, title }) => {
  const sizes = {
    base: {
      height: 210,
      width: 140,
    },
    sm: {
      height: 250,
      width: 170,
    },
    md: {
      height: 300,
      width: 200,
    },
  };

  return (
    <Stack my={30} gap={15}>
      <Title order={2}>{title}</Title>
      <Carousel
        slideSize={{
          base: sizes.base.width,
          sm: sizes.sm.width,
          md: sizes.md.width,
        }}
        h={{
          base: sizes.base.height,
          sm: sizes.sm.height,
          md: sizes.md.height,
        }}
        slideGap="md"
        controlsOffset="md"
        loop
        dragFree
      >
        {movies.map((movie, index) => (
          <Carousel.Slide key={index}>
            <MovieCard {...movie} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Stack>
  );
};

export default MyCarousel;
