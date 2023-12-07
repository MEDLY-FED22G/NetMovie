import { Autocomplete, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useMovieContext } from './MovieContext';

const MovieSearchBar = () => {
  const { searchTerm, setSearchTerm } = useMovieContext(); // Using context for searchTerm

  const autocompleteStyles = {
    input: {
      fontWeight: 400,
      fontSize: 14,
      color: '#1A1B1E',
      border: 'none',
      borderRadius: '4px',
      backgroundColor: '#F0F0F0',
  
      '&:focus': {
        borderColor: '#8C7AE6',
      },
      '&:hover': {},
    },
  };

  return (
      <Autocomplete
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Search for a movie..."
        styles={autocompleteStyles}
        rightSection={
          <Button
            variant="subtle"
            style={{ backgroundColor: 'transparent', padding: 0 }}
          >
            <IconSearch color="black" />
          </Button>
        }
        rightSectionWidth={60}
      />
  );
};

export default MovieSearchBar;
