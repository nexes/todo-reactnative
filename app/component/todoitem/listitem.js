import React from 'react';
import { Style } from './style';
import {
  View,
  Text
} from 'react-native';


export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[ this.props.style ]}>
        <Text>hello</Text>
      </View>
    );
  }
}