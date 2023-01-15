import {StyleSheet, Text, View } from 'react-native';

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
    backgroundColor: '#aca5e6',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 10,
    borderColor:"#da8ee7",
  }
});

export default ReviewItem;