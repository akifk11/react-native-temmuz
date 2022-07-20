import {View, Text, StyleSheet, Button} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import React from "react";

const NavigateToMovies = (props)=>{
    props.navigation.navigate('Movies');
}

const Home = (props)=>{
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Go to movies" onPress={()=>{NavigateToMovies(props)}}  />
      </View>
    )
}

export default Home;