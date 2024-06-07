import React from 'react';
import { View, Text, Button, StyleSheet, Linking } from 'react-native';

const NewsDetailScreen = ({ route }) => {
  const { news } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{news.title}</Text>
      <Text style={styles.date}>{news.pubDate}</Text>
      <Text style={styles.description}>{news.description}</Text>
      <Button title="Read More" onPress={() => Linking.openURL(news.link)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
    color: '#666',
  },
  description: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default NewsDetailScreen;
