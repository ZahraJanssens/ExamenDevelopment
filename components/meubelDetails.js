import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

const Details = props => {
  const [pressCounter, setPressCounter] = useState (0)
  function pressHandler() {
    console.log("pressed" + props.title);
    setPressCounter((currentPressCounter)=> currentPressCounter + 1);
  }
  return (
    <TouchableOpacity style={styles.tile} activeOpacity={0.7} onPress={pressHandler}>
      {console.log("render " + props.ItemTitle)}
      <View>
        <Text style={styles.ItemTitle}>{props.ItemTitle}</Text>
        <Text style={styles.tileText}>{pressCounter}</Text>
      </View>
    </TouchableOpacity>
  );

}

export default MeubelDetails;