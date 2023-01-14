import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Pressable, FlatList, ScrollView,TouchableOpacity} from 'react-native';

import Details from '../components/meubelDetails';

const Stack = createNativeStackNavigator();

const Info = ({route, navigation}) =>{

    return (
     <View>
      <Details
       title={route.params.itemTitle}
       description={route.params.description}
       image={route.params.image}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Reviews")}>
        <Text>Ga naar reviews</Text>
      </TouchableOpacity>
     </View>

    );


}

const styles = StyleSheet.create({
    background:{
      backgroundColor: "#da8ee7",
      borderRadius:10,
      margin: 10,
      padding: 10,
      marginTop: 20,
      height: 780,
    },
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
    },
    image:{
      width: 380,
      height: 450,
  },
  });

export default Info;