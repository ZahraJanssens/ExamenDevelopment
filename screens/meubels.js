import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';

const Stack = createNativeStackNavigator();

const meubels = ({navigation}) =>{

    const [meubels, setMeubels] = useState ([]);

    const getMeubels = async (enteredText) => {
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
        <View style={styles.screen}>
            <TextInput
                placeholder= "Zoek hier"
                style={styles.input}
                onChangeText={getMeubels}
            />

            <Pressable onPress={() => navigation.navigate("lege winkelkar")}>
                    <View style={styles.shoppingcar}>
                        <Image 
                            style={styles.icon}
                            source={{uri: 'https://www.flaticon.com/free-icon/shopping-cart_3144456?term=shopping+cart&page=1&position=1&origin=search&related_id=3144456'}}
                        />
                        <Text style={styles.getal}>0</Text>
                    </View>
            </Pressable>
            
            <FlatList data={meubels} renderItem={({item}) => (
                
                <View>
                    <Text style={styles.title}>{item.title.rendered}</Text>
                    <Image style={styles.image} source={{uri: item.x_featured_media}} />

                    <Pressable onPress ={()=> navigation.navigate ("info", {title: item.title.rendered, image:item.x_featured_media })}>
                    <View style={styles.container}>
                        <View style={styles.meerInfo}>
                            <Text>Meer informatie</Text>
                        </View>  
                    </View>
                    </Pressable>

                </View>
            )}/>
        </View>

    )   
}

const styles = StyleSheet.create({

    screen:{
        padding: 5,
    },

    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexGrow: 0,
        flexShrink: 0,
        justifyContent: 'space-evenly',
        flexBasis: '50%',//200

        backgroundColor: "#aca5e6",
        borderRadius:10,
        margin: 130,
        marginVertical: '2%',
        padding: 10,
        marginTop: 20,
    },
    
    shoppingcar:{
        marginBottom: 10,
       
    },

    meerInfo:{
        backgroundColor:"red",
    },

    title:{
        backgroundColor: "pink",
    },

    image:{
        width: 150,
        height: 150,
    },

    icon:{
        backgroundColor:'purple',
        width: 50,
        height: 20,
    },

    input:{
        backgroundColor:"green",
        padding: 10,
        margin: 50,
        borderRadius: 10,
    },

    getal:{
        backgroundColor: "orange"

    },

});

export default meubels;
