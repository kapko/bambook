import React from 'react';
import {StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {TabBarButton} from "./tabbar-button";

export class TabBar extends React.Component {

    render() {
        return (
            <Animatable.View
                animation={'fadeInUp'}
                duration={300}
                style={styles.container}>
                <TabBarButton navigation={this.props.navigation} />
            </Animatable.View>
        );
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
});


