import React from "react";
import { View, StyleSheet, Text } from "react-native";

const TipoLibroPage=()=>{
    return(
        <View>
            <Text style={stylesPage.styleTitle}>Tipo Libro</Text>
        </View>
    )
}

const stylesPage=StyleSheet.create({
    styleTitle:{
      fontSize: 24,
      textAlign: "center",
      backgroundColor: "#343a40",
      color: "white",
      fontWeight: "bold",
      paddingVertical: 20
    }
  })

export default TipoLibroPage;