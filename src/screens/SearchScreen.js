import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
// Components
import SearchBar from '../../src/components/SearchBar';
import ResultsList from '../../src/components/ResultsList';
// Hooks
import useResults from '../../src/hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = useResults();

  const filterByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    })
  }
  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={searchApi}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          title="Cost effective"
          results={filterByPrice('$')}
        />
        <ResultsList
          title="Bt pricer"
          results={filterByPrice('$$')}
        />
        <ResultsList
          title="Big spender"
          results={filterByPrice('$$$')}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1
    // backgroundColor: '#ffffff'
  }
});

export default SearchScreen;
