import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Screen from './components/Screen';

const App = () => {
  return (
      <Screen />
  );
};

const styles = StyleSheet.create({
});

export default App;
