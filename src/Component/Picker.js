import React from "react";
import { Text } from "react-native";
import { Select } from "native-base";

const Picker=({data, value, onChangeText, propiedadID, propiedadMostrar, text})=>{
    return(
        <>
            {
                (text=="") ? null : <Text style={{marginVertical: 10}}>{text}</Text>
            }
            
            <Select
                selectedValue={value} 
                onValueChange={onChangeText} >
                {
                    data.map((obj)=>(
                        <Select.Item 
                            label={obj[propiedadMostrar]} 
                            value={obj[propiedadID]} 
                            key={obj[propiedadID]} />
                    ))
                }
            </Select>
        </>
    )
}

export default Picker;