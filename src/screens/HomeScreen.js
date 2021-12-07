import React from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go To Components Demo"
      />
      <Button
        title="Go To List Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Go To Image Demo"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="Go To Count Demo"
        onPress={() => navigation.navigate('Count')}
      />
      <Button
        title="Go To Color Demo"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title="Go To Square Demo"
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title="Go To Text Demo"
        onPress={() => navigation.navigate('Text')}
      />
      <Button
        title="Go To Box Demo"
        onPress={() => navigation.navigate('Box')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
