import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

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
  isLoading: boolean;
  error: string | null;
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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const [recommendedMovies, setRecommendedMovies] = useState<Movie[]>([]);

  const fetchMovies = async (): Promise<Movie[]> => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('../data/movies.json');
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const movies = await response.json();
      setMovies(movies);
      setIsLoading(false);
      return movies;
    } catch (error: any) {
      setIsLoading(false);
      setError(error.message);
      throw error;
    }
  }

  const shuffleMovies = (movies: Movie[]) => {
    //Fisher-Yates shuffle
    for (let i = movies.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [movies[i], movies[j]] = [movies[j], movies[i]]; // Swap elements
    }
    return movies;
  }

  const selectTrendingAndRecommended = (movies: Movie[]) => {
    const shuffledMovies = shuffleMovies([...movies]); // Shuffling a copy of the movies array
    const selectedMovies = shuffledMovies.slice(0, 20); // Take first 20 movies
    setTrendingMovies(selectedMovies.slice(0, 10)); // First 10 for trending
    setRecommendedMovies(selectedMovies.slice(10, 20)); // Next 10 for recommended
  }

  useEffect(() => {
    fetchMovies()
      .then(movies => {
        setMovies(movies);
        selectTrendingAndRecommended(movies);
      })
      .catch(error => console.error('Failed to load movies:', error));
  }, []);

  return (
    <MovieContext.Provider value={{ movies, setMovies, isLoading, error }}>
      {children}
    </MovieContext.Provider>
  );
}
