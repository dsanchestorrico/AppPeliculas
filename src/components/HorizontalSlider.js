import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import PosterPelicula from './PosterPelicula'
import { style } from '../theme/appTheme';

export const HorizontalSlider = ({ titulo, peliculasEnCine }) => {
    return (
        <View style={{ height: 250 , marginLeft:10, marginRight: 10}}>
            <Text style={style.titleScreen}>{titulo}</Text>
            <FlatList
                data={peliculasEnCine}
                renderItem={(pelicula) => <PosterPelicula item={pelicula} height={200} width={140} />}
                keyExtractor={(item, index) => String(index)}
                initialNumToRender={7}
                horizontal={true}
            />
        </View>
    )
}

