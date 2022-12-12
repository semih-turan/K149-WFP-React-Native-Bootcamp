import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import data from './data.json';
import Card from './components/Card';
import SearchBar from './components/SearchBar';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  const [list, setList] = useState(data);

  const renderProverb = ({item}) => <Card proverb={item} />;

  const renderSeperator = () => <View style={styles.seperator} />;

  const handleSearch = text => {
    const filteredList = data.filter(proverb => {
      const searchedText = text.toLowerCase();
      const currentTitle = proverb.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });
    setList(filteredList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#cb997e', '#6b705c']}>
        <View style={styles.background}>
          <Header />
          <SearchBar onSearch={handleSearch} />
          <FlatList
            keyExtractor={item => item.id}
            data={list}
            renderItem={renderProverb}
            ItemSeparatorComponent={renderSeperator}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  background: {
    color: '#536162',
  },
});
