import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface GradientBoxProps {
  children: ReactNode;
}

const Gradient = styled.div`
  border-radius: 3px;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.95) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  transition: 0.2s ease;

  &:hover {
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.95) 0%,
      rgba(0, 0, 0, .35) 100%
    );
  }
`;

const GradientBox: React.FC<GradientBoxProps> = ({ children }) => {
  return <Gradient>{children}</Gradient>;
};

export default GradientBox;
