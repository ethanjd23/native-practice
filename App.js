import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.outsideContainer}>
      <View style={styles.middleContainer}>
    <View style={styles.insideContainer}>
      <Text style={styles.textStyle}>#CrushingIt</Text>
      <StatusBar style="auto" />
    </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outsideContainer: {
    flex: 1,
    backgroundColor: "red",
    padding: 20,
  },
  middleContainer: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
  },
  insideContainer: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 40,
    fontFamily: "Marker Felt",
    backgroundColor: 'red',
  },
});
