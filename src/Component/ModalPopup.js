import React from "react";
import { Modal, View, Text } from "react-native";
import Titulo from "./Titulo";
import Input from "./Input";
import Boton from "./Boton";

const ModalPopup=({visible, title, onPressCerrar, onPressGuardar, children})=>{
    return(
        <Modal visible={visible}>
            <View style={{margin: 10}}>
                <View style={{flexDirection: "row"}}>
                    <Titulo title={title} flex={1}/>
                    <View>
                        <Text 
                            style={{fontSize: 24, 
                                    fontWeight: "bold", 
                                    textAlign: "right", 
                                    color: "red", 
                                    marginLeft: 10}} 
                            onPress={onPressCerrar}>
                            X
                        </Text>
                    </View>
                </View>
                {children}
                <View style={{flexDirection: "row", marginTop: 10, justifyContent: "center"}}>
                    <Boton 
                        title="Guardar" 
                        backgroundColor="#146c43"
                        onPress={onPressGuardar} />
                    <Text style={{marginRight: 5}}></Text>
                    <Boton 
                        title="Cancelar" 
                        onPress={onPressCerrar} 
                        backgroundColor="#dc3545" />
                </View>
            </View>
        </Modal>
    )
}

export default ModalPopup;