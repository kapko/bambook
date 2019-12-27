import React from "react";
import {Text, View} from "react-native";

export class ProfilePage extends React.Component {
    static navigationOptions = {
        title: 'Profile',
        headerStyle:{ backgroundColor: '#eee'},
    };

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text onPress={() => this.props.navigation.replace('Login')}>Profile Screen</Text>
            </View>
        );
    }
}
