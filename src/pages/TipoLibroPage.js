import React, {useState, useEffect} from "react";
import { View, StyleSheet, Text, FlatList, TextInput, TouchableHighlight, Modal, Pressable, Image, Alert } from "react-native";
import Titulo from "../Component/Titulo";
import Boton from "../Component/Boton";
import FlatListCabecera from "../Component/FlatListCabecera";
import Input from "../Component/Input";

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
    const [nombreTipoLibro, setnombreTipoLibro] = useState("");
    const [descripcionTipoLibro, setdescripcionTipoLibro] = useState("");

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
        setnombreTipoLibro(obj.NOMBRETIPOLIBRO);
        setdescripcionTipoLibro(obj.DESCRIPCION);
    }

    const Nuevo=()=>{
        setvisibleModal(true);
        settituloPopup("Agregar Tipo Libro");
        Limpiar();
    }

    const Limpiar=()=>{
        setnombreTipoLibro("");
        setdescripcionTipoLibro("");
    }

    const Eliminar=(obj)=>{
        Alert.alert("Confirmacion", "Desea eliminar el tipo libro " + obj.NOMBRETIPOLIBRO, [{text: "Si"}, {text: "No"}])
    }

    return(
        <View>
            <Modal visible={visibleModal}>
                <View style={{margin: 10}}>
                    <View style={{flexDirection: "row"}}>
                        <Titulo title={tituloPopup} flex={1}/>
                        <View>
                            <Text style={{fontSize: 24, fontWeight: "bold", textAlign: "right", color: "red", marginLeft: 10}} onPress={()=>setvisibleModal(false)}>X</Text>
                        </View>
                    </View>
                    <Text>Nombre tipo libro:</Text>
                    <Input value={nombreTipoLibro} onChangeText={(value)=>setnombreTipoLibro(value)} placeholder="Ingrese nombre tipo libro..." />
                    <Text>Descripcion tipo libro:</Text>
                    <Input value={descripcionTipoLibro} onChangeText={(value)=>setdescripcionTipoLibro(value)} placeholder="Ingrese descripcion tipo libro..." />
                    <View style={{flexDirection: "row", marginTop: 10, justifyContent: "center"}}>
                        <Boton title="Guardar" backgroundColor="#146c43" />
                        <Text style={{marginRight: 5}}></Text>
                        <Boton title="Cancelar" onPress={()=>setvisibleModal(false)} backgroundColor="#dc3545" />
                    </View>
                </View>
            </Modal>
            <Titulo title="Tipo Libro"/>
            <View style={{margin: 10}}>
                <Boton title="Nuevo" onPress={()=>Nuevo()} backgroundColor="#0b5ed7" marginBottom={10} />
                <View style={{flexDirection: "row"}}>
                    <Input placeholder="Ingrese nombre" flex={1} onChangeText={value => setnombreBusqueda(value)} value={nombreBusqueda} />
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
                                    <Pressable onPress={()=>recuperar(item)}>
                                        <Image style={{marginTop: 2}} source={require("../../iconos/editar.png")} />
                                    </Pressable>
                                    <Pressable onPress={()=>Eliminar(item)}>
                                        <Image source={require("../../iconos/eliminar.png")} />
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