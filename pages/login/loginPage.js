import React from 'react';
import {
    View,
    StyleSheet,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import * as firebase from 'firebase';
import {Logo, InputField, Button} from '../../components';
import {dark} from "../../consts/style.consts";

export class LoginPage extends React.Component {

    goLogin() {
        firebase.auth().signInWithEmailAndPassword('letscodebishkek@gmail.com', '123123Kk')
            .then(r => {
                console.log(r.user.uid);
            })
            .catch(err => {
                console.log(err.message);
                // err.forEach(e => {
                //     console.log(e);
                // });
            });
        // this.props.navigation.navigate('Main');
    }

    render() {
        return (
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView
                    behavior="padding"
                    keyboardVerticalOffset={250}
                    style={styles.container}
                    enabled>
                    <View style={styles.logoParent}>
                        <Logo/>
                    </View>
                    <View style={styles.forms}>
                        <InputField placeholder={'Почта'}/>
                        <InputField placeholder={'Пароль'}/>
                        <Button text={'Войти'} onPress={this.goLogin}/>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: dark,
        paddingHorizontal: 15,
        flex: 1,
        justifyContent: 'center',
    },
    logoParent: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.7,
    },
    forms: {
        flex: 0.3,
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

});

