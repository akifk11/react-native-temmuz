import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import FirstComponent from './FirstComponent';

export default class App extends React.Component{
 constructor(){
  super();
  this.state ={
    name:'mehmet',
    yil:1944
  };
 }
 changeState = () => {
  this.setState(
  {
    name:"akif",
    yil:2000
  },()=>{
    alert("bilgiler güncellendi")
  }
)
}
 render(){
  const {name,yil} = this.state;
  return(
    
    <View>
      <FirstComponent name={name} yil={yil} changeState={this.changeState}/>
    </View>
  )
 }

}
