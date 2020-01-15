import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet, ActivityIndicator, ScrollView,
} from 'react-native';
import {dark, darkBlue, fontColor, white, yellow} from "../../consts/style.consts";
import {Search} from "../main/components/search";
import * as Font from "expo-font";

export class DetailsPage extends React.Component {


  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      'appetite': require('../../assets/fonts/Appetite.ttf'),
    });

    this.setState({fontLoaded: true});
  }

  navigateToHome() {
    this.props.navigation.navigate('MainPage');
  }

  render() {
    const {navigation} = this.props;
    const uri = navigation.getParam('image');

    if (!this.state.fontLoaded) {
      return <ActivityIndicator size="large" color="#0000ff"/>
    }

    return (
      <ScrollView style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Search/>
          <Text style={styles.title}>Солянка</Text>
          <Image
            resizeMode={'contain'}
            style={styles.cardImage}
            source={{uri}}/>
          <Text style={styles.description}>Мясная солянка с добавлением копченых колбасок, маринованных
            огурчиков и лимона.{`\n`}
            <Text style={styles.bold}>Порция</Text> 300г
          </Text>

          <Text style={styles.price}>790 сом</Text>

          <View style={styles.counter}>
            <TouchableOpacity
              activeOpacity={.8}
              style={[styles.counterButton, styles.left]}>
              <Text style={styles.counterButtonText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={.8}
              style={[styles.counterButton, styles.right]}>
              <Text style={styles.counterButtonText}>+</Text>
            </TouchableOpacity>
            <Text style={styles.counterText}>1</Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={this.navigateToHome.bind(this)}>
            <Text style={styles.buttonText}>В КОРЗИНУ</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: dark,
    flex: 1,
  },
  title: {
    color: white,
    marginTop: 15,
    marginBottom: 20,
    fontSize: 24,
    fontFamily: 'appetite',
    textAlign: 'center',
  },
  cardImage: {
    width: 170,
    height: 170,
    marginBottom: 20,
  },
  description: {
    color: fontColor,
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  bold: {
    fontWeight: '700',
  },
  price: {
    fontSize: 24,
    color: yellow,
    fontWeight: '700',
    width: '100%',
    marginBottom: 25,
    textAlign: 'center',
  },
  counter: {
    width: 60,
    height: 28,
    backgroundColor: darkBlue,
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  counterText: {
    color: white,
    fontSize: 14,
    width: '100%',
    textAlign: 'center',
  },
  counterButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    borderRadius: 17,
    backgroundColor: fontColor,
    position: 'absolute',
    zIndex: 1,
    opacity: 1,
  },
  left: {
    left: -17,
  },
  right: {
    right: -17,
  },
  counterButtonText: {
    color: white,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  button: {
    width: '100%',
    borderRadius: 30,
    backgroundColor: fontColor,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 14,
    color: white,
    paddingVertical: 12,
    fontWeight: '700',
  }
});
