import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Pressable, FlatList,fontFamily} from 'react-native';

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

    console.log(meubels.rttpg_excerpt)

    return (
        <View style={styles.screen}>
            <TextInput
                placeholder= "Waar ben je naar op zoek?"
                style={styles.input}
                onChangeText={getMeubels}
            />

            <Pressable onPress={() => navigation.navigate("winkelkar")}>
                    <View style={styles.shoppingcar}>
                        <Image 
                            style={styles.icon}
                            source={{uri: 'https://www.flaticon.com/free-icon/shopping-cart_3144456?term=shopping+cart&page=1&position=1&origin=search&related_id=3144456'}}
                        />
                        <Text style={styles.getal}>0</Text>
                    </View>
            </Pressable>
            
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
                  <View style={styles.background}>
                        <View style={styles.ItemTitle}>
                            <Image style={styles.image} source={{uri: item.x_featured_media }} ></Image>
                        </View>
        
                        <Text style={styles.ItemTitle}>{item.title.rendered}</Text>
                        <Text style={styles.description}>{item.yoast_head_json.og_description}</Text>
                        {/* <Text style={styles.discription}>{item.excerpt.rendered.split()}</Text> */}
                        
                        <View style={styles.next}>
                            <Pressable style={styles.button} onPress={() => navigation.navigate("Info", {itemTitle: item.title.rendered, description: item.yoast_head_json.og_description, image: item.x_featured_media  })}>  
                                <Text style={styles.meerInfo}>View {item.title.rendered}</Text>
                            </Pressable>
                            <Pressable style={styles.button2} onPress={() => increase()}>
                                <Text style={styles.kijk}>Add to cart</Text>
                            </Pressable>
                        </View>
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
        padding: 10,
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
        margin: 120,
        marginVertical: '2%',
        padding: 10,
        marginTop: 20,
    },

    button2:{
        backgroundColor: "yellow",
        padding: 10,
    },

    kijk:{
        backgroundColor: "brown"
    },
    
    shoppingcar:{
        marginBottom: 10,
       
    },

    meerInfo:{
        backgroundColor:"red",
    },

    ItemTitle:{
        backgroundColor: "pink",
     
        width: 80,
       height: 15,
        
    },

    description:{
        backgroundColor: "red",
        width:100,
        height:90,
    },

    image:{
        width: 50,
        height: 50,
        marginLeft: 130,
    },

    icon:{
        backgroundColor:'purple',
        width: 50,
        height: 30,
        marginLeft: 345,
        marginTop: - 35,
    },

    input:{
        backgroundColor:"green",
        padding: 10,
        marginTop: 30,
        marginRight: 80,
        marginLeft: 10,
        borderRadius: 10,
    },

    getal:{
        backgroundColor: "orange",
        padding: 15,
        width: 10,
        height: 5,
        marginLeft: 370,
        marginTop: -60,

    },

});

export default Meubels;
