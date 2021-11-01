import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    MontserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),
    Pacifico: require('./assets/fonts/Pacifico-Regular.ttf'),
  });
  
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>talkie</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe194',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily:'Pacifico',
    fontSize:50,
  }
});
