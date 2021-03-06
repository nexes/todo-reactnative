import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Today from './screens/today';
import Category from './screens/category';
import NewTodoScreen from './screens/newitem';
import NewCategoryScreen from './screens/newcategory';
import Settings from './screens/settings';
import {
	Button,
	Image
} from 'react-native';


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
		navigationOptions: () => ({
			tabBarIcon: () => (
				<Image source={require('./images/todo-tab-icon.png')} />
			),
		}),
	},
	Category: {
		screen: categoryNavigator,
		navigationOptions: () => ({
			tabBarIcon: () => (
				<Image source={require('./images/category-tab-icon.png')} />
			),
		}),
	},
	Settings: {
		screen: Settings,
		navigationOptions: () => ({
			tabBarIcon: () => (
				<Image source={require('./images/settings-tab-icon.png')} />
			),
		}),
	},
},
{
	initialRouteName: 'Today',
});


export { tabNavigator as Navigation };
