import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';

function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({});
