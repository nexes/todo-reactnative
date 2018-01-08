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
} from 'react-native';


export class Categories extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			categories: []
		};

		this.updateStateFromProps = this.updateStateFromProps.bind(this);
		this.addCategoryItem = this.addCategoryItem.bind(this);
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

	componentDidMount() {
		this.updateStateFromProps(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.updateStateFromProps(nextProps);
	}

	addCategoryItem() {
		//	TODO need to display a window to create a new category
	}

	listKeyItem(item, index) {
		return index;
	}

	listRenderItem({ item }) {
		return (
			<CategoryItem value={item.title} color={item.color} count={item.count}/>
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
