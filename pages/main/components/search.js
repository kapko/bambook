import React from "react";
import {Feather} from '@expo/vector-icons';
import {
  View,
  TextInput,
  StyleSheet
} from "react-native";
import {darkBlue, fontColor} from "../../../consts/style.consts";

export class Search extends React.Component {
  render() {

    return (
      <View style={styles.search}>
        <View style={styles.searchInner}>
          <TextInput
            style={styles.searchInput}
            placeholder={'Поиск по блюдам'}
            autoCorrect={false}
            placeholderTextColor={fontColor}
          />
          <Feather onPress={() => console.log('search')} style={styles.searchIcon} name={'search'} size={24}/>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  search: {
    paddingHorizontal: 20,
    marginBottom: 5,
  },
  searchInner: {
    flexDirection: 'row',
    borderRadius: 20,
    paddingHorizontal: 20,
    backgroundColor: darkBlue,
    justifyContent: 'space-between',
  },
  searchInput: {
    height: 40,
    fontSize: 14,
    color: fontColor,
    width: '95%',
  },
  searchIcon: {
    paddingTop: 5,
    color: fontColor,
  },
});
