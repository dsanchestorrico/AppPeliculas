import React, {useState, useEffect} from 'react';

import {
  Button,
  View,
  FlatList
} from 'react-native';

import ItemPeliculas from '../components/ItemPeliculas';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const Pelicula = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    getPeliculas();
  }, []);

  const getPeliculas = () => {
    firestore()
      .collection('peliculas')
      .onSnapshot(async fPeliculas => {
        let tempPeliculas = [];
        let promiseImages = [];
        fPeliculas.forEach(fPelicula => {
          tempPeliculas.push(fPelicula.data());
          promiseImages.push(
            storage().ref(fPelicula.data().image).getDownloadURL(),
          );
        });

        const resultPromises = await Promise.all(promiseImages);

        resultPromises.forEach((url, index) => {
          tempPeliculas[index].image = url;
        });

        setPeliculas(tempPeliculas);
      });
  };

  const handleModal = () => {
    setIsVisible(true);
  };

  const handleOnClose = () => {
    setIsVisible(false)
  }

  return (
    <View>
      <FlatList
        style={{height: '95%'}}
        data={peliculas}
        renderItem={ItemPeliculas}
        keyExtractor={item => item.id}
      />
      <Button
        style={{height: '5%'}}
        title="Agregar Pelicula"
        onPress={handleModal}
      />
      {isVisible && <ModalPelicula onClose={handleOnClose} />}
    </View>
  );
};

export default Pelicula;
