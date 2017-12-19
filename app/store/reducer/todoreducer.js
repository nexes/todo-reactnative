import { ActionType as TodoAction } from '../action/todoaction';
import { ActionType as CategoryAction} from '../action/categoryaction';


export function todoItem(prevState = [], action) {
 	switch (action.type) {
		case TodoAction.ADD_TODO:
			return [
				...prevState,
				{
					text: action.text,
					due: action.date,
					note: action.note,
					category: action.category,
					completed: false,
				},
			];

		case TodoAction.REMOVE_TODO:
			return prevState.filter(todo => todo.text !== action.text);

		case TodoAction.COMPLETE_TODO:
			return prevState.map((item) => {
				if (item.text === action.text) {
					item.completed = !item.completed;
				}
				return item;
			});

		case TodoAction.CATEGORY_SET_TODO:
			return prevState.map((value) => {
				if (value.text === action.text) {
					value.category = action.category;
				}

				return value;
			});

		case CategoryAction.REMOVE_CATEGORY:
			return prevState.map((value) => {
				if (value.category === action.text) {
					value.category = 'Today';
				}

				return value;
			});

		case CategoryAction.RENAME_CATEGORY:
			return prevState.map((value) => {
				if (value.category === action.text) {
					value.category = action.newText;
				}

				return value;
			});

		default:
			return prevState;
	}
}
