/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, StatusBar, View,} from 'react-native';

//  const instructions = Platform.select({
//    ios: 'IOS',
//    android:'Android'
//  });

// display different things for different platforms ------------------------------------------

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Image
         style={{ height: null, width: null,flex:1}}
          source={require('./src/board.jpeg')}
          resizeMode={'stretch'}
        />
        <StatusBar hidden={true} />
        
        </View>
    );
  }
}


