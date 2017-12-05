import { ActionType } from '../action/todoaction';


export function todoItem(prevState = [], action) {
  switch (action.type) {
    case ActionType.ADD_TODO:
      return [
        ...prevState,
        {
          text: action.text,
          due: action.date,
          note: action.note,
          category: action.category
        }
      ];

    case ActionType.REMOVE_TODO:
      return prevState.filter(todo => todo.text !== action.text);

    default:
      return prevState;
  }
}
