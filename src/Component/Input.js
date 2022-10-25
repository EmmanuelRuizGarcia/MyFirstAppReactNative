import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

const Input = ({placeholder, onChangeText, value, flex = 0, text=""}) => {
    return(
        <>
            {
                (text=="") ? null : <Text style={{marginVertical: 10}}>{text}</Text>
            }
            
            <TextInput 
                placeholder={placeholder} 
                onChangeText={onChangeText} 
                value={value} 
                style={[stylesPage.styleInput,{flex}]}  />
        </>
    )
}

const stylesPage = StyleSheet.create({
    styleInput:{
        borderWidth: 0.2,
        borderBottomColor: "#343a40"
    },
})

export default Input;