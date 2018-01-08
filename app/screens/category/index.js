import { connect } from 'react-redux';
import { CategoryAction } from '../../store/store';
import { Categories } from './categories';


function mapStateToProps(state) {
	return {
		categories: state.categories.byTitle,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		addCategory: (title) => {
			dispatch(CategoryAction.add(title));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
