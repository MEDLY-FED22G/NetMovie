import { Button } from '@mantine/core';
import { IconBookmarkFilled, IconBookmarkPlus } from '@tabler/icons-react';

interface MovieDetailsBookmarkButtonProps {
  isBookmarked: boolean;
  onBookmarkClick: () => void;
}

const MovieDetailsBookmarkButton: React.FC<MovieDetailsBookmarkButtonProps> = ({
  isBookmarked,
  onBookmarkClick,
}) => {
  return (
    <>
      {isBookmarked ? (
        <Button
          onClick={onBookmarkClick}
          w={{ base: '100%', xs: 'auto' }}
          leftSection={<IconBookmarkFilled size={16} />}
        >
          Remove from Bookmarks
        </Button>
      ) : (
        <Button
          onClick={onBookmarkClick}
          w={{ base: '100%', xs: 'auto' }}
          leftSection={<IconBookmarkPlus size={16} />}
        >
          Add to Bookmarks
        </Button>
      )}
    </>
  );
};

export default MovieDetailsBookmarkButton;
