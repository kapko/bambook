import React from 'react';
import {
    View,
    StyleSheet,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';
import * as firebase from 'firebase';
import {Logo, InputField, Button} from '../components';
import {dark} from "../consts/style.consts";
import {regex} from "../consts/regex";

export class SignUpPage extends React.Component {
    state = {
        email: null,
        password: null,
        errors: {}
    };

    onChange(field, e) {
        const state = {errors: {}};

        state[field] = e.nativeEvent.text;
        this.setState(state);
    }

    signUp() {
        const {email, password} = this.state;
        let validation = {};

        if (!email) {
            validation['emailError'] = 'Email is required';
        }

        if (!password) {
            validation['passwordError'] = 'Password is required';
        }

        if (email && !email.match(regex.email)) {
            validation['emailError'] = 'Email is not valid';
        }

        if (password && password.length < 5) {
            validation['passwordError'] = 'Password should be at least 6 characters';
        }

        this.setState({errors: {...validation}});
        this.submit(validation);
    }

    submit(validation) {
        Keyboard.dismiss();
        const {email, password} = this.state;

        if (!Object.keys(validation).length) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => this.props.navigation.navigate('Login'))
                .catch(err => Alert.alert('Error:', err.message));
        }
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
                    <Logo/>
                    <View style={styles.forms}>
                        <InputField
                            error={this.state.errors.emailError}
                            onChange={e => this.onChange('email', e)}
                            placeholder={'Почта'} />
                        <InputField
                            error={this.state.errors.passwordError}
                            onChange={e => this.onChange('password', e)}
                            placeholder={'Пароль'} />
                        <Button text={'Регистрация'} onPress={this.signUp.bind(this)}/>
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
    forms: {
        paddingBottom: 30,
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

