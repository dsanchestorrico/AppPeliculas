import React from 'react';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import PeliculaScreen from '../screens/PeliculaScreen';
import PopularesScreen from '../screens/PopularesScreen';
import StackNavigator from './StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();
const TabNavigator = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            screenOptions={(props) => ({
                tabBarIcon: ({ color, focused, size }) => {
                    let route = props.route;
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
                    return <Icon name={icono} size={focused ? 26 : 20} color={color} />

                }


            })}
            barStyle={{ backgroundColor: '#694fad', height: 70 }}
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
        >
            <Tab.Screen name="StackNavigator" options={{ title: "Inicio"}} component={StackNavigator} />
            <Tab.Screen name="PeliculaScreen" options={{ title: "Mi Lista"}} component={PeliculaScreen} />
            <Tab.Screen name="PopularesScreen" options={{ title: "Mis Favoritos"}} component={PopularesScreen} />
        </Tab.Navigator>
    );
}

export default TabNavigator;