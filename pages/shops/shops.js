import React from "react";
import {Text, View} from "react-native";

export class ShopsPage extends React.Component {
    static navigationOptions = {
        title: 'Shops',
        headerStyle:{ backgroundColor: '#FFF'},
    };
    static screenOption = {
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text onPress={() => this.props.navigation.replace('Login')}>NewDeviceStack Screen</Text>
            </View>
        );
    }
}
