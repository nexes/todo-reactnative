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

		const { params } = this.props.navigation.state;

		this.state = {
			title: params.title || '',
			color: params.color || 'black'
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
		this.setState(() => {
			return {
				color: color
			};
		});
	}

	addCategory() {
		const { goBack } = this.props.navigation;
		const { params } = this.props.navigation.state;

		if (this.state.title.length > 1) {
			if (!params.editItem) {
				this.props.addCategory(this.state.title, this.state.color);

			} else {
				if (params.color !== this.state.color)
					this.props.changeColor(params.title, this.state.color);

				if (params.title !== this.state.title)
					this.props.renameCategory(params.title, this.state.title);
			}
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