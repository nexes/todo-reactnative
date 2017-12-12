import React from 'react';
import { store } from '../../store/store';
import { TimeAndTitle } from '../../component/titlecard';
import { style } from './style';
import {
  SafeAreaView,
  Text,
  FlatList,
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
      <Text>{item.text}</Text>
    );
  }

  render() {
    return (
      <SafeAreaView style={style.container}>
        <TimeAndTitle style={style.todayCard} title='Todo categories'/>
        <FlatList
          style={style.categoryList}
          keyExtractor={this.listKeyItem}
          renderItem={this.listRenderItem}
          extraDate={this.state}
          data={this.state.categories}
        />
      </SafeAreaView>
    );
  }
}
