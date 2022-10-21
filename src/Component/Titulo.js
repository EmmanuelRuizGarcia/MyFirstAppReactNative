import React from "react";
import { StyleSheet, Text } from "react-native";

const Titulo=({title, flex=0})=>{
    return(
        <Text style={[stylesPage.styleTitle,{flex}]}>{title}</Text>
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