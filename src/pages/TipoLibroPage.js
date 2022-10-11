import React, {useState} from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

const TipoLibroPage=()=>{
    const[listatipolibro,setlistatipolibro] = useState([
        { IIDTIPOLIBRO:1, NOMBRETIPOLIBRO:"Cuento", DESCRIPCION:"Es una historia corta con pocos personajes" },
        { IIDTIPOLIBRO:2, NOMBRETIPOLIBRO:"Terror", DESCRIPCION:"Historia de mucho miedo" },
        { IIDTIPOLIBRO:3, NOMBRETIPOLIBRO:"Suspenso", DESCRIPCION:"Nos tiene con el corazón en la mano" },
        { IIDTIPOLIBRO:4, NOMBRETIPOLIBRO:"Ficcion", DESCRIPCION:"Es irreal" }
    ])

    return(
        <View>
            <Text style={stylesPage.styleTitle}>Tipo Libro</Text>
            <View style={{margin: 10}}>
                <View style={stylesPage.styleContainer}>
                    <Text style={{width: "30%", fontWeight: "bold"}}>Nombre</Text>
                    <Text style={{width: "50%", fontWeight: "bold"}}>Descripcion</Text>
                </View>
                <FlatList 
                    keyExtractor={item => item.IIDTIPOLIBRO}
                    data={listatipolibro}
                    renderItem={
                        ({item})=>(
                            <View style={stylesPage.styleContainer}>
                                <Text style={{width: "30%"}}>{item.NOMBRETIPOLIBRO}</Text>
                                <Text style={{width: "50%"}}>{item.DESCRIPCION}</Text>
                            </View>
                        )
                    }
                />
            </View>
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
    },
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