// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

// import apiKey from '../apiKey';
// import meubelsScreen from '../screens/meubelsScreen.';


// const meubelsScreen = ({navigation}) =>{

//     const [meubelsScreen, setMeubels] = useState ([]);

//     const getMeubels = async () => {
//         try {
//             const response = await fetch ("http://zahrajanssens.be/wp-json/wp/v2/posts?categories=6", {

//             })
//             const json = await response.json();
//             setMeubels(json);
//             console.log(meubelsScreen);
//         } catch (error) {
//             console.error(error);
//         }
//     }

//     useEffect(() => {
//         getMeubels();
//     }, []);


//     return (
//         <View>
//             <FlatList data={meubelsScreen} renderItem={({item}) => (
                
//                 <View>
//                 <Text>{item.title.rendered}</Text>
            
//             <Pressable onPress ={()=> navigation.navigate ("info", {itemTitle: item.title.rendered})}>
                
//                 <View style={styles.listItem}>
//                     <Text>Bekijk product:</Text>
//                 </View>

//             </Pressable>

//             </View>
//             )}/>
//         </View>
//     )   
// }

// const styles = StyleSheet.create({
//   listItem: {
//     margin: 16,
//     fontSize: 24,
//     textAlign: 'center',
//   },

// });
// export default meubelDetails;