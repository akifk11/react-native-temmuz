import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Switch ,SafeAreaView, FlatList} from 'react-native';
import React,{useState} from 'react';

const data = [
  {id:0,cafename:"lale",isFavorite:true},
  {id:1,cafename:"gul",isFavorite:true},
  {id:2,cafename:"cicek",isFavorite:false},
  {id:3,cafename:"papatya",isFavorite:true},
  {id:4,cafename:"sumbul",isFavorite:false},
  {id:5,cafename:"menekse",isFavorite:true},
]


export default function App() {
  const[cafeList,setCafeList]=useState(data)
  const[showOnlyFavorites,setShowOnlyFavorites]=useState(false)

const onFavoriteChange = (isFavoriteSelect)=>{
  setShowOnlyFavorites(isFavoriteSelect)
  console.log(showOnlyFavorites)
  isFavoriteSelect ? setCafeList(cafeList.filter(cafe=>cafe.isFavorite)):setCafeList(data)
}

  return (
    <SafeAreaView>
      <View style={{margin:15}}>
        <Text>show only favorites</Text>
        <Switch value={showOnlyFavorites} onValueChange={onFavoriteChange}/>
      </View>
      
      <FlatList
      data={cafeList}
      renderItem={({item})=><Text style={{fontSize:25}}>{item.cafename}</Text>}
      />


    </SafeAreaView>
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
