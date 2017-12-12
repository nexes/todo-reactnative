export const ActionType = {
  ADD_CATEGORY: 'add_category',
  REMOVE_CATEGORY: 'remove_category',
  RENAME_CATEGORY: 'rename_category',
};


/**
 * add a new category action
 * @param {string} text the title of the category
 * @return {action}     the action for the reducer
 */
export function addCategory(text) {
  return {
    type: ActionType.ADD_CATEGORY,
    text,
  };
}


/**
 * remove a category action
 * @param  {string} text the category title to remove
 * @return {action}      the action for the reducer
 */
export function removeCategory(text) {
  return {
    type: ActionType.REMOVE_CATEGORY,
    text,
  };
}


/**
 * rename a category action
 * @param  {string} title    the current title of the category
 * @param  {string} newTitle the new title of the category
 * @return {action}          the action for the reducer
 */
export function renameCategory(title, newTitle) {
  return {
    type: ActionType.RENAME_CATEGORY,
    text: title,
    newText: newTitle,
  };
}
