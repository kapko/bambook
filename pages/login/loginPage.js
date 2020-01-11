import React from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {routes} from "../../consts/routes";
import {dark, darkBlue} from "../../consts/style.consts";

export class LoginPage extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'First',
    };

    goLogin() {
        console.log('login');
        // this.props.navigation.navigate('Main');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image
                        resizeMode='contain'
                        style={styles.image}
                        source={require('../../assets/images/login.png')}/>
                </View>
                <View style={styles.forms}>
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
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: dark,
        paddingHorizontal: 15,
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
    },
    inputParent: {
        paddingBottom: 30,
    },
    forms: {
        backgroundColor: 'red',
        flex: 0.3,
        paddingBottom: 60,
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
    },
    logo: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '70%',
        // height: '70%',
    }
});

