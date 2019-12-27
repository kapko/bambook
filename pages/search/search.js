import React from "react";
import {
    ScrollView,
    StyleSheet,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import {EvilIcons} from '@expo/vector-icons';
import {Columns} from "../../components";

const categoryImages = [
    {
        uri: 'https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        name: 'first',
    },
    {
        uri: 'https://analyticsindiamag.com/wp-content/uploads/2019/07/image_rec_lib_banner.jpg',
        name: 'second',
    },
    {
        uri: 'https://analyticsindiamag.com/wp-content/uploads/2019/07/image_rec_lib_banner.jpg',
        name: 'second',
    },
    {
        uri: 'https://analyticsindiamag.com/wp-content/uploads/2019/07/image_rec_lib_banner.jpg',
        name: 'second',
    },
    {
        uri: 'https://analyticsindiamag.com/wp-content/uploads/2019/07/image_rec_lib_banner.jpg',
        name: 'second',
    },
    {
        uri: 'https://analyticsindiamag.com/wp-content/uploads/2019/07/image_rec_lib_banner.jpg',
        name: 'second',
    },
];

export class SearchPage extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.searchBar}>
                    <TextInput
                        placeholder={'Search'}
                        autoCorrect={false}
                        style={styles.search}
                        onChangeText={text => console.log(text)}
                    />
                    <TouchableOpacity style={styles.searchBarIcon}>
                        <EvilIcons color={'#fff'} name={'search'} size={32}/>
                    </TouchableOpacity>
                </View>
                <Columns data={categoryImages}/>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    searchBar: {
        marginBottom: 10,
        position: 'relative',
        backgroundColor: '#fdfdfd',
        overflow: 'hidden',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#333',
    },
    searchBarIcon: {
        position: 'absolute',
        right: 0,
        color: '#333',
        top: 0,
        paddingTop: 6,
        paddingHorizontal: 5,
        height: '100%',
        backgroundColor: '#131313',
    },
    search: {
        height: 40,
        fontSize: 16,
        paddingHorizontal: 10,
        marginRight: 25,
    }

});
