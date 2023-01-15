import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Pressable, FlatList, ScrollView,TouchableOpacity} from 'react-native';

const ReviewItem = props => {
  return (
    <View style={styles.review}>
      <Text>{props.review}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  review: {
    padding: 10,
    marginVertical: 10,//bestaat niet in CSS
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  }
});

export default ReviewItem;