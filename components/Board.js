import React from 'react';
import Square from './Square';
import Red from './Red';
import White from './White';
import {View,TouchableWithoutFeedback,Text} from 'react-native';

function renderSquare(i,j) {

    const black = (i + j) % 2 === 1;
    const piece =  j<=2 && black ? <White /> : null;
    const piece2 = j>=5 && black ? <Red /> : null;
  
    return (
        <TouchableWithoutFeedback onPress={() => handleSquareClick(i, j)} key={[i,j]}>

      <View 
       style={{ width: '12.5%', height: '12.5%' }}>
        <Square black={black}>
          {piece||piece2}
        </Square>
      </View>
      </TouchableWithoutFeedback>
    );
}
function handleSquareClick(toX, toY){
    // when square is pressed -----------------------------
}
export default function Board() {
    
  var squares = [[]];
  for (let i = 0; i < 8; i++)
  for (let j = 0; j < 8; j++) {
    squares.push(renderSquare(i,j));
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