import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    flexDirection: 'row', // column, row
    justifyContent: 'space-between' // flex-start, flex-end, center, space-between, space-around
  },
  textOneStyle: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 4
  },
  textTwoStyle: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 4
  },
  textThreeStyle: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 2
  },
});

export default BoxScreen;
