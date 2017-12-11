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


class Store {
  constructor() {
    this.reduxStore = createStore(combineReducers({
      todo: todoItem,
    }), initialState);

    this.unsubscribe = undefined;
  }

  subscribe(listener) {
    this.unsubscribe = this.reduxStore.subscribe(listener);
  }

  unSubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  currentState() {
    return this.reduxStore.getState();
  }

  dispatchAction(action) {
    if (action) {
      this.reduxStore.dispatch(action);
    }
  }

  saveStateToDevice() {
    //  TODO save redux state to the device
  }

  retrieveStateFromDevice() {
    //  TODO get redux state from the device
  }

}

export const store = new Store();
export { actions as Action };
