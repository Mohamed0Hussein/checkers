import React, {Component} from 'react';
import {Image, StatusBar, View,Text} from 'react-native';
import Board from './components/Board';
import {observe} from './components/Game';
export default class App extends Component {
  
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{flex: 1,backgroundColor :'black'}}>
        
        </View>



        <View style={{flex: 3}} >
        
            <Board knightPosition={[0,0]} />


        </View>



        <View style={{flex: 1 ,backgroundColor : 'black'}}>
        
          <Text>Go Even Go!</Text>
        
        </View>
      </View>


      
    );
  }

}
