import React, {useState} from "react";
import { Text, StyleSheet, Image, View, TextInput, ScrollView, Button, Alert } from "react-native";
import {NativeBaseProvider, NAtiveBaseProvider} from "native-base";
import AutorPage from "./src/pages/AutorPage";
import LoginPage from "./src/pages/LoginPage";
import TipoLibroPage from "./src/pages/TipoLibroPage";

const App=()=>{
  return(
    <>
      <NativeBaseProvider>
        <AutorPage/>
      </NativeBaseProvider>
    </>
  );
};

export default App;