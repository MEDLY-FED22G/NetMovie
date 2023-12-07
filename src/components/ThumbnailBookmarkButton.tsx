// ThumbnailBookmarkButton.tsx
import styled from '@emotion/styled';
import { ActionIcon } from '@mantine/core';
import { IconBookmarkFilled, IconBookmarkPlus } from '@tabler/icons-react';
import React from 'react';

interface ThumbnailBookmarkButtonProps {
  isBookmarked: boolean;
  onBookmarkClick: () => void;
}

const AbsoluteButton = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  border: none;
  z-index: 30000;
  cursor: pointer;
`;

const ThumbnailBookmarkButton: React.FC<ThumbnailBookmarkButtonProps> = ({
  isBookmarked,
  onBookmarkClick,
}) => {
  return (
    <AbsoluteButton>
      <ActionIcon color="blue" variant="filled" onClick={onBookmarkClick}>
        {isBookmarked ? (
          <IconBookmarkFilled size="1.125rem" />
        ) : (
          <IconBookmarkPlus size="1.125rem" />
        )}
      </ActionIcon>
    </AbsoluteButton>
  );
};

export default ThumbnailBookmarkButton;
