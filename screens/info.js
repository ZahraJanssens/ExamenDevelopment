import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import Details from '../components/meubelDetails';

const Stack = createNativeStackNavigator();

const Info = ({route, navigation}) =>{
  return (
    <View>
    <Details
      title={route.params.itemTitle}
      description={route.params.description}
      image={route.params.image}
    />
    <TouchableOpacity style={styles.review} onPress={() => navigation.navigate("Reviews")}>
      <Text style={styles.naarReview}>Ga naar reviews</Text>
    </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  background:{
    backgroundColor: "#da8ee7",
    margin:20,
    borderRadius:30,
    padding: 10,
    height: 50,
  },

  review:{
    backgroundColor:"#aca5e6",
    borderRadius:10,
    margin: 80,
    marginVertical: '2%',
    padding: 10,
    marginRight: 100,
    marginLeft:100,
    

  },
  naarReview:{
    
    marginRight:30,
    marginLeft:50,
  },
});

export default Info;