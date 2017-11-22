import { TabNavigator, StackNavigator } from 'react-navigation';
import { Today } from './screens/today';
import { NewTodoScreen } from './screens/newitem';


const myDayNavigator = StackNavigator({
  Home: {
    screen: Today,
    navigationOptions: {
      headerStyle: {display: 'none'},
    }
  },
  AddItem: {
    screen: NewTodoScreen,
    navigationOptions: {
      headerLeft: null,
      title: 'New todo',
    }
  }
},{
  initialRouteName: 'Home',
  mode: 'modal',
});

const tabNavigator = TabNavigator({
  Today: {
    screen: myDayNavigator
  }
});


export { tabNavigator as Navigation };