import React, { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";

const CountScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button title="Increase" onPress={() => setCounter(counter + 1)} />
      <Button title="Decrease" onPress={() => setCounter(counter - 1)} />
      <Text>Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CountScreen;
