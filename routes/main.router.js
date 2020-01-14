import {createStackNavigator} from "react-navigation-stack";
import {createMaterialTopTabNavigator} from "react-navigation-tabs";
// local files
import {MainPage} from "../pages/main/main";
import {SearchPage} from "../pages/search/search";
import {DetailsPage} from "../pages/details/details";
import {zoomIn} from "react-navigation-transitions";
import {ShopsPage} from "../pages/shops/shops";
import {BasketPage} from "../pages/basket/basket";
import {ProfilePage} from "../pages/profile/profile";
import {routes} from "../consts/routes";
import {mainTabBarOptions} from "./tabbar.options";

const MainPageNavigator = createStackNavigator({
    MainPage: MainPage,
    SearchPage: SearchPage,
    Details: DetailsPage,
}, {
    headerMode: 'none',
    transitionConfig: () => zoomIn(200),
});

export const TabNavigator = createMaterialTopTabNavigator({
        Main: {
            screen: MainPageNavigator,
            navigationOptions: {
                tabBarLabel: 'Меню'
            }
        },
        Shop: ShopsPage,
        Basket: BasketPage,
        Profile: ProfilePage,
    }, {
        tabBarPosition: 'bottom',
        initialRouteName: routes.main,
        tabBarOptions: mainTabBarOptions
    }
);
