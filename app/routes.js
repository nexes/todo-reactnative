import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Today from './screens/today';
import Category from './screens/category';
import NewTodoScreen from './screens/newitem';
import NewCategoryScreen from './screens/newcategory';
import { Button } from 'react-native';


const myDayNavigator = StackNavigator({
	Home: {
		screen: Today,
		navigationOptions: {
			headerStyle: {display: 'none'},
		},
	},
	AddItem: {
		screen: NewTodoScreen,
		navigationOptions: ({ navigation }) => ({
			title: 'A new todo',
			headerLeft: null,
			headerRight: <Button title='cancel' onPress={() => navigation.goBack()} />,
		}),
	},
},
{
	initialRouteName: 'Home',
	mode: 'modal',
});


const categoryNavigator = StackNavigator({
	Category: {
		screen: Category,
		navigationOptions: {
			headerStyle: {display: 'none'},
		},
	},
	AddCategory: {
		screen: NewCategoryScreen,
		navigationOptions: ({ navigation }) => ({
			title: 'A new category',
			headerLeft: null,
			headerRight: <Button title='cancel' onPress={() => navigation.goBack()} />,
		}),
	}
},
{
	initialRouteName: 'Category',
	mode: 'modal',
});


const tabNavigator = TabNavigator({
	Today: {
		screen: myDayNavigator,
	},
	List: {
		screen: categoryNavigator,
	},
},
{
	initialRouteName: 'Today'
});


export { tabNavigator as Navigation };
