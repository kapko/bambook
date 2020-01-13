import React from "react";
import {createStackNavigator} from "react-navigation-stack";
import {createMaterialTopTabNavigator} from "react-navigation-tabs";
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {zoomIn} from 'react-navigation-transitions';
import {createAppContainer} from "react-navigation";
// local pages
import {MainPage} from '../pages/main/main';
import {ShopsPage} from "../pages/shops/shops";
import {LoginPage} from "../pages/login/loginPage";
import {SearchPage} from "../pages/search/search";
import {DetailsPage} from "../pages/details/details";
import {ProfilePage} from "../pages/profile/profile";
import {BasketPage} from "../pages/basket/basket";
import {SignUpPage} from "../pages/signup";

// bottom component
import {TabBar} from '../components';
// transitions
import {transition} from "./router.transitions";
import {routes} from "../consts/routes";
import {darkBlue, fontColor} from "../consts/style.consts";


const MainPageNavigator = createStackNavigator({
    MainPage: MainPage,
    SearchPage: SearchPage,
    Details: DetailsPage,
}, {
    transitionConfig: () => zoomIn(200),
});

// tabs
const AuthNavigator = createMaterialTopTabNavigator({
        Login: {
            screen: LoginPage,
            navigationOptions: {
                tabBarLabel: 'Логин'
            }
        },
        SignUp: {
            screen: SignUpPage,
            navigationOptions: {
                tabBarLabel: 'Регистрация'
            }
        },
    }, {
        initialRouteName: 'SignUp',
        tabBarOptions: {
            inactiveTintColor: 'rgba(92, 120, 153, 0.5)',
            activeTintColor: fontColor,
            style: {
                backgroundColor: darkBlue,
                paddingTop: 40,
            },
            indicatorStyle: {
                backgroundColor: fontColor,
                height: 2,
            }
        }
    }
);

const TabNavigator = createMaterialTopTabNavigator({
        Main: MainPageNavigator,
        Shop: ShopsPage,
        Basket: BasketPage,
        Profile: ProfilePage,
    }, {
        tabBarPosition: 'bottom',
        initialRouteName: routes.main,
        tabBarComponent: props => <TabBar {...props} />,
    }
);

const MainRouter = createAnimatedSwitchNavigator({
    authNavigator: AuthNavigator,
    tabNavigator: TabNavigator,
}, {
    initialRouteName: 'authNavigator',
    transition: (transition),
});

export default createAppContainer(MainRouter);
