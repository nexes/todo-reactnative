import { combineReducers } from 'redux';
import { ActionType as SettingActions } from '../action/settingaction';


function uiBySettings(state = {}, action) {
	switch (action.type) {
		case SettingActions.INIT_UI:
			return {
				...action.store
			};

		case SettingActions.THEME_COLOR:
			return {
				...state,
				theme: action.color
			};

		case SettingActions.VISIBILITY_TOGGLE:
			return {
				...state,
				visible: action.visible
			};

		default:
			return state;
	}
}


export const settingReducer = combineReducers({
	bySetting: uiBySettings
});
