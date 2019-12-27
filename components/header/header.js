import React from 'react';
import {Feather} from '@expo/vector-icons';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    this.props.nav.navigate('Shop');
                }}><Text style={styles.text}>YartaKG</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.props.nav.navigate('SearchPage');
                }}>
                    <Feather name={'search'} size={24}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: '700',
    },
});
