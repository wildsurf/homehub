/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { COLOR, ThemeProvider, Card, Toolbar } from 'react-native-material-ui';

import App from './src/App';

const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};

export default class HomeHub extends Component {
  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <App />
      </ThemeProvider>
    );
  }
}

AppRegistry.registerComponent('HomeHub', () => HomeHub);
