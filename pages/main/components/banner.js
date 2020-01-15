import {Image, StyleSheet, View} from "react-native";
import React from "react";

export class MainBanner extends React.Component {
    render() {
        return <View style={styles.banner}>
            <View style={styles.bannerLogo}>
                <Image
                    resizeMode={'cover'}
                    style={styles.bannerLogoImage}
                    source={require('../../../assets/images/banner_logo_mini.png')}/>
            </View>
            <Image
                style={styles.bannerImage}
                resizeMode={'cover'}
                source={require('../../../assets/images/banner.jpeg')}/>
        </View>
    }
}

const styles = StyleSheet.create({
    banner: {
        position: 'relative',
    },
    bannerLogo: {
        width: 110,
        height: 110,
        backgroundColor: '#E31E24',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        top: '50%',
        left: '50%',
        marginTop: -48,
        marginLeft: -48,
        position: 'absolute',
    },
    bannerLogoImage: {
        width: 51,
        height: 58,
    },
    bannerImage: {
        width: '100%',
        height: 250,
    }
});
