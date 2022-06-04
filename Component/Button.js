import { Button, View, StyleSheet } from "react-native";

export default function ButtonMenu({ text, event }) {
  return (
    <View style= {{flex: 1, width: 200, }}>
      <Button title={text} onPress={event}/>
    </View>
  );
}
