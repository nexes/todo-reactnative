import { createStore, combineReducers } from 'redux';
import { todoReducers } from './reducer/todoreducer';
import { categoryReducer } from './reducer/categoryreducer';
import * as todActions from './action/todoaction';
import * as categoryAction from './action/categoryaction';


const initialState = {
	todos: {
		byTitle: {
			/*
				'theTitle': {
					'note': the todo note,
					'due': the todo due date,
					'category': the todo category: default null,
					'completed': the todo completed flag
				},
				...
			*/
		}
	},
	categories: {
		byTitle: {
			/*
				'theTitle': {
					'color': the category color,
					'items: ['todoByTitle, ...] the title of the todo item
				},
				...
			*/
		}
	}
};

export const store = createStore(combineReducers({
	todos: todoReducers,
	categories: categoryReducer,
}), initialState);


export { todActions as TodoAction };
export { categoryAction as CategoryAction };
