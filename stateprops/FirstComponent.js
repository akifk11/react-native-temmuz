import React from 'react'
import { View,Text,TouchableOpacity } from 'react-native'

const FirstComponent = ({name,yil,changeState}) => {
  return (
    <View>
        <Text>{name} {yil}</Text>
        <TouchableOpacity onPress={()=>changeState()}>
            <Text>değiştir</Text>
        </TouchableOpacity>
    </View>
  )
}

export default FirstComponent