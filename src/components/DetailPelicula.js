import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { Text, View } from 'react-native';

const DetailPelicula = (id) => {
    const [pelicula, setPelicula] = useState([]);

    useEffect(() => {
        getPelicula();
    }, []);

    const getPelicula = () => {
        firestore()
            .collection('peliculas')
            .where('id', '==', 1)
            .onSnapshot(async fPeliculas => {
                let listPeliculas = [];
                let listImagenes = [];
                fPeliculas.forEach(fPelicula => {
                    listPeliculas.push(fPelicula.data());
                    listImagenes.push(
                        storage().ref(fPelicula.data().image).getDownloadURL(),
                    );
                });

                const resultPromises = await Promise.all(listImagenes);

                resultPromises.forEach((url, index) => {
                    listPeliculas[index].image = url;
                });
                setPelicula(listPeliculas[0]);
                console.log(listPeliculas);
            });
    };
    return (
        <View>
            <Text>{pelicula.image}</Text>
            <Image
                source={{ uri: pelicula.image }}
                style={{ width: 100, height: 100 }} />
        </View>
    )
}

export default DetailPelicula;