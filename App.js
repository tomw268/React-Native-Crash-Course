import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  const handlePress = () => console.log('Text pressed');

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>First React Native APP!!!!</Text>
      <Image
        source={{
          width: 200,
          height: 300,
          uri: 'https://picsum.photos/200/300',
        }}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
