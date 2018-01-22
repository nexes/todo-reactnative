import { store, SettingAction } from '../app/store/store';


describe('Testing settings visibility', () => {
	test('Change show completed todo items to true', () => {
		store.dispatch(SettingAction.toggleVisibility(true));

		const { ui } = store.getState();
		expect(ui.bySetting.visible).toBe(true);
	});
});

describe('Testing settings theme color', () => {
	test('Change the theme to yellow', () => {
		store.dispatch(SettingAction.themeColor('yellow'));

		const { ui } = store.getState();
		expect(ui.bySetting.theme).toBe('yellow');
	});
});