import { connect } from 'react-redux';
import { TodoAction } from '../../store/store';
import { NewTodoScreen } from './newitem';


/**
 * I want to setup our redux store our react component here in index.js. So our NewTodoScreen component is pure react
 * with no redux code.
 */

function mapStateToProps(state) {
	return {
		categories: state.category,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		newTodoItem: (obj) => {
			dispatch(TodoAction.add(obj));
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoScreen);
