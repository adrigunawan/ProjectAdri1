import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import * as React from "react";
import React from "react";

export default function Home() {
  return (
    <NavigationContainer>
      <Text style={styles.text}>Home</Text>
    </NavigationContainer>
  );
}
