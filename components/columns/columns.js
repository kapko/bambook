import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {
    ScrollView,
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
// local files
import {width} from "../../consts/resize";

export class Columns extends React.Component {
    render() {
        const column = this.props.data.map((item, i) => {
            return <TouchableOpacity key={`COLUMN_${i}`} style={styles.column}>
                <View style={styles.imageParent}>
                    <Image
                        resizeMode="cover"
                        style={styles.image}
                        source={{uri: item.uri}}/>
                    <Ionicons style={styles.icon} name="md-basket" size={32}/>
                </View>
                <Text style={styles.names}>1{item.name}</Text>
                <Text style={styles.price}>Price{i} c</Text>
            </TouchableOpacity>
        });
        return (
            <ScrollView style={styles.container}>
                <View style={styles.row}>{column}</View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    column: {
        marginBottom: 20,
    },
    imageParent: {
        position: 'relative',
        flex: .5,
        backgroundColor: '#eee',
        width: width / 2.25,
        height: 200,
    },
    icon: {
        position: 'absolute',
        top: 7,
        right: 7,
        color: '#eee',
        zIndex: 2,
    },
    image: {
        flex: 1,
    },
    names: {
        fontSize: 16,
        paddingTop: 10,
        fontWeight: '400',
    },
    price: {
        fontWeight: '700',
        fontSize: 18,
    }

});
