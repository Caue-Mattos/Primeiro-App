import { StyleSheet, View} from 'react-native';
import InfoProfile from '../components/InfoProfile';
import MyPosts from '../components/MyPosts';
import PessoaProfile from "../assets/pessoa.webp";
import Post from "../assets/Post.jpg";

export default function Profile() {
  return (
    <View style={styles.container}>
      <InfoProfile 
      image={PessoaProfile}
      publi={2}
      followers={200}
      following={200}
      descricao={"Matheus Yokoo"}
      />
      <MyPosts image={Post}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 35,
    padding: 5,
    borderRadius: 5,
  },
});
