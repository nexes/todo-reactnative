export const ActionType = {
  ADD_TODO: 'add_todo',
  REMOVE_TODO: 'remove_todo',
  COMPLETE_TODO: 'complete_todo',
};


/**
 * add a new todo item to the store
 * @param {object} todoObj  the new todo object, keys - text: string, date: date, category: string, note: string
 * @return {action}      the action object used by the reducers
 */
export function add(todoObj) {
  return {
    type: ActionType.ADD_TODO,
    text: todoObj.text,
    date: todoObj.due,
    category: todoObj.category,
    note: todoObj.note,
  };
}

/**
 * remove a todo item by the the todo text
 * @param  {string} text the todo text that will be removed from the list of todos
 * @return {action}      the action object used by the reducers
 */
export function remove(text) {
  return {
    type: ActionType.REMOVE_TODO,
    text,
  };
}

/**
 * set a todo item as completed
 * @param  {string} text the todo text that will be marked as complete
 * @return {action}      the action object used by the reducers
 */
export function complete(text) {
  return {
    type: ActionType.COMPLETE_TODO,
    text,
  };
}
