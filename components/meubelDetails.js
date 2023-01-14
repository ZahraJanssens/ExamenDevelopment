import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import React, {useState} from 'react';

const Details = (props) => {
    return (
        <View style={styles.tile}>
        <Image
          style={styles.tileImage}
          source={{uri:`${props.image}`}}
        />
        <View style={styles.tileDetail}>
          <Text style={styles.tileHeader}>{props.title}</Text>
          <Text style={styles.tileText}>{props.description}</Text>
        </View>
      </View>
      );

}

const styles = StyleSheet.create({
    tile: {
        flexBasis: '46%',//200
        borderRadius: 5,
        borderColor: '#B4B8DA',
        borderWidth: 1,
        borderStyle: 'solid',
        marginVertical: '2%',
    
      },
      tileImage: {
      height:200,
      width:400,
        
      },
      tileDetail: {
        padding: 10,
      },
      tileHeader: {
        fontSize: 22,
        fontWeight: '600',
      },
      tileText: {
        fontSize: 16,
        fontWeight: '500',
      }
});


export default Details;