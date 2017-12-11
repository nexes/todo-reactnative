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
} from 'react-native';


export default class NewTodoScreen extends React.Component {
  constructor(props) {
    super(props);
    const { params } = this.props.navigation.state;

    this.state = {
      categoryList: params.category,
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
      store.dispatchAction(Action.addTodo({
        category: this.state.category,
        due: this.state.dueDate,
        note: this.state.noteText,
        text: this.state.todoText,
      }));
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
        <Text style={Style.label}>Due date</Text>
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
