import React,{Component} from 'react';
import {View,Text} from 'react-native';



export default class Square extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {black, children} = this.props;
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
}

