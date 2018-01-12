import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TodoAction } from '../../store/store';
import { NewTodoScreen } from './newitem';


function mapStateToProps(state) {
	return {
		categories: state.categories.byTitle,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		newTodoItem: (obj) => {
			dispatch(TodoAction.add(obj));
		},
		updateTodoTitle: (oldTitle, newTitle, todoObj) => {
			dispatch(TodoAction.updateTitle(oldTitle, newTitle));
		},
		updateTodoCategory: (todoTitle, newCategory) => {
			dispatch(TodoAction.category(todoTitle, newCategory));
		},
		updateTodoNote: (todoTitle, note) => {
			dispatch(TodoAction.updateNote(todoTitle, note));
		}
	};
}

NewTodoScreen.propTypes = {
	categories: PropTypes.object.isRequired,
	newTodoItem: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoScreen);
