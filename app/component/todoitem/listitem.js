import React from 'react';
import PropTypes from 'prop-types';
import { Style } from './style';
import { Checkbox } from '../checkbox';
import {
	View,
	TextInput,
} from 'react-native';


export default class TodoItem extends React.PureComponent {
	render() {
		let textStyle = !this.props.completed ?
			Style.todoText :
			Style.todoTextDone;

		return (
			<View style={[ Style.container, this.props.style ]}>
				<Checkbox
					onCheckEvent={() => { this.props.checkBoxChange(this.props.value); }}
					checked={this.props.completed}
				/>
				<TextInput
					style={textStyle}
					value={this.props.value}
					multiline={false}
					editable={!this.props.completed}
					autoCapitalize='none'
					autoCorrect={false}
					onChangeText={(text) => { this.props.valueChange(text, this.props.index);}}
				/>
			</View>
		);
	}
}


TodoItem.propTypes = {
	index: PropTypes.number.isRequired,
	value: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
	valueChange: PropTypes.func.isRequired,
	checkBoxChange: PropTypes.func.isRequired,
};
