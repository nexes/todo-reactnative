import React from 'react';
import { style } from './style';
import { CategoryItem } from '../../component/categoryitem';
import { TimeAndTitle } from '../../component/titlecard';
import { AddTodoButton } from '../../component/button';
import {
	SafeAreaView,
	Text,
	FlatList,
	KeyboardAvoidingView,
	AsyncStorage
} from 'react-native';


export class Categories extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			categories: []
		};

		this.updateStateFromProps = this.updateStateFromProps.bind(this);
		this.addCategoryItem = this.addCategoryItem.bind(this);
		this.categoryItemLongPress = this.categoryItemLongPress.bind(this);
		this.listRenderItem = this.listRenderItem.bind(this);
	}

	updateStateFromProps(nextProps) {
		//	TODO need to do a deep object check of nextProps and this.props
		if (nextProps) {
			const keys = Object.keys(nextProps.categories);

			this.setState(() => {
				return {
					categories: keys.map((elem) => {
						return {
							title: elem,
							color: nextProps.categories[elem].color,
							count: nextProps.categories[elem].items.length
						};
					})
				};
			});
		}
	}

	async componentDidMount() {
		try {
			const categories = await AsyncStorage.getItem('category');

			if (categories) {
				this.props.initStore(JSON.parse(categories));
			}

		} catch (e) {
			console.log('Error retreiving category data from storage: ', e);
		}
	}

	componentWillReceiveProps(nextProps) {
		this.updateStateFromProps(nextProps);
	}

	addCategoryItem() {
		const { navigate } = this.props.navigation;
		navigate('AddCategory', {editItem: false});
	}

	categoryItemLongPress(action, itemName) {
		switch (action) {
			case 'REMOVE':
				this.props.removeCategory(itemName);
				break;

			case 'EDIT':
				const { navigate } = this.props.navigation;
				const category = this.props.categories[itemName];

				navigate('AddCategory', { editItem: true, title: itemName, color: category.color });
				break;
		}
	}

	listKeyItem(item, index) {
		return index;
	}

	listRenderItem({ item }) {
		return (
			<CategoryItem
				value={item.title}
				color={item.color}
				count={item.count}
				categoryLongPress={this.categoryItemLongPress}
			/>
		);
	}

	render() {
		return (
			<SafeAreaView style={style.container}>
				<TimeAndTitle style={style.todayCard} title='Categories'/>
				<AddTodoButton style={style.addButton} addEvent={this.addCategoryItem}/>
				<KeyboardAvoidingView style={style.categoryList}>
					<FlatList
						data={this.state.categories}
						extraDate={this.state}
						keyExtractor={this.listKeyItem}
						renderItem={this.listRenderItem}
					/>
				</KeyboardAvoidingView>
			</SafeAreaView>
		);
	}
}
