import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Navigation } from './routes';


export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Provider store={store}>
				<Navigation/>
			</Provider>
		);
	}
}
