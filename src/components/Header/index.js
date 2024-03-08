import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Logo from "../../assets/instagram-logo.png";

export default function Header() {
  return (
    <View style={styles.header}>
      <StatusBar style="auto" />
      <Image source={Logo} style={{ height: 60, width: 200 }} />
      <View style={styles.menuCaminhos}>
        <TouchableOpacity>
          <Feather name="heart" size={36} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="message-circle" size={36} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuCaminhos: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});