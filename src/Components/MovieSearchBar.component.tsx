import { useState, useEffect } from 'react';
import { Autocomplete } from '@mantine/core';

type Movie = {
  title: string;
  year: number;
  rating: string;
  actors: string[];
  genre: string;
  synopsis: string;
  thumbnail: string;
};

const MovieSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<string[]>([]);

  async function fetchMovies(): Promise<Movie[]> {
    const response = await fetch('../data/movies.json');
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    return response.json();
  }

  useEffect(() => {
    fetchMovies()
      .then(movies => setMovies(movies))
      .catch(error => console.error('Failed to load movies:', error));
  }, []);

  useEffect(() => {
    const filtered = searchTerm
      ? movies.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase())).map(movie => movie.title)
      : [];
    setFilteredMovies(filtered);
  }, [searchTerm, movies]);


  return (
    <Autocomplete
      value={searchTerm}
      onChange={setSearchTerm}
      data={filteredMovies}
      placeholder="Search for a movie"
    />
  );
};

export default MovieSearchBar;
