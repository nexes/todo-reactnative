import React from 'react';
import { CategoryItem } from '../../component/categoryitem';
import { store } from '../../store/store';
import { TimeAndTitle } from '../../component/titlecard';
import { style } from './style';
import {
  SafeAreaView,
  Text,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';


export default class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: store.getTodoCategories(),
    };
  }

  listKeyItem(item, index) {
    return index;
  }

  listRenderItem({ item }) {
    return (
      <CategoryItem value={item.text} color={item.color} count={item.count}/>
    );
  }

  render() {
    return (
      <SafeAreaView style={style.container}>
        <TimeAndTitle style={style.todayCard} title='Todo categories'/>
        <KeyboardAvoidingView style={style.categoryList}>
          <FlatList
            keyExtractor={this.listKeyItem}
            renderItem={this.listRenderItem}
            extraDate={this.state}
            data={this.state.categories}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
