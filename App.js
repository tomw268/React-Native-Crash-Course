import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  SafeAreaView,
  TextInput,
} from 'react-native';

export default function App() {
  const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=30d0b1af';
  const [state, setState] = useState({
    s: 'Enter a movie ....',
    results: [],
    selected: {},
  });
  const search = () => {
    axios(apiUrl + '&s=' + state.s).then(({ data }) => {
      let results = data.Search;
      console.log(results);
      setState((prevState) => {
        return { ...prevState, results: results };
      });
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie DB </Text>
      <TextInput
        style={styles.searchbox}
        value={state.s}
        onChangeText={(text) =>
          setState((prevState) => {
            return { ...prevState, s: text };
          })
        }
        onSubmitEditing={search}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#223343',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },
  searchbox: {
    fontSize: 20,
    fontWeight: '300',
    padding: 20,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 40,
  },
});
