import React from 'react';
import {View} from 'react-native';

export default function Square({black, children}) {
  const fill = black ? 'black' : 'white';
  const stroke = black ? 'white' : 'black';

  return (
    <View style={{
      backgroundColor: fill,
      color: stroke,
      width: 50,
      height: 50
    }}>
      {children}
    </View>
  );
}