import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './SearchBar.styles';

const SearchBar = (props) => {

  return (
    <View style={styles.container}>
      <TextInput placeholder="Ara..."  placeholderTextColor="#C06014" onChangeText={props.onSearch} />
    </View>
  );
};

export default SearchBar;
