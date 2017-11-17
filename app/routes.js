import { TabNavigator, StackNavigator } from 'react-navigation';
import { Today } from './screens/today';


const tabNavigator = TabNavigator({
  Today: {
    screen: Today
  }
});


export { tabNavigator as Navigation };