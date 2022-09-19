import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PeliculaScreen from '../screens/PeliculaScreen';
import PopularesScreen from '../screens/PopularesScreen';
import StackNavigator from './StackNavigator';
import { colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            screenOptions={(props) => ({
                tabBarIcon: ({ color, focused, size }) => {
                    // console.log(props.route.name)
                    let route =props.route;
                    let icono = '';
                    switch (route.name) {
                        case 'StackNavigator':
                            icono = 'home-outline';
                            break;
                        case 'PeliculaScreen':
                            icono = 'list-outline';
                            break;
                        case 'PopularesScreen':
                            icono = 'star-outline';
                            break;
                    }
                    return <Icon name={icono} size={20} color={colores.primary} />

                }


            })}>
            <Tab.Screen name="StackNavigator" options={{ title: "Home" }} component={StackNavigator} />
            <Tab.Screen name="PeliculaScreen" options={{ title: "En Cine" }} component={PeliculaScreen} />
            <Tab.Screen name="PopularesScreen" options={{ title: "Populares" }} component={PopularesScreen} />
        </Tab.Navigator>
    );
}

export default TabNavigator;