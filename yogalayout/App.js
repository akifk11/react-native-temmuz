import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
 <SafeAreaView style={styles.container}>
  <View style={styles.box1}></View>
  <View style={styles.box2}></View>
  <View style={styles.box3}></View>
  <View style={styles.box4}></View>
 </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"row",
    backgroundColor:"yellow",
    justifyContent:"space-around",
    alignItems:"center"
  },

  box1: {
   backgroundColor:"red",
   width:75,
   height:75,
  },
  box2: {
   backgroundColor:"cyan",
   width:75,
   height:75,
  },
  box3: {
   backgroundColor:"blue",
   width:75,
   height:75,
  },
  box4: {
   backgroundColor:"orange",
   width:75,
   height:75,
  },
  
});
