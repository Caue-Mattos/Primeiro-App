import { StyleSheet, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import Header from '../components/Header';
import Stories from '../components/Stories';
import Post from '../components/Post';
import PessoaProfile from "../assets/pessoa.webp";
import postImage from "../assets/Post.jpg";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Header/>
      <Stories/>
      <View style={styles.borda}></View>
        <Post style={styles.post}
        profileName={"Fulano da Silva"}
        profileImage={PessoaProfile}
        postImage={postImage}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet euismod lorem, vel tristique nisl egestas nec. In rutrum nibh in quam suscipit mollis. In accumsan egestas tellus, id porttitor risus dictum non. "}/>
      <Post
        profileName={"Fulano da Silva"}
        profileImage={PessoaProfile}
        postImage={postImage}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet euismod lorem, vel tristique nisl egestas nec. In rutrum nibh in quam suscipit mollis. In accumsan egestas tellus, id porttitor risus dictum non. "}/>
      <Post
        profileName={"Fulano da Silva"}
        profileImage={PessoaProfile}
        postImage={postImage}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet euismod lorem, vel tristique nisl egestas nec. In rutrum nibh in quam suscipit mollis. In accumsan egestas tellus, id porttitor risus dictum non. "}/>
      </ScrollView>
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
  borda: {
    borderBottomWidth: 1,
    opacity: .5,
    marginVertical: 8,
},
post: {
  marginVertical: 10,
},
});
