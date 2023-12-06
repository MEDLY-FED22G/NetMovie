import React from 'react';
import {
  Badge,
  Box,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  Title,
  Container
} from '@mantine/core';
import { useState } from 'react';
import BackButton from '../components/BackButton';
import { Movie } from '../components/MovieContext';
import MovieDetailsBookmarkButton from '../components/MovieDetailsBookmarkButton'

const MoviePage: React.FC = () => {

  const movie: Movie = {
    title: 'The Godfather: Part II',
    year: 1974,
    rating: 'R',
    actors: ['Al Pacino', 'Robert De Niro', 'Robert Duvall'],
    genre: 'Crime, Drama',
    synopsis:
      'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR7,0,380,562_.jpg',
    isTrending: true,
  };

  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarked((prev) => !prev);
  };
  return (
    <Container pt={{ base: 10, xs: 50, md: 70 }}>
      <BackButton />
      <Flex
        w="100%"
        h={{ base: 'auto', xs: 400, sm: 450, md: 550 }}
        justify="space-between"
        direction={{ base: 'column-reverse', xs: 'row' }}
        gap={{ base: 15, xs: 5 }}
      >
        <Stack
          h="100%"
          justify="space-between"
          maw={{ base: '100%', xs: '50%' }}
        >
          <Flex gap={{ base: 20, xs: 50 }} direction="column">
            <Stack>
              <Title order={1} fz={{ base: 35, xs: 30, sm: 50 }} c="gray.0">
                {movie.title}
              </Title>
              <Group gap={15}>
                {/* Conditionally render the Trending badge */}
                {movie.isTrending && (
                  <Badge variant="light" color="blue">
                    Trending
                  </Badge>
                )}
                <Text fz="md" c="grey.1">
                  {movie.year}
                </Text>
                <Text fz="md" c="grey.1">
                  {movie.genre}
                </Text>
                <Text fz="md" c="grey.1">
                  Rating: {movie.rating}
                </Text>
              </Group>
            </Stack>
            <Text fz={{ base: 'sm', md: 'md' }}>{movie.synopsis}</Text>
          </Flex>
          <Box w={'100%'}>
            <MovieDetailsBookmarkButton
              isBookmarked={isBookmarked}
              onBookmarkClick={handleBookmarkClick}
            />
          </Box>
        </Stack>
        <Box h="100%">
          <Image
            src={movie.thumbnail}
            alt={`${movie.title} Poster`}
            fallbackSrc="/src/assets/no_image.png"
            radius="sm"
            h="100%"
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default MoviePage;
