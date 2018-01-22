export const ActionType = {
	INIT_UI: 'init_ui',
	VISIBILITY_TOGGLE: 'visibility_toggle',
	THEME_COLOR: 'theme_color'
};


/**
 * Initialize our store from the saved state on disk
 * @param {store}	store	the UI part of the redux store from disk
 * @returns {object}	the action for the reducer
 */
export function init(store) {
	return {
		type: ActionType.INIT_UI,
		store
	};
}

/**
 * Set the todo item visibility toggle from settings
 * @param {boolean}	visible	boolean value to show completed todo items
 * @returns {object}	the action for the reducer
 */
export function toggleVisibility(visible) {
	return {
		type: ActionType.VISIBILITY_TOGGLE,
		visible
	};
}


/**
 * set the theme color for the apps title bar
 * @param {string} color	the color string for the theme
 * @returns {object}	action for the reducer
 */
export function themeColor(color) {
	return {
		type: ActionType.THEME_COLOR,
		color
	};
}