import React from 'react';
import { Style } from './style';
import {
	View,
	Text
} from 'react-native';


export class Header extends React.Component {
	render() {
		return (
			<View style={[Style.container, this.props.style]}>
				<Text style={Style.headerText}>{this.props.title}</Text>
			</View>
		);
	}
}
