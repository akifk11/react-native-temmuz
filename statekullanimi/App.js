import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';

export default function App() {

  const[counter, setCounter]= useState(0)

  const increaseCounter = ()=>{
    setCounter(counter+1)
  }
  const decreaseCounter = ()=>{
    setCounter(counter-1)
  }
  return (
    <View style={styles.container}>
      <Text style={{fontSize:40}}>{counter}</Text>
      <Button title='increase counter' onPress={increaseCounter} />
      <Button title='decrease counter' onPress={decreaseCounter} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  
    alignItems: 'center',
    justifyContent: 'center',
  },
});
