import { store } from '../app/store/store';
import * as Actions from '../app/store/action/categoryaction';


const myCategory = {
	text: 'Work',
	color: '#ff0000',
};

describe('Testing category actions', () => {
	test('adding a new category', () => {
		store.dispatchAction(Actions.add(myCategory));

		const category = store.getTodoCategories();
		expect(category).toHaveLength(1);
		expect(category[0]).toMatchObject(myCategory);
	});

	test('removing a category', () => {
		store.dispatchAction(Actions.remove(myCategory.text));

		const category = store.getTodoCategories();
		expect(category).toHaveLength(0)
	});

	test('renaming a category', () => {
		store.dispatchAction(Actions.add(myCategory));
		store.dispatchAction(Actions.rename(myCategory.text, 'Fun'));

		const category = store.getTodoCategories();
		expect(category[0].text).toBe('Fun');
	});

	test('change color of category', () => {
		// the category title was changed from the previous test
		store.dispatchAction(Actions.changeColor('Fun', 'purple'));

		const category = store.getTodoCategories();
		expect(category[0].color).toBe('purple');
	})
});
