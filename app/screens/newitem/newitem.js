import React from 'react';
import { Style } from './style';
import {
	SafeAreaView,
	TextInput,
	Text,
	DatePickerIOS,
	Picker,
	Button,
	KeyboardAvoidingView,
} from 'react-native';


export class NewTodoScreen extends React.Component {
	constructor(props) {
		super(props);
		const { params } = this.props.navigation.state;

		this.state = {
			categoryList: Object.keys(this.props.categories),
			dueDate: new Date(),
			category: params.category || '',
			todoText: params.title || '',
			noteText: params.note || '',
		};

		this.updateText = this.updateText.bind(this);
		this.updateDate = this.updateDate.bind(this);
		this.updateNote = this.updateNote.bind(this);
		this.addNewItem = this.addNewItem.bind(this);
		this.updateCategory = this.updateCategory.bind(this);
	}

	updateText(text) {
		this.setState(() => {
			return {
				todoText: text,
			};
		});
	}

	updateDate(date) {
		this.setState(() => {
			return {
				dueDate: date,
			};
		});
	}

	updateNote(note) {
		this.setState(() => {
			return {
				noteText: note,
			};
		});
	}

	updateCategory(value) {
		this.setState(() => {
			return {
				category: value,
			};
		});
	}

	addNewItem() {
		const { navigation } = this.props;
		const { params } = this.props.navigation.state;

		if (this.state.todoText !== '') {
			if (!params.editItem) {
				this.props.newTodoItem({
					title: this.state.todoText,
					category: this.state.category,
					due: this.state.dueDate,
					note: this.state.noteText,
				});

			} else {
				const { params } = this.props.navigation.state;

				if (params.category !== this.state.category) this.props.updateTodoCategory(params.title, this.state.category);
				if (params.note !== this.state.noteText) this.props.updateTodoNote(params.title, this.state.noteText);
				if (params.title !== this.state.todoText) this.props.updateTodoTitle(params.title, this.state.todoText);
			}
		}

		navigation.goBack();
	}

	render() {
		let pickerItem = this.state.categoryList.map((category, index) => {
			return <Picker.Item key={index} value={category} label={category} />;
		});

		return (
			//  TODO: add keyboard safe area to move view up for keyboard
			<SafeAreaView style={Style.container}>
				<Text style={Style.label}>New Item</Text>
				<TextInput
					style={Style.todoTitle}
					value={this.state.todoText}
					autoCapitalize='sentences'
					onChangeText={this.updateText}
					multiline={false}
					editable={true}
				/>
				<Text style={Style.label}>Due</Text>
				<DatePickerIOS
					date={this.state.dueDate}
					onDateChange={this.updateDate}
					mode='datetime'
				/>
				<Text style={Style.label}>Category</Text>
				<Picker
					itemStyle={Style.categoryPickerItem}
					onValueChange={this.updateCategory}
					selectedValue={this.state.category}>

					{pickerItem}
				</Picker>

				<Text style={Style.label}>Notes</Text>
				<TextInput
					style={Style.todoNote}
					value={this.state.noteText}
					autoCapitalize='sentences'
					onChangeText={this.updateNote}
					multiline={true}
					editable={true}
				/>
				<Button style={Style.addButton} title='Add' onPress={this.addNewItem} />
			</SafeAreaView>
		);
	}
}
