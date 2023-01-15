import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableNativeFeedback  } from 'react-native';

import OpstartScreen from './screens/appOpstart.js';
import MeubelsScreen from './screens/meubels.js';
import InfoScreen from './screens/info.js';
import ReviewScreen from './screens/reviews.js';

import Filter from './components/filter.js';
// import AllMeubelsScreen from './screens/AllMeubelsScreen.js';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welkom" component={(OpstartScreen)} />
        <Stack.Screen name="Trendy meubels" component={(MeubelsScreen)} />
        <Stack.Screen name="Info" component={(InfoScreen)} />
        <Stack.Screen name="Reviews" component={(ReviewScreen)} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}







const styles = StyleSheet.create({

  heading1:{
    fontSize: 40,
    fontWeight:'400',
    margin: 8,
    paddingTop: 30,
   
  },

  container: {
    flex: 1,
    backgroundColor: '#dfdcf2',
    paddingTop: 20, 
    
  },



});
