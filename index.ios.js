
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './app/app';

export default class mask extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('mask', () => mask);
