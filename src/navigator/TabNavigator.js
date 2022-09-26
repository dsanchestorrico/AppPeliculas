import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import {MyMovieScreen} from '../screens/MyMovieScreen';
import StackNavigator from './StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { MyFavoritesMoviesScreen } from '../screens/MyFavoritesMoviesScreen';
import { SearchMovieScreen } from '../screens/SearchMovieScreen';

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
                            icono = 'home';
                            break;
                        case 'SearchMovieScreen':
                            icono = 'search';
                            break;
                        case 'MyMovieScreen':
                            icono = 'list';
                            break;
                        case 'MyFavoritesMoviesScreen':
                            icono = 'chatbubbles';
                            break;
                    }
                    return <Icon name={icono} size={focused ? 26 : 20} color={color} />

                }


            })}
            barStyle={{ backgroundColor: '#694fad'}}
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
        >
            <Tab.Screen name="StackNavigator" options={{ title: "Inicio"}} component={StackNavigator} />
            <Tab.Screen name="SearchMovieScreen" options={{ title: "Buscar"}} component={SearchMovieScreen} />
            <Tab.Screen name="MyMovieScreen" options={{ title: "Mi lista"}} component={MyMovieScreen} />
            <Tab.Screen name="MyFavoritesMoviesScreen" options={{ title: "Mis revisiones"}} component={MyFavoritesMoviesScreen} />
        </Tab.Navigator>
    );
}

export default TabNavigator;