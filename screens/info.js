import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';

const Stack = createNativeStackNavigator();

const info = ({navigation, route}) =>{

    return (
        <View>
           <Text>
            {route.params.itemTitle} 
            
           </Text>
        </View>
    );


}

const styles = StyleSheet.create({
    title: {
      margin: 16,
      fontSize: 24,
      textAlign: 'center',
    },
    details: {
      borderWidth: 1,
      padding: 16,
      margin: 8,
    },
    filmPoster: {
      width: '100%',
      height: 450
    },
    release: {
      fontStyle: 'italic',
      fontSize: 12,
      marginTop: 8,
      textAlign: 'right',
    }
  });

export default info;