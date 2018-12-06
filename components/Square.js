import React,{Component} from 'react';
import {View,Text} from 'react-native';
import Red from './Red';
import White from './White';


export default class Square extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    const {black, children ,i,j} = this.props;
    const fill = black ? 'black' : 'white';
    const stroke = black ? 'white' : 'black';
    var child = children == 'Red' ? <Red/> : children == 'White' ? <White/>: <Text>{i},{j}</Text>;
    return (
      <View style={{
        backgroundColor: fill,
        color: stroke,
        width: 50,
        height: 50
      }}>
        {child}
      </View>
    );
  }
}

