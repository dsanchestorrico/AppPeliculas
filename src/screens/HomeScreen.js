import React from 'react';
import { Text, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { style } from '../theme/appTheme';

import Icon from 'react-native-vector-icons/Ionicons';
const myIcon = <Icon name="rocket" size={30} color="#900" />;

const HomeScreen = (props) => {
    console.log(props)
    return (
        <View style={style.globalMargin}>
            <TouchableOpacity
                style={{
                    ...style.botonGrande,
                    backgroundColor: '#5856D6'
                }}
                onPress={() => props.navigation.navigate('PeliculaScreen')}
            >
                <Text style={style.botonGrandeText}>En Cine</Text>

            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    ...style.botonGrande,
                    backgroundColor: '#FF9427'
                }}
                onPress={() => props.navigation.navigate('PopularesScreen')}
            >
                <Text style={style.botonGrandeText}>Populares</Text>

            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen;