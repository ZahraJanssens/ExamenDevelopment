import { StyleSheet, Text, View, FlatList, Pressable, Image } from 'react-native';
import React, {useState} from 'react';


const Filter = ({data, input, navigation}) => {
  const[counter,setCounter] = useState(0);
  const increase=() =>{
    setCounter((currentCounter)=>currentCounter+1)
  }
  
  return (
    <View>
      <View>
    <Image 
      style={styles.icon}
      source={require("../assets/shopping-cart.png")}
    />
    <Text style={styles.getal}>{counter}</Text>
  </View> 
      <FlatList
        style={styles.list}
        data={data}
        renderItem={({ item }) => {
          if (input === "") {
            return (
              <View style={styles.screen}>
                <View style={styles.background}>
                  <Image style={styles.image} source={{uri: item.yoast_head_json.og_image[0].url}} ></Image>
                  <Text style={styles.itemTitle}>{item.title.rendered}</Text>
                  <Text style={styles.description}>{item.yoast_head_json.og_description}</Text>

                  <Pressable style={styles.button} onPress={() => navigation.navigate("Info", {itemTitle: item.title.rendered, description: item.yoast_head_json.og_description, image:item.yoast_head_json.og_image[0].url  })}>  
                    <Text style={styles.meerInfo}>Meer informatie</Text>
                  </Pressable>

                  <Pressable style={styles.button1} onPress={increase}> 
                    <Text style={styles.winkelwagen}>Toevoegen aan winkelwagen</Text>
                  </Pressable>

                  <Pressable
                    onPress={() =>
                      navigation.navigate("Details", {
                        itemtitle: item.title.rendered,
                        description: item.yoast_head_json.og_description,
                        image: item.yoast_head_json.og_image[0].url,
                      })
                    }
                  ></Pressable>
                </View>
              </View>
            );
          }
  
          if (item.title.rendered.toUpperCase().includes(input.toUpperCase())) {
            return (
              <View style={styles.screen}>
                  <View style={styles.background}>
                    <Image style={styles.image} source={{uri: item.yoast_head_json.og_image[0].url}} ></Image>
                    <Text style={styles.itemTitle}>{item.title.rendered}</Text>
                    <Text style={styles.description}>{item.yoast_head_json.og_description}</Text>

                    <Pressable style={styles.button} onPress={() => navigation.navigate("Info", {itemTitle: item.title.rendered, description: item.yoast_head_json.og_description, image:item.yoast_head_json.og_image[0].url  })}>  
                      <Text style={styles.meerInfo}>Meer informatie</Text>
                    </Pressable>

                    <Pressable style={styles.button1} onPress={increase}> 
                      <Text style={styles.winkelwagen}>Toevoegen aan winkelwagen</Text>
                    </Pressable>

                    <Pressable
                        onPress={() =>
                        navigation.navigate("Details", {
                            itemTitle: item.title.rendered,
                            description: item.yoast_head_json.og_description,
                            image: item.yoast_head_json.og_image[0].url,
                        })
                        }
                    ></Pressable>
                  </View>
              </View>
            );
          }
        }}
      ></FlatList>
    </View>
  );
};


const styles = StyleSheet.create({
  screen:{
        padding: 5,
        paddingBottom: 50,
        marginTop: 15,
    },

    background:{
        backgroundColor: "#da8ee7",
        borderRadius:10,
        marginHorizontal: 10,
        marginVertical:-10,
        padding: 30,
        height:450,
       
    },

    button: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexGrow: 0,
        flexShrink: 0,
        justifyContent: 'space-evenly',
        flexBasis: '50%',//200

        backgroundColor: "#aca5e6",
        borderRadius:10,
        margin: 80,
        marginVertical: '2%',
        padding: 10,
        marginBottom: -40,
        marginLeft: -15,
        marginRight: 200,
    },

    button1: {
      backgroundColor: "#8a00c2",
      borderRadius:10,
      padding: 10,
      marginTop: 5,
      marginHorizontal:60,
      marginLeft:135,
      marginRight:-15,
    
     
  },

    itemTitle:{
        // backgroundColor: "pink",
        height: 15,
        marginTop:-280,
        textAlign:"center",
    },

    description:{
        // backgroundColor: "red",
        width:155,
        height:30,
        marginTop:310,
        marginLeft: 100,
        textAlign:"center",
    },

    image:{
       width:"100%",
       height:250,
       marginTop:20,
    },

    input:{
        // backgroundColor:"green",
        padding: 10,
        marginTop: 30,
        marginRight: 80,
        marginLeft: 10,
        borderRadius: 10,
        borderColor:"black",
        borderRadius: 10,
        borderWidth:0.5,
    },

    icon:{
        // backgroundColor:'purple',
        width: 40,
        height: 40,
        marginLeft: 350,
        marginTop: -40,
    },

    getal:{
        // backgroundColor: "orange",
        padding: 15,
        width: 10,
        height: 5,
        marginLeft: 365,
        marginTop:-70,
    },
});

export default Filter;