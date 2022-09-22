import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import PeliculaBD from '../api/PeliculaBD';
import { HorizontalSlider } from '../components/HorizontalSlider';

export const DetailScreen = (props) => {
    const pelicula = props.route.params
    const { poster_path } = pelicula;
    const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;

    const [ peliculasSimilares, setPeliculasSimilares ] = useState([]);
    const [ generos, setGeneros ] = useState([]);

    const getPeliculasSimilares = async () =>{
        await  PeliculaBD.get(`/${pelicula.id}/similar`)
        .then((response)=>{
            setPeliculasSimilares(response.data.results)
        })
        
    };

    const getGeneros = async () =>{
        await  PeliculaBD.get(`/${pelicula.id}`)
        .then((response)=>{
            setGeneros(response.data.genres);
        })
        
    };

    useEffect(() => {
        getPeliculasSimilares()
        getGeneros()
    }, [])


    return (
        <ScrollView style={{ margin: 15 }}>
            <View style={styles.container}>

                <Image
                    source={{ uri }}
                    style={{ flex: 1 }}
                />
            </View>
            <View>
                <Text style={styles.originalTitle}>{pelicula.original_title}</Text>
                <Text style={styles.title}>{pelicula.title}</Text>
                <View style={{flexDirection:'row', marginTop:5}}>
                    <Icon
                        name='star-outline'
                        color='gray'
                        size={20}

                    />
                    <Text style={{marginLeft:10, fontSize: 18}}>{pelicula.vote_average}</Text>
                    <Text style={{marginLeft:10, fontSize: 18}}>- {generos.map(g => g.name).join(', ')}</Text>
                </View>
                <Text style={styles.overview}>{pelicula.overview}</Text>
            </View>
            <HorizontalSlider titulo={'Peliculas Similares'} peliculasEnCine = {peliculasSimilares}/>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 550,

    },
    originalTitle: {
        fontSize: 18,
        opacity: 0.8
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    overview: {
        fontSize: 18,
        textAlign: 'justify',
        marginTop:5,
        marginBottom:15
    }

})