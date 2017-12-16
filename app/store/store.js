import { createStore, combineReducers } from 'redux';
import { todoItem } from './reducer/todoreducer';
import { categories } from './reducer/categoryreducer';
import * as todActions from './action/todoaction';
import * as categoryAction from './action/categoryaction';


const initialState = {
	todo: [
		/*
			{
				text: the todo title,
				note: the todo detail if any,
				due: the due date if any,
				category: the category of the todo item if any,
				completed: if the todo is finished
			}
		*/
	],
	category: [
	/*
		{
			text: the category title,
			color: the color code for the category,
			count: the number of todo items that uses this category
		}
	 */
	],
};


class Store {
	constructor() {
		this.reduxStore = createStore(combineReducers({
			todo: todoItem,
			category: categories,
		}), initialState);

		this.unsubscribe = undefined;
	}

	subscribe(listener) {
		this.unsubscribe = this.reduxStore.subscribe(listener);
	}

	unSubscribe() {
		if (this.unsubscribe) {
			this.unsubscribe();
		}
	}

	currentState() {
		return this.reduxStore.getState();
	}

	getTodoItems() {
		const { todo } = this.reduxStore.getState();
		return todo;
	}

	getTodoCategories() {
		const { category } = this.reduxStore.getState();
		return category;
	}

	dispatchAction(action) {
		if (action) {
			this.reduxStore.dispatch(action);
		}
	}

	saveStateToDevice() {
		//  TODO save redux state to the device
	}

	retrieveStateFromDevice() {
		//  TODO get redux state from the device
	}
}

export const store = new Store();
export { todActions as TodoAction };
export { categoryAction as CategoryAction };
