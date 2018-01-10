import { NewCategoryScreen } from './newcategory';
import { connect } from 'react-redux';
import { CategoryAction } from '../../store/store';


function mapDispatchToProps(dispatch) {
	return {
		addCategory: (title, color) => {
			dispatch(CategoryAction.add({ title, color }));
		}
	};
}

export default connect(null, mapDispatchToProps)(NewCategoryScreen);
