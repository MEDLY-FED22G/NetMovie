// ThumbnailBookmarkButton.tsx
import { ActionIcon } from '@mantine/core';
import { IconBookmarkFilled, IconBookmarkPlus } from '@tabler/icons-react';
import React from 'react';

interface ThumbnailBookmarkButtonProps {
  isBookmarked: boolean;
  onBookmarkClick: () => void;
}

const ThumbnailBookmarkButton: React.FC<ThumbnailBookmarkButtonProps> = ({
  isBookmarked,
  onBookmarkClick,
}) => {
  return (
    <ActionIcon color="blue" variant="filled" onClick={onBookmarkClick}>
      {isBookmarked ? (
        <IconBookmarkFilled size="1.125rem" />
      ) : (
        <IconBookmarkPlus size="1.125rem" />
      )}
    </ActionIcon>
  );
};

export default ThumbnailBookmarkButton;
