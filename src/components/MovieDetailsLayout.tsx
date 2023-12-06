import {
  Badge,
  Box,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useState } from 'react';
import React from 'react';
import { Movie } from '../types';
import MovieDetailsBookmarkButton from './MovieDetailsBookmarkButton';


interface MovieDetailsLayoutProps {
  movie: Movie;
}

const MovieDetailsLayout: React.FC<MovieDetailsLayoutProps> = ({ movie }) => {
     const [isBookmarked, setIsBookmarked] = useState(false);

     const handleBookmarkClick = () => {
       setIsBookmarked((prev) => !prev);
     };

  return (
    <Flex
      w="100%"
      h={{ base: 'auto', xs: 400, sm: 450, md: 550 }}
      justify="space-between"
      direction={{ base: 'column-reverse', xs: 'row' }}
      gap={{ base: 15, xs: 5 }}
    >
      <Stack h="100%" justify="space-between" maw={{ base: '100%', xs: '50%' }}>
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
          <MovieDetailsBookmarkButton isBookmarked={isBookmarked} onBookmarkClick={handleBookmarkClick}/>
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
  );
};

export default MovieDetailsLayout;
