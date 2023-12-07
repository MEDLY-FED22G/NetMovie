import { Container } from '@mantine/core';
import MyCarousel from '../components/Carousel'; // Updated import
import MovieSearchBar from '../components/MovieSearchBar.component';
import moviesData from '../data/movies.json';

export default function Home() {
  return (
    <Container size={'xl'} py={30} mih={'calc(100vh - 129px)'}>
      <MovieSearchBar />
      <MyCarousel movies={moviesData} title="Trending" />
      <MyCarousel movies={moviesData} title="Recommended for you" />
    </Container>
  );
}
