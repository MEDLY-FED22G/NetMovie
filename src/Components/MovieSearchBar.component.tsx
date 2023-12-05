import { Autocomplete, Button, Container } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useState } from 'react';

const MovieSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

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
    <Container>
      <Autocomplete
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Search for a movie..."
        styles={autocompleteStyles}
        rightSection={
          <Button
            onClick={() => {
              console.log('Searching for:', searchTerm);
            }}
            variant="subtle"
            style={{
              backgroundColor: 'transparent',
              padding: 0,
            }}
          >
            <IconSearch color="black" />
          </Button>
        }
        rightSectionWidth={60}
      />
    </Container>
  );
};

export default MovieSearchBar;
