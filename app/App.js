import React from 'react';
import { Provider } from 'react-redux';
import { AppState, AsyncStorage } from 'react-native';
import { store, TodoAction, CategoryAction } from './store/store';
import { Navigation } from './routes';


export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.storeIsDirty = false;
		this.unsubscribe = store.subscribe(() => this.storeIsDirty = true);

		this.appStateChange = this.appStateChange.bind(this);
		AppState.addEventListener('change', this.appStateChange);
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	//	TODO
	async appStateChange(state) {
		switch (state) {
			case 'background':
				if (this.storeIsDirty) {
					let { todos, categories } = store.getState();

					await AsyncStorage.setItem('todo', JSON.stringify(todos.byTitle));
					await AsyncStorage.setItem('cateogry', JSON.stringify(categories.byTitle));

					this.storeIsDirty = false;
				}
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
