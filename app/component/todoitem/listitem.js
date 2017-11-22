import React from 'react';
import PropTypes from 'prop-types';
import { Style } from './style';
import { Checkbox } from '../checkbox';
import {
  View,
  TextInput
} from 'react-native';


export default class TodoItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.itemEdit = this.itemEdit.bind(this);
  }

  itemEdit(text) {
    this.props.valueChange(text, this.props.index);
  }

  render() {
    return (
      <View style={[ Style.container, this.props.style ]}>
        <Checkbox />
        <TextInput
          style={Style.todoText}
          value={this.props.value}
          multiline={false}
          editable={true}
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={this.itemEdit}
        />
      </View>
    );
  }
}


TodoItem.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  valueChange: PropTypes.func.isRequired
};