import { connect } from 'react-redux';
import { TodoAction } from '../../store/store';
import { Today } from './today';


function mapStateToProps(state) {
	return {
		todos: state.todos.byTitle,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		completeTodo: (title) => {
			dispatch(TodoAction.complete(title));
		},

		initStoreTodos: (todos) => {
			dispatch(TodoAction.init(todos));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Today);
