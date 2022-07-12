import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FirstComponent from './FirstComponent';

export default function App() {
  const[name,setName]=useState("mehmet")
  return (
    <View style={styles.container}>
    <View style={{flex:1,flexDirection:"row",alignItems:"stretch"}}>
      <View style={{backgroundColor:"red",width:50,height:50}}></View>
      <View style={{backgroundColor:"yellow",width:50,height:50}}></View>
      <View style={{backgroundColor:"blue",width:50,height:50}}></View>
    </View>
    <FirstComponent name={"akif"}/>
    <Text>{name}</Text>
    <TouchableOpacity>
      <Text onPress={()=>setName("akif")}>değiştir</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
  textstyle:{
    
  }
});
