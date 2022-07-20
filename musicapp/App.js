import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import React, {useState} from 'react';
import music_data from "./music-data.json";
import Song from "./components/song/Song";
import SearchBar from './components/search/SearchBar';

export default function App() {
const[list,setList]=useState(music_data)
const renderSong = ({item})=><Song song={item} />
const renderSeperator = ()=><View style={styles.seperator}></View>
const onSearch = (text)=>{
  const filteredList= music_data.filter((song)=>{

    const searchedText = text.target.value?.toLowerCase();   
    const currentTitle = song.title?.toLowerCase();
    
    console.log(currentTitle);
    return currentTitle?.indexOf(searchedText) > -1;
  })
  setList(filteredList);
}
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={onSearch}/>
      <FlatList
      keyExtractor={(item=>item.id)}
      data={list}
      renderItem={renderSong}
      ItemSeparatorComponent={renderSeperator}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  seperator:{
    borderWidth:1,
    borderColor:"#d8d8d8",
  }
});
