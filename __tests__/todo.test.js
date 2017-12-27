import {
	store,
	CategoryAction,
	TodoAction,
} from '../app/store/store';


beforeAll(() => {
	store.dispatch(CategoryAction.add({
		title: 'Home',
		color: 'red'
	}));

	store.dispatch(CategoryAction.add({
		title: 'Work',
		color: 'green'
	}));

	store.dispatch(TodoAction.add({
		title: 'wash car',
		due: 'today',
		category: 'Home'
	}));

	store.dispatch(TodoAction.add({
		title: 'sell car',
		due: 'tommorow',
		category: 'Home'
	}));

	store.dispatch(TodoAction.add({
		title: 'buy bitcoin',
		due: 'today',
		category: 'Home'
	}));

	store.dispatch(TodoAction.add({
		title: 'finish TPS report',
		due: 'yesterday',
		category: 'Work'
	}));

});

describe('Initial store tests ', () => {
	test('Test our category counts', () => {
		const { categories } = store.getState();

		expect(categories.byTitle['Home'].items.length).toBe(3);
	});

	test('Test the category todo list', () => {
		const { categories } = store.getState();
		const testList = ['wash car', 'sell car', 'buy bitcoin']

		expect(categories.byTitle['Home'].items).toEqual(expect.arrayContaining(testList));
	});
});

describe('Removing todo items, testing category count', () => {
	test('removing a todo item', () => {
		store.dispatch(TodoAction.remove('sell car'));

		const { categories } = store.getState();
		const testList = ['wash car', 'buy bitcoin']

		expect(categories.byTitle['Home'].items).toEqual(expect.arrayContaining(testList));
	});
});

describe('Remove a category, check todo items category', () => {
	test('removing category Home', () => {
		store.dispatch(CategoryAction.remove('Home'));

		const { todos, categories } = store.getState();

		for (const [item, value] of Object.entries(todos)) {
			expect(value.category).not.toBe('Home');
		}
	});
});