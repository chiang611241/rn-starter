import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View style={styles.container}>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} onPress={onIncrease} />
      <Button title={`Decrease ${color}`} onPress={onDecrease} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ColorCounter;
