import { IconButton } from '@react-native-material/core';
import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSearchMovie } from '../hooks/useSearchMovie';

export const SearchInput = (onPressSearch) => {
    const [textValue, setTextValue] = useState('');
    const [value, setValue] = useState('');

    useEffect(() => {
        if (value !== '')
            onPressSearch = (value) => {};

    }, [value])




    return (
        <View style={styles.container}>
            <View style={styles.textBackground}>
                <TextInput
                    placeholder='Buscar pelicula'
                    style={styles.textInput}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={textValue}
                    onChangeText={setTextValue}

                />
                <IconButton
                    icon={props => <Icon name="search-outline" {...props} />}
                    color="grey"
                    onPress={() => { console.log(textValue); setValue(textValue); }}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    textBackground: {
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    textInput: {
        flex: 1,
        fontSize: 18
    }
});
