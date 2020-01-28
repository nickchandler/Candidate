import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

const tabNavigator = createBottomTabNavigator({
  Feed: feedScreen,
  Candidates: candidatesScreen,
});

const MainNavigator = createAppContainer(tabNavigator);

export default MainNavigator;
