import { Box } from '@mantine/core';
import { ReactNode } from 'react';

interface GradientBoxProps {
  children: ReactNode;
}

const GradientBox: React.FC<GradientBoxProps> = ({ children }) => {
  return (
    <Box
      style={{
        borderRadius: '3px',
        zIndex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background:
          'linear-gradient(0deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)',
      }}
    >
      {children}
    </Box>
  );
};

export default GradientBox;
