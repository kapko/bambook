import React from 'react';
import {
    StyleSheet,
    Text,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';
import {lightBlue, white} from "../consts/style.consts";

export class Button extends React.Component {
    render() {
        return (
            <TouchableOpacity
                style={styles.button}
                onPress={this.props.onPress}>
                {/*<ActivityIndicator size="small" color="#fff" />*/}
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        color: white,
        padding: 15,
        paddingLeft: 40,
        textTransform: 'uppercase',
        fontWeight: '700',
        paddingRight: 40,
        width: '100%',
        backgroundColor: lightBlue,
        textAlign: 'center',
        overflow: 'hidden',
        borderRadius: 25,
    },
    buttonText: {
        fontSize: 16,
        color: white,
        // padding: 15,
        // paddingLeft: 40,
        // textTransform: 'uppercase',
        fontWeight: '700',
        // paddingRight: 40,
        // width: '100%',
        // backgroundColor: lightBlue,
        // textAlign: 'center',
        // overflow: 'hidden',
        // borderRadius: 25,
    },

});

