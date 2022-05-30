import { View, Text, Button, StyleSheet, Alert } from "react-native";
import React from "react";

export default function Tekan() {
  const handlerProfil = () => alert("Ini Profile");
  const handlerGallery = () => alert("Ini Gallery");
  return (
    <View style={styles.container}>
      <Button title="Profil" onPress={{ handlerProfil }}/>
      <Button title="Galerrry" onPress={{ handlerGallery }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
