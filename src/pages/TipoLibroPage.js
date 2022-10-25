import React, {useState, useEffect} from "react";
import { View, StyleSheet, Text, FlatList, TextInput, TouchableHighlight, Modal, Pressable, Image, Alert } from "react-native";
import Titulo from "../Component/Titulo";
import Boton from "../Component/Boton";
import FlatListCabecera from "../Component/FlatListCabecera";
import Input from "../Component/Input";
import FlatListView from "../Component/FlatListView";
import ModalPopup from "../Component/ModalPopup";

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

    const Cerrar=()=>{
        setvisibleModal(false);
    }
    
    const Guardar=()=>{

    }

    const eliminar=(obj)=>{
        Alert.alert("Confirmacion", "Desea eliminar el tipo libro " + obj.NOMBRETIPOLIBRO, [{text: "Si"}, {text: "No"}])
    }

    return(
        <View>
            <ModalPopup 
                visible={visibleModal}
                title={tituloPopup}
                onPressCerrar={Cerrar}
                onPressGuardar={Guardar} >
                <Text>Nombre tipo libro:</Text>
                <Input 
                    value={nombreTipoLibro} 
                    onChangeText={(value)=>setnombreTipoLibro(value)} 
                    placeholder="Ingrese nombre tipo libro..." />
                <Text>Descripcion tipo libro:</Text>
                <Input 
                    value={descripcionTipoLibro} 
                    onChangeText={(value)=>setdescripcionTipoLibro(value)} 
                    placeholder="Ingrese descripcion tipo libro..." />
            </ModalPopup>
            <Titulo title="Tipo Libro"/>
            <View style={{margin: 10}}>
                <Boton 
                    title="Nuevo" 
                    onPress={()=>Nuevo()} 
                    backgroundColor="#0b5ed7" 
                    marginBottom={10} />
                
                <View style={{flexDirection: "row"}}>
                    <Input 
                        placeholder="Ingrese nombre" 
                        flex={1} 
                        onChangeText={value => setnombreBusqueda(value)} 
                        value={nombreBusqueda} />
                    
                    <Boton 
                        title="Buscar" 
                        onPress={Buscar} 
                        backgroundColor="#198754" />
                </View>
                
                <FlatListCabecera  cabeceras={["Nombre","Descripcion"]} />
                
                <FlatListView 
                    data={filtradoTipoLibro} 
                    propiedadID="IIDTIPOLIBRO" 
                    propiedadColumn1="NOMBRETIPOLIBRO" 
                    propiedadColumn2="DESCRIPCION" 
                    onPressRecuperar={recuperar} 
                    onPressEliminar={eliminar} />
            </View>
        </View>
    )
}

export default TipoLibroPage;