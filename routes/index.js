import React from "react";
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {createAppContainer} from "react-navigation";
// transitions
import {transition} from "./router.transitions";
import {AuthNavigator} from "./auth.router";
import {TabNavigator} from "./main.router";
import {routes} from "../consts/routes";

const MainRouter = createAnimatedSwitchNavigator({
    authNavigator: AuthNavigator,
    menuNavigator: TabNavigator,
}, {
    initialRouteName: routes.menu,
    transition: (transition),
});

export default createAppContainer(MainRouter);
