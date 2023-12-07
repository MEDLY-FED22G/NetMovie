import { Container } from '@mantine/core';
import React, { useState } from 'react';

const CategoryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>();

  return (
    <Container size="xl" py={30} mih="calc(100vh - 129px)">
      <h2>Movie Categories</h2>

      <div style={{ display: 'flex' }}></div>
    </Container>
  );
};

export default CategoryPage;
