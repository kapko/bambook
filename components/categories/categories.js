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
        const categories = this.props.data.map((item, i) => {
                return <TouchableHighlight
                    key={`CATEGORIES_${i}`}
                    onPress={() => console.log('open new ')}>
                    <View style={[styles.slide, i === 0 ? styles.leftMargin : null]}>
                        <Text style={styles.slideText}>{item.name}</Text>
                        <Image resizeMode="cover"
                               onLoadEnd={() => this.setState({loading: false})}
                               style={styles.slideImage}
                               source={{uri: item.url}}/>
                        <ImageLoader loading={this.state.loading}/>
                    </View>
                </TouchableHighlight>;
            }
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
        width: width / 2.7,
        height: 120,
        marginHorizontal: 5,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
    },
    slideText: {
        fontSize: 14,
        fontWeight: '700',
        color: '#fff',
        position: 'absolute',
        zIndex: 2,
        alignSelf: 'center',
        textAlign: 'center',
        paddingHorizontal: 10,
        backgroundColor: 'rgba(52,26,26,0.61)',
    },
    slideImage: {
        flex: 1,
    }
});
