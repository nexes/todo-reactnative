import React from 'react';
import { Styles } from './style';
import { store, TodoAction } from '../../store/store';
import { TimeAndTitle } from '../../component/titlecard';
import { AddTodoButton } from '../../component/button';
import { TodoItem } from '../../component/todoitem';
import {
	FlatList,
	KeyboardAvoidingView,
	SafeAreaView,
	AsyncStorage
} from 'react-native';


export class Today extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todoTitles: []
		};

		this.listItemRender = this.listItemRender.bind(this);
		this.todoListItemChange = this.todoListItemChange.bind(this);
		this.todoListItemComplete = this.todoListItemComplete.bind(this);
		this.addTodoItem = this.addTodoItem.bind(this);
	}

	//	we need to read our store from disk and load it into redux, just once
	async componentDidMount() {
		try {
			const todos = await AsyncStorage.getItem('todo');
			this.props.initStoreTodos(JSON.parse(todos));

			this.setState(() => {
				return {
					todoTitles: Object.keys(this.props.todos)
				};
			});

		} catch (e) {
			console.log('error retrieving store from device ', e);
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		return Object.keys(this.props.todos).length !== Object.keys(nextProps.todos).length;
	}

	componentWillReceiveProps(nextProps) {
		const currTodos = Object.keys(this.props.todos);
		const nextTodos = Object.keys(nextProps.todos);

		if (currTodos.length !== nextTodos.length) {
			console.log('we are updating our state from props');
			this.setState(() => {
				return {
					todoTitles: nextTodos
				};
			});
		}
	}

	todoListItemChange(text, index) {
		//	TODO
	}

	todoListItemComplete(value) {
		this.props.completeTodo(value);
	}

	listItemKey(item, index) {
		return index;
	}

	listItemRender({ item, index }) {
		return (
			<TodoItem
				index={index}
				value={item}
				valueChange={this.todoListItemChange}
				checkBoxChange={this.todoListItemComplete}
			/>
		);
	}

	addTodoItem() {
		let { navigate } = this.props.navigation;
		navigate('AddItem');
	}

	render() {
		console.log('render');
		return (
			<SafeAreaView style={Styles.container}>
				<TimeAndTitle style={Styles.todayCard} showTime={true} title='My Day'/>
				<AddTodoButton style={Styles.addButton} addEvent={this.addTodoItem}/>
				<KeyboardAvoidingView behavior='padding' style={Styles.ListContainer}>
					<FlatList
						data={this.state.todoTitles}
						extraData={this.state}
						keyExtractor={this.listItemKey}
						renderItem={this.listItemRender}
					/>
				</KeyboardAvoidingView>
			</SafeAreaView>
		);
	}
}
