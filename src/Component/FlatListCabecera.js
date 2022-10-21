import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FlatListCabecera=({cabeceras})=>{
    return(
     <View style={stylesPage.styleContainer}>
        <Text style={{width: '30%', fontWeight: 'bold'}}>{cabeceras[0]}</Text>
        <Text style={{width: '50%', fontWeight: 'bold'}}>{cabeceras[1]}</Text>
    </View>
    )
 }

const stylesPage=StyleSheet.create({
    styleContainer:{
        flexDirection: "row",
        paddingBottom: 10,
        borderColor: "#343a40",
        borderStyle: "solid",
        borderBottomWidth: 0.4,
        marginVertical: 10
    }
  })

export default FlatListCabecera;