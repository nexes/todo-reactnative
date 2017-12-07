import React from 'react';
import PropTypes from 'prop-types';
import { Style } from './style';
import {
  TouchableOpacity,
  Image,
} from 'react-native';


export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFinished: false,
    };

    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive() {
    let { onCheckEvent } = this.props;

    this.setState((prevState) => {
      return {
        isFinished: !prevState.isFinished,
      };
    });

    if (onCheckEvent) onCheckEvent();
  }

  render() {
    let icon = this.state.isFinished ?
      require('../../images/todoCheck.png') :
      require('../../images/todoNoCheck.png');

    return (
      <TouchableOpacity
        style={[Style.container, this.props.style]}
        onPress={this.toggleActive}>

        <Image source={icon}/>
      </TouchableOpacity>
    );
  }
}

Checkbox.propTypes = {
  onCheckEvent: PropTypes.func,
};
