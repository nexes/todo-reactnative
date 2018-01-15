import React from 'react';
import PropTypes from 'prop-types';
import { Styles } from './style';
import {
	Text,
	View
} from 'react-native';


export default class TimeAndTitle extends React.Component {
	constructor(props) {
		super(props);

		this.monthMap = {
			0: 'January',
			1: 'February',
			2: 'March',
			3: 'April',
			4: 'May',
			5: 'June',
			6: 'July',
			7: 'August',
			8: 'September',
			9: 'October',
			10: 'November',
			11: 'December'
		};
		this.dayMap = {
			0: 'Sunday',
			1: 'Monday',
			2: 'Tuesday',
			3: 'Wednesday',
			4: 'Thursday',
			5: 'Friday',
			6: 'Saturday',
		};
	}

	formatTime() {
		const time = new Date();
		const weekDay = time.getDay();
		const monthDay = time.getDate();
		const month = time.getMonth();

		return `${this.dayMap[weekDay]} ${monthDay} ${this.monthMap[month]}`;
	}

	render() {
		let timeElem = null;

		if (this.props.showTime) {
			timeElem = <Text style={Styles.timeText}>{this.formatTime()}</Text>;
		}

		return (
			<View style={[Styles.container, this.props.style]}>
				<Text style={Styles.text}>{this.props.title}</Text>
				{timeElem}
			</View>
		);
	}
}

TimeAndTitle.propTypes = {
	title: PropTypes.string.isRequired,
	showTime: PropTypes.bool,
};
