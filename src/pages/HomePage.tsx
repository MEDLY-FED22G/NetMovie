import { Container } from '@mantine/core';
import MyCarousel from '../components/Carousel';
import MoviesGrid from '../components/FilteredMovies.component';
import { useMovieContext } from '../components/MovieContext';
import MovieSearchBar from '../components/MovieSearchBar.component';

export default function Home() {
  const { trendingMovies, recommendedMovies } = useMovieContext();

  return (
    <Container size={'xl'} py={30} mih={'calc(100vh - 129px)'}>
      <MovieSearchBar/>
      <MoviesGrid />
      <MyCarousel movies={trendingMovies} title="Trending" />
      <MyCarousel movies={recommendedMovies} title="Recommended for you" />
    </Container>
  );
}
