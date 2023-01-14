import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Pressable, FlatList,fontFamily} from 'react-native';

const Winkelwagen = ({route, navigation})=>{


    return (
        <Pressable onPress={() => navigation.navigate("Winkelwagen")}>
            <Image 
                style={styles.icon}
                source={require("../assets/shopping-cart.png")}
            />
            <Text style={styles.getal}>0</Text>
        </Pressable>
    );
  
}
const styles = StyleSheet.create({

   

});

export default Winkelwagen;