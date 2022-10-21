import React from "react";
import { StyleSheet, Text } from "react-native";

const Titulo=({title})=>{
    return(
        <Text style={stylesPage.styleTitle}>{title}</Text>
    )
}

const stylesPage = StyleSheet.create({
    styleTitle:{
        fontSize: 24,
        textAlign: "center",
        backgroundColor: "#343a40",
        color: "white",
        fontWeight: "bold",
        paddingVertical: 20
    }
})

export default Titulo;