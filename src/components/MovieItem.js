import React from 'react'
import { IconButton } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import { useState } from 'react';
import prompt from 'react-native-prompt-android';

export const MovieItem = ({ movieItem, buttonFavorite }) => {
    const movie = movieItem.item;
    const posterUri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const navigation = useNavigation();

    const deleteMovieItem = (id) => {
        firestore()
            .collection('movies')
            .doc(id)
            .delete()
            .then(() => {
                console.log('Movie deleted!', id);
            });
    };

    const updatedMovieItem = (id, review) => {
        firestore()
            .collection('movies')
            .doc(id)
            .update({
                type: 'favorites',
                review: review
            })
            .then(() => {
                console.log('User updated!');
            });
    };

    const promptReview = (id) => {
        prompt(
            'Mi Revisión',
            'Ingrese su opinion en referencia a la pelicula',
            [
                { text: 'Cancel', onPress: () => { }, style: 'cancel' },
                {
                    text: 'OK', onPress: review => {
                        updatedMovieItem(id, review);
                        console.log(id)
                        console.log(review)
                    }
                },
            ],
            {
                type: 'default',
                cancelable: false,
                defaultValue: '',
                placeholder: ''
            }
        );
    }

    return (
        <SafeAreaView style={styles.containerItem}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { navigation.navigate('DetailScreen', { ...movie, showButton: 'none' }) }}>
                <Image
                    source={{ uri: posterUri }}
                    style={{ width: 80, height: 100 }} resizeMode='stretch' />
            </TouchableOpacity>
            <View style={styles.infoItem}>
                <Text style={styles.itemPeliculaTitulo}>{movie.title}</Text>
                <Text style={styles.itemPeliculaGenero}>{movie.overview.substring(0, 60) + '...'}</Text>
            </View>
            <View>
                <IconButton
                    icon={props => <Icon name="trash-outline" {...props} />}
                    color="primary"
                    onPress={() => { deleteMovieItem(movie.idFirestore) }}
                />
                <IconButton
                    icon={props => <Icon name="chatbubbles-outline" {...props} />}
                    color="primary"
                    onPress={() => { 
                        promptReview(movie.idFirestore)
                    }}
                    
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    containerItem: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
        margin: 10,
        elevation: 5,
        borderRadius: 5,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    infoItem: {
        flexDirection: 'column',
        margin: 10,
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        alignItems: 'flex-start',
        flex: 1
    },
    itemPeliculaTitulo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000'
    },
    itemPeliculaGenero: {
        fontWeight: 'bold',
        fontSize: 14
    }
});
