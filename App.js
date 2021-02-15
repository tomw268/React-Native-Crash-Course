import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  const handlePress = () => console.log('Text pressed');
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>First React Native APP!!!!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'forestgreen',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
