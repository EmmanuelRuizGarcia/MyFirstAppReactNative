import React, {useState, useEffect} from "react";
import { View, StyleSheet, Text, FlatList, TextInput, TouchableHighlight, Modal, Pressable, Image } from "react-native";
import Titulo from "../Component/Titulo";
import Boton from "../Component/Boton";
import FlatListCabecera from "../Component/FlatListCabecera";

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
    const [tituloPopup, settituloPopup] = useState("");

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

    const recuperar=(obj)=>{
        setvisibleModal(true);
        settituloPopup("Editar Tipo Libro");
    }

    const Nuevo=()=>{
        setvisibleModal(true);
        settituloPopup("Agregar Tipo Libro");
    }

    return(
        <View>
            <Modal visible={visibleModal}>
                <View style={{margin: 10, flexDirection: "row"}}>
                    <Titulo title={tituloPopup} flex={1}/>
                    <View>
                        <Text 
                            style={{fontSize: 24, fontWeight: "bold", textAlign: "right", color: "red", marginLeft: 10}} 
                            onPress={()=>setvisibleModal(false)}>
                                X
                        </Text>
                    </View>
                </View>
            </Modal>
            <Titulo title="Tipo Libro"/>
            <View style={{margin: 10}}>
                <Boton title="Nuevo" onPress={()=>Nuevo()} backgroundColor="#0b5ed7" marginBottom={10} />
                <View style={{flexDirection: "row"}}>
                    <TextInput placeholder="Ingrese Nombre..." style={{borderWidth:0.2, borderColor: "#343a40", flex: 1}} onChangeText={(value)=>{setnombreBusqueda(value)}} value={nombreBusqueda} />
                    <Boton title="Buscar" onPress={Buscar} backgroundColor="#198754" />
                </View>
                <FlatListCabecera  cabeceras={["Nombre","Descripcion"]} />
                <FlatList 
                    keyExtractor={item => item.IIDTIPOLIBRO}
                    data={filtradoTipoLibro}
                    renderItem={
                        ({item})=>(
                            <View style={stylesPage.styleContainer}>
                                <Text style={{width: "30%"}}>{item.NOMBRETIPOLIBRO}</Text>
                                <Text style={{width: "50%"}}>{item.DESCRIPCION}</Text>
                                <View style={{flexDirection:"row", width: "20%"}}>
                                    <Image source={require("../../iconos/eliminar.png")} />
                                    <Pressable onPress={()=>recuperar(item)}>
                                        <Image style={{marginTop: 2}} source={require("../../iconos/editar.png")} />
                                    </Pressable>
                                </View>
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
    }
  })

export default TipoLibroPage;