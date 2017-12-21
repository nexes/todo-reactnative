import { connect } from 'react-redux';
import { ActionType } from '../../store/action/categoryaction';
import { Categories } from './categories';


function mapStateToProps(state) {
	return {
		categories: state.category,
	};
}

function mapDispatchToProps(dispatch) {
	return {

	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
