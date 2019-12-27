import {Transition} from "react-native-reanimated";
import React from "react";

export const transition = <Transition.Together>
    <Transition.Out
        type="slide-bottom"
        durationMs={400}
        interpolation="easeIn"
    />
    <Transition.In type="fade" durationMs={500} />
</Transition.Together>;
