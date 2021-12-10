import React, { useState, useEffect } from 'react';
import { ChakraProvider, theme, Spinner, Center } from '@chakra-ui/react';

import Search from './components/Search';
import NewsList from './components/news/NewsList';

const App = () => {
  const [news, setNews] = useState([]);
  const [searchMessage, setSearchMessage] = useState('React');
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);

  const onChange = e => {
    setLoading(true);
    setPage(0);
    setSearchMessage(e.target.value);
  };
  const prefPage = () => {
    if (page === 0) {
      return;
    }
    setLoading(true);
    setPage(page - 1);
  };
  const nextPage = () => {
    if (page === maxPage) {
      return;
    }
    setLoading(true);
    setPage(page + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await fetch(
          `https://hn.algolia.com/api/v1/search?query=${searchMessage}&page=${page}`
        );
        const data = await request.json();
        setLoading(false);
        setMaxPage(data.nbPages);
        setNews(data.hits);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [searchMessage, page]);

  return (
    <ChakraProvider theme={theme}>
      <Search
        searchMessage={searchMessage}
        isLoading={isLoading}
        page={page}
        maxPage={maxPage}
        onChange={onChange}
        nextPage={nextPage}
        prefPage={prefPage}
      />
      {isLoading ? (
        <Center mt="3rem">
          <Spinner width="10rem" height="10rem" />
        </Center>
      ) : (
        <NewsList news={news} />
      )}
    </ChakraProvider>
  );
};

export default App;
