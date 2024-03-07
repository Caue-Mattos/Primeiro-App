import { StyleSheet, View, Image, ScrollView } from 'react-native';
import Pessoa from "../../assets/pessoa.webp";
import Pessoa2 from "../../assets/pessoa2.webp";
import Story from '../Story';

export default function Stories() {
  return (
    <View>
    <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{gap: 8}} horizontal styles={styles.stories}>
      <Story image={Pessoa}/>
      <Story image={Pessoa2}/>
      <Story image={Pessoa}/>
      <Story image={Pessoa2}/>
      <Story image={Pessoa}/>
      <Story image={Pessoa2}/>
    </ScrollView>
  </View>
  );
}

const styles = StyleSheet.create({
  stories: {
    flexDirection: "row", gap: 16,
  },
});