import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TextInput, FlatList, StatusBar, Button} from 'react-native';
import ReviewItem from '../components/reviewItem';

const Reviews=() =>{
    const[addedReview, setAddedReview] = useState('');
    const[reviews, setReviews] = useState([]);

    const inputHandler= (addedReview) => {
        console.log(addedReview, "added review");
        setAddedReview(addedReview);
    }
    const reviewHandler = () => {
        console.log(addedReview);
        setReviews((currentReviews) => [...currentReviews, addedReview]);
    }

    return(
        <View style={styles.screen}>
            <StatusBar style="auto"/>
            {console.log(reviews)}
            <View style={styles.input}>
                <TextInput
                placeholder="Schrijft hier ma ne review jonge..."
                style={styles.text}
                clearButtonMode="always"
                onChangeText={inputHandler}
                /> 
            </View>
            <View style={styles.btn}>
                <Button title="Review toevoegen" onPress={reviewHandler} />
            </View>
            <View style={styles.review}>
                <FlatList data={reviews} renderItem={(itemData) => (
                    <ReviewItem review={itemData.item} />
                )} />
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor:"pink",
    },

    input: {
        width:"auto",
        margin:10,
        borderRadius:10,
        height: 200,
        borderColor:"purple",
        borderWidth:3,
    },

    text: {
        margin:10,
    },

    btn:{
        borderRadius:10,
        backgroundColor:"green",
        margin: 20,
        color:"yellow",
    }
  });

export default Reviews