import { Button } from '@mantine/core';
import { IconArrowBack } from '@tabler/icons-react';
import React from 'react';
import {  useNavigate } from 'react-router-dom';

const BackButton: React.FC = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Button
      leftSection={<IconArrowBack size={16} />}
      variant="transparent"
      size="compact-sm"
      color="gray"
      onClick={goBack}
    >
      Back
    </Button>
  );
};

export default BackButton;

// Navigerar ett steg bakåt, ska ligga på MoviePage
