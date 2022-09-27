import React from "react";
import { Text, StyleSheet, Image, View, TextInput, ScrollView, Button, Alert } from "react-native";

const App=()=>{
  const ingresarDatos=()=>{
    Alert.alert("Aviso del Sistema", "Trabajando en la funcionalidad de Ingresar");
  }
  return(
    <>
      <ScrollView>
        <View style={{margin: 10}}>
          <View style={{ marginVertical: 30, justifyContent: "center", flexDirection: "row" }}>
            <Image style={stylesPage.styleImage} resizeMode="contain" source={require("./images/SIFO.png")} />
          </View>
          <View>
            <Text style={stylesPage.styleLabelForm}>Usuario:</Text>
            <TextInput style={stylesPage.styleInPut} keyboardType="default"/>
            <Text style={stylesPage.styleLabelForm}>Contraseña:</Text>
            <TextInput style={stylesPage.styleInPut} secureTextEntry={true} keyboardType="default"/>
            <View style={{flexDirection:"row", justifyContent:"center", marginTop:20}}>
              <Button title="Ingresar" onPress={ingresarDatos} />
              <Text style={stylesPage.styleButton}></Text>
              <Button title="Cancelar" />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  )
}

const stylesPage=StyleSheet.create({
  styleButton:{
    marginRight: 10
  },
  styleLabelForm:{
    marginVertical: 10
  },
  styleInPut:{
    borderColor: "#343a40",
    borderStyle: "solid",
    borderBottomWidth: 0.2,
    marginBottom: 10
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