import React, { useState }  from "react";
import { Button, FlatList, View, StyleSheet } from "react-native";

const ColorScreen = () => {
  const [color, setColor] = useState([]);
  return (
    <View>
      <Button
        title="Add a color"
        onPress={() => {
          setColor([...color, randomRgb()]);
        }}
      />
      <FlatList
        data={color}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
            return (
                <View style={{ height: 100, width: 100, backgroundColor: item }} />
            );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
