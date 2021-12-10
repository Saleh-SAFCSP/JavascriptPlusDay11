import React from 'react';

import { Text, VStack, Input, HStack, Button } from '@chakra-ui/react';
const Search = ({
  onChange,
  nextPage,
  prefPage,
  searchMessage,
  isLoading,
  page,
  maxPage,
}) => {
  return (
    <VStack padding="3rem" fontSize="3rem" spacing="30px">
      <Text>Search Hacker News</Text>
      <Input value={searchMessage} onChange={onChange} width="30rem"></Input>
      {!isLoading && (
        <HStack>
          <Button onClick={prefPage} colorScheme="blue">
            Prev
          </Button>
          <Text value={searchMessage} fontSize="2rem">
            {page + 1} of {maxPage + 1}
          </Text>
          <Button onClick={nextPage} colorScheme="blue">
            Next
          </Button>
        </HStack>
      )}
    </VStack>
  );
};

export default Search;
