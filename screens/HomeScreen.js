import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../store/actions';
import NewsItem from '../components/NewsItem';

const HomeScreen = ({ navigation, route }) => {
  const { feedUrl } = route.params;
  const dispatch = useDispatch();
  const news = useSelector(state => state[feedUrl] || []);

  useEffect(() => {
    dispatch(fetchNews(feedUrl));
  }, [dispatch, feedUrl]);

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <NewsItem
            title={item.title}
            pubDate={item.pubDate}
            onPress={() => navigation.navigate('Detail', { news: item })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default HomeScreen;

