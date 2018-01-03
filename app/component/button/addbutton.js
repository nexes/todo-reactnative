import React from 'react';
import PropTypes from 'prop-types';
import { Style } from './style';
import {
	View,
	Text,
	TouchableOpacity
} from 'react-native';


export default class AddButton extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TouchableOpacity
				style={[Style.View, this.props.style]}
				onPress={this.props.addEvent}>

				<Text style={Style.Button}>+</Text>
			</TouchableOpacity>
		);
	}
}


AddButton.propTypes = {
	addEvent: PropTypes.func.isRequired
};