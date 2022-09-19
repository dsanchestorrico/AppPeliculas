import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import PeliculaScreen from '../screens/PeliculaScreen';
import PopularesScreen from '../screens/PopularesScreen';
import HomeScreen from '../screens/HomeScreen';
import RegistrarPelicula from '../screens/RegistrarPelicula';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle:{
          elevation:0
        },
        cardStyle:{
          backgroundColor:'white'
        }
      }}
    >
      <Stack.Screen name="HomeScreen" options={{title : ""}} component={ HomeScreen } />
      <Stack.Screen name="PeliculaScreen" options={{title : "En Cine"}} component={ PeliculaScreen } />
      <Stack.Screen name="PopularesScreen" options={{title : "Populares"}} component={ PopularesScreen } />
      <Stack.Screen name="RegistrarPelicula" options={{title : "Nuevo"}} component={ RegistrarPelicula } />
    </Stack.Navigator>
  );
}

export default StackNavigator;