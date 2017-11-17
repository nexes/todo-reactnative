import React from 'react';
import {
  FlatList,
  Text,
  SafeAreaView
} from 'react-native';


export default class Today extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Today view</Text>
      </SafeAreaView>
    );
  }
}