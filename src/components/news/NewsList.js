import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';

import NewsItem from './NewsItem';

const newsList = ({ news }) => {
  return (
    <SimpleGrid padding="3rem" columns={2} spacing={10}>
      {news.map((newsItem, index) => (
        <NewsItem newsItem={newsItem} index={index} />
      ))}
    </SimpleGrid>
  );
};

export default newsList;
