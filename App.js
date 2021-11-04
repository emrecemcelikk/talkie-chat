import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Signup from './src/screens/Signup';
import Login from './src/screens/Login';
import Home from './src/screens/Home';

import AppNavigationContainer from './src/route/AppNavigationContainer';

export default function App() {
  return (
      <AppNavigationContainer/>
  );
}

