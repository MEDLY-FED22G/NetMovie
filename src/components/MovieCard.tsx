import { Box, Group, Image, Paper, Stack, Text } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';
import ThumbnailBookmarkButton from './ThumbnailBookmarkButton';

import { Movie, useMovieContext } from './MovieContext';

import GradientBox from './ThumbnailOverlay';

const MovieCard: React.FC<Movie> = (movie) => {
  const { addBookmarkedMovie, removeBookmarkedMovie, isMovieBookmarked } =
    useMovieContext();

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
    <Box style={{ position: 'relative' }}>
      <ThumbnailBookmarkButton
        isBookmarked={isBookmarked}
        onBookmarkClick={handleBookmarkClick}
      />
      <Link to={`/movies/${encodeURIComponent(movie.title)}`}>
        <Paper
          shadow="xl"
          h={{
            base: sizes.base.height,
            sm: sizes.sm.height,
            md: sizes.md.height,
          }}
          w={{ base: sizes.base.width, sm: sizes.sm.width, md: sizes.md.width }}
          radius="md"
        >
          <Box
            h={{
              base: sizes.base.height,
              sm: sizes.sm.height,
              md: sizes.md.height,
            }}
            w={{
              base: sizes.base.width,
              sm: sizes.sm.width,
              md: sizes.md.width,
            }}
            style={{ position: 'relative' }}
          >
            <Image
              src={movie.thumbnail}
              alt={`${movie.title} Poster`}
              fallbackSrc="/src/assets/no_image.png"
              radius="sm"
              h="100%"
            />
            <GradientBox>
              <Stack h="100%" justify="space-between">
                <Group justify="end" p={5}></Group>
                <Stack gap={3} p={5}>
                  <Text fz="sm" fw={600} c={'gray.0'} lineClamp={1} >
                    {movie.title}
                  </Text>
                  <Group gap={10}>
                    <Text fz="xs" c="dimmed">
                      {movie.year}
                    </Text>
                    <Text fz="xs" c="dimmed">
                      Rating: {movie.rating}
                    </Text>
                  </Group>
                </Stack>
              </Stack>
            </GradientBox>
          </Box>
        </Paper>
      </Link>
    </Box>
  );
};

export default MovieCard;
