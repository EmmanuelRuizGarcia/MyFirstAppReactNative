import React, {useState, useEffect} from "react";
import { View } from "react-native";
import FlatListView from "../Component/FlatListView";
import Input from "../Component/Input";
import Titulo from "../Component/Titulo";

const AutorPage=()=>{
    const [listaautor, setlistaautor] = useState(
        [
            {IIDAUTOR:1,NOMBRECOMPLETO:"Jose Luis Borges",NOMBREPAIS:"Argentina"},
            {IIDAUTOR:2,NOMBRECOMPLETO:"Gabriel Garcia Marquez",NOMBREPAIS:"Colombia"},
            {IIDAUTOR:3,NOMBRECOMPLETO:"Miguel de Servantes Saavedra",NOMBREPAIS:"España"},
            {IIDAUTOR:4,NOMBRECOMPLETO:"Mario Vargas Llosa",NOMBREPAIS:"Peru"},
            {IIDAUTOR:5,NOMBRECOMPLETO:"Cristina Rivera Garza",NOMBREPAIS:"Mexico"}
        ]
    )
    const [filtroautor, setfiltroautor] = useState([])
    const [nombreBusqueda, setnombreBusqueda] = useState("")

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

    return(
        <View>
            <Titulo title="Autor" />
            <View style={{margin: 10}}>
                <Input placeholder="Ingrese nombre autor..." value={nombreBusqueda} onChangeText={(value)=>setnombreBusqueda(value)} />
                <FlatListView 
                    data={filtroautor}
                    propiedadID="IIDAUTOR"
                    propiedadColumn1="NOMBRECOMPLETO"
                    propiedadColumn2="NOMBREPAIS"
                    anchos={[55, 25, 20]}/>
            </View>
        </View>
    )
}

export default AutorPage;