import React from "react";
import { FlatList, View, Text, Pressable, Image, StyleSheet } from "react-native";

const FlatListView=({data, propiedadID, propiedadColumn1, propiedadColumn2, onPressRecuperar, onPressEliminar, anchos=[30, 50, 20]})=>{
    return(
        <FlatList 
            keyExtractor={item => item[propiedadID]}
            data={data}
            renderItem={
                ({item})=>(
                    <View style={stylesPage.styleContainer}>
                        <Text style={{width: anchos[0]+"%"}}>{item[propiedadColumn1]}</Text>
                        <Text style={{width: anchos[1]+"%"}}>{item[propiedadColumn2]}</Text>
                        <View style={{flexDirection:"row", width: anchos[2]+"%"}}>
                            <Pressable onPress={()=>onPressRecuperar(item)}>
                                <Image style={{marginTop: 2}} source={require("../../iconos/editar.png")} />
                            </Pressable>
                            <Pressable onPress={()=>onPressEliminar(item)}>
                                <Image source={require("../../iconos/eliminar.png")} />
                            </Pressable>
                        </View>
                    </View>
                )
            }
        />
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

export default FlatListView;