import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
    <View style={styles.background}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={searchApi}
      />
    {errorMessage ? <Text>{errorMessage}</Text> : null}
    <Text>We have found {results.length} results</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    // backgroundColor: '#ffffff'
  }
});

export default SearchScreen;
