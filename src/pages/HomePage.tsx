import { Container } from '@mantine/core';
import MovieSearchBar from '../components/MovieSearchBar.component';
import MyCarousel from '../components/Carousel'; // Updated import
import { useMovieContext } from '../components/MovieContext';

export default function Home() {
  const { trendingMovies, recommendedMovies } = useMovieContext();

  return (
    <Container size={'xl'}>
      <MovieSearchBar />
      <MyCarousel movies={trendingMovies} title="Trending" />
      <MyCarousel movies={recommendedMovies} title="Recommended for you"/>
    </Container>
  );
}
