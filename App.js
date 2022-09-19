import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigator/StackNavigator';
import TabNavigator from './src/navigator/TabNavigator';

const App = () => {
  return (

      <NavigationContainer>
        {/* <StackNavigator /> */}
        <TabNavigator/>
      </NavigationContainer>
  

  )
}

export default App;
