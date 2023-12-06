import { Button} from '@mantine/core';
import { IconArrowBack } from '@tabler/icons-react';
import React from 'react';


const BackButton: React.FC = () => {
  return (
      <Button
        leftSection={<IconArrowBack size={16} />}
        variant="transparent"
        size="compact-sm"
        color="gray"
        mb={10}
      >
        Back
      </Button>
  );
};

export default BackButton;
