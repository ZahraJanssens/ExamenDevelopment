import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';

const Stack = createNativeStackNavigator();

const meubels = ({navigation}) =>{

    const [meubels, setMeubels] = useState ([]);

    const getMeubels = async () => {
        try {
            const response = await fetch ("http://zahrajanssens.be/wp-json/wp/v2/posts?categories=6", {

            })
            const json = await response.json();
            setMeubels(json);
            console.log(meubels);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getMeubels();
    }, []);


    return (
        <View>
            <FlatList data={meubels} renderItem={({item}) => (
                
                <View>
                <Text>{item.title.rendered}</Text>
            
            <Pressable onPress ={()=> navigation.navigate ("info", {itemTitle: item.title.rendered})}>
                
                <View style={styles.listItem}>
                <Text>Bekijk product:</Text>
                </View>
            </Pressable>

            </View>
            )}/>
        </View>
    )   
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 5,
        borderColor: 'grey',
        borderStyle: 'dashed',
        borderWidth: 0.5,
      }
  });

export default meubels;
