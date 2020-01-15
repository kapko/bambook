import React from "react";
import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import {MainBanner} from './components/banner';
import {dark, darkBlue, fontColor, yellow} from "../../consts/style.consts";
import * as Font from 'expo-font';
import {Search} from "./components/search";

export class MainPage extends React.Component {
  image = 'https://media-cdn.tripadvisor.com/media/photo-s/14/7d/2a/cf/img-20180906-181850-01.jpg';

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


  getDetail() {
    this.props.navigation.navigate('Details', {image: this.image});
  }

  render() {
    if (!this.state.fontLoaded) {
      return <ActivityIndicator size="large" color="#0000ff"/>
    }

    return (
      <ScrollView style={styles.container}>
        <MainBanner/>
        <View style={styles.search}>
          <Search/>
        </View>
        <View style={styles.title}>
          <View style={styles.titleBorder}></View>
          <Text style={styles.titleText}>Наше Меню</Text>
          <View style={styles.titleBorder}></View>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.card}
            onPress={this.getDetail.bind(this)}>
            <Image
              resizeMode={'contain'}
              style={styles.cardImage}
              source={{uri: this.image}}/>
            <Text style={styles.cardText}>Title</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image
              resizeMode={'contain'}
              style={styles.cardImage}
              source={{uri: this.image}}/>
            <Text style={styles.cardText}>Title</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image
              resizeMode={'contain'}
              style={styles.cardImage}
              source={{uri: this.image}}/>
            <Text style={styles.cardText}>Title</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image
              resizeMode={'contain'}
              style={styles.cardImage}
              source={{uri: this.image}}/>
            <Text style={styles.cardText}>Title</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: dark,
  },
  search: {
    marginTop: -20,
  },
  title: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  titleBorder: {
    height: 2,
    backgroundColor: yellow,
    width: '20%',
    alignItems: 'center',
    margin: 3,
  },
  titleText: {
    paddingTop: 10,
    fontFamily: 'appetite',
    fontSize: 24,
    color: '#fff',
  },
  row: {
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  card: {
    width: '48%',
    height: 211,
    marginBottom: 15,
    backgroundColor: darkBlue,
    borderRadius: 20,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardImage: {
    width: 130,
    height: 130,
    borderRadius: 10,
    marginBottom: 25,
  },
  cardItem: {},
  cardText: {
    textAlign: 'center',
    fontSize: 14,
    color: fontColor,
  }
});
