import { StyleSheet } from 'react-native';


export const Style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5F5F5'
	},
	title: {
		marginTop: 20,
		alignSelf: 'center',
		fontSize: 20,
	},
	titleInput: {
		flex: 1,
		width: '100%',
		borderBottomColor: 'black',
		borderBottomWidth: 0.5,
		paddingLeft: 20,
		paddingRight: 20,
		marginBottom: 20,
		fontSize: 20,
	},
	colorPicker: {
		flex: 5,
	}
});
