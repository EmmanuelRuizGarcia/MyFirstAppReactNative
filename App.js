import React from "react";
import { Text, StyleSheet, Image, View, TextInput, ScrollView } from "react-native";

const App=()=>{
  return(
    <>
      <ScrollView>
        <Text style={stylesPage.styleTitle}>Login</Text>
        <View style={{margin: 10}}>
          <View 
            style={{ 
              marginVertical: 30, 
              justifyContent: "center", 
              flexDirection: "row" }}>
            <Image style={stylesPage.styleImage} 
                  resizeMode="contain" 
                  source={require("./images/SIFO.png")} />
          </View>
          <View>
            <Text style={stylesPage.styleLabelForm}>Usuario:</Text>
            <TextInput style={stylesPage.styleInPut}/>
            <Text style={stylesPage.styleLabelForm}>Contraseña:</Text>
            <TextInput style={stylesPage.styleInPut}/>
          </View>
        </View>
      </ScrollView>
    </>
  )
}

const stylesPage=StyleSheet.create({
  styleLabelForm:{
    marginVertical: 10
  },
  styleInPut:{
    borderColor: "#343a40",
    borderStyle: "solid",
    borderWidth: 0.2
  },
  styleImage:{
    width:300,
    height:300
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