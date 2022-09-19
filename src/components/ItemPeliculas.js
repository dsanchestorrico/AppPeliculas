import React from 'react'

import { View, Image, Text, StyleSheet } from 'react-native'


const ItemPelicula = ({ item }) => {
  return (
    <View style={styles.containerItem}>
      <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
      <View style={styles.infoItem}>
        <Text style={styles.itemPeliculaTitulo}>{item.titulo}</Text>
        <Text style={styles.itemPeliculaGenero}>{item.genero}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  containerItem: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    margin: 10,
    elevation: 5,
    borderRadius: 5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  infoItem: {
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    alignItems: 'flex-start'
  },
  itemPeliculaTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  },
  itemPeliculaGenero: {
    fontWeight: 'bold',
    fontSize: 15
  }
});

export default ItemPelicula;