import {View, Text, StyleSheet, Button} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import React from "react";

const NavigateToHome = (props)=>{
    props.navigation.navigate('Home');
}

const Movies = (props)=>{
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Go to homepage" onPress={()=>{NavigateToHome(props)}}  />
      </View>
    )
}

export default Movies;