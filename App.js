/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

 const instructions = Platform.select({
   ios: 'IOS',
   android:'Android'
 });

// display differ things for different platforms ------------------------------------------

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello World</Text>
        <Text style={styles.rea}>Done Using React-Native Library</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
     color :'green'
  },
  rea:{
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});
