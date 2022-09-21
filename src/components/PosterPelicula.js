import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const PosterPelicula = ({ item }) => {
    const {poster_path} = item.item;
    const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;
    console.log(poster_path)
    return (
        <View style={{
            width: 300,
            height: 500
        }}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18
        
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