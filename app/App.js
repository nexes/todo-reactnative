import React from 'react';
import { SafeAreaView, Text } from 'react-native';


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Hello react native</Text>
      </SafeAreaView>
    );
  }
}
