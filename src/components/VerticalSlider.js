import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { MovieItem } from './MovieItem';
import { style } from '../theme/appTheme';

export const VerticalSlider = ({ titleScreen, listMovies }) => {
    return (
            <SafeAreaView style={{ marginLeft: 10, marginRight: 10 }}>
                <Text style={style.titleScreen}>{titleScreen}</Text>
                <FlatList
                    data={listMovies}
                    renderItem={(movie) => <MovieItem movieItem={movie} />}
                    keyExtractor={(item, index) => String(index)}
                />
            </SafeAreaView>
    )
};
