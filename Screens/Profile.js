import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";

export default function Profile() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#354259" }}>
      <View style={styles.container}>
        <Image source={require("../assets/saya.jpg")} style={styles.image} />
      </View>
      <View style={{alignItems: "center" }}>
        <Text style={styles.title}> About</Text>
        <Text style={{ fontSize: 18, color: "white", textAlign: "center", marginBottom: 10 }}>
          Iam Adri Gunawan From Jakarta
        </Text>
        <Text style={{ fontSize: 18, color: "white", textAlign: "center" }}> Iam Learning:</Text>
        <View style={{flexDirection: "row"}}>
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png?w=360" }}
            style={{ width: 70, height: 70, marginTop: 20, marginRight: 10, }}
          />
          <Image
            source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" }}
            style={{ width: 70, height: 70, marginTop: 20, marginRight: 10, }}
          />
          <Image
            source={{ uri: "https://upkoding-static.is3.cloudhost.id/projects/images/1635124939-JavaScript-logo.png" }}
            style={{ width: 70, height: 70, marginTop: 20, marginRight: 10, borderRadius: 20}}
          />
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
    shadowColor: 250,
  },

  image: {
    height: 130,
    width: 130,
    borderRadius: 100,
  },

  title: {
    fontSize: 28,
    color: "white",
    textAlign: "center",
    marginVertical: 30,
    fontWeight: "bold",
  },
});
