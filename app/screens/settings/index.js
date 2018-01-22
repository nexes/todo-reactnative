import { connect } from 'react-redux';
import { Settings } from './settings';
import { SettingAction } from '../../store/store';


function mapStateToProps(state) {
	return {
		visible: state.ui.bySetting.visible,
		color: state.ui.bySetting.theme
	};
}

function mapDispatchToProps(dispatch) {
	return {
		initStore: (settings) => {
			dispatch(SettingAction.init(settings));
		},
		changeThemeColor: (color) => {
			dispatch(SettingAction.themeColor(color));
		},
		changeVisibility: (visible) => {
			dispatch(SettingAction.toggleVisibility(visible));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
