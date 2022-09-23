import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore';
import { SafeAreaView, ScrollView } from 'react-native';
import { VerticalSlider } from '../components/VerticalSlider';

export const MyFavoritesMoviesScreen = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMoviesFromFirestore();
    }, []);

    const getMoviesFromFirestore = () => {
        firestore()
            .collection('movies')
            .where('type','==','favorites')
            .onSnapshot(response => {
                let listMovies = [];
                response.forEach((element, index) => {
                    listMovies.push({...element._data, idFirestore:response._docs[index].id});
                });
                setMovies(listMovies);
            });
    };
    return (
        <ScrollView style={{backgroundColor:'white'}}>
            <SafeAreaView>
                <VerticalSlider titleScreen={'My Favorites Movies'} listMovies={movies} />
            </SafeAreaView>
        </ScrollView>
    )
}
