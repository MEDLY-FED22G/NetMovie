import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import moviesData from '../data/movies.json';

export interface Movie {
    title: string;
    year: number;
    rating: string;
    actors: string[];
    genre: string;
    synopsis: string;
    thumbnail: string;
    isTrending?: boolean;
}  

interface MovieContextType {
  movies: Movie[];
  setMovies: (movies: Movie[]) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filteredMovies: Movie[];
  trendingMovies: Movie[];
  recommendedMovies: Movie[];
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovieContext must be used within a MovieProvider');
  }
  return context;
}

interface MovieProviderProps {
  children: ReactNode;
}

export const MovieProvider = ({ children }: MovieProviderProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const [recommendedMovies, setRecommendedMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  const shuffleMovies = (movies: Movie[]) => {
    //Fisher-Yates shuffle
    for (let i = movies.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [movies[i], movies[j]] = [movies[j], movies[i]]; // Swap elements
    }
    return movies;
  }

  const selectTrendingAndRecommended = () => {
    const trending = moviesData.filter(movie => movie.isTrending);
    setTrendingMovies(trending);
    const notTrending = moviesData.filter(movie => !movie.isTrending);
    const shuffledNotTrending = shuffleMovies([...notTrending]);
    const recommended = shuffledNotTrending.slice(0, 7);
    setRecommendedMovies(recommended);
  }

  useEffect(() => {
    setMovies(moviesData);
    selectTrendingAndRecommended();
  }, []);

  useEffect(() => {
    const filtered = searchTerm
      ? movies.filter(movie =>
          movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : movies;
    setFilteredMovies(filtered)
  }, [searchTerm, movies]); // Re-run the effect when searchTerm or movies change

  return (
    <MovieContext.Provider value={{ movies, setMovies, searchTerm, setSearchTerm, filteredMovies, trendingMovies, recommendedMovies }}>
      {children}
    </MovieContext.Provider>
  );
}
