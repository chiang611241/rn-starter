import React from 'react';
import { Button, TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() =>　console.log('button')}
        title="Go To Components Demo"
      />
      <TouchableOpacity onPress={() => console.log('touchableOpacity')}>
        <Text>Go To List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
