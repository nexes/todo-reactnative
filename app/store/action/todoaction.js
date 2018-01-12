export const ActionType = {
	INIT_TODO: 'init_todo',
	ADD_TODO: 'add_todo',
	REMOVE_TODO: 'remove_todo',
	COMPLETE_TODO: 'complete_todo',
	CATEGORY_SET_TODO: 'category_todo',
	DATE_SET_TODO: 'duedate_todo',
	UPDATE_TITLE_TODO: 'update_title_todo',
	UPDATE_NOTE_TODO: 'update_note_todo',
};



/**
 * initalize our todo items from the saved state on the device.
 * @param {object} store the todo object to save into redux
 * @returns {action} the action object used by the reducers
 */
export function init(store) {
	return {
		type: ActionType.INIT_TODO,
		store,
	};
}

/**
 * add a new todo item to the store
 * @param {object} todoObj  the new todo object, keys - title: string, due: date, category: string, note: string
 * @return {action}      the action object used by the reducers
 */
export function add(todoObj) {
	return {
		type: ActionType.ADD_TODO,
		title: todoObj.title,
		due: todoObj.due,
		category: todoObj.category,
		note: todoObj.note,
		completed: false,
	};
}

/**
 * remove a todo item by the the todo text
 * @param  {string} title the todo text that will be removed from the list of todos
 * @return {action}      the action object used by the reducers
 */
export function remove(title) {
	return {
		type: ActionType.REMOVE_TODO,
		title,
	};
}

/**
 * set a todo item as completed
 * @param  {string} title the todo title that will be marked as complete
 * @return {action}      the action object used by the reducers
 */
export function complete(title) {
	return {
		type: ActionType.COMPLETE_TODO,
		title,
	};
}


/**
 * change or set the category of a todo item
 * @param  {string} title        the todo title we want to change
 * @param  {string} newCategory the category name we want to change to
 * @return {action}             the action for the reducers
 */
export function category(title, newCategory) {
	return {
		type: ActionType.CATEGORY_SET_TODO,
		category: newCategory,
		title,
	};
}


/**
 * set or change the due date for a todo item
 * @param {string} title	the title of the todo item to update
 * @param {string | Date} date	the new due date
 * @returns	the action for the reducers
 */
export function dueDate(title, date) {
	return {
		type: ActionType.DATE_SET_TODO,
		title,
		date,
	};
}


/**
 * update the todo items title
 * @param {string}	oldTitle	the current todo title
 * @param {string}	newTitle	the new title for the todo item
 * @returns	{action}	the action for the reducer
 */
export function updateTitle(oldTitle, newTitle) {
	return {
		type: ActionType.UPDATE_TITLE_TODO,
		title: oldTitle,
		newTitle: newTitle,
	};
}


/**
 * update the todo notes
 * @param {string}	title	the title of the todo
 * @param {string}	note the new note for the todo
 * @returns {action}	the action for the reducer
 */
export function updateNote(title, note) {
	return {
		type: ActionType.UPDATE_NOTE_TODO,
		title,
		note,
	};
}