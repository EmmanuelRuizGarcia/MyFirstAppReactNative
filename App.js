import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

const App=()=>{
  return(
    <>
      <Text style={stylesPage.styleTitle}>Pagina Login</Text>
      <View style={{marginTop:30, justifyContent:"center", flexDirection:"row"}}>
        <Image style={stylesPage.styleImage} resizeMode="contain" source={require("./images/react.png")}/>
      </View>
    </>
  )
}

const stylesPage=StyleSheet.create({
  styleImage:{
    width:200,
    height:200
  },
  styleTitle:{
    fontSize: 24,
    textAlign: "center",
    backgroundColor: "#343a40",
    color: "white",
    fontWeight: "bold",
    paddingVertical: 20
  }
})

export default App;