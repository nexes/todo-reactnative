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
	AsyncStorage
} from 'react-native';


export class Today extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: []
		};

		this.addTodoItem = this.addTodoItem.bind(this);
		this.listItemRender = this.listItemRender.bind(this);
		this.todoListItemChange = this.todoListItemChange.bind(this);
		this.todoListItemComplete = this.todoListItemComplete.bind(this);
		this.createStateFromProps = this.createStateFromProps.bind(this);
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
	async componentDidMount() {
		try {
			const todos = await AsyncStorage.getItem('todo');

			if (todos) {
				this.props.initStoreTodos(JSON.parse(todos));
			}

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
				value={item.title}
				completed={item.completed}
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
		return (
			<SafeAreaView style={Styles.container}>
				<TimeAndTitle style={Styles.todayCard} showTime={true} title='My Day'/>
				<AddTodoButton style={Styles.addButton} addEvent={this.addTodoItem}/>
				<KeyboardAvoidingView behavior='padding' style={Styles.ListContainer}>
					<FlatList
						data={this.state.todos}
						extraData={this.state}
						keyExtractor={this.listItemKey}
						renderItem={this.listItemRender}
					/>
				</KeyboardAvoidingView>
			</SafeAreaView>
		);
	}
}
