import { Container } from '@mantine/core';
import MovieSearchBar from '../components/MovieSearchBar.component';
import MyCarousel from '../components/Carousel'; // Updated import
import moviesData from '../data/movies.json';

export default function Home() {
  return (
    <Container size={'xl'}>
      <MovieSearchBar />
      <MyCarousel movies={moviesData} title="Trending" />
      <MyCarousel movies={moviesData} title="Recommended for you"/>
    </Container>
  );
}
