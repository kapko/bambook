import React from 'react';
import {
    ScrollView,
    View,
    StyleSheet,
    TouchableHighlight,
    Image,
} from 'react-native';
// local files
import {width} from '../../consts/resize';
import ImageLoader from "../image-loader/image-loader";

export class Banner extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            data: []
        }
    }

    componentDidMount() {
        const data = this.props.data.map(item => item.main_image &&
            item.main_image.conversions &&
            item.main_image.conversions.xl &&
            item.main_image.conversions.xl.url);

        this.setState({data});
    }

    render() {
        const banners = this.state.data.map((uri, i) =>
            <TouchableHighlight key={`BANNER_${i}`} onPress={() => console.log('open new ')}>
                <View style={styles.slide}>
                    <Image resizeMode="stretch"
                           onLoadStart={() => this.setState({loading: true})}
                           onLoadEnd={() => this.setState({loading: false})}
                           style={styles.slideImage}
                           source={{uri}}/>
                    <ImageLoader loading={this.state.loading}/>
                </View>
            </TouchableHighlight>
        );

        return (
            <View style={styles.container}>
                <ScrollView showsHorizontalScrollIndicator={false} scrollToOverflowEnabled={16} horizontal
                            pagingEnabled>
                    {banners}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: '700',
        paddingBottom: 20,
    },
    container: {
        marginBottom: 30,
    },
    slide: {
        width: width - 30,
        height: 200,
        borderRadius: 10,
        overflow: 'hidden',
    },
    slideImage: {
        flex: 1,
    }
});
