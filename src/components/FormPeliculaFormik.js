import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ActivityIndicator,
  Keyboard
} from 'react-native';

import { Formik } from 'formik';
import { Picker } from '@react-native-picker/picker';

import * as Yup from 'yup';

import { launchImageLibrary } from 'react-native-image-picker';

import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

const FormPeliculaFormik = (props) => {
  const [referenceStorage, setReferenceStorage] = useState();
  const [fileName, setFileName] = useState();
  const [pathFile, setPathFile] = useState();
  const [isLoading, setIsLoading] = useState();

  const { onClose } = props

  const [enCine, setEnCine] = useState();
  const [popular, setPopular] = useState();

  const FormPeliculaSchema = Yup.object().shape({
    titulo: Yup.string().required('Campo Requerido'),
    genero: Yup.string().required('Campo Requerido'),
    descripcion: Yup.string().required('Campo Requerido')
  });

  const handleGallery = async () => {
    const result = await launchImageLibrary();
    if (result.assets.length > 0) {
      const tempFileName = result.assets[0].fileName;
      const tempPathFile = result.assets[0].uri;
      setReferenceStorage(storage().ref(tempFileName));
      setFileName(tempFileName);
      setPathFile(tempPathFile);
    }

    console.log('result', result);
  };

  const handleForm = values => {
    console.log('SUBMIT')
    setIsLoading(true)
    referenceStorage
      .putFile(pathFile)
      .then(response => {
        console.log('exitoso');
        handleFirestore(values);
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  const handleFirestore = values => {
    firestore()
      .collection('peliculas')
      .add({
        ...values,
        image: fileName,
      })
      .then(response => {
        Keyboard.dismiss()
        setIsLoading(false)
        // onClose()
        console.log('props',props);
        console.log('guardado');
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  return (
    <Formik
      initialValues={{ titulo: '', genero: '', descripcion: '', enCine: true, popular: true , image:''}}
      onSubmit={handleForm}
      validationSchema={FormPeliculaSchema}>
      {({ handleChange, handleSubmit, values, errors }) => (
        <View style={styles.containerForm}>
          <Text>Titulo</Text>
          <TextInput
            style={styles.inputText}
            value={values.titulo}
            onChangeText={handleChange('titulo')}
            placeholder="Titulo"
          />
          {errors.titulo && (
            <Text style={styles.messageError}>{errors.titulo}</Text>
          )}
          <Text>Genero</Text>
          <TextInput
            style={styles.inputText}
            value={values.genero}
            onChangeText={handleChange('genero')}
            placeholder="Genero"
          />
          {errors.genero && (
            <Text style={styles.messageError}>{errors.genero}</Text>
          )}
          <Text>Descripcion</Text>
          <TextInput
            style={styles.inputText}
            value={values.descripcion}
            onChangeText={handleChange('descripcion')}
            placeholder="Descripcion"
          />
          {errors.descripcion && (
            <Text style={styles.messageError}>{errors.descripcion}</Text>
          )}
          <Text>En cines</Text>
          <Picker
            selectedValue={enCine}
            onValueChange={(itemValue, itemIndex) =>
              setEnCine(itemValue)
            }>
            <Picker.Item label="Si" value="true" />
            <Picker.Item label="No" value="false" />
          </Picker>
          <Text>Popular</Text>
          <Picker
            selectedValue={popular}
            onValueChange={(itemValue, itemIndex) =>
              setPopular(itemValue)
            }>
            <Picker.Item label="Si" value="true" />
            <Picker.Item label="No" value="false" />
          </Picker>
          <Text>Imagen</Text>
          <View style={styles.containerImage}>
            <View style={{ width: '75%' }}>
              <TextInput
                style={styles.inputText}
                value={fileName}
                //onChangeText={handleChange('image')}
                placeholder="Imagen"
              />
              {/* {errors.image && (
                <Text style={styles.messageError}>{errors.image}</Text>
              )} */}
            </View>
            <Button
              style={{ width: '20%' }}
              onPress={handleGallery}
              title="Image"
            />
          </View>
          {isLoading ? (
            <ActivityIndicator color={'#000'} size={50} />
          ) : (
            <Button title="Guardar" onPress={handleSubmit} />
          )}
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  inputText: {
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  containerForm: {
    padding: 20,
  },
  messageError: {
    color: 'red',
    fontSize: 10,
  },
  containerImage: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});

export default FormPeliculaFormik;
