import React from "react";
import {createStackNavigator} from "react-navigation-stack";
import {createMaterialTopTabNavigator} from "react-navigation-tabs";
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {zoomIn} from 'react-navigation-transitions';
import {createAppContainer} from "react-navigation";
// local pages
import {MainPage} from '../pages/main/main';
import {ShopsPage} from "../pages/shops/shops";
import {Login} from "../pages/login/login";
import {SearchPage} from "../pages/search/search";
import {DetailsPage} from "../pages/details/details";
import {ProfilePage} from "../pages/profile/profile";
import {BasketPage} from "../pages/basket/basket";
// bottom component
import {TabBar} from '../components';
// transitions
import {transition} from "./router.transitions";
import {routes} from "../consts/routes";

const LoginNavigator = createStackNavigator({screen: Login});
const ShopsPageNavigator = createStackNavigator({screen: ShopsPage});
const BasketPageNavigator = createStackNavigator({screen: BasketPage});
const ProfilePageNavigator = createStackNavigator({screen: ProfilePage});
const MainPageNavigator = createStackNavigator({
    MainPage: MainPage,
    SearchPage: SearchPage,
    Details: DetailsPage,
}, {
    transitionConfig: () => zoomIn(200),
});

const TabNavigator = createMaterialTopTabNavigator({
        Main: MainPageNavigator,
        Shop: ShopsPageNavigator,
        Basket: BasketPageNavigator,
        Profile: ProfilePageNavigator,
    }, {
        tabBarPosition: 'bottom',
        initialRouteName: routes.main,
        tabBarComponent: props => <TabBar {...props} />,
    }
);

const MainRouter = createAnimatedSwitchNavigator({
    tabNavigator: TabNavigator,
    authNavigator: LoginNavigator
}, {
    initialRouteName: routes.auth,
    transition: (transition),
});

export default createAppContainer(MainRouter);
