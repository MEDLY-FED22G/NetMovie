import { ActionIcon } from '@mantine/core';
import { IconBookmarkFilled, IconBookmarkPlus } from '@tabler/icons-react';
import { useState } from 'react';

function BookmarkButton() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleClick = () => {
    setIsBookmarked((prev) => !prev);
  };

  return (
    <ActionIcon color="blue" variant="filled" onClick={handleClick}>
      {isBookmarked ? (
        <IconBookmarkFilled size="1.125rem" />
      ) : (
        <IconBookmarkPlus size="1.125rem" />
      )}
    </ActionIcon>
  );
}

export default BookmarkButton;
