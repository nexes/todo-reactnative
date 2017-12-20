import {
	store,
	CategoryAction,
	TodoAction,
} from '../app/store/store';


beforeAll(() => {
	//	creating some categories
	store.dispatchAction(CategoryAction.add({
		text: 'Home',
		color: 'red'
	}));
	store.dispatchAction(CategoryAction.add({
		text: 'Money',
		color: 'green'
	}));

	//	creating some todo items
	store.dispatchAction(TodoAction.add({
		text: 'wash car',
		date: 'today',
		category: 'Home'
	}));
	store.dispatchAction(TodoAction.add({
		text: 'sell car',
		date: 'tommorow',
		category: 'Home'
	}));
	store.dispatchAction(TodoAction.add({
		text: 'buy bitcoin',
		date: 'today',
		category: 'Home'
	}));

});


describe('Testing todo and category relationship', () => {
	test('Renaming a category, checking todo changes', () => {
		store.dispatchAction(CategoryAction.rename('Home', 'Fun'));
		const todos = store.getTodoItems();

		for (let todo of todos) {
			expect(todo.category).toBe('Fun');
		}
	});
});

describe('Testing todo category when the category is removed', () => {
	test('Deleting category Fun', () => {
		store.dispatchAction(CategoryAction.remove('Fun'));
		const { todo, category } = store.currentState();

		for (let todoItem of todo) {
			expect(todoItem.category).toBe('Today');
		}

		for (let categoryItem of category) {
			expect(['Today', 'Money']).toContain(categoryItem.text);
		}
	});
});

describe('Testing the cateogry todo count', () => {
	test('add a new todo item to a category', () => {
		let category = store.getTodoCategories();

		for (let c of category) {
			if (c.text === 'Today') {
				expect(c.count).toBe(3);
			}
		}

		store.dispatchAction(TodoAction.add({ text: 'watch movie', date: 'tomorrow', category: 'Today' }));

		category = store.getTodoCategories();
		for (let c of category) {
			if (c.text === 'Today') {
				expect(c.count).toBe(4);
			}
		}
	});

	test('remove a todo item from a category', () => {
		let category = store.getTodoCategories();

		for (let c of category) {
			if (c.text === 'Today') {
				expect(c.count).toBe(4);
			}
		}

		store.dispatchAction(TodoAction.remove('watch movie'));

		category = store.getTodoCategories();
		for (let c of category) {
			if (c.text === 'Today') {
				expect(c.count).toBe(3);
			}
		}
	});
});
