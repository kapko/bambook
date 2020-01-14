import {createMaterialTopTabNavigator} from "react-navigation-tabs";
// local files
import {LoginPage} from "../pages/login/loginPage";
import {SignUpPage} from "../pages/signup";
import {authTabBarOptions} from "./tabbar.options";

export const AuthNavigator = createMaterialTopTabNavigator({
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
        initialRouteName: 'Login',
        tabBarOptions: authTabBarOptions
    }
);

