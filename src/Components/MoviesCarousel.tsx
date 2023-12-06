import { useEffect, useState } from 'react';
import { Carousel } from '@mantine/carousel';
import { Box, Paper, rem, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import moviesData from '../data/movies.json';
import { Movie } from '../types';
import classes from '../module/CardsCarousel.module.css';


export function MoviesCarousel() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  useEffect(() => {
    setMovies(moviesData.filter((movie) => movie.isTrending) as Movie[]);
  }, []);

  const movieSlides = movies.map((movie) => (
    <Carousel.Slide key={movie.title}>
      <Paper
      shadow='md'
      p="xl"
      radius="md"
        className={classes.slide}
        style={{
          backgroundImage: `url(${movie.thumbnail})`,
        }}
      >
        <div className={classes.genre}>{movie.genre}</div>
        <div className={classes.title}>{movie.title}</div>
        <div className={classes.rating}>{movie.rating}</div>
        <div className={classes.year}>{movie.year}</div>
      </Paper>
    </Carousel.Slide>
  ));

  return (
    <Box>
        <div style={{ width: '100%', display: 'flex'}}>
      <Carousel
       slideSize={{ base: '100%', sm: '50%' }}
       slideGap={{ base: rem(2), sm: 'xl' }}
       align="start"
       slidesToScroll={mobile ? 1 : 2}
        loop
      >
        {movieSlides}
      </Carousel>
    </div>
    </Box>
    
  );
}
