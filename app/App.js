import React from 'react';
import { Provider } from 'react-redux';
import { AppState, AsyncStorage } from 'react-native';
import { store, TodoAction, CategoryAction } from './store/store';
import { Navigation } from './routes';


export default class App extends React.Component {
	constructor(props) {
		super(props);

		AppState.addEventListener('change', this.appStateChange);
	}

	async componentWillUnmount() {
		let { todos, categories } = store.getState();

		await AsyncStorage.setItem('todo', JSON.stringify(todos.byTitle));
		await AsyncStorage.setItem('cateogry', JSON.stringify(categories.byTitle));
	}

	//	TODO
	appStateChange(state) {
		switch (state) {
			case 'background':
				console.log('app is now in the background');
				break;

			case 'active':
				console.log('app is now in the forground');
				break;

			case 'inactive':
				console.log('nothing, trasitioning into background');
				break;
		}
	}

	render() {
		return (
			<Provider store={store}>
				<Navigation />
			</Provider>
		);
	}
}
