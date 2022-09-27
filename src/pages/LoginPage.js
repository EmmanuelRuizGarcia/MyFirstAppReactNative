import React, {useState} from "react";
import { Text, StyleSheet, Image, View, TextInput, ScrollView, Button, Alert } from "react-native";

const LoginPage=()=>{
    const [usuario, setUsuario] = useState("Ingresa tu usuario.")
  const [contra, setContra] = useState("Password")

  const ingresarDatos=()=>{
    Alert.alert("Aviso del Sistema", "Dio Click En Ingresar El Usuario: " + usuario + " Contraseña: " + contra, [{text:"Aceptar"}]);
  }

  const registrarIngreso=()=>{
    Alert.alert("Aviso del Sistema", 
                "Trabajando en el resgistro", 
                [
                  {
                    text:"Aceptar",
                    onPress:()=>{Alert.alert("Aviso", "Se dio click en el boton Aceptar")}
                  },
                  {
                    text:"Cancelar",
                    onPress: limpiar
                  }
                ]);
  }

  const limpiar=()=>{
    setUsuario("");
    setContra("");
  }

  return(
    <ScrollView>
        <View style={{margin: 10}}>
          <View style={{ marginVertical: 30, justifyContent: "center", flexDirection: "row" }}>
            <Image style={stylesPage.styleImage} resizeMode="contain" source={require("../../images/SIFO.png")} />
          </View>
          <View>
            <Text style={stylesPage.styleLabelForm}>Usuario:</Text>
            <TextInput style={stylesPage.styleInPut} onChangeText={(value)=>setUsuario(value)} value={usuario} keyboardType="default"/>
            <Text style={stylesPage.styleLabelForm}>Contraseña:</Text>
            <TextInput style={stylesPage.styleInPut} onChangeText={(value)=>setContra(value)} value={contra} secureTextEntry={true} keyboardType="default"/>
            <View style={{flexDirection:"row", justifyContent:"center", marginTop:20}}>
              <Button title="Ingresar" onPress={ingresarDatos} />
              <Text style={stylesPage.styleButton}></Text>
              <Button title="Registrar" onPress={registrarIngreso} />
            </View>
          </View>
        </View>
    </ScrollView>
  )
}

const stylesPage=StyleSheet.create({
    styleButton:{
      marginRight: 10
    },
    styleLabelForm:{
      marginVertical: 10
    },
    styleInPut:{
      borderColor: "#343a40",
      borderStyle: "solid",
      borderBottomWidth: 0.2,
      marginBottom: 10
    },
    styleImage:{
      width:300,
      height:300
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

export default LoginPage;