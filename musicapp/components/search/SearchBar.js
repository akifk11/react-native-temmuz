import { TextInput, View } from "react-native";
import styles from "./SearchBar.styles";

const SearchBar = (props)=>{
    
    return(
        <View style={styles.container}>
            <TextInput placeholder="search..." onChange={props.onSearch}/>
        </View>

    )
}

export default SearchBar