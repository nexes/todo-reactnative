import { combineReducers } from 'redux';
import { ActionType as TodoAction } from '../action/todoaction';
import { ActionType as CategoryAction } from '../action/categoryaction';


//	TODO: refactor these switch statements into seperate functions.
function todoItemByTitle(prevState = {}, action) {
	switch (action.type) {
		case TodoAction.INIT_TODO:
			return {
				...action.store,
			};

		case TodoAction.ADD_TODO:
			return {
				...prevState,
				[action.title]: {
					note: action.note,
					due: action.due,
					category: action.category,
					completed: false,
				}
			};

		case TodoAction.REMOVE_TODO:
			let keys = Object.keys(prevState);

			return keys.reduce((result, current) => {
				if (action.title !== current) {
					result[current] = prevState[current];
				}

				return result;
			}, {});


		//	this will toggle the completed state
		case TodoAction.COMPLETE_TODO:
			return {
				...prevState,
				[action.title]: {
					...prevState[action.title],
					completed: !prevState[action.title].completed
				}
			};

		case TodoAction.DATE_SET_TODO:
			return {
				...prevState,
				[action.title]: {
					...prevState[action.title],
					due: action.date
				}
			};

		case TodoAction.CATEGORY_SET_TODO:
			return {
				...prevState,
				[action.title]: {
					...prevState[action.title],
					category: action.category
				}
			};

		case TodoAction.UPDATE_NOTE_TODO:
			return {
				...prevState,
				[action.title]: {
					...prevState[action.title],
					note: action.note
				}
			};

		case TodoAction.UPDATE_TITLE_TODO:
			let renameKeys = Object.keys(prevState);

			return renameKeys.reduce((newState, current) => {
				if (current === action.title) {
					newState[action.newTitle] = prevState[current]

				} else {
					newState[current] = prevState[current];
				}

				return newState;
			}, {});

		case CategoryAction.REMOVE_CATEGORY:
			let todoKeys = Object.keys(prevState);

			return todoKeys.reduce((newState, current) => {
				let currentTodo = prevState[current];

				if (currentTodo.category === action.title) {
					currentTodo.category = null;
				}

				newState[current] = currentTodo;
				return newState;
			}, {});

		case CategoryAction.RENAME_CATEGORY:
			for (let [key, value] of Object.entries(prevState)) {
				if (value.category === action.title) {
					value.category = action.newTitle;

					return {
						...prevState,
						[key]: {
							...value
						}
					};
				}
			}

			return prevState;

		default:
			return prevState;
	}
}


export const todoReducers = combineReducers({
	byTitle: todoItemByTitle
});
