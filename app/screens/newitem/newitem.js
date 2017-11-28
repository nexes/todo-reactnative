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
  View
} from 'react-native';


export default class NewTodoScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoText: '',
      category: [
        'Home',
        'Work',
        'School',
        'shopping'
      ],
      noteText: '',
      dueDate: new Date()
    };

    this.updateText = this.updateText.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.updateNote = this.updateNote.bind(this);
  }

  updateText(text) {
    this.setState((prevState) => {
      return {
        todoText: text
      };
    });
  }

  updateDate(date) {
    this.setState((prevState) => {
      return {
        dueDate: date
      };
    });
  }

  updateNote(text) {
    this.setState((prevState) => {
      return {
        noteText: text
      };
    });
  }

  addNewItem() {

  }

  render() {
    return (
      <SafeAreaView style={Style.container}>
        <Text style={Style.label}>New Todo Item</Text>
        <TextInput
          style={Style.todoTitle}
          value={this.state.todoText}
          autoCapitalize='sentences'
          onChangeText={this.updateText}
          multiline={false}
          editable={true}
        />
        <Text style={Style.label}>Due date</Text>
        <DatePickerIOS
          date={this.state.dueDate}
          onDateChange={this.updateDate}
          mode='date'
        />
        <Text style={Style.label}>Category</Text>
        <Picker
          itemStyle={Style.categoryPickerItem}
          style={Style.categoryPicker}
          selectedValue={this.state.category[0]}>
          <Picker.Item label="test" value="test" />
          <Picker.Item label="test1" value="test1" />
          <Picker.Item label="test2" value="test2" />
        </Picker>

        <Text style={Style.label}>Add a note</Text>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding'>
          <TextInput
            style={Style.todoNote}
            value={this.todoText}
            autoCapitalize='sentences'
            onChangeText={this.updateNote}
            multiline={true}
            editable={true}
          />
        </KeyboardAvoidingView>
        <Button style={Style.addButton} title='Add' onPress={this.addNewItem} />
      </SafeAreaView>
    );
  }
}