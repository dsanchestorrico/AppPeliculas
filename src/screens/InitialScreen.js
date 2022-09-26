import React from 'react'
import { Dimensions, ScrollView, Text, View } from 'react-native'

import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

import PosterPelicula from '../components/PosterPelicula';
import { useMovie } from '../hooks/useMovie';
import { style } from '../theme/appTheme';

const { width: windowWidth } = Dimensions.get('window');

export const InitialScreen = () => {

    const {nowPlaying, popular, topRated, upcoming} = useMovie();

    return (
        <ScrollView>
            <Text style={style.titleScreen}>EN CINES</Text>
            <View
                style={{
                    height: 520
                }}
            >
                <Carousel
                    data={nowPlaying}
                    renderItem={(pelicula) => <PosterPelicula item={pelicula}/>}
                    sliderWidth={windowWidth}
                    initialNumToRender={7}
                    itemWidth={300} />

            </View>
            <HorizontalSlider titulo={'POPULARES'} peliculasEnCine = {popular}/>
            <HorizontalSlider titulo={'MEJOR CALIFICADOS'} peliculasEnCine = {topRated}/>
            <HorizontalSlider titulo={'PROXIMAMENTE'} peliculasEnCine = {upcoming}/>

        </ScrollView>
    )
}

