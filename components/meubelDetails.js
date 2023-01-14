import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import React, {useState} from 'react';

const Details = (props) => {
    return (
        <View style={styles.tile}>
       
        <View style={styles.tileDetail}>
          <Text style={styles.tileHeader}>{props.title}</Text>

        <Image
          style={styles.tileImage}
          source={{uri:`${props.image}`}}
        />
          <Text style={styles.tileText}>{props.description}</Text>
        </View>

        
      </View>
      );

}

const styles = StyleSheet.create({
    tile: {
        flexBasis: '46%',//200
        borderRadius: 5,
        backgroundColor:"#da8ee7",
        borderColor: '#B4B8DA',
        borderWidth: 1,
        margin: 10,
        marginTop:80,
        borderStyle: 'solid',
        marginVertical: '2%',
    
      },
      tileImage: {
      height:250,
      width:"100%",
      },
      tileDetail: {
        padding: 10,
        
      },
      tileHeader: {
        fontSize: 22,
        fontWeight: '600',
        marginLeft:140,
        marginBottom:10,
      },
      tileText: {
        fontSize: 16,
        fontWeight: '500',
        marginLeft:110,
        marginTop:20,
      }
});


export default Details;