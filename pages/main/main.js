import React from "react";
import {ScrollView, ActivityIndicator, Animated} from "react-native";
import {Banner, Categories, Columns, Header} from "../../components";
import axios from 'axios';
import {ENVIROMENT} from '../../env/env';

const images = [
    'https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    'https://analyticsindiamag.com/wp-content/uploads/2019/07/image_rec_lib_banner.jpg',
];

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
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: () => <Header nav={navigation} />
        }
    };

    constructor(props) {
        super(props);

        this.state = {
            data: null,
            categories: null,
            loaded: false
        }
    }

    componentDidMount() {
        this.getBanners();
        this.getCategories();
    }

    getBanners() {
        axios.get(`${ENVIROMENT.API}/top`)
            .then(res => {
                if (res && res.status === 200) {
                    this.setState({data: res.data, loaded: true});
                }
            })
            .catch(err => console.log('err', err));
    }

    getCategories() {
        axios.get(`${ENVIROMENT.API}/categories`)
            .then(res => {
                if (res && res.status === 200) {
                    const categories = res.data.map((category) => {
                        const url = category.main_image &&
                            category.main_image.conversions &&
                            category.main_image.conversions.xl &&
                            category.main_image.conversions.xl.url;
                       return {url, name: category.name};
                    });

                    this.setState({categories});
                }
            })
            .catch(err => console.log(err));
    }

    render() {
        if (!this.state.loaded) {
            return <ActivityIndicator size="large" color="#0000ff" />
        }

        return (
            <Animated.ScrollView style={{flex: 1, paddingHorizontal: 15, paddingVertical: 10}}>
                <Banner data={this.state.data && this.state.data.banners} />
                <Categories title={'Категории'} data={this.state.categories} />
                <Banner data={this.state.data && this.state.data.banners} />
                <Columns data={categoryImages} />
            </Animated.ScrollView>
        );
    }

}
