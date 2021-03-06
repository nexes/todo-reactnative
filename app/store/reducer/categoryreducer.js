import { combineReducers } from 'redux';
import { ActionType as CategoryAction } from '../action/categoryaction';
import { ActionType as TodoAction } from '../action/todoaction';


//	TODO refactor this switch statement into smaller functions
function categoryByTitle(prevState = {}, action) {
	switch (action.type) {
		case CategoryAction.INIT_CATEGORY:
			return {
				...action.store
			};

		case CategoryAction.ADD_CATEGORY:
			return {
				...prevState,
				[action.title]: {
					color: action.color,
					items: []
				}
			};

		case CategoryAction.REMOVE_CATEGORY:
			let keys = Object.keys(prevState);

			return keys.reduce((newState, current) => {
				if (current !== action.title) {
					newState[current] = prevState[current];
				}

				return newState;
			}, {});

		case CategoryAction.RENAME_CATEGORY:
			let renameKey = Object.keys(prevState);

			return renameKey.reduce((newState, current) => {
				if (current === action.title) {
					newState[action.newTitle] = prevState[current];

				} else {
					newState[current] = prevState[current];
				}

				return newState;
			}, {});

		case CategoryAction.COLOR_CATEGORY:
			return {
				...prevState,
				[action.title]: {
					...prevState[action.title],
					color: action.color
				}
			};

		case TodoAction.ADD_TODO:
			let catData = prevState[action.category];

			if (!catData)
				return prevState;

			catData.items.push(action.title);

			return {
				...prevState,
				[action.category]: {
					...catData
				}
			};

		case TodoAction.REMOVE_TODO:
			for (let [key, value] of Object.entries(prevState)) {
				let index = value.items.indexOf(action.title);

				if (index !== -1) {
					value.items.splice(index, 1);

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

export const categoryReducer = combineReducers({
	byTitle: categoryByTitle
});
