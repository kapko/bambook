import React from 'react';
import AppContainer from './routes';
import {SafeAreaView} from 'react-native';
import * as firebase from 'firebase';
import {firebaseConfig} from "./env/firebase.config";
import {dark} from "./consts/style.consts";

export default class App extends React.Component {
    componentDidMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
    }

    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: dark
            }}>
                <AppContainer/>
            </SafeAreaView>
        )
    }
}

