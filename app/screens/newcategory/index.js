import { NewCategoryScreen } from './newcategory';
import { connect } from 'react-redux';
import { CategoryAction } from '../../store/store';


function mapDispatchToProps(dispatch) {
	return {
		addCategory: (title, color) => {
			dispatch(CategoryAction.add({ title, color }));
		},
		renameCategory: (title, newTitle) => {
			dispatch(CategoryAction.rename(title, newTitle));
		},
		changeColor: (title, newColor) => {
			dispatch(CategoryAction.changeColor(title, newColor));
		}
	};
}

export default connect(null, mapDispatchToProps)(NewCategoryScreen);
