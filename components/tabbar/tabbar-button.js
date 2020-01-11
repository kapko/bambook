import {FontAwesome} from "@expo/vector-icons";
import {Animated, StyleSheet, TouchableOpacity} from "react-native";
import * as Animatable from "react-native-animatable";
import React from "react";
import {animations} from "./animations";
import {routes} from "../../consts/routes";

export class TabBarButton extends React.Component {
    list = [
        {
            name: 'Главная',
            icon: 'home',
            page: routes.main
        },
        {
            name: 'Магазин',
            icon: 'inbox',
            page: routes.shop
        },
        {
            name: 'Корзина',
            icon: 'shopping-cart',
            page: routes.basket
        },
        {
            name: 'Профайл',
            icon: 'user',
            page: routes.profile
        }
    ];

    constructor(props) {
        super(props);

        this.animations = this.list.map((el, index) => ({
            index,
            item: new Animated.Value(0),
            margin: new Animated.Value(0),
        }));

        this.tabs = this.animations.map(animation => ({
            backgroundColor: animation.item.interpolate({
                inputRange: [0, 100],
                outputRange: ['#fff', '#EE1D13']
            }),
            marginTop: animation.margin,
        }));

        this.texts = this.animations.map(animation => ({
            color: animation.item.interpolate({
                inputRange: [0, 100],
                outputRange: ['#fff', '#EE1D13']
            })
        }));
    }

    redirectTo(page, index) {
        this.props.navigation.navigate(page);

        animations(this.animations, index);
    }

    componentDidMount() {
        // this.redirectTo(routes.main, 0);
    }

    render() {
        const {index} = this.props.navigation.state;

        return(
            this.list.map((item, i) => <Animated.View
                key={`navigation_${i}`}
                style={[styles.tab, this.tabs[i]]}>
                <FontAwesome
                    name={item.icon}
                    style={[
                        styles.icon,
                        index === i ? styles.activeIcon : null
                    ]}/>
                <TouchableOpacity
                    style={styles.touch}
                    onPress={() => this.redirectTo(item.page, i)}>
                </TouchableOpacity>
                <Animatable.Text
                    duration={300}
                    animation={'fadeInUp'}
                    style={[styles.textStyle, this.texts[i]]}>{item.name}</Animatable.Text>
            </Animated.View>)
        )
    }
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        paddingBottom: 20,
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    active: {
        borderTopWidth: 3,
        borderColor: 'white'
    },
    inactive: {
        borderTopWidth: 3,
        borderColor: 'blue'
    },
    textStyle: {
        position: 'absolute',
        bottom: -15,
        textAlign: 'center',
        width: 50,
        color: '#fff',
        fontSize: 10,
    },
    icon: {
        fontSize: 26,
        color: '#929292'
    },
    activeIcon: {
        color: '#fff',
    },
    activeText: {
        color: '#CD1200',
    },
    tab: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
        height: 36,
        marginTop: 0,
        borderRadius: 20,
    },
    touch: {
        width: 40,
        height: 40,
        zIndex: 2,
        position: 'absolute',
    },
    activeTab: {
        marginTop: -35,
        backgroundColor: '#CD1200',
    },
});
