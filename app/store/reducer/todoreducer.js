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
          category: action.category,
          completed: false,
        },
      ];

    case ActionType.REMOVE_TODO:
      return prevState.filter(todo => todo.text !== action.text);

    case ActionType.COMPLETE_TODO:
      return prevState.map((item) => {
        if (item.text === action.text) {
          item.completed = !item.completed;
        }
        return item;
      });

    default:
      return prevState;
  }
}
