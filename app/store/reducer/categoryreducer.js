import { ActionType } from '../action/categoryaction';


export function categories(prevState = [], action) {
  switch (action.type) {
    case ActionType.ADD_CATEGORY:
      return [
        ...prevState,
        {
          text: action.text,
        },
      ];

    case ActionType.REMOVE_CATEGORY:
      return prevState.filter(value => value.text !== action.text);

    case ActionType.RENAME_CATEGORY:
      return prevState.map((value) => {
        if (value.text === action.text) {
          value.text = action.newText;
        }

        return value;
      });

     default:
       return prevState;
  }
}
