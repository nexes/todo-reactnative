export const ActionType = {
  ADD_TODO: 'add_todo',
  REMOVE_TODO: 'remove_todo'
};


export function addTodo(todoObj) {
  return {
    type: ActionType.ADD_TODO,
    text: todoObj.text,
    date: todoObj.due,
    category: todoObj.category,
    note: todoObj.note
  };
}

export function removeTodo(text) {
  return {
    type: ActionType.REMOVE_TODO,
    text
  };
}