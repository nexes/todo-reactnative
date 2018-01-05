import React from 'react';
import PropTypes from 'prop-types';
import { Style } from './style';
import { Checkbox } from '../checkbox';
import {
	View,
	TextInput,
} from 'react-native';


export default class TodoItem extends React.PureComponent {
	constructor(props) {
		super(props);

		this.itemEdit = this.itemEdit.bind(this);
		this.checkBoxSelect = this.checkBoxSelect.bind(this);
	}

	itemEdit(text) {
		this.props.valueChange(text, this.props.index);
	}

	checkBoxSelect() {
		this.props.checkBoxChange(this.props.value);
	}

	render() {
		let textStyle = !this.props.completed ?
			Style.todoText :
			Style.todoTextDone;

		return (
			<View style={[ Style.container, this.props.style ]}>
				<Checkbox onCheckEvent={this.checkBoxSelect} checked={this.props.completed}/>
				<TextInput
					style={textStyle}
					value={this.props.value}
					multiline={false}
					editable={!this.props.completed}
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
	completed: PropTypes.bool.isRequired,
	valueChange: PropTypes.func.isRequired,
	checkBoxChange: PropTypes.func.isRequired,
};
