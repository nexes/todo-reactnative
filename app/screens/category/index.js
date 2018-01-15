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
		initStore: (category) => {
			dispatch(CategoryAction.init(category));
		},
		removeCategory: (category) => {
			dispatch(CategoryAction.remove(category));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
