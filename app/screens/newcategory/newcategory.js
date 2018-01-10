import React from 'react';
import { Style } from './style';
import { ColorPicker } from 'react-native-color-picker';
import {
	View,
	Text,
	TextInput,
	TouchableHighlight,
	Button
} from 'react-native';


export class NewCategoryScreen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			color: 'black'
		};

		this.titleTextChange = this.titleTextChange.bind(this);
		this.addCategory = this.addCategory.bind(this);
		this.colorSelected = this.colorSelected.bind(this);
	}

	titleTextChange(title) {
		this.setState(() => {
			return {
				title: title
			};
		});
	}

	colorSelected(color) {
		console.log('color selected ', color);
		this.setState(() => {
			return {
				color: color
			};
		});
	}

	addCategory() {
		const { goBack } = this.props.navigation;

		if (this.state.title.length > 1) {
			this.props.addCategory(this.state.title, this.state.color);
		}

		goBack();
	}

	render() {
		return (
			<View style={Style.container}>
				<Text style={Style.title}>Category name</Text>
				<TextInput
					style={Style.titleInput}
					value={this.state.title}
					onChangeText={this.titleTextChange}
				/>
				<ColorPicker
					style={Style.colorPicker}
					onColorSelected={this.colorSelected}
					hideSliders={true}
				/>
				<Button
					title='Add'
					onPress={this.addCategory}
				/>
			</View>
		);
	}
}