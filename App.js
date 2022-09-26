import React from "react";
import { Text, StyleSheet } from "react-native";

const App=()=>{
  return(
    <>
      <Text style={stylesPage.styleTitle}>Pagina Login</Text>
    </>
  )
}

const stylesPage=StyleSheet.create({
  styleTitle:{
    fontSize: 24,
    textAlign: "center",
    backgroundColor: "#343a40",
    color: "white",
    fontWeight: "bold",
    //paddingTop: 20,
    //paddingBottom: 20
    //marginTop: 20,
    paddingVertical: 20
  }
})

export default App;