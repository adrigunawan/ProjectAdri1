import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { Text, ScrollView, View, StyleSheet, Image } from "react-native";
import * as React from "react";
export default function Gallery() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#3A4750" }}>
      <View style={styles.header}>
        <Text style={{ fontSize: 24, marginBottom: 20 }}>Gallery</Text>
      </View>
      <View style={{ marginVertical: 150, alignItems: "center", flexDirection: "row" }}>
        <Card style={styles.card}>
          <Card.Content style={{ alignItems: "center" }}>
            <Card.Cover source={require("../assets/alam.png")} style={{ width: 150, height: 100 }} />
            <Title style={{ fontSize: 18 }}>Beautifful Nature</Title>
            <Paragraph>Hello World</Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content style={{ alignItems: "center" }}>
            <Card.Cover source={require("../assets/alam.png")} style={{ width: 150, height: 100 }} />
            <Title style={{ fontSize: 18 }}>Beautifful Nature</Title>
            <Paragraph>Hello World</Paragraph>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    borderBottomEndRadius: 45,
    borderBottomStartRadius: 45,
    backgroundColor: "#EA9215",
    flexDirection: "column-reverse",
    alignItems: "center",
  },

  card: {
    height: 250,
    width: 180,
    marginHorizontal: 10,
    borderBottomEndRadius: 40,
    borderTopStartRadius: 40,
  },
});
