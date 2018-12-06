import React,{Component} from 'react';
import Square from './Square';
import Red from './Red';
import White from './White';
import {View,TouchableWithoutFeedback,Text,ToastAndroid} from 'react-native';
var squares = [[]];
class RenderSquare extends Component {

    
  render(){
    const {i,j,color,checkerType,handleClick} = this.props
    var disable = color == 'white';
    return (
        <TouchableWithoutFeedback onPress={() => handleClick(i, j)} disabled={disable}>

      <View 
       style={{ width: '12.5%', height: '12.5%' }}>
        <Square black={color} i={i} j={j}>
          {checkerType}
        </Square>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default class Board extends Component {
  constructor(props) {
    super(props);
    for (let i = 0; i < 8; i++)
    for (let j = 0; j < 8; j++) {
    const black = (i + j) % 2 === 1;
    const piece =  j<=2 && black ? "White" : null;
    const piece2 = j>=5 && black ? "Red"  : null;
    console.log({i,j});
      squares.push({i,j,checkerType:piece||piece2,color:black});
      
    }
    this.state = {cells:squares,firstCell:{i:0,j:0},secondCell:{}};
  }
  handleClick(i,j){
    //when cell is pressed => check if firstChecker is not selected
    // action : set i & j for the firstCell 
    // done
    this.setState({firstCell:{i:10,j:10}});
    
    
      
    // else if selected 
    //action : set i & j for the secondCell

    // done
    
      //run logic for movement action
      
      
      
    
     
  }
  render() {
    const {cells,firstCell,secondCell} = this.state;
    console.log(this.state.firstCell);
    console.log(this.state.secondCell);
    return (
      <View style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {
          cells.map((cell) =>
          { 
          return <RenderSquare 
          i={cell.i} 
          j={cell.j} 
          checkerType={cell.checkerType}
         color={cell.color} 
         handleClick={this.handleClick} 
         isSelected={firstCell && firstCell.i === cell.i && firstCell.j === cell.j}
         key={[cell.i,cell.j]}
         ></RenderSquare>
          })
      }
      </View>
    );
  }
}