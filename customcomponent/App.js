import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Card from './src/Card';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <Card title={"Abraham Lincoln"} text={"kaybedenler yalnızca vazgeçenlerdir"}/>
     <Card title={"Napoyon Bonopart"} text={"money money money"}/>
     <Card title={"Ceaser"} text={"veni vidi vici geldim gördüm yendim"}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#e0e0e0"
  },
});
