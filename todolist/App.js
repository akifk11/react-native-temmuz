import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React,{useState} from 'react';
import ItemList from "./ItemList";

export default function App() {
  const[todo,setTodo]=useState("")
  const[todos,setTodos]=useState([])
  const handleSubmit = ()=>{
    todos.push(todo);
    setTodo("");
  }
  return (
    <View >
      <View style={styles.title}>
        <Text style={styles.title_text} >to-do aplication</Text>
      </View>
      <View style={{backgroundColor:'#ccc',padding:10,flexDirection:'row'} }>
      <TextInput style={styles.input_style} value={todo} onChange={(e)=>{setTodo(e.target.value)}}/>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.title_text} onPress={()=>handleSubmit()}>Ekle</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.todo_view}>
        {todos.map((yapilacak,index)=>{
          return(
            <ItemList todo={yapilacak}/>
          )
        })}
      </View>
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
  title: {
    marginTop:20,
    backgroundColor:'blue',
    flexDirection:"row" ,
    justifyContent:"center",
   
  },
  title_text:{
    color:"white",
    textAlign:"center",
    fontSize:24,
    fontWeight:'700',
    
  },
  input_style:{
    backgroundColor:'white',
    borderRadius:5,
    flex:1
  },
  button:{
    backgroundColor:'blue',
    borderRadius:5,
    marginLeft:10,
  },
  todo_view:{
    backgroundColor:'yellow',
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center"
  },
  todo_text:{
    fontSize:32,
    fontWeight:"700",
    color:'white'
  }
  
});
