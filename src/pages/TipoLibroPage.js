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
            <FlatList 
                keyExtractor={item=>item.IIDTIPOLIBRO}
                data={listatipolibro}
                renderItem={
                    (tipolibro)=>(
                          <View>
                              <Text>{tipolibro.item.NOMBRETIPOLIBRO}</Text>
                              <Text>{tipolibro.item.DESCRIPCION}</Text>
                          </View>
                    )
                }/>
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