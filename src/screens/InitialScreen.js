import React from 'react'
import { Dimensions, Text, View } from 'react-native'

import Carousel from 'react-native-snap-carousel';

import PosterPelicula from '../components/PosterPelicula';
import { usePelicula } from '../hooks/usePelicula'

 const { width : windowWidth} = Dimensions.get('window');
export const InitialScreen = () => {

    const peliculasEnCine = usePelicula();
    const item = peliculasEnCine[2];

    return (
        <View 
            style={{
                height:520
            }}
        >
            {/* <PosterPelicula item = {item}/> */}
            <Carousel
                data={peliculasEnCine}
                renderItem={(pelicula)=> <PosterPelicula item = {pelicula}/> }
                sliderWidth={windowWidth}
                itemWidth={300}
       />
        </View>
    )
}
