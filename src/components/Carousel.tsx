import { Carousel } from '@mantine/carousel';
import { Stack, Title } from '@mantine/core';
import React from 'react';
import MovieCard from './MovieCard';
import { Movie } from './MovieContext';

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
        data-testid={`${title}-carousel`}
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
        slideGap="lg"
        controlsOffset="md"
        controlSize={35}
        align="start"
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
