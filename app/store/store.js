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


export const store = createStore(combineReducers({
	todo: todoItem,
	category: categories,
}), initialState);

export { todActions as TodoAction };
export { categoryAction as CategoryAction };
