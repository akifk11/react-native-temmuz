import { View, Text, Image } from "react-native";
import styles from "./Card.style"

const Card = ()=>{
return(
    <View style={styles.container}>
        <Image style={styles.image}/>
        <View style={styles.inner_container} >
            <Text style={styles.title}></Text>
            <Text style={styles.price}></Text>
            <Text style={styles.stock}></Text> 
        </View>
    </View>

)
}