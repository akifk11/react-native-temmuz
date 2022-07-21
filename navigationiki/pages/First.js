import React from "react";
import { SafeAreaView, Text, Button } from "react-native";

const First = (props)=>{
    const navigateToPage = ()=>{
        props.navigation.navigate("SecondScreen")
    }

    return(
        <SafeAreaView>
            <Text>First component</Text>
            <Button title="Go to secondpage" onPress={navigateToPage}  />
        </SafeAreaView>
    )
}
export default First;