import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Tekan from "./Button";

export default function App() {
  return (
    <View style = {styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <Tekan />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
