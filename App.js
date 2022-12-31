import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableNativeFeedback  } from 'react-native';

import meubelsScreen from './screens/meubels.js';
import infoScreen from './screens/info.js';
// import AllMeubelsScreen from './screens/AllMeubelsScreen.js';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Trendy meubels" component={(meubelsScreen)} />
        <Stack.Screen name="info" component={(infoScreen)} />
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

  shoppingcar:{
    marginBottom: 10,
}

});
