import React from 'react';
import PropTypes from 'prop-types';
import { Style } from './style';
import { Checkbox } from '../checkbox';
import {
	View,
	TextInput,
	Text,
	TouchableWithoutFeedback,
	ActionSheetIOS
} from 'react-native';


export default class TodoItem extends React.PureComponent {
	showActionSheet(itemName) {
		ActionSheetIOS.showActionSheetWithOptions({
			title: 'Todo actions',
			message: 'Edit or remove a todo item',
			options: ['Edit', 'Remove', 'Cancel'],
			cancelButtonIndex: 2

		}, (index) => {
			if (index === 0)
				this.props.onLongPress('EDIT', itemName);

			else if (index === 1)
				this.props.onLongPress('REMOVE', itemName);
		});
	}

	render() {
		let textStyle = !this.props.completed ?
			Style.todoText :
			Style.todoTextDone;

		return (
			<View style={[Style.container, this.props.style]}>
				<Checkbox
					onCheckEvent={() => { this.props.checkBoxChange(this.props.value); }}
					checked={this.props.completed}
				/>
				<TouchableWithoutFeedback
					onLongPress={() => { this.showActionSheet(this.props.value); }}
				>
					<View>
						<Text style={textStyle}>{this.props.value}</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>
		);
	}
}


TodoItem.propTypes = {
	index: PropTypes.number.isRequired,
	value: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
	checkBoxChange: PropTypes.func.isRequired,
	onLongPress: PropTypes.func.isRequired,
};
