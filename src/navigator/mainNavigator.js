import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial140435Navigator from '../features/Tutorial140435/navigator';
import NotificationList140407Navigator from '../features/NotificationList140407/navigator';
import Settings140406Navigator from '../features/Settings140406/navigator';
import Settings140398Navigator from '../features/Settings140398/navigator';
import UserProfile140396Navigator from '../features/UserProfile140396/navigator';
import Settings140343Navigator from '../features/Settings140343/navigator';
import Settings140326Navigator from '../features/Settings140326/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial140435: { screen: Tutorial140435Navigator },
NotificationList140407: { screen: NotificationList140407Navigator },
Settings140406: { screen: Settings140406Navigator },
Settings140398: { screen: Settings140398Navigator },
UserProfile140396: { screen: UserProfile140396Navigator },
Settings140343: { screen: Settings140343Navigator },
Settings140326: { screen: Settings140326Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
