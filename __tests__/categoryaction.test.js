import { store } from '../app/store/store';
import * as Actions from '../app/store/action/categoryaction';


beforeAll(() => {
	store.dispatch(Actions.add({
		title: 'Work',
		color: 'red'
	}));

	store.dispatch(Actions.add({
		title: 'School',
		color: 'blue'
	}));

	store.dispatch(Actions.add({
		title: 'Food',
		color: 'yellow'
	}));
});

describe('Test add categories', () => {
	test('adding three categories', () => {
		const { categories } = store.getState();

		expect(Object.keys(categories.byTitle).length).toBe(3);
	});
});

describe('Test remove a category', () => {
	test('remove the Food category', () => {
		store.dispatch(Actions.remove('Food'));

		const { categories } = store.getState();

		for (let key of Object.keys(categories.byTitle)) {
			expect(key).not.toBe('Food');
		}
	});
});

describe('Test renaming a category', () => {
	test('Rename School to Homework', () => {
		store.dispatch(Actions.rename('School', 'Homework'));

		const { categories, todos } = store.getState();
		const catNames = Object.keys(categories.byTitle);

		for (let [key, val] of Object.entries(todos.byTitle)) {
			expect(val.category).not.toBe('School');
		}

		for (let name of catNames) {
			expect(['Homework', 'Work']).toContain(name);
		}
	});
});

describe('Test changing category color', () => {
	test('Change color from blue to orange', () => {
		store.dispatch(Actions.changeColor('Homework', 'orange'));

		const { categories } = store.getState();
		const homeworkCat = categories.byTitle['Homework'];

		expect(homeworkCat.color).toBe('orange');
	});
});
