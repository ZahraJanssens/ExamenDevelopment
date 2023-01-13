import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Pressable, FlatList,} from 'react-native';

const Stack = createNativeStackNavigator();

const Meubels = ({navigation}) =>{

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
                placeholder= "Waar ben je naar op zoek?"
                style={styles.input}
                onChangeText={getMeubels}
            />
            {/* <Text>
                {route.params.filter} 
            </Text> */}

            {/* <FlatList data={meubels} renderItem={({item}) => (
                
                <View style={styles.background}>
                    <Text style={styles.ItemTitle}>{item.title.rendered}</Text>
                    <Image style={styles.image} source={{uri: item.x_featured_media}} />

                    <Pressable onPress ={()=> navigation.navigate ("info", {title: item.title.rendered, image:item.x_featured_media })}>
                    <View style={styles.container}>
                        <View style={styles.meerInfo}>
                            <Text>Meer informatie</Text>
                        </View>  
                    </View>
                    </Pressable>

                </View>
            )}/> */}

            <FlatList data={meubels} renderItem={({item}) => (
                <View>

                    {/* <Pressable onPress={() => navigation.navigate("winkelkar")}>        
                            <View style={styles.shoppingcar}>
                                <Image 
                                    style={styles.icon}
                                    source={require("../assets/shopping-cart.png")}
                                />
                                <Text style={styles.getal}>0</Text>
                            </View>
                    </Pressable> */}

                     <View style={styles.background}>
                        <View style={styles.image}>
                            <Image style={styles.image} source={{uri: item.x_featured_media }} ></Image>
                        </View>
        
                        <Text style={styles.ItemTitle}>{item.title.rendered}</Text>
                        <Text style={styles.description}>{item.yoast_head_json.og_description}</Text>
                        {/* <Text style={styles.discription}>{item.excerpt.rendered.split()}</Text> */}
                        
                        <Pressable style={styles.button} onPress={() => navigation.navigate("Info", {itemTitle: item.title.rendered, description: item.yoast_head_json.og_description, image: item.x_featured_media  })}>  
                            <Text style={styles.meerInfo}>Meer informatie</Text>
                        </Pressable>

                        <Pressable style={styles.button1} onPress={() => navigation.navigate("Winkelkarretje", {itemTitle: item.title.rendered,})}> 
                            <Text style={styles.winkelkar}>Toevoegen aan winkelwagen</Text>
                        </Pressable>
                    </View>
                </View>
              
            )}/>


        </View>

    )   
}

const styles = StyleSheet.create({

    screen:{
        padding: 5,
    },

    background:{
        backgroundColor: "#da8ee7",
        borderRadius:10,
        margin: 10,
        padding: 30,
        marginTop: 20,
    },

    button: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexGrow: 0,
        flexShrink: 0,
        justifyContent: 'space-evenly',
        flexBasis: '50%',//200

        backgroundColor: "#aca5e6",
        borderRadius:10,
        margin: 80,
        marginVertical: '2%',
        padding: 10,
        marginBottom: -40,
        marginLeft: -15,
        marginRight: 200,
    },

    button1: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexGrow: 0,
        flexShrink: 0,
        justifyContent: 'space-evenly',
        flexBasis: '50%',//200

        backgroundColor: "#8a00c2",
        borderRadius:10,
        margin: 45,
        marginVertical: '2%',
        padding: 10,
        marginTop: 5,
        marginRight: -20,
        marginLeft: 150,
    },

    winkelkar:{
       

    },
    
    shoppingcar:{
        marginBottom: 10,
       
    },

    meerInfo:{
        // backgroundColor:"red",
    },

    ItemTitle:{
        // backgroundColor: "pink",
        width: 100,
        height: 15,
        marginTop:-280,
        marginLeft: 130,
        
       
        
    },

    description:{
        // backgroundColor: "red",
        width:155,
        height:30,
        marginTop:310,
        marginLeft: 100,
     
    },

    image:{
       width:200,
       height:250,
       marginLeft: 40,
       marginTop:20,
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

    icon:{
        backgroundColor:'purple',
        width: 40,
        height: 40,
        marginLeft: 300,
        marginTop:-250,
       
    },

    getal:{
        backgroundColor: "orange",
        padding: 15,
        width: 10,
        height: 5,
        marginLeft: 370,
       

    },

});

export default Meubels;
