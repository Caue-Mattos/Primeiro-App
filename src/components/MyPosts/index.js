import { StyleSheet, Image, View, TouchableOpacity, Text} from 'react-native';
import { MaterialIcons, MaterialCommunityIcons  } from '@expo/vector-icons';
export default function MyPosts({image}){
    return(
        <View>
            <View style={styles.icons}>
                <TouchableOpacity >
                    <MaterialIcons name="grid-on" size={34} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="movie-open-play-outline" size={34} color="#aaa" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="account-outline" size={34} color="#aaa" />
                </TouchableOpacity>
            </View>
            <View style={styles.borda}></View>
            <View style={styles.posts}>
                <Image style={styles.imagens} source={image}/>
                <Image style={styles.imagens} source={image}/>
                <Image style={styles.imagens} source={image}/>
                <Image style={styles.imagens} source={image}/>
                <Image style={styles.imagens} source={image}/>
                <Image style={styles.imagens} source={image}/>
                <Image style={styles.imagens} source={image}/>
                <Image style={styles.imagens} source={image}/>
                <Image style={styles.imagens} source={image}/>
            </View>            
       </View>
    );
}

const styles = StyleSheet.create({
    icons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 50,
        marginVertical: 20,
        
    },
    borda: {
        borderBottomWidth: 1,
        marginVertical: 5,
    },
    imagens: {
        width: 130,
        height: 130,
    },
    posts: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 5,
    },

  });