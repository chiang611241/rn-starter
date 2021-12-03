import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const colors = ["red", "blue", "green"];
const COLOR_CHANGE = 10;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    if (color + change > 255 || color + change < 0) return;

    switch (color) {
      case "red":
        setRed(red + COLOR_CHANGE);
        break;
      case "green":
        setGreen(green + COLOR_CHANGE);
        break;
      case "blue":
        setBlue(blue + COLOR_CHANGE);
        break;
    }
  };

  return (
    <View>
      <Text>Square Screen</Text>
      {colors.map((color) => (
        <ColorCounter
          key={`color-${color}`}
          onIncrease={() => setColor(color, COLOR_CHANGE)}
          onDecrease={() => setColor(color, COLOR_CHANGE * -1)}
          color={color}
        />
      ))}
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
