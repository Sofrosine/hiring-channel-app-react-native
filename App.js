import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Router from './src/Config/Router'

import {Icon, SocialIcon, Button, Header, Input, SearchBar } from 'react-native-elements';

class App extends Component {
  render() {
    return (
      <>
        <Router/>
      </>
    );
  }
};

export default App


