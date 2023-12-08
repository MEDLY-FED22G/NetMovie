import { Container, Title, Group } from '@mantine/core';
import React from 'react';
import { useMovieContext } from '../components/MovieContext';
import MovieCard from '../components/MovieCard';


const BookmarkPage: React.FC = () => {
  const { bookmarkedMovies } = useMovieContext();
  
  return (
    <Container size={'xl'} py={30} mih={'calc(100vh - 129px)'}>
      <Title mb={20} order={2}>My Bookmarks</Title>
      <Group gap="lg">
      {bookmarkedMovies.map((movie, index) => (
        <MovieCard key={index} {...movie} />
      ))}
      </Group>
      
    </Container>
  );
};
 

export default BookmarkPage;