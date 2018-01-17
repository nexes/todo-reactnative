import { StyleSheet } from 'react-native';


export const Style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1976d2',
	},
	todayCard: {
		backgroundColor: '#1976d2',
	},
	settingsList: {
		flex: 4,
		backgroundColor: '#e8e8e8',
	},
	listItemView: {
		borderBottomWidth: 1,
		borderBottomColor: 'lightgray',
		paddingLeft: 10,
		backgroundColor: '#f5f5f5',
	},
	colorItemView: {
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: 'lightgray',
		paddingLeft: 10,
		backgroundColor: '#f5f5f5',
	},
	notificationItemView: {
		borderBottomWidth: 1,
		borderBottomColor: 'lightgray',
		paddingLeft: 10,
		backgroundColor: '#f5f5f5',
	},
	listItemText: {
		top: '30%',
		fontSize: 14,
	},
	toggleSwitch: {
		bottom: '15%',
		alignSelf: 'flex-end'
	}
});
