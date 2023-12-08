import {
  Badge,
  Box,
  Container,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import React, {  } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import { useMovieContext } from '../components/MovieContext';

import MovieDetailsBookmarkButton from '../components/MovieDetailsBookmarkButton';

const MoviePage: React.FC = () => {
  const { movies, addBookmarkedMovie, removeBookmarkedMovie, isMovieBookmarked } = useMovieContext();
  const { title } = useParams<{ title: string }>();
  const movie = movies.find((movie) => movie.title === title);

  if (!movie) {
    // Handle the case where movie details couldn't be fetched
    return <div>Error fetching movie details</div>;
  }
  const isBookmarked = isMovieBookmarked(movie.title);


  const handleBookmarkClick = () => {
    // Toggle bookmark status
    if (!isBookmarked) {
      addBookmarkedMovie(movie);
    } else {
      removeBookmarkedMovie(movie);
    }
  };

  return (
    <Container
      size="xl"
      pt={{ base: 10, xs: 30, md: 30 }}
      mih={'calc(100vh - 129px)'}
      pb={30}
    >
      <Stack align="center" justify='center' gap={5} h={"100%"}>
        <Group w={"100%"}>
        <BackButton />
        </Group>
        <Flex
          w="100%"
          h={{ base: 'auto', xs: 400, sm: 400, md: 450 }}
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
      </Stack>
    </Container>
  );
};

export default MoviePage;
