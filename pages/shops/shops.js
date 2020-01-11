import React from "react";
import {Text, View} from "react-native";

export class ShopsPage extends React.Component {
    static navigationOptions = {
        title: 'Shops',
        headerStyle:{ backgroundColor: '#FFF'},
    };

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>NewDeviceStack Screen</Text>
            </View>
        );
    }
}
