import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../../src/components/SearchBar';

const SearchScreen = () => {
  const [term, setTerm] = useState('')

  return (
    <View style={styles.background}>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => console.log("onTermSubmit")}
      />
    <Text>Search Screen</Text>
    <Text>{term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#ffffff'
  }
});

export default SearchScreen;
