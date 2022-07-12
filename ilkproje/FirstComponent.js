import React from "react";
import { Text,View } from "react-native";

const FirstComponent = ({name})=>{
    return(
        <View>
            <Text>ilk FirstComponent {name}</Text>
        </View>
    )
}

export default FirstComponent;