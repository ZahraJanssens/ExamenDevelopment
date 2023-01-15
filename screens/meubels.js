import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';
import Filter from '../components/filter.js';

const Stack = createNativeStackNavigator();

const Meubels = ({navigation}) =>{

    const [meubels, setMeubels] = useState ([]);

    const getMeubels = async () => {
        try {
            const response = await fetch ("http://zahrajanssens.be/wp-json/wp/v2/posts?categories=6", {})
            const json = await response.json();
            setMeubels(json);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getMeubels();
    }, []);

    const[input, setInput] = useState("");

    return (
        <View style={styles.screen}>
            <TextInput
                placeholder= "Waar ben je naar op zoek?"
                style={styles.input}
                onChangeText={(text) => setInput(text)}
            />
            <Filter data={meubels} input={input} navigation={navigation} />
        </View>    
    ) 
      
}

const styles = StyleSheet.create({

    screen:{
        padding: 5,
        paddingBottom: 50,
    },

    input:{
        // backgroundColor:"green",
        padding: 10,
        marginTop: 30,
        marginRight: 80,
        marginLeft: 10,
        borderRadius: 10,
        borderColor:"black",
        borderRadius: 10,
        borderWidth:0.5,
    },
});

export default Meubels;
