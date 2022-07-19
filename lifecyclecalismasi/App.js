import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const[helloUpdate,setHelloUpdate]=useState(false)

  const updateHello=()=>{
    setHelloUpdate(!helloUpdate);
  }

  return (
    <View style={styles.container}>
      <Text> </Text>
      <Button title='up' onPress={updateHello}/>
      {helloUpdate && <Hello/>} 
      {/* burada kondisyonel bir şekilde ekrana basar */}
      </View>
  );
}
function Hello(){
  return(
    <View style={{backgroundColor:"aqua", padding:10}}>
      <Text>merhaba ben hello componemti</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
