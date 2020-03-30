import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsScreen = ({ navigation}) => {
  const id = navigation.getParam('id')

  const getResult = () => {

  }
  
  return (
    <View>
      <Text>Result Show</Text>
    </View>
  );
};

export default ResultsScreen;
