import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Pressable, FlatList, ScrollView} from 'react-native';

const Stack = createNativeStackNavigator();

const Info = ({route, navigation}) =>{

    return (
        <View style={styles.background}>
          <Text>
            {route.params.title} 


          </Text>

          <Image style={styles.image} source={{uri:route.params.image}} />

          {/* <ScrollView>
              <Image
                style={styles.filmPoster}
                source={{
                  uri: info.banner,
                }}
              />
              <Text style={styles.title}>{info.title}</Text>
              <View style={styles.details}>
                  <Text>{info.plot}</Text>
                  <Text style={styles.release}>release: {info.release}</Text>
              </View>

          </ScrollView> */}

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
      width: 150,
      height: 150,
  },
  });

export default Info;