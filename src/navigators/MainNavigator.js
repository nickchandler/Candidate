import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

const MainNavigator = createBottomTabNavigator({
  Feed: feedScreen,
  Candidates: candidatesScreen,
});
