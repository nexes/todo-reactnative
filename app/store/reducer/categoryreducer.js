import { ActionType as CategoryAction} from '../action/categoryaction';
import { ActionType as TodoAction} from '../action/todoaction';


export function categories(prevState = [], action) {
	switch (action.type) {
		case CategoryAction.ADD_CATEGORY:
			return [
				...prevState,
				{
					text: action.text,
					color: action.color,
					count: 0,
				},
			];

		case CategoryAction.REMOVE_CATEGORY:
			return prevState.filter(value => value.text !== action.text);

		case CategoryAction.RENAME_CATEGORY:
			return prevState.map((value) => {
				if (value.text === action.text) {
					value.text = action.newText;
				}

				return value;
			});

		case CategoryAction.COLOR_CATEGORY:
			return prevState.map((value) => {
				if (value.text === action.text) {
					value.color = action.color;
				}

				return value;
			});

		case TodoAction.CATEGORY_SET_TODO:
		case TodoAction.ADD_TODO:
			return prevState.map((value) => {
				if (value.text === action.category) {
					value.count++;
				}

				return value;
			});

		default:
			return prevState;
	}
}
