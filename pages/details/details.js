import React from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    StyleSheet,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {width} from '../../consts/resize';

export class DetailsPage extends React.Component {
    render() {
        return(
            <View>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.imageParent}>
                        <Image style={styles.image} source={{uri: 'https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}} />
                    </TouchableOpacity>
                </View>
                {/*<View style={styles.info}>*/}
                {/*    <View>*/}
                {/*        <Text>Толстовки</Text>*/}
                {/*        <Text>2999 с</Text>*/}
                {/*        <Text>Электроника</Text>*/}
                {/*    </View>*/}
                {/*    <TouchableOpacity style={styles.favorite}>*/}
                {/*        <MaterialIcons name={'favorite-border'} size={36} color={'red'} />*/}
                {/*    </TouchableOpacity>*/}
                {/*</View>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {

    },
    imageParent: {
        height: 300,
        width,
        backgroundColor: '#eee',
    },
    image: {
        width: null,
        height: null
    }
});
