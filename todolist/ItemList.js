import React from "react";
import { View,Text,StyleSheet } from "react-native";

const ItemList = ({todo})=>{
    return(
        <View><Text>{todo}</Text></View>
    )
}
export default ItemList;