import React from 'react';
import { style } from './style';
import PropTypes from 'prop-types';
import {
	Text,
	View,
	TouchableWithoutFeedback,
	ActionSheetIOS,
} from 'react-native';


export default class CategoryItem extends React.Component {
	showActionShee(categoryName) {
		ActionSheetIOS.showActionSheetWithOptions({
			title: 'Category actions',
			message: 'Edit or remove a category',
			options: ['Edit', 'Remove', 'Cancel'],
			cancelButtonIndex: 2

		}, (index) => {
			if (index === 0) this.props.categoryLongPress('EDIT', categoryName);
			if (index === 1) this.props.categoryLongPress('REMOVE', categoryName);
		});
	}

	render() {
		return (
			<View style={[style.container, {borderLeftColor: this.props.color}]}>
				<Text
					onLongPress={() => { this.showActionShee(this.props.value); }}
					style={style.title}
				>
					{this.props.value}
				</Text>
				<Text style={style.detail}>{this.props.count} items</Text>
			</View>
		);
	}
}

CategoryItem.propTypes = {
	value: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	count: PropTypes.number.isRequired,
	categoryLongPress: PropTypes.func.isRequired,
};
