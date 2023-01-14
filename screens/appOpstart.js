import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View,Pressable} from 'react-native';

const Welkom = ({route, navigation})=>{
    return (
        <View style={styles.page}>
            <Text style={styles.header}>
                Ben je opzoek naar trendy meubels?
                Klik op de knop hier beneden!
            </Text>

            <Pressable style={styles.button} onPress={() => navigation.navigate("Trendy meubels")}>
                <Text style={styles.tekst}>Shop hier!</Text>
            </Pressable>
        </View>
        
    );
  
}
const styles = StyleSheet.create({

    page:{
        backgroundColor: "#aca5e6",
        height:"100%",

    },

    header:{
        fontSize:22,
        margin:10,
        padding:20,
        marginTop:250,
        textAlign:"center",
    },

    button:{
        backgroundColor: "#8a00c2",
        borderRadius:10,
        padding:10,
        marginHorizontal:50,
        
    },

    tekst:{
        fontSize:24,
        textAlign:"center",
    }
   

});

export default Welkom;