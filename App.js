import React, {Component} from 'react';
import {Image, StatusBar, View,Text} from 'react-native';
import Board from './components/Board';
export default class App extends Component {
  
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{flex: 1,backgroundColor :'black'}}>
        
        </View>



        <View style={{flex: 4}} >
        
            <Board />


        </View>



        <View style={{flex: 1 ,backgroundColor : 'black'}}>
        
        
        </View>
      </View>


      
    );
  }

}
