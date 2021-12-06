import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const colors = ["red", "blue", "green"];
const COLOR_CHANGE = 10;

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case "red":
      return state.red + action.amount > 255 || state.red + action.amount < 0
      ? state
      :  {
          ...state,
          red: state.red + action.amount,
        };
    case "green":
      return state.green + action.amount > 255 || state.green + action.amount < 0
      ? state
      : {
          ...state,
          green: state.green + action.amount,
        };
    case "blue":
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
      ? state
      : {
          ...state,
          blue: state.blue + action.amount,
        };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <Text>Square Screen</Text>
      {colors.map((color) => (
        <ColorCounter
          key={`color-${color}`}
          onIncrease={() => dispatch({ colorToChange: `${color}`, amount: COLOR_CHANGE })}
          onDecrease={() => dispatch({ colorToChange: `${color}`, amount: -1 * COLOR_CHANGE })}
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
