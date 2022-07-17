import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView, ScrollView, Image, Dimensions } from 'react-native';
import news_data from "./src/news_data.json"
import NewsCard from './src/NewsCard';
import news_banner_data from "./src/news_banner_data.json"

export default function App() {
const renderNews = ({item})=><NewsCard news={item}/>

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.header_Text}>News</Text>
        <FlatList
        ListHeaderComponent={()=>(
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {news_banner_data.map( bannerNews=> (<Image style={styles.banner_Image} source={{uri:bannerNews.imageUrl}}/>))
     
          }
             </ScrollView>)}
        keyExtractor={(item,index)=> item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
        />
 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  banner_Image:{
    height: Dimensions.get("window").height/5,
    width: Dimensions.get("window").width/2,
  },
  header_Text:{
    fontSize:50,
    fontWeight:"bold"
  }
});
