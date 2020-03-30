import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../../src/components/SearchBar';
import yelp from '../../src/api/yelp';
import useResults from '../../src/hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = useResults();

  return (
    <View style={styles.background}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={searchApi}
      />
    {errorMessage ? <Text>{errorMessage}</Text> : null}
    <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#ffffff'
  }
});

export default SearchScreen;
