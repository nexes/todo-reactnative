import React from 'react';
import PropTypes from 'prop-types';
import { Style } from './style';
import {
	TouchableOpacity,
	Image,
} from 'react-native';


export default class Checkbox extends React.Component {
	constructor(props) {
		super(props);

		this.toggleActive = this.toggleActive.bind(this);
	}

	toggleActive() {
		let { onCheckEvent } = this.props;
		if (onCheckEvent) onCheckEvent();
	}

	render() {
		let icon = this.props.checked ?
			require('../../images/todoCheck.png') :
			require('../../images/todoNoCheck.png');

		return (
			<TouchableOpacity
				style={[Style.container, this.props.style]}
				onPress={this.toggleActive}>

				<Image source={icon}/>
			</TouchableOpacity>
		);
	}
}

Checkbox.propTypes = {
	onCheckEvent: PropTypes.func,
	checked: PropTypes.bool.isRequired,
};
