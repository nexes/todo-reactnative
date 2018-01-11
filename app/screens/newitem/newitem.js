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

		this.state = {
			categoryList: [],
			dueDate: new Date(),
			category: '',
			todoText: '',
			noteText: '',
		};

		this.updateText = this.updateText.bind(this);
		this.updateDate = this.updateDate.bind(this);
		this.updateNote = this.updateNote.bind(this);
		this.addNewItem = this.addNewItem.bind(this);
		this.updateCategory = this.updateCategory.bind(this);
	}

	componentDidMount() {
		this.setState(() => {
			return {
				categoryList: Object.keys(this.props.categories)
			};
		});
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
		let { navigation } = this.props;

		if (this.state.todoText !== '') {
			this.props.newTodoItem({
				title: this.state.todoText,
				category: this.state.category,
				due: this.state.dueDate,
				note: this.state.noteText,
			});
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
					value={this.todoText}
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
