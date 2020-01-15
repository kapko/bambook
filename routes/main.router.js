import {createStackNavigator} from "react-navigation-stack";
import {createMaterialTopTabNavigator} from "react-navigation-tabs";
// local files
import {MainPage} from "../pages/main/main";
import {DetailsPage} from "../pages/details/details";
import {zoomIn} from "react-navigation-transitions";
import {ShopsPage} from "../pages/shops/shops";
import {BasketPage} from "../pages/basket/basket";
import {ProfilePage} from "../pages/profile/profile";
import {routes} from "../consts/routes";
import {mainTabBarOptions} from "./tabbar.options";

const MainPageNavigator = createStackNavigator({
  MainPage: MainPage,
  Details: {
    screen: DetailsPage,
    gesturesEnabled: false,
    navigationOptions: {
      gesturesEnabled: false,
    }
  },
}, {
  headerMode: 'none',
  transitionConfig: () => zoomIn(200),
});

export const TabNavigator = createMaterialTopTabNavigator({
    Main: {
      screen: MainPageNavigator,
    },
    Shop: ShopsPage,
    Basket: BasketPage,
    Profile: ProfilePage,
  },
  {
    tabBarPosition: 'bottom',
    initialRouteName: routes.main,
    navigationOptions: ({navigation, screenProps}) => {
      console.log('screenProps');
    },
    tabBarOptions: mainTabBarOptions,
  }
);

