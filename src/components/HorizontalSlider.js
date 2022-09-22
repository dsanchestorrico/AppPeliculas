import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import PosterPelicula from './PosterPelicula'

export const HorizontalSlider = ({ titulo, peliculasEnCine }) => {
    return (
        <View style={{ height: 250 , marginLeft:10, marginRight: 10}}>
            <Text style={styles.subtitulo}>{titulo}</Text>
            <FlatList
                data={peliculasEnCine}
                renderItem={(pelicula) => <PosterPelicula item={pelicula} height={200} width={140} />}
                keyExtractor={(item, index) => String(index)}
                horizontal={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    subtitulo: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 5
      },
});
