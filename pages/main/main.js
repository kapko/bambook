import React from "react";
import {
    Text,
    Image,
    View,
    ActivityIndicator,
    TextInput,
    ScrollView,
    StyleSheet
} from "react-native";
import {MainBanner} from './components/banner';
import {dark, darkBlue, yellow} from "../../consts/style.consts";
import * as Font from 'expo-font';

const categoryImages = [
    {
        uri: 'https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        name: 'first',
    },
    {
        uri: 'https://analyticsindiamag.com/wp-content/uploads/2019/07/image_rec_lib_banner.jpg',
        name: 'second',
    },
];

export class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            categories: null,
            fontLoaded: false,
        }
    }

    async componentDidMount() {
        await Font.loadAsync({
            'appetite': require('../../assets/fonts/Appetite.ttf'),
        });

        this.setState({fontLoaded: true});
    }

    render() {
        if (!this.state.fontLoaded) {
            return <ActivityIndicator size="large" color="#0000ff" />
        }

        return (
            <View style={styles.container}>
                <MainBanner/>
                {/*<View style={styles.search}>*/}
                {/*    <TextInput*/}
                {/*        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}*/}
                {/*        placeholder={'Поиск по блюдам'}*/}
                {/*    />*/}
                {/*    <Text>Some info</Text>*/}
                {/*</View>*/}
                <View style={styles.title}>
                    <View style={styles.titleBorder}></View>
                    <Text style={styles.titleText}>Наше Меню</Text>
                    <View style={styles.titleBorder}></View>
                </View>
                <ScrollView>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci delectus eius ex illum nisi
                        pariatur perspiciatis possimus quam quos sapiente. Commodi dignissimos harum iusto
                        necessitatibus obcaecati perferendis ut voluptate, voluptatem!</Text>
                </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: dark,
    },
    search: {
        backgroundColor: darkBlue,
    },
    title: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleBorder: {
        height: 2,
        backgroundColor: yellow,
        width: '15%',
        alignItems: 'center',
        margin: 3,
    },
    titleText: {
        paddingTop: 10,
        fontFamily: 'appetite',
        fontSize: 24,
        color: '#fff',
    }
});
