import React from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';

const ResultsDetail = ({result}) => {
  return (
    <View>
      <Image
        style={styles.images}
        source={{ uri: result.image_url }}
      />
      <Text>{result.name}</Text>
      <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  images: {
    width: 250,
    height: 120,
    borderRadius: 5
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default ResultsDetail;
