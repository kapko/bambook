import {Animated, Easing} from "react-native";

export const animations = (listAnimation, index) => {
    listAnimation.forEach(animation => {
        const isEq = animation.index === index;

        Animated.timing(animation.item, {
            toValue: isEq ? 100 : 0,
            duration: 200,
            easing: Easing.bounce
        }).start();
        Animated.timing(animation.margin, {
            toValue: isEq ? (-40) : 0,
            duration: 500,
            delay: 100,
            easing: Easing.bounce
        }).start();
    });
};
