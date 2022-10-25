import React, {useState, useEffect} from "react";
import { View } from "react-native";
import { Select } from "native-base";
import FlatListView from "../Component/FlatListView";
import Input from "../Component/Input";
import ModalPopup from "../Component/ModalPopup";
import Titulo from "../Component/Titulo";
import Boton from "../Component/Boton";

const AutorPage=()=>{
    const [listaautor, setlistaautor] = useState(
        [
            {IIDAUTOR:1,NOMBRECOMPLETO:"Jose Luis Borges",NOMBREPAIS:"Argentina"},
            {IIDAUTOR:2,NOMBRECOMPLETO:"Gabriel Garcia Marquez",NOMBREPAIS:"Colombia"},
            {IIDAUTOR:3,NOMBRECOMPLETO:"Miguel de Servantes Saavedra",NOMBREPAIS:"España"},
            {IIDAUTOR:4,NOMBRECOMPLETO:"Mario Vargas Llosa",NOMBREPAIS:"Peru"},
            {IIDAUTOR:5,NOMBRECOMPLETO:"Cristina Rivera Garza",NOMBREPAIS:"Mexico"}
        ]
    );
    const [listaPais, setlistaPais] = useState(
        [
            {IIDPAIS:1,NOMBREPAIS:"Argentina"},
            {IIDPAIS:2,NOMBREPAIS:"Colombia"},
            {IIDPAIS:3,NOMBREPAIS:"España"},
            {IIDPAIS:4,NOMBREPAIS:"Peru"},
            {IIDPAIS:5,NOMBREPAIS:"Mexico"}
        ]
    );
    const [filtroautor, setfiltroautor] = useState([]);
    const [nombreBusqueda, setnombreBusqueda] = useState("");
    const [visibleModal, setvisibleModal] = useState(false);
    const [tituloPopup, settituloPopup] = useState("");
    const [iidPais, setiidPais] = useState("");

    useEffect(()=>{
        setfiltroautor(listaautor)
    },[])

    useEffect(()=>{
        if(nombreBusqueda==""){
            setfiltroautor(listaautor);
        }
        else{
            const filtro = listaautor.filter(p=>p.NOMBRECOMPLETO.includes(nombreBusqueda));
            setfiltroautor(filtro);
        }
    },[nombreBusqueda])

    const Cerrar=()=>{
        setvisibleModal(false);
    }

    const recuperar=(obj)=>{
        settituloPopup("Editar Autor");
        setvisibleModal(true);
    }

    const Guardar=()=>{

    }

    const Nuevo=()=>{
        setvisibleModal(true);
        settituloPopup("Agregar Autor");
    }

    const Limpiar=()=>{
        
    }

    return(
        <View>
            <ModalPopup 
                title={tituloPopup}
                visible={visibleModal}
                onPressCerrar={Cerrar} >
                <Input text="Nombre" />
                <Input text="Apellido Paterno" />
                <Input text="Apellido Materno" />
                <Select
                    selectedValue={iidPais} 
                    onValueChange={(value)=>setiidPais(value)} >
                    {
                        listaPais.map((obj)=>(
                            <Select.Item 
                                label={obj.NOMBREPAIS} 
                                value={obj.IIDPAIS} 
                                key={obj.IIDPAIS} />
                        ))
                    }
                </Select>
            </ModalPopup>
            <Titulo title="Autor" />
            <View style={{margin: 10}}>
                <Boton 
                    title="Nuevo" 
                    onPress={()=>Nuevo()} 
                    backgroundColor="#0b5ed7" 
                    marginBottom={10} />

                <Input 
                    placeholder="Ingrese nombre autor..." 
                    value={nombreBusqueda} 
                    onChangeText={(value)=>setnombreBusqueda(value)} />
                
                <FlatListView 
                    data={filtroautor}
                    propiedadID="IIDAUTOR"
                    propiedadColumn1="NOMBRECOMPLETO"
                    propiedadColumn2="NOMBREPAIS"
                    anchos={[55, 25, 20]}
                    onPressRecuperar={recuperar} />
            </View>
        </View>
    )
}

export default AutorPage;