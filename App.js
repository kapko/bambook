import React from 'react';
import AppContainer from './routes';
import * as firebase from 'firebase';
import {firebaseConfig} from "./env/firebase.config";

export default class App extends React.Component {
    componentDidMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
    }

    render() {
        return (
            <AppContainer />
        )
    }
}
