import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Pressable, FlatList, ScrollView} from 'react-native';

const Stack = createNativeStackNavigator();

const info = ({route, navigation}) =>{

    return (
        <View>
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

export default info;