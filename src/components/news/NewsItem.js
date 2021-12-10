import React from 'react';

import { Box, Text, HStack, Link } from '@chakra-ui/react';
const NewsItem = ({ newsItem, index }) => {
  return (
    <Box
      borderRadius="10px"
      boxShadow="outline"
      bg="white"
      key={index}
      outlineColor="black"
      height="8rem"
      spacing="10px"
      p="5"
    >
      <Text color="#4E90FE" fontWeight="bold">
        {newsItem.title}
      </Text>
      <Text mt="2" fontStyle="muted" color="gray">
        author: {newsItem.author} | comments {newsItem.num_comments}
      </Text>
      <HStack mt="4">
        <Link fontWeight="bold" color="#4E90FE" href={newsItem.url}>
          Read more
        </Link>
      </HStack>
    </Box>
  );
};

export default NewsItem;
