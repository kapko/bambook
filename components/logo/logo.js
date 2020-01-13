import React from 'react';
import {
    Image,
    StyleSheet
} from 'react-native';

export class Logo extends React.Component {
    render() {
        return  <Image
                resizeMode='contain'
                style={styles.image}
                source={require('../../assets/images/login.png')}/>
    }
}

const styles = StyleSheet.create({
    image: {
        width: '70%',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});

