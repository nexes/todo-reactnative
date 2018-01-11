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
	};
}

NewTodoScreen.propTypes = {
	categories: PropTypes.object.isRequired,
	newTodoItem: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoScreen);
