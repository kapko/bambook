import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
    Image
} from 'react-native';
// local files
import {width} from "../../consts/resize";
import ImageLoader from "../image-loader/image-loader";

export class Categories extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }
    }

    render() {
        console.log('props.categories', this.props.data);
        if (!this.props.data) {
            return <Text>'Some text'</Text>;
        }

        const categories = this.props.data.map((item, i) =>
            <TouchableHighlight
                key={`CATEGORIES_${i}`}
                onPress={() => console.log('open new ')}>
                <View style={[styles.slide, i === 0 ? styles.leftMargin : null]}>
                    <Text style={styles.slideText}>{item.name}</Text>
                    <Image resizeMode="contain"
                           onLoadStart={() => this.setState({loading: true})}
                           onLoadEnd={() => this.setState({loading: false})}
                           style={styles.slideImage}
                           source={item.url}/>
                    {!this.state.loading && <ImageLoader loading={this.state.loading}/>}
                </View>
            </TouchableHighlight>
        );

        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    scrollToOverflowEnabled={16}
                    horizontal>
                    {categories}
                </ScrollView>
            </View>
        );

    }
}


const styles = StyleSheet.create({
    container: {
        paddingBottom: 30,
    },
    title: {
        fontSize: 24,
        paddingBottom: 20,
        fontWeight: '700',
    },
    leftMargin: {
        marginLeft: 0,
    },
    slide: {
        position: 'relative',
        width: (width / 2.4) - 30,
        height: 120,
        marginHorizontal: 5,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#eee',
        justifyContent: 'center',
    },
    slideText: {
        fontSize: 16,
        zIndex: 2,
        fontWeight: '700',
        textAlignVertical: 'center',
        paddingHorizontal: 20,
        color: '#fff',
        position: 'absolute',
    },
    slideImage: {
        flex: 1,
    }
});
