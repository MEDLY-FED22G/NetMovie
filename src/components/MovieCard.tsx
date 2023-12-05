import {
  Box,
  Group,
  Image,
  Paper,
  Stack,
  Text,
} from '@mantine/core';
import React from 'react';
import { Movie } from '../types';
import BookmarkButton from './BookmarkButton';
import GradientBox from './ThumbnailOverlay';

const MovieCard: React.FC<Movie> = (props) => {
  const { title, year, rating, thumbnail } = props;


  return (
    <Paper
      shadow="sm"
      h={{ xs: 200, sm: 250, md: 300 }}
      w={{ xs: 130, sm: 170, md: 200 }}
      radius="md"
    >
      <Box
        h={{ xs: 200, sm: 250, md: 300 }}
        w={{ xs: 130, sm: 170, md: 200 }}
        style={{ position: 'relative' }}
      >
        <Image
          src={thumbnail}
          alt={`${title} Poster`}
          fallbackSrc="/src/assets/no_image.png"
          radius="sm"
          h="100%"
        />
        <GradientBox>
          <Stack h="100%" justify="space-between">
            <Group justify="end" p={5}>
              <BookmarkButton />
            </Group>
            <Stack gap={3} p={5}>
              <Text fz="sm" fw={600} c={'gray.0'} lineClamp={1}>
                {title}
              </Text>
              <Group gap={10}>
                <Text fz="xs" c="dimmed">
                  {year}
                </Text>
                <Text fz="xs" c="dimmed">
                  Rating: {rating}
                </Text>
              </Group>
            </Stack>
          </Stack>
        </GradientBox>
      </Box>
    </Paper>
  );
};

export default MovieCard;
