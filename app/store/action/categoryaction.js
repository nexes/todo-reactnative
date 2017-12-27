export const ActionType = {
	ADD_CATEGORY: 'add_category',
	REMOVE_CATEGORY: 'remove_category',
	RENAME_CATEGORY: 'rename_category',
	COLOR_CATEGORY: 'color_category',
};


/**
 * add a new category action
 * @param {object} catObj an object representing a new category, {title: the title, color: the color}
 * @return {action}     the action for the reducer
 */
export function add(catObj) {
	return {
		type: ActionType.ADD_CATEGORY,
		title: catObj.title,
		color: catObj.color,
	};
}


/**
 * remove a category action
 * @param  {string} title the category title to remove
 * @return {action}      the action for the reducer
 */
export function remove(title) {
	return {
		type: ActionType.REMOVE_CATEGORY,
		title,
	};
}


/**
 * rename a category action
 * @param  {string} title    the current title of the category
 * @param  {string} newTitle the new title of the category
 * @return {action}          the action for the reducer
 */
export function rename(title, newTitle) {
	return {
		type: ActionType.RENAME_CATEGORY,
		title,
		newTitle,
	};
}


/**
 * change the color of the category
 * @param  {string} title the title of the category that needs the color changed
 * @param  {string} color the name of the color e.g 'red', '#ff0000'
 * @return {action}       the action for the reducer
 */
export function changeColor(title, color) {
	return {
		type: ActionType.COLOR_CATEGORY,
		title,
		color,
	};
}
