import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.text_input}
      placeholder='patikada ara'/>
      <FlatList
      
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:"center",
  },
  text_input:{
    margin:10,
    width:"100%"
  }
});
