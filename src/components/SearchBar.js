import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather
        name="search"
        style={styles.iconStyle}
      />
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.inputStyle}
      placeholder="Search"
      value={term}
      onChangeText={newTerm => onTermChange(newTerm)}
      onEndEditing={() => onTermSubmit()}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#ffffff',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 20,
    flexDirection: 'row'
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    alignSelf: 'center',
    fontSize: 35,
    marginHorizontal: 15
  }
});

export default SearchBar;
