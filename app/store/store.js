import { createStore, combineReducers } from 'redux';
import { todoReducers } from './reducer/todoreducer';
import { categoryReducer } from './reducer/categoryreducer';
import { settingReducer } from './reducer/settingreducer';
import * as settingAction from './action/settingaction';
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
	},
	ui: {
		bySetting: {
			/*
				visible: boolean,
				theme: color
				notifcation: TODO
			*/
		}
	}
};

export const store = createStore(combineReducers({
	todos: todoReducers,
	categories: categoryReducer,
	ui: settingReducer,
}), initialState);


export { todActions as TodoAction };
export { categoryAction as CategoryAction };
export { settingAction as SettingAction };
