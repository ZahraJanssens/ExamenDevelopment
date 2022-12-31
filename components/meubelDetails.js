// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

// import apiKey from '../apiKey';
// import meubels from '../screens/meubels';


// const meubels = ({navigation}) =>{

//     const [meubels, setMeubels] = useState ([]);

//     const getMeubels = async () => {
//         try {
//             const response = await fetch ("http://zahrajanssens.be/wp-json/wp/v2/posts?categories=6", {

//             })
//             const json = await response.json();
//             setMeubels(json);
//             console.log(meubels);
//         } catch (error) {
//             console.error(error);
//         }
//     }

//     useEffect(() => {
//         getMeubels();
//     }, []);


//     return (
//         <View>
//             <FlatList data={meubels} renderItem={({item}) => (
                
//                 <View>
//                 <Text>{item.title.rendered}</Text>
            
//             <Pressable onPress ={()=> navigation.navigate ("info", {itemTitle: item.title.rendered})}>
                
//                 <View style={styles.listItem}>
//                     <Text>Bekijk product:</Text>
//                 </View>

//             </Pressable>

//                 <ScrollView>
//                     <Image
//                         style={styles.afbeelding}
//                         source={{
//                         uri: meubelDetails.banner,
//                     }}
//                     />
//                     <Text style={styles.listItem}>{meubelDetails.title}</Text>
//                         <View style={styles.details}>
//                             <Text>{meubleDetails.plot}</Text>
//                             <Text style={styles.release}>release: {meubelDetails.release}</Text>
//                         </View>

//                 </ScrollView>


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
//   details: {
//     borderWidth: 1,
//     padding: 16,
//     margin: 8,
//   },
//   afbeelding: {
//     width: '100%',
//     height: 450
//   },
//   release: {
//     fontStyle: 'italic',
//     fontSize: 12,
//     marginTop: 8,
//     textAlign: 'right',
//   }

// });
// export default meubelDetails;