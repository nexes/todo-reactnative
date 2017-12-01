import React from 'react';
import { Style } from './style';
import { store, Action } from '../../store/store';
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
    this.addNewItem = this.addNewItem.bind(this);
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
    let { navigation } = this.props;

    if (this.state.todoText !== '') {
      store.dispatch(Action.addTodo(this.state.todoText, this.state.dueDate));
    }

    navigation.goBack();
  }

  render() {
    return (
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
        <Text style={Style.label}>Due date</Text>
        <DatePickerIOS
          date={this.state.dueDate}
          onDateChange={this.updateDate}
          mode='datetime'
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