import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { store } from './store/store';
import HomeScreen from './screens/HomeScreen';
import NewsDetailScreen from './screens/NewsDetailScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack({ route }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} initialParams={{ feedUrl: route.params.feedUrl }} />
      <Stack.Screen name="Detail" component={NewsDetailScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Section 1" component={HomeStack} initialParams={{ feedUrl: 'https://www.inegi.org.mx/rss/noticias/xmlfeeds?p=2,1' }} />
          <Tab.Screen name="Section 2" component={HomeStack} initialParams={{ feedUrl: 'https://www.inegi.org.mx/rss/noticias/xmlfeeds?p=2,2' }} />
          <Tab.Screen name="Section 3" component={HomeStack} initialParams={{ feedUrl: 'https://www.inegi.org.mx/rss/noticias/xmlfeeds?p=2,3' }} />
          <Tab.Screen name="Section 4" component={HomeStack} initialParams={{ feedUrl: 'https://www.inegi.org.mx/rss/noticias/xmlfeeds?p=' }} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
