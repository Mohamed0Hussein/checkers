import React from 'react';
import Square from './Square';
import Red from './Red';
import White from './White';
import {moveKnight} from './Game'
import {View,TouchableWithoutFeedback,Text} from 'react-native';
function renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const black = (x + y) % 2 === 1;
    const piece =  x<=2 && black ? <White /> : null;
    const piece2 = x>=5 && black ? <Red /> : null;
  
    return (
        <TouchableWithoutFeedback onPress={() => handleSquareClick(x, y)}>

      <View 
      key={i} style={{ width: '12.5%', height: '12.5%' }}>
        <Square black={black}>
          {piece||piece2}
        </Square>
      </View>
      </TouchableWithoutFeedback>
    );
}
function handleSquareClick(toX, toY){
moveKnight(toX,toY);
}
export default function Board() {
    
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i));
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