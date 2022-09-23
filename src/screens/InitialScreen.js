import React from 'react'
import { Dimensions, ScrollView, View } from 'react-native'

import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

import PosterPelicula from '../components/PosterPelicula';
import { usePelicula } from '../hooks/usePelicula'

const { width: windowWidth } = Dimensions.get('window');

export const InitialScreen = () => {

    const {nowPlaying, popular, topRated, upcoming} = usePelicula();
    // const item = peliculasEnCine[2];

    return (
        <ScrollView>
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
            <HorizontalSlider titulo={'POPULAR'} peliculasEnCine = {popular}/>
            <HorizontalSlider titulo={'TOP RATED'} peliculasEnCine = {topRated}/>
            <HorizontalSlider titulo={'UPCOMING'} peliculasEnCine = {upcoming}/>

        </ScrollView>
    )
}

