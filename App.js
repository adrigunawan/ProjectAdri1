import { View, Text } from "react-native";
import * as React from "react";
import Index from "./Router/Index";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <Index/>
    </NavigationContainer>
  );
}
