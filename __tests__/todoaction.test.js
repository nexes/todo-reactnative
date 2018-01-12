import { store, TodoAction } from '../app/store/store';


beforeAll(() => {
	store.dispatch(TodoAction.add({
		title: 'work on code',
		due: 'tomorrow',
		category: 'Work'
	}));

	store.dispatch(TodoAction.add({
		title: 'write tests',
		due: 'today',
		category: 'Work'
	}));

	store.dispatch(TodoAction.add({
		title: 'buy headphones',
		due: 'tomorrow',
		category: 'Home'
	}));

	store.dispatch(TodoAction.add({
		title: 'buy new computer',
		due: 'today',
		category: 'Home'
	}));
});

describe('Test adding todo item actions', () => {
	test('Adding three todo items', () => {

		const { todos } = store.getState();
		expect(Object.keys(todos.byTitle).length).toBe(4);
	});
});

describe('Test removing todo item actions', () => {
	test('Removing two todo items', () => {
		store.dispatch(TodoAction.remove('buy headphones'));
		store.dispatch(TodoAction.remove('write tests'));

		const { todos } = store.getState();
		expect(Object.keys(todos.byTitle).length).toBe(2);
	});
});

describe('Test completing todo item action', () => {
	test('Complete a todo item', () => {
		store.dispatch(TodoAction.complete('work on code'));

		const { todos } = store.getState();
		expect(todos.byTitle['work on code'].completed).toBeTruthy();
	});
});

describe('Test the due date of a todo item', () => {
	test('Change the due date to tomorrow', () => {
		store.dispatch(TodoAction.dueDate('buy new computer', 'wednesday'));

		const { todos } = store.getState();
		const todoItem = todos.byTitle['buy new computer'];

		expect(todoItem.due).toBe('wednesday');
	});
});

describe('Test category changes of a todo item', () => {
	test('Change category to Code', () => {
		store.dispatch(TodoAction.category('work on code', 'Code'));
		store.dispatch(TodoAction.category('buy new computer', 'Code'));

		const { todos } = store.getState();

		for (let [key, value] of Object.entries(todos.byTitle)) {
			expect(value.category).toBe('Code');
		}
	});
});

describe('Test renaming a todo title', () => {
	test('Change the todo title to \'learn to code\'', () => {
		store.dispatch(TodoAction.updateTitle('work on code', 'learn to code'));

		const { todos } = store.getState()
		const items = Object.keys(todos.byTitle);

		expect(items).toEqual(expect.arrayContaining(['learn to code']));
	});
});
