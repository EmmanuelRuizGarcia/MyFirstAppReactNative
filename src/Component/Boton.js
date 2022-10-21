import React from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";

const Boton=({onPress, title, backgroundColor})=>{
    return(
        <TouchableHighlight style={[stylesPage.styleButton,{backgroundColor:backgroundColor}]} onPress={onPress}>
            <Text style={{color: "white"}}>{title}</Text>
        </TouchableHighlight>
    )
}

const stylesPage = StyleSheet.create({
    styleButton:{
        backgroundColor: "#0b5ed7",
        width: "25%",
        padding: 10,
        //marginBottom : 10,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default Boton;