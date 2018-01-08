import React from 'react';
import { style } from './style';
import PropTypes from 'prop-types';
import {
	Text,
	View,
} from 'react-native';


export default class CategoryItem extends React.Component {
	render() {
		return (
			<View style={[style.container, {borderLeftColor: this.props.color}]}>
				<Text style={style.title}>{this.props.value}</Text>
				<Text style={style.detail}>{this.props.count} items</Text>
			</View>
		);
	}
}

CategoryItem.propTypes = {
	value: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	count: PropTypes.number.isRequired,
};
