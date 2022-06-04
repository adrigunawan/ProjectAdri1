import { View, Text, StyleSheet, ScrollView, Image, Button } from "react-native";
import ButtonMenu from "../Component/Button";

export default function HomeScreen({ navigation }) {
  const gallery = () => navigation.navigate("Gallery");
  const profile = () => navigation.navigate("Profile");
  return (
    <ScrollView style={{ flex: 1, border: "1px solid", backgroundColor: "#3A4750" }}>
      <View style={styles.container}>
        <View style={styles.banner}>
          <Image source={require("../assets/saya.jpg")} style={styles.image} />
        </View>
        <View style={styles.banner}>
          <Text style={{ textAlign: "center", marginVertical: 20, fontSize: 18, fontWeight: "bold", color: "#EEEEEE" }}>
            Welcome to my portfolio
          </Text>
          {/* <Button title="Galerry" onPress={gallery}/>
          <Button title="Profile" onPress={profile}/> */}
          <ButtonMenu text="Profille" event={profile} />
          <ButtonMenu text="Gallery" event={gallery} />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EA9215",
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 250,
  },

  image: {
    width: 130,
    height: 130,
    borderRadius: 100,
  },

  banner: {
    height: 150,
    paddingHorizontal: 13,
    justifyContent: "center",
  },
});
