import React from 'react';
import { Text, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { style } from '../theme/appTheme';
import { colores } from '../theme/appTheme';

import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = (props) => {
    // console.log(props)
    let icono = 'list-outline';
    return (
        <View style={style.globalMargin}>            
            <TouchableOpacity
                style={{
                    ...style.botonGrande,
                    backgroundColor: '#5856D6'
                }}
                onPress={() => props.navigation.navigate('PeliculaScreen')}
            >
                <Icon name={icono} size={20} style={{color:'white'}} />
                <Text style={style.botonGrandeText}>En Cine</Text>

            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    ...style.botonGrande,
                    backgroundColor: '#FF9427'
                }}
                onPress={() => props.navigation.navigate('PopularesScreen')}
            >
                <Icon name="star-outline" size={20} style={{color:'white'}} />
                <Text style={style.botonGrandeText}>Populares</Text>

            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    ...style.botonGrande,
                    backgroundColor: '#5856D6'
                }}
                onPress={() => props.navigation.navigate('RegistrarPelicula')}
            >
                <Icon name="add-outline" size={20} style={{color:'white'}} />
                <Text style={style.botonGrandeText}>Nuevo</Text>

            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen;