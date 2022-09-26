import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'

const PosterPelicula = ({ item, height = 500, width = 300 }) => {

    const { poster_path } = item.item;
    const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress = {() => {navigation.navigate('DetailScreen', {...item.item, showButton:'flex'})}}
            activeOpacity = {0.8}
            style={{
                width: width,
                height: height,
                marginTop: 5,
                marginHorizontal: 5
            }}

        >
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
        resizeMode: 'stretch'
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10
    }
})

export default PosterPelicula;