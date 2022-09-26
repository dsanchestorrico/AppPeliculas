import { IconButton } from '@react-native-material/core';
import React, { useState, useEffect } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import PosterPelicula from './PosterPelicula';
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';


const { width: windowWidth } = Dimensions.get('window');

export const SearchInput = (onPressSearch) => {
    const [textValue, setTextValue] = useState('');
    const [movies, setMovies] = useState([]);

    TheMovieDB = axios.create({
        baseURL: 'https://api.themoviedb.org/3/search',
        params: {
            api_key: '73177824b0458b2cf3c224bd42e51d77',
            language: 'es-ES',
            query: textValue
        }

    });

    const getMoviesByName = async () => {
        const response = await TheMovieDB.get('/movie');
        setMovies(response.data.results)
        console.log('MOVIES', movies)
    };

    useEffect(() => {
        if (movies.length > 0)
            console.log('USE', movies);
    }, [movies])

    return (
        <View style={styles.container}>
            <View style={styles.textBackground}>
                <TextInput
                    placeholder='Buscar pelicula'
                    style={styles.textInput}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={textValue}
                    onChangeText={setTextValue}

                />
                <IconButton
                    icon={props => <Icon name="search-outline" {...props} />}
                    color="grey"
                    onPress={getMoviesByName}
                />
            </View>
            <View style={{marginTop:40}}>
                <Carousel
                    data={movies}
                    renderItem={(pelicula) => <PosterPelicula item={pelicula} />}
                    sliderWidth={windowWidth}
                    initialNumToRender={7}
                    itemWidth={300} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    textBackground: {
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    textInput: {
        flex: 1,
        fontSize: 18
    }
});
