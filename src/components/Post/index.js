import { StyleSheet, Image, View, TouchableOpacity, Text} from 'react-native';
import {  Feather, AntDesign, Entypo   } from '@expo/vector-icons';
export default function Post({profileName, profileImage, postImage, description}){
    return(
        <View style={styles.container}>
            <View style={styles.headerPost}>
                <View style={styles.headerPostOne}>
                    <TouchableOpacity>
                        <Image source={profileImage} style={styles.imagem}/>
                    </TouchableOpacity>
                    <Text>{profileName}</Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <Feather name="more-vertical" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Image source={postImage}  style={styles.postImage}/>
            </View>
            <View>
                <View style={styles.icons}>
                    <View style={styles.iconsOne}>
                        <TouchableOpacity>
                            <AntDesign name="hearto" size={32} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Feather name="message-circle" size={32} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Entypo name="paper-plane" size={32} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View>  
                        <TouchableOpacity>
                            <Feather name="bookmark" size={32} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </View>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    imagem: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    headerPost: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerPostOne: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    postImage: {
        width: "100%",
        height: 400,
        marginVertical: 10,
    },
    icons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    iconsOne: {
        display: "flex",
        flexDirection: "row",
        gap: 8,
    },
    description: {
        marginTop: 5,
        textAlign: "justify",
    },
  });