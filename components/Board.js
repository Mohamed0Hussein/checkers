import React from 'react';
import Square from './Square';
import Red from './Red';
import {moveKnight} from './Game'
import {View,TouchableWithoutFeedback,Text} from 'react-native';
function renderSquare(i, [knightX, knightY]) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const isKnightHere = (x === knightX && y === knightY)
    const black = (x + y) % 2 === 1;
    const piece = isKnightHere ? <Red /> : <Text style={{color : 'blue'}}>{i}</Text>;
  
    return (
      <View 
      key={i} style={{ width: '12.5%', height: '12.5%' }}>
        <Square black={black}>
          {piece}
        </Square>
      </View>
    );
}
export default function Board({knightPosition}) {
    
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition));
  }

  return (
    <View style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexWrap: 'wrap'
    }}>
      {squares}
    </View>
  );
  
}