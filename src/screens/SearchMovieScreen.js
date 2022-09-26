import React from 'react'
import { useEffect, useState } from 'react';
import { View } from 'react-native'
import { SearchInput } from '../components/SearchInput'

export const SearchMovieScreen = () => {  
  return (
    <View style={{Flex:1, margin:10}}>
        <SearchInput/>
    </View>
  )
}
