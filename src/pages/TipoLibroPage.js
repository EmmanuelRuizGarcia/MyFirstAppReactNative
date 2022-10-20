import React, {useState, useEffect} from "react";
import { View, StyleSheet, Text, FlatList, TextInput, TouchableHighlight, Modal, Pressable } from "react-native";

const TipoLibroPage=()=>{
    const[listatipolibro,setlistatipolibro] = useState([
        { IIDTIPOLIBRO:1, NOMBRETIPOLIBRO:"Cuento", DESCRIPCION:"Es una historia corta con pocos personajes" },
        { IIDTIPOLIBRO:2, NOMBRETIPOLIBRO:"Terror", DESCRIPCION:"Historia de mucho miedo" },
        { IIDTIPOLIBRO:3, NOMBRETIPOLIBRO:"Suspenso", DESCRIPCION:"Nos tiene con el corazón en la mano" },
        { IIDTIPOLIBRO:4, NOMBRETIPOLIBRO:"Ficcion", DESCRIPCION:"Es irreal" }
    ])
    
    const [nombreBusqueda, setnombreBusqueda] = useState("");
    const [filtradoTipoLibro, setfiltradoTipoLibro] = useState([]);
    const [visibleModal, setvisibleModal] = useState(false);

    useEffect(()=>{
        setfiltradoTipoLibro(listatipolibro)
    }, [])

    const Buscar=()=>{
        if (nombreBusqueda != "") {
            const filtro = listatipolibro.filter(p => p.NOMBRETIPOLIBRO.includes(nombreBusqueda));
            setfiltradoTipoLibro(filtro);
        }
        else{
            setfiltradoTipoLibro(listatipolibro);
        }
    }

    return(
        <View>
            <Modal visible={visibleModal}>
                <View style={{margin: 10}}>
                    <Text 
                        style={{fontSize: 24, fontWeight: "bold", textAlign: "right", color: "red"}} 
                        onPress={()=>setvisibleModal(false)}>
                            X
                    </Text>
                </View>
            </Modal>
            <Text style={stylesPage.styleTitle}>Tipo Libro</Text>
            <View style={{margin: 10}}>
                <Pressable style={stylesPage.styleButtonAdd} onPress={()=>setvisibleModal(true)}>
                    <Text style={{color: "white"}}>Nuevo</Text>
                </Pressable>
                <View style={{flexDirection: "row"}}>
                    <TextInput placeholder="Ingrese Nombre..." style={{borderWidth:0.2, borderColor: "#343a40", flex: 1}} onChangeText={(value)=>{setnombreBusqueda(value)}} value={nombreBusqueda} />
                    <TouchableHighlight style={stylesPage.styleButton} onPress={Buscar}>
                        <Text style={{color: "white"}}>Buscar</Text>
                    </TouchableHighlight>
                </View>
                <View style={stylesPage.styleContainer}>
                    <Text style={{width: "30%", fontWeight: "bold"}}>Nombre</Text>
                    <Text style={{width: "50%", fontWeight: "bold"}}>Descripcion</Text>
                </View>
                <FlatList 
                    keyExtractor={item => item.IIDTIPOLIBRO}
                    data={filtradoTipoLibro}
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
    styleButtonAdd:{
        backgroundColor: "#0b5ed7",
        width: "25%",
        padding: 10,
        marginBottom : 10,
        alignItems: "center"
    },
    styleButton:{
        backgroundColor: "#198754",
        paddingHorizontal: 10,
        flexDirection: "column",
        justifyContent: "center"
    },
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