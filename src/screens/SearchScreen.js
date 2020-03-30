import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../../src/components/SearchBar';
import yelp from '../../src/api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [result, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'san jose'
        }
      });
      setResults(response.data.businesses)
    } catch(err) {
      setErrorMessage('Something went wrong')
    }
  }

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return (
    <View style={styles.background}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={searchApi}
      />
    {errorMessage ? <Text>{errorMessage}</Text> : null}
    <Text>We have found {result.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#ffffff'
  }
});

export default SearchScreen;
