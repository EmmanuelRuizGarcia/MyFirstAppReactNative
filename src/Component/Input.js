import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = ({placeholder, onChangeText, value, flex = 0}) => {
    return(
        <TextInput placeholder={placeholder} onChangeText={onChangeText} value={value} style={[stylesPage.styleInput,{flex}]}  />
    )
}

const stylesPage = StyleSheet.create({
    styleInput:{
        borderWidth: 0.2,
        borderBottomColor: "#343a40"
    },
})

export default Input;