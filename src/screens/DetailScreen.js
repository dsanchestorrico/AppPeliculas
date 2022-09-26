import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, ScrollView, Alert } from 'react-native'
import { Button } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/Ionicons';
import PeliculaBD from '../api/PeliculaBD';
import { HorizontalSlider } from '../components/HorizontalSlider';
import firestore from '@react-native-firebase/firestore';
import { style } from '../theme/appTheme';
import { black } from 'react-native-paper/lib/typescript/styles/colors';

export const DetailScreen = (props) => {
    const pelicula = props.route.params
    const { poster_path, showButton } = pelicula;

    const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;

    const [peliculasSimilares, setPeliculasSimilares] = useState([]);
    const [generos, setGeneros] = useState([]);

    const getPeliculasSimilares = async () => {
        await PeliculaBD.get(`/${pelicula.id}/similar`)
            .then((response) => {
                setPeliculasSimilares(response.data.results)
            })

    };

    const getGeneros = async () => {
        await PeliculaBD.get(`/${pelicula.id}`)
            .then((response) => {
                setGeneros(response.data.genres);
            })

    };

    const sendData = (values) => {
        firestore()
            .collection('movies')
            .add({
                ...values
            })
            .then(response => {

            })
            .catch(error => {
                console.log('error', error);
            });
    };

    const confirmationMyListAlert = () =>
        Alert.alert(
            `¿Desea agregar "${pelicula.title}" a su lista?`,
            "",
            [
                {
                    text: "Cancel",
                    onPress: () => { console.log('cancel') },
                    style: "cancel"
                },
                {
                    text: "OK", onPress: () => {
                        sendData({ ...pelicula, type: 'mylist' });
                        console.log('added!')
                    }
                }
            ]
        );

    const confirmationMyFavoriteAlert = () =>
        Alert.alert(
            `¿Desea agregar "${pelicula.title}" a sus favoritos?`,
            "",
            [
                {
                    text: "Cancel",
                    onPress: () => { console.log('cancel') },
                    style: "cancel"
                },
                {
                    text: "OK", onPress: () => {
                        sendData({ ...pelicula, type: 'favorites' });
                        console.log('added!')
                    }
                }
            ]
        );

    useEffect(() => {
        getPeliculasSimilares()
        getGeneros()
    }, [])


    return (
        <ScrollView>
            <View style={{ margin: 15 }}>

                <View style={styles.container}>

                    <Image
                        source={{ uri }}
                        style={{ flex: 1 }}
                    />
                </View>
                <View>
                    <Text style={styles.originalTitle}>{pelicula.original_title}</Text>
                    <Text style={styles.title}>{pelicula.title}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Icon
                            name='star-outline'
                            color='black'
                            size={20}

                        />
                        <Text style={{ marginLeft: 10, fontSize: 18 }}>{pelicula.vote_average}</Text>
                        <Text style={{ marginLeft: 10, fontSize: 18 }}>- {generos.map(g => g.name).join(', ')}</Text>
                    </View>
                    <Text style={{...style.titleScreen, marginLeft:0}}>Historia</Text>
                    <Text style={styles.overview}>{pelicula.overview}</Text>
                </View>
                <HorizontalSlider titulo={'Peliculas Similares'} peliculasEnCine={peliculasSimilares} />
                <View style={{ ...styles.botones, display: showButton }}>
                    <Button title="A MI LISTA" onPress={confirmationMyListAlert}
                    />
                </View>

                <View style={{ ...styles.botones, display: showButton }}>
                    <Button title="A Mis Favoritos" onPress={confirmationMyFavoriteAlert} />
                </View>

            </View>
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
        fontWeight: 'bold',
        color:'black'
    },
    overview: {
        fontSize: 18,
        textAlign: 'justify',
        marginTop: 5,
        marginBottom: 15
    },
    botones: {
        margin: 10
    }

})