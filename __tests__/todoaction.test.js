import { store } from '../app/store/store';
import * as Actions from '../app/store/action/todoaction';


const myTodo = {
	text: 'wash dishes',
	category: 'home',
	note: 'do it good'
};

beforeEach(() => {
	store.dispatchAction(Actions.add(myTodo));
});

describe('Testing todo actions', () => {
	test('adding a todo item', () => {
		const todo = store.getTodoItems();

		expect(todo).toHaveLength(1);
		expect(todo[0]).toMatchObject(myTodo);
	});

	test('removing a todo item', () => {
		store.dispatchAction(Actions.remove(myTodo.text));

		const todo = store.getTodoItems();
		expect(todo).toEqual([]);
	});

	test('completing a todo item', () => {
		store.dispatchAction(Actions.complete(myTodo.text));

		const todo = store.getTodoItems();
		expect(todo[0].completed).toBeTruthy();
	});

	test('changing a todo category', () => {
		store.dispatchAction(Actions.category(myTodo.text, 'School'));

		const todo = store.getTodoItems();
		expect(todo[0].category).toBe('School');
	});
});
