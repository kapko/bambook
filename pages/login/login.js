import React from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import {routes} from "../../consts/routes";

export class Login extends React.Component {
    static navigationOptions = {
        title: 'Авторизация'
    };

    goLogin() {
        this.props.navigation.navigate('Main');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputParent}>
                    <TextInput
                        autoCorrect={false}
                        placeholder={'Ваша почта'}
                        style={styles.input}/>
                </View>
                <View style={styles.inputParent}>
                    <TextInput
                        autoCorrect={false}
                        placeholder={'Пароль'}
                        style={styles.input}/>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.goLogin()}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingTop: 80,
    },
    inputParent: {
        paddingBottom: 30,
    },
    input: {
        borderWidth: 1,
        padding: 15,
        borderColor: '#bcbcbc',
        borderRadius: 3,
        fontSize: 14
    },
    button: {
        alignItems: 'center',
        paddingTop: 30,
    },
    buttonText: {
        fontSize: 16,
        color: '#fff',
        padding: 15,
        paddingLeft: 40,
        textTransform: 'uppercase',
        fontWeight: '700',
        paddingRight: 40,
        backgroundColor: '#fc1e11',
        textAlign: 'center',
        overflow: 'hidden',
        borderRadius: 7,
    }
});

