import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import moviesData from '../data/movies.json';
import { useLocalStorage } from '@mantine/hooks';

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
  bookmarkedMovies: Movie[];
  setBookmarkedMovies: (movies: Movie[]) => void;
  addBookmarkedMovie: (movie: Movie) => void;
  removeBookmarkedMovie: (movie: Movie) => void;
  isMovieBookmarked: (title: string) => boolean;
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
  const [bookmarkedMovies, setBookmarkedMovies] = useLocalStorage<Movie[]>({
    key: 'bookmarks',
    defaultValue: [],
  });
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
  const addBookmarkedMovie = (movie: Movie) => {
    setBookmarkedMovies((prevBookmarks) => [...prevBookmarks, movie]);
  };
  const removeBookmarkedMovie = (movie: Movie) => {
    setBookmarkedMovies((prevBookmarks) =>
      prevBookmarks.filter((bm) => bm.title !== movie.title)
    );
  };
  const isMovieBookmarked = (title: string) => {
    return bookmarkedMovies.some((bm) => bm.title === title);
  };

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
    <MovieContext.Provider value={{ movies, setMovies, bookmarkedMovies, isMovieBookmarked, addBookmarkedMovie, removeBookmarkedMovie, setBookmarkedMovies, searchTerm, setSearchTerm, filteredMovies, trendingMovies, recommendedMovies }}>
      {children}
    </MovieContext.Provider>
  );
}
