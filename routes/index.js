import React from "react";
import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs";
import createAnimatedSwitchNavigator from "react-navigation-animated-switch";
import {Transition} from "react-native-reanimated";
// pages
import {MainPage} from '../pages/main/main';
import {ShopsPage} from "../pages/shops/shops";
import {Login} from "../pages/login/login";
import {routes} from "../consts/routes";

const LoginNavigator = createStackNavigator({screen: Login});
const MainPageNavigator = createStackNavigator({screen: MainPage});
const ShopsPageNavigator = createStackNavigator({screen: ShopsPage});

const BottomTabs = createBottomTabNavigator({
    Main: {screen: MainPageNavigator},
    Shop: {screen: ShopsPageNavigator}
});

export const MainRouter = createAnimatedSwitchNavigator({
    tabs: BottomTabs,
    login: LoginNavigator
}, {
    initialRouteName: routes.tabs,
    transition: (
        <Transition.Together>
            <Transition.Out
                type="slide-bottom"
                durationMs={200}
                interpolation="linear"
            />
        </Transition.Together>
    ),
});
