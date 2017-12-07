import { createStore, combineReducers } from 'redux';
import { todoItem } from './reducer/todoreducer';
import * as actions from './action/todoaction';


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
};

export const store = createStore(combineReducers({
  todo: todoItem,
}), initialState);

export { actions as Action };
