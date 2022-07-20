import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        padding:10,
        flexDirection:"row",
    },
    image:{
        width:100,
        height:100,
        borderRadius:50,
    },
    inner_html:{
        padding:10,
        flex:1,
        justifyContent:"center"
    },
    title:{
        fontSize:28,
        fontWeight:"bold",
    },
    info_container:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
    },
    artist:{
        marginRight:5,
    },
    year:{
        color:"gray",
        fontWeight:"bold",
        fontSize:12,
    },
    soldout_container:{
        borderWidth:1,
        borderColor:"red",
        padding:5,
        borderRadius:10,
        justifyContent:"center",
    },
    soldout_title:{
       
        color:"red",
        fontWeight:"500",
    },
    content_container:{
        flex:1,
        flexDirection:"row",

    }
})

export default styles