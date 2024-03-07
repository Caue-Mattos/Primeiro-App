import { StyleSheet, Image, View, TouchableOpacity, Text} from 'react-native';
export default function InfoProfile({image, publi, followers, following, descricao}){
    return(
        <View>
            <View style={styles.headerProfile}>
                <View>
                    <TouchableOpacity>
                        <Image style={styles.imagem} source={image}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.headerText}>
                    <View style={styles.headerTextDescri}>
                        <Text>{publi}</Text>
                        <Text>Publicações</Text>
                    </View>
                    <View style={styles.headerTextDescri}>
                        <Text>{followers}</Text>
                        <Text>Seguidores</Text>
                    </View>
                    <View style={styles.headerTextDescri}>
                        <Text>{following}</Text>
                        <Text>Seguindo</Text>
                    </View>
                </View>
            </View>
            <View style={styles.descricao}>
                <Text>{descricao}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    headerProfile: {
        marginVertical: 10,
        flexDirection: "row",
    },
    imagem: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    headerText: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
        gap: 30,
    },
    headerTextDescri: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    descricao:{
        marginVertical: 5,
        marginHorizontal: 5,
    }
  });
  