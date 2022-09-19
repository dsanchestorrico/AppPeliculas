import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import ItemPeliculas from '../components/ItemPeliculas';

import {
  FlatList,
  SafeAreaView
} from 'react-native';

const PopularesScreen = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    getPeliculas();
  }, []);

  const getPeliculas = () => {
    firestore()
      .collection('peliculas')
      .where('popular','==',true)
      .onSnapshot(async fPeliculas => {
        let listPeliculas = [];
        let listImagenes = [];
        fPeliculas.forEach(fPelicula => {
        //   console.log(fPelicula)
          listPeliculas.push(fPelicula.data());
          listImagenes.push(
            storage().ref(fPelicula.data().image).getDownloadURL(),
          );
        });

        const resultPromises = await Promise.all(listImagenes);

        resultPromises.forEach((url, index) => {
          listPeliculas[index].image = url;
        });
        setPeliculas(listPeliculas);
      });
  };

  return (
    <SafeAreaView>
      <FlatList
        style={{ height: '95%' }}
        data={peliculas}
        renderItem={ItemPeliculas}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

export default PopularesScreen;