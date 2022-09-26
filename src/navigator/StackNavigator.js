import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { InitialScreen } from '../screens/InitialScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { MyMovieScreen } from '../screens/MyMovieScreen';
import { MyFavoritesMoviesScreen } from '../screens/MyFavoritesMoviesScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="InitialScreen"
      screenOptions={{
        headerStyle:{
          elevation:0
        },
        cardStyle:{
          backgroundColor:'white'
        }
      }}
    >
      <Stack.Screen name="InitialScreen" options={{title : ""}} component={ InitialScreen } />
      <Stack.Screen name="MyMovieScreen" options={{title : ""}} component={ MyMovieScreen } />
      <Stack.Screen name="MyFavoritesMoviesScreen" options={{title : ""}} component={ MyFavoritesMoviesScreen } />
      <Stack.Screen name="DetailScreen" options={{title : "Detail"}} component={ DetailScreen } />
    </Stack.Navigator>
  );
}

export default StackNavigator;