// import React from 'react';
// import {StyleSheet, Text, View, TouchableNativeFeedback, Image, FlatList, Text, Pressable} from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const filter = ({data, input}) => {
//     const navigation = useNavigation();

//     return(
//         <View style={StyleSheet.extra}>
//                 <FlatList styles={styles.flat} data={data} renderItem= {({item})}>

//                         return(
//                             <View style={styles.box}>
//                                 <TouchableNativeFeedback>
//                                     <View style={styles.listItem}>

//                                         <Image style={{width: 420, height:200}} 
//                                         source={{ uri: `${item.yoast_head_json.og_image[0].url}` }}/>

//                                         <Text style={styles.title}>{item.title.rendered}</Text>
//                                         <Text style={styles.eigenschappen}>{item.item.yoast_head_json.og_description}</Text>

//                                         <Pressable style={styles.seeProduct} onPress ={()=> navigation.navigate ("product")}>
//                                             <Text style={styles.text}> Meer Informatie: {"title: item.title.rendered"}</Text>
//                                         </Pressable>

//                                     </View>

//                                 </TouchableNativeFeedback>
//                             </View>
//                         )
                    

//                 </FlatList>
//         </View>
//     )

// }
// export default AllMeubelsScreen;