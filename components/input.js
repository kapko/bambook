import React from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Text,
} from 'react-native';
// local files
import {lightBlue, red} from "../consts/style.consts";

export class InputField extends React.Component {
    render() {
        return (
            <View style={styles.inputParent}>
                <TextInput
                    autoCorrect={false}
                    placeholder={this.props.placeholder}
                    placeholderTextColor={lightBlue}
                    onChange={this.props.onChange}
                    style={[styles.input, this.props.error ? styles.errorInput : null]}/>
                {this.props.error ? <Text style={styles.errorText}>{this.props.error}</Text> : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputParent: {
        paddingBottom: 10,
    },
    input: {
        borderWidth: 1,
        padding: 15,
        borderColor: lightBlue,
        borderRadius: 30,
        fontSize: 14,
        color: lightBlue
    },
    errorInput: {
      borderColor: red,
    },
    errorText: {
        color: red,
        paddingTop: 7,
        textAlign: 'center'
    }
});
