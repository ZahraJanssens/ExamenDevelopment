import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

const Filter = props =>  ({route, navigation})=>{


  return (
    <Pressable onPress={() => navigation.navigate("Winkelkarretje")}>
        <View style={styles.icon}>
            <Image 
                style={styles.icon}
                source={require("../assets/shopping-cart.png")}
            />
            <Text style={styles.getal}>0</Text>
        </View>
    </Pressable>
  );

}

const styles = StyleSheet.create({
    icon:{
        backgroundColor:'purple',
        width: 50,
        height: 30,
        marginLeft: 345,
       
    },

    getal:{
        backgroundColor: "orange",
        padding: 15,
        width: 10,
        height: 5,
        marginLeft: 370,
       

    },


});

export default Filter;