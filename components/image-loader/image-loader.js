import React from 'react';
import {
    StyleSheet,
    ActivityIndicator,
    View
} from 'react-native';

export default class ImageLoader extends React.Component {
    render() {
        return this.props.loading ? <View style={styles.container}>
            <ActivityIndicator size="small" color="#000"/>
        </View> : null
    }
}
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.7,
        backgroundColor: "#F5F5F5",
        justifyContent: "center",
        alignItems: "center",
    }
});
