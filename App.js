import { StatusBar } from 'expo-status-bar';
import React from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  SafeAreaView,
} from 'react-native';

export default function App() {
  const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=30d0b1af';
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
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
