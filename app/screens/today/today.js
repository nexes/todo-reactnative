import React from 'react';
import { Styles } from './style';
import { TodoAction } from '../../store/store';
import { TimeAndTitle } from '../../component/titlecard';
import { AddTodoButton } from '../../component/button';
import { TodoItem } from '../../component/todoitem';
import {
	FlatList,
	KeyboardAvoidingView,
	SafeAreaView,
	AsyncStorage,
} from 'react-native';


export class Today extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [],
		};

		this.addTodoItem = this.addTodoItem.bind(this);
		this.listItemRender = this.listItemRender.bind(this);
		this.todoListItemComplete = this.todoListItemComplete.bind(this);
		this.createStateFromProps = this.createStateFromProps.bind(this);
		this.todoListItemLongPress = this.todoListItemLongPress.bind(this);
	}

	createStateFromProps(newState) {
		const keys = Object.keys(newState);

		return keys.reduce((prevState, current) => {
			prevState.push({
				title: current,
				category: newState[current].category,
				completed: newState[current].completed
			});

			return prevState;
		}, []);
	}

	//	lets read any saved store data from disk
	//	TODO abstract the AsyncStorage calls
	async componentDidMount() {
		try {
			const todos = await AsyncStorage.getItem('todo');
			if (todos) this.props.initStoreTodos(JSON.parse(todos));

		} catch (e) {
			console.log('error retrieving store from device ', e);
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps) {
			this.setState(() => {
				return {
					todos: this.createStateFromProps(nextProps.todos)
				};
			});
		}
	}

	todoListItemComplete(value) {
		this.props.completeTodo(value);
	}

	todoListItemLongPress(action, value) {
		switch (action) {
			case 'EDIT':
				const { navigate } = this.props.navigation;
				const todo = this.props.todos[value];

				navigate('AddItem', {editItem: true, title: value, category: todo['category'], note: todo['note']});
				break;

			case 'REMOVE':
				this.props.removeTodo(value);
				break;

			default:
				return;
		}
	}

	listItemRender({ item, index }) {
		//	TODO we are saving the settings option to not show completed, we just need to read it
		//	better than this. We can do that when we abstract our AsyncStorage calls
		return (
			<TodoItem
				index={index}
				value={item.title}
				completed={item.completed}
				checkBoxChange={this.todoListItemComplete}
				onLongPress={this.todoListItemLongPress}
			/>
		);
	}

	addTodoItem() {
		let { navigate } = this.props.navigation;
		navigate('AddItem', {editItem: false});
	}

	render() {
		return (
			<SafeAreaView style={Styles.container}>
				<TimeAndTitle style={Styles.todayCard} showTime={true} title='My Day'/>
				<AddTodoButton style={Styles.addButton} addEvent={this.addTodoItem}/>
				<KeyboardAvoidingView behavior='padding' style={Styles.ListContainer}>
					<FlatList
						data={this.state.todos}
						extraData={this.state}
						renderItem={this.listItemRender}
						keyExtractor={(item, index) => index}
					/>
				</KeyboardAvoidingView>
			</SafeAreaView>
		);
	}
}
